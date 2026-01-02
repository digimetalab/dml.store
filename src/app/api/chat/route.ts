import { streamText, tool, convertToModelMessages } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { z } from "zod";
import { db } from "@/db";
import { products } from "@/db/schema";
import { eq, ilike, and, gte, lte, or } from "drizzle-orm";

// Create OpenRouter client
const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

// WhatsApp number for orders
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || "628123456789";

// System prompt for the store assistant
const SYSTEM_PROMPT = `You are a friendly and knowledgeable store assistant for DML Store, an AI-powered commerce platform by Digimetalab.

Your role:
- Help customers find the right products for their needs
- Recommend products based on their budget and requirements
- Provide helpful advice about product features and specifications
- Guide customers through the ordering process

Guidelines:
1. Always be helpful, friendly, and professional
2. When recommending products, consider the customer's:
   - Budget (in Indonesian Rupiah)
   - Use case (gaming, work, content creation, etc.)
   - Existing components (for compatibility)
3. Use the available tools to search our product catalog
4. When showing products, include key specs and prices
5. Encourage customers to order via WhatsApp when they're ready
6. If a product is out of stock, suggest alternatives
7. All prices are in Indonesian Rupiah (Rp)

Available product categories: GPU, CPU, RAM, STORAGE, MOTHERBOARD, PSU, CASE, MONITOR, PERIPHERAL

Remember: You represent DML Store by Digimetalab - we pride ourselves on AI-powered solutions and excellent customer service!`;

