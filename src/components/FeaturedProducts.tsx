"use client";

import Image from "next/image";
import { ShoppingCart, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "RTX 4090 OC Edition",
    price: "Rp 28.500.000",
    originalPrice: "Rp 32.000.000",
    image: "/category-gpu.png",
    badge: "SALE",
    badgeColor: "bg-neon-red",
  },
  {
    id: 2,
    name: "Intel Core i9-14900K",
    price: "Rp 9.800.000",
    originalPrice: null,
    image: "/category-cpu.png",
    badge: "HOT",
    badgeColor: "bg-neon-blue",
  },
  {
    id: 3,
    name: 'OLED Curved Monitor 34"',
    price: "Rp 12.500.000",
    originalPrice: "Rp 14.500.000",
    image: "/category-monitor.png",
    badge: "NEW",
    badgeColor: "bg-neon-green",
  },
  {
    id: 4,
    name: "Pro Gaming Bundle",
    price: "Rp 3.500.000",
    originalPrice: "Rp 4.200.000",
    image: "/category-peripheral.png",
    badge: "BUNDLE",
    badgeColor: "bg-neon-purple",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-neon-blue text-sm font-bold tracking-wider uppercase mb-2 block">
              Don't Miss Out
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured Products
            </h2>
          </div>
          <button className="hidden md:block text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-neon-blue">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#171717] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              {/* Badge */}
              <div
                className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold text-black rounded-sm ${product.badgeColor}`}
              >
                {product.badge}
              </div>

              {/* Image */}
              <div className="relative h-64 w-full bg-[#111] overflow-hidden group-hover:bg-[#0f0f0f] transition-colors">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <button
                    className="p-3 bg-neon-blue text-black rounded-full hover:scale-110 transition-transform"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                    aria-label="View details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-neon-blue transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-white">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                <div className="w-full h-px bg-white/10 my-4" />

                <button className="w-full py-2 text-sm font-medium text-gray-300 hover:text-white border border-transparent hover:border-white/20 rounded hover:bg-white/5 transition-all">
                  View Specs
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
