"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  { name: "Processors", image: "/category-cpu.png", link: "/processors" },
  {
    name: "Graphics Cards",
    image: "/category-gpu.png",
    link: "/graphics-cards",
  },
  { name: "Monitors", image: "/category-monitor.png", link: "/monitors" },
  {
    name: "Peripherals",
    image: "/category-peripheral.png",
    link: "/peripherals",
  },
];

export default function CategoryHighlights() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/5 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Upgrade Your <span className="text-neon-purple">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our wide range of premium components.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <Link href={cat.link} key={index} className="group block">
              <motion.div
                whileHover={{ y: -10 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-full aspect-square mb-6 rounded-3xl bg-white/5 border border-white/10 group-hover:border-neon-blue/50 group-hover:bg-white/10 transition-all flex items-center justify-center overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-4/5 h-4/5">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white group-hover:text-neon-blue transition-colors">
                  {cat.name}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
