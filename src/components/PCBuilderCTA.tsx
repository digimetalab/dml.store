"use client";

import Image from "next/image";
import { Wrench, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function PCBuilderCTA() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-blue/5 skew-x-12 transform origin-top-right blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
        {/* Illustration */}
        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <Image
              src="/exploded-pc.png"
              alt="Custom PC Build Exploded View"
              width={800}
              height={800}
              className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(0,243,255,0.2)]"
            />
          </motion.div>
          {/* Animated rings or glow behind */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon-blue/10 rounded-full blur-[100px] -z-10" />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-left">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
              <Zap className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-medium text-gray-300">
                Expert Craftsmanship
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Craft Your <span className="text-neon-blue">Perfect</span> Rig
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Don't settle for pre-built mediocrity. Our expert technicians
              hand-assemble every component with precision cable management and
              thermal optimization. Visualize your dream build and let us bring
              it to life.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Premium Components",
                "Professional Cable Management",
                "Stress Tested & Benchmarked",
                "1-Year Full Warranty",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-neon-green" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-200 transition-colors">
              <Wrench className="w-5 h-5" />
              Start Building Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
