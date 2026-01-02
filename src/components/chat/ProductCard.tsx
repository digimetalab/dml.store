"use client";

import Image from "next/image";
import { ExternalLink, MessageCircle } from "lucide-react";

interface ProductSpecs {
  [key: string]: string;
}

export interface ProductData {
  id: number;
  name: string;
  category: string;
  description?: string | null;
  price: number;
  originalPrice?: number | null;
  imageUrl?: string | null;
  badge?: string | null;
  specs?: ProductSpecs | null;
  inStock?: boolean | null;
  whatsappLink?: string;
}

interface ProductCardProps {
  product: ProductData;
  compact?: boolean;
}

const badgeColors: Record<string, string> = {
  SALE: "bg-neon-red",
  HOT: "bg-neon-blue",
  NEW: "bg-neon-green",
  BUNDLE: "bg-neon-purple",
};

export default function ProductCard({
  product,
  compact = false,
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString("id-ID")}`;
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : null;

  if (compact) {
    return (
      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
        {/* Image */}
        <div className="relative w-16 h-16 flex-shrink-0 bg-black/30 rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl || "/category-gpu.png"}
            alt={product.name}
            fill
            className="object-contain p-1"
          />
          {product.badge && (
            <span
              className={`absolute top-0 left-0 px-1 py-0.5 text-[8px] font-bold text-black ${
                badgeColors[product.badge] || "bg-gray-500"
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-white truncate">
            {product.name}
          </h4>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-neon-blue">
              {formatPrice(product.price)}
            </span>
            {discount && (
              <span className="text-xs text-neon-red">-{discount}%</span>
            )}
          </div>
        </div>

        {/* WhatsApp Button */}
        {product.whatsappLink && (
          <a
            href={product.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 bg-green-600 hover:bg-green-500 rounded-full transition-colors"
            title="Order via WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-white" />
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all">
      {/* Image Section */}
      <div className="relative h-32 bg-black/30">
        <Image
          src={product.imageUrl || "/category-gpu.png"}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
        {product.badge && (
          <span
            className={`absolute top-2 left-2 px-2 py-0.5 text-xs font-bold text-black rounded ${
              badgeColors[product.badge] || "bg-gray-500"
            }`}
          >
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-bold bg-neon-red text-black rounded">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h4 className="text-sm font-semibold text-white mb-2 line-clamp-2">
          {product.name}
        </h4>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-white">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Specs Preview */}
        {product.specs && (
          <div className="mb-3 space-y-1">
            {Object.entries(product.specs)
              .slice(0, 3)
              .map(([key, value]) => (
                <div key={key} className="flex justify-between text-xs">
                  <span className="text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="text-gray-200">{value}</span>
                </div>
              ))}
          </div>
        )}

        {/* WhatsApp Order Button */}
        {product.whatsappLink && (
          <a
            href={product.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-600 hover:bg-green-500 text-white font-medium text-sm rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Order via WhatsApp
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}
