"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hall of Fame
          </h2>
          <p className="text-gray-400">Join thousands of satisfied gamers.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Gallery - simulate masonry using a grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image
                src="/hero-bg.png"
                alt="Build 1"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden translate-y-8 group">
              <Image
                src="/exploded-pc.png"
                alt="Build 2"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 bg-[#111]"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden -translate-y-8 group">
              <Image
                src="/exploded-pc.png"
                alt="Build 3"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 bg-[#151515]"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image
                src="/hero-bg.png"
                alt="Build 4"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#111] border border-white/5 relative"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  "Absolutely insane build quality. The cable management is a
                  work of art. My FPS has never been higher!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700" />
                  <div>
                    <h4 className="font-bold text-white">Alex Gamer</h4>
                    <span className="text-xs text-gray-500">
                      Verified Buyer
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
