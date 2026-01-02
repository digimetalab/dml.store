"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Power } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-[#050505] border-t border-white/5 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neon-blue/10 border border-neon-blue/30">
                <Power className="w-4 h-4 text-neon-blue" />
              </div>
              <span className="text-xl font-bold text-white">
                DML<span className="text-neon-blue">Store</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              AI-powered commerce platform. Build and grow your digital business
              with intelligent automation.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-neon-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-neon-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-neon-blue transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-neon-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-neon-blue transition-colors"
                >
                  Pre-built PCs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-neon-blue transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-neon-blue transition-colors"
                >
                  Peripherals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-neon-blue transition-colors"
                >
                  Daily Deals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-neon-blue transition-colors"
                >
                  Shipping Guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-neon-blue transition-colors"
                >
                  Warranty & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-neon-blue transition-colors"
                >
                  PC Builder Guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-neon-blue transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Payment */}
          <div>
            <h4 className="font-bold text-white mb-6">Stay Connected</h4>
            <div className="flex items-center gap-2 mb-8">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-neon-blue w-full"
              />
              <button className="bg-neon-blue text-black px-4 py-2 rounded font-bold text-sm hover:scale-105 transition-transform">
                GO
              </button>
            </div>

            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
              We Accept
            </h5>
            <div className="flex gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              {/* Simple text representation for payment icons to avoid svg clutter */}
              <span className="font-bold text-white text-lg">BCA</span>
              <span className="font-bold text-white text-lg">MANDIRI</span>
              <span className="font-bold text-white text-lg">QRIS</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; 2024 DML Store by Digimetalab. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
