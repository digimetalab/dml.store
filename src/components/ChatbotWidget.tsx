"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Loader2,
  ChevronDown,
} from "lucide-react";
import ProductCard, { ProductData } from "./chat/ProductCard";

// Quick action suggestions
const QUICK_ACTIONS = [
  {
    label: "🎮 Gaming PC Build",
    message: "I want to build a gaming PC with budget Rp 25 million",
  },
  { label: "💻 Best GPUs", message: "What are the best GPUs you have?" },
  { label: "🔥 Current Deals", message: "Show me products on sale" },
  { label: "🖥️ Browse Monitors", message: "What monitors do you have?" },
];

// Parse tool results from message parts (new SDK format)
function parseProductsFromParts(message: any): ProductData[] {
  const products: ProductData[] = [];

  // New SDK format: tools are in message.parts with type starting with "tool-"
  if (message.parts && Array.isArray(message.parts)) {
    for (const part of message.parts) {
      // Check if this is a tool part with output
      if (part.type?.startsWith("tool-") && part.output) {
        const output = part.output as {
          products?: ProductData[];
          recommendations?: Record<string, ProductData>;
        };

        // Handle array of products
        if (output.products && Array.isArray(output.products)) {
          products.push(...output.products);
        }

        // Handle recommendations object
        if (output.recommendations) {
          Object.values(output.recommendations).forEach((rec) => {
            if (rec && typeof rec === "object" && "id" in rec) {
              products.push(rec as ProductData);
            }
          });
        }
      }
    }
  }

  // Also check the old format for backwards compatibility
  if ((message as any).toolInvocations) {
    for (const invocation of (message as any).toolInvocations) {
      if (invocation.state === "result" && invocation.result) {
        const result = invocation.result as {
          products?: ProductData[];
          recommendations?: Record<string, ProductData>;
        };

        if (result.products && Array.isArray(result.products)) {
          products.push(...result.products);
        }

        if (result.recommendations) {
          Object.values(result.recommendations).forEach((rec) => {
            if (rec && typeof rec === "object" && "id" in rec) {
              products.push(rec as ProductData);
            }
          });
        }
      }
    }
  }

  return products;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Manual input state management for AI SDK v5+
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat({});

  const isLoading = status === "submitted" || status === "streaming";

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    sendMessage({
      text: input,
    });
    setInput("");
  };

  // Log messages updates
  useEffect(() => {
    console.log("[Chatbot] Messages updated:", messages);
  }, [messages]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Handle scroll position for scroll button
  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        messagesContainerRef.current;
      setShowScrollButton(scrollHeight - scrollTop - clientHeight > 100);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuickAction = (message: string) => {
    sendMessage({
      text: message,
    });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-shadow"
          >
            <MessageCircle className="w-6 h-6 text-black" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] max-h-[80vh] bg-[#0f0f0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                    <Bot className="w-5 h-5 text-black" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f0f0f]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    IUL Store Assistant
                  </h3>
                  <p className="text-xs text-gray-400">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={messagesContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
            >
              {messages.map((message) => {
                const isUser = message.role === "user";
                const products = parseProductsFromParts(message);

                return (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}
                  >
                    {/* Avatar */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        isUser
                          ? "bg-neon-purple/20"
                          : "bg-gradient-to-r from-neon-blue to-neon-purple"
                      }`}
                    >
                      {isUser ? (
                        <User className="w-4 h-4 text-neon-purple" />
                      ) : (
                        <Bot className="w-4 h-4 text-black" />
                      )}
                    </div>

                    {/* Message Content */}
                    <div
                      className={`flex-1 max-w-[85%] ${
                        isUser ? "text-right" : ""
                      }`}
                    >
                      <div
                        className={`inline-block p-3 rounded-2xl ${
                          isUser
                            ? "bg-neon-blue text-black rounded-br-md"
                            : "bg-white/10 text-gray-100 rounded-bl-md"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">
                          {/* Handle new SDK format: both user and assistant use parts array */}
                          {(message as any).parts
                            ?.filter((part: any) => part.type === "text")
                            .map((part: any) => part.text)
                            .join("") ||
                            (message as any).content ||
                            ""}
                        </p>
                      </div>

                      {/* Product Cards */}
                      {products.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {products.slice(0, 4).map((product) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              compact={products.length > 2}
                            />
                          ))}
                          {products.length > 4 && (
                            <p className="text-xs text-gray-400 text-left">
                              +{products.length - 4} more products...
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                    <Bot className="w-4 h-4 text-black" />
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl rounded-bl-md">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-neon-blue" />
                      <span className="text-sm text-gray-400">
                        Sedang mencari...
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Scroll to bottom button */}
            <AnimatePresence>
              {showScrollButton && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={scrollToBottom}
                  className="absolute bottom-32 left-1/2 -translate-x-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronDown className="w-4 h-4 text-white" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Quick Actions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Quick suggestions
                </p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_ACTIONS.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickAction(action.message)}
                      className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-gray-300 transition-colors"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-white/10"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input || ""}
                  onChange={handleInputChange}
                  placeholder="Tanya tentang produk..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !(input || "").trim()}
                  className="p-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 text-black" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
