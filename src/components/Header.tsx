"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Power, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/10 border border-neon-blue/30 group-hover:border-neon-blue/80 transition-colors">
            <Power className="w-5 h-5 text-neon-blue group-hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)] transition-all" />
          </div>
          <span className="text-xl font-bold tracking-wider text-white">
            IUL<span className="text-neon-blue">Store</span>
          </span>
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full group">
            <input
              type="text"
              placeholder="Search components..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all"
            />
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-neon-blue transition-colors" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="relative group p-2 rounded-full hover:bg-white/5 transition-colors">
            <ShoppingCart className="w-5 h-5 text-gray-300 group-hover:text-neon-blue transition-colors" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-neon-red rounded-full"></span>
          </button>

          <Link
            href="https://wa.me/"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-neon-green/50 hover:bg-neon-green/10 transition-all group"
          >
            <span className="hidden md:inline text-sm font-medium text-gray-300 group-hover:text-neon-green">
              WhatsApp
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Search (Visible only on mobile) */}
      <div
        className={cn(
          "md:hidden px-4 pb-4 transition-all duration-300",
          scrolled ? "pt-0" : "pt-2"
        )}
      >
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white"
          />
          <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
        </div>
      </div>
    </header>
  );
}
