import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

// Products table - stores all PC parts and components
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // GPU, CPU, RAM, STORAGE, MOTHERBOARD, PSU, CASE, COOLING, PERIPHERAL
  description: text("description"),
  price: integer("price").notNull(), // in IDR
  originalPrice: integer("original_price"),
  imageUrl: text("image_url"),
  badge: text("badge"), // SALE, HOT, NEW, BUNDLE
  specs: text("specs"), // JSON string of specifications
  inStock: boolean("in_stock").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Categories table - for navigation and filtering
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  iconUrl: text("icon_url"),
});

// Type exports for use in application
export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
export type Category = typeof categories.$inferSelect;
export type NewCategory = typeof categories.$inferInsert;