// Helper function to generate WhatsApp order link
function generateWhatsAppLink(productName: string, price: number): string {
  const message = encodeURIComponent(
    `Halo DML Store! 👋\n\nSaya tertarik untuk memesan:\n📦 ${productName}\n💰 Harga: Rp ${price.toLocaleString(
      "id-ID"
    )}\n\nMohon info ketersediaan dan cara pemesanannya. Terima kasih!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

// Helper function to format product for response
function formatProduct(product: typeof products.$inferSelect) {
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    description: product.description,
    price: product.price,
    originalPrice: product.originalPrice,
    imageUrl: product.imageUrl,
    badge: product.badge,
    specs: product.specs ? JSON.parse(product.specs) : null,
    inStock: product.inStock,
    whatsappLink: generateWhatsAppLink(product.name, product.price),
  };
}

// Budget allocation based on use case
function getAllocation(useCase: string) {
  switch (useCase) {
    case "gaming":
      return { gpu: 0.4, cpu: 0.25, ram: 0.1, storage: 0.1 };
    case "content-creation":
      return { gpu: 0.3, cpu: 0.3, ram: 0.15, storage: 0.15 };
    case "work":
      return { gpu: 0.15, cpu: 0.35, ram: 0.15, storage: 0.2 };
    default:
      return { gpu: 0.25, cpu: 0.3, ram: 0.1, storage: 0.15 };
  }
}

// Tool definitions
const tools = {
  searchProducts: tool({
    description:
      "Search for products by name or keyword. Use this when the customer asks about specific products or types of products.",
    parameters: z.object({
      query: z.string().describe("Search query - product name or keyword"),
      minPrice: z.number().optional().describe("Minimum price in IDR"),
      maxPrice: z.number().optional().describe("Maximum price in IDR"),
      limit: z.number().optional().describe("Maximum number of results"),
    }),
    execute: async ({ query, minPrice, maxPrice, limit = 5 }: any) => {
      const conditions = [
        or(
          ilike(products.name, `%${query}%`),
          ilike(products.description, `%${query}%`),
          ilike(products.category, `%${query}%`)
        ),
      ];

      if (minPrice) conditions.push(gte(products.price, minPrice));
      if (maxPrice) conditions.push(lte(products.price, maxPrice));

      const results = await db
        .select()
        .from(products)
        .where(and(...conditions))
        .limit(limit);

      return {
        products: results.map(formatProduct),
        count: results.length,
      };
    },
  } as any),

  getProductsByCategory: tool({
    description:
      "Get all products in a specific category. You MUST provide the category parameter. Valid categories are: GPU, CPU, RAM, STORAGE, MOTHERBOARD, PSU, CASE, MONITOR, PERIPHERAL. For example, to get GPUs, use category='GPU'.",
    parameters: z.object({
      category: z
        .string()
        .default("GPU")
        .describe(
          "REQUIRED: The product category to search. Must be one of: GPU, CPU, RAM, STORAGE, MOTHERBOARD, PSU, CASE, MONITOR, PERIPHERAL. Example: 'GPU'"
        ),
      limit: z
        .number()
        .optional()
        .default(10)
        .describe("Maximum number of results, defaults to 10"),
    }),
    execute: async ({ category = "GPU", limit = 10 }: any) => {
      // Normalize category to uppercase
      const normalizedCategory = (category || "GPU").toUpperCase();

      const results = await db
        .select()
        .from(products)
        .where(eq(products.category, normalizedCategory))
        .limit(limit);

      return {
        category: normalizedCategory,
        products: results.map(formatProduct),
        count: results.length,
      };
    },
  } as any),

  getProductDetails: tool({
    description: "Get detailed information about a specific product by ID",
    parameters: z.object({
      productId: z.number().describe("The product ID"),
    }),
    execute: async ({ productId }: any) => {
      const result = await db
        .select()
        .from(products)
        .where(eq(products.id, productId))
        .limit(1);

      if (result.length === 0) {
        return { error: "Product not found" };
      }

      return formatProduct(result[0]);
    },
  } as any),

  getDeals: tool({
    description: "Get products that are on sale or have special deals",
    parameters: z.object({
      limit: z.number().optional().describe("Maximum number of results"),
    }),
    execute: async ({ limit = 5 }: any) => {
      const results = await db
        .select()
        .from(products)
        .where(
          or(
            eq(products.badge, "SALE"),
            eq(products.badge, "HOT"),
            eq(products.badge, "BUNDLE")
          )
        )
        .limit(limit);

      return {
        products: results.map((p) => ({
          ...formatProduct(p),
          discount: p.originalPrice
            ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
            : null,
        })),
        count: results.length,
      };
    },
  } as any),

  recommendBuild: tool({
    description: "Recommend a PC build based on budget and use case",
    parameters: z.object({
      budget: z.number().describe("Total budget in IDR"),
      useCase: z
        .enum(["gaming", "work", "content-creation", "general"])
        .describe("Primary use case"),
    }),
    execute: async ({ budget, useCase }: any) => {
      const allocation = getAllocation(useCase);

      const recommendations: Record<
        string,
        ReturnType<typeof formatProduct>
      > = {};

      // Get GPU
      const gpus = await db
        .select()
        .from(products)
        .where(
          and(
            eq(products.category, "GPU"),
            lte(products.price, budget * allocation.gpu)
          )
        )
        .limit(1);
      if (gpus.length > 0) recommendations.gpu = formatProduct(gpus[0]);

      // Get CPU
      const cpus = await db
        .select()
        .from(products)
        .where(
          and(
            eq(products.category, "CPU"),
            lte(products.price, budget * allocation.cpu)
          )
        )
        .limit(1);
      if (cpus.length > 0) recommendations.cpu = formatProduct(cpus[0]);

      // Get RAM
      const rams = await db
        .select()
        .from(products)
        .where(
          and(
            eq(products.category, "RAM"),
            lte(products.price, budget * allocation.ram)
          )
        )
        .limit(1);
      if (rams.length > 0) recommendations.ram = formatProduct(rams[0]);

      // Get Storage
      const storage = await db
        .select()
        .from(products)
        .where(
          and(
            eq(products.category, "STORAGE"),
            lte(products.price, budget * allocation.storage)
          )
        )
        .limit(1);
      if (storage.length > 0)
        recommendations.storage = formatProduct(storage[0]);

      // Calculate total
      const total = Object.values(recommendations).reduce<number>(
        (sum, item) => sum + (item?.price || 0),
        0
      );

      return {
        budget,
        useCase,
        recommendations,
        totalPrice: total,
        remaining: budget - total,
      };
    },
  } as any),
};

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: openrouter("deepseek/deepseek-v3.2"),
      system: SYSTEM_PROMPT,
      messages: await convertToModelMessages(messages),
      tools,
      maxSteps: 5, // Allow multi-step interactions (tool calls)
      onStepFinish: (step: any) => {
        console.log(`[Chat API] Step ${step.stepType} finished`);
        console.log(`[Chat API] Text: ${step.text?.substring(0, 50)}...`);
        if (step.toolCalls?.length > 0) {
          console.log(
            `[Chat API] Tool Calls:`,
            JSON.stringify(step.toolCalls, null, 2)
          );
        }
        if (step.toolResults?.length > 0) {
          console.log(
            `[Chat API] Tool Results:`,
            JSON.stringify(step.toolResults.slice(0, 2), null, 2)
          );
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    console.log("[DEBUG] result keys:", Object.keys(result));
    console.log("[DEBUG] result prototype:", Object.getPrototypeOf(result));

    return (result as any).toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process chat request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
