"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Gaming Setup"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-neon-blue uppercase border border-neon-blue/30 rounded-full bg-neon-blue/10 backdrop-blur-sm">
            Forged for Gamers & Creators
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-sans text-white mb-6 leading-tight">
            Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Dream Machine
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Experience the future of commerce with DML Store's AI-powered
            platform. Designed for those who demand intelligent automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="group relative px-8 py-4 bg-neon-blue text-black font-bold text-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                Shop Now{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded-lg hover:bg-white/5 hover:border-white/50 transition-all backdrop-blur-sm">
              Custom Build
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicators (Optional decoration) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <div className="w-1 h-8 rounded-full border-2 border-white/20 relative">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-neon-blue rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
