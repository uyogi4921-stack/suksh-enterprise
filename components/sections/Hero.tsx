"use client";
import { motion } from "framer-motion";
import { PhoneCall, ArrowRight, ShieldCheck, Leaf, Award, CheckCircle } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: <Award className="w-7 h-7" />, label: "Projects Done", value: "500+" },
  { icon: <ShieldCheck className="w-7 h-7" />, label: "Quality Assured", value: "ISO" },
  { icon: <Leaf className="w-7 h-7" />, label: "Trusted In", value: "Gujarat" },
];

const features = [
  "High compressive strength",
  "Eco-friendly manufacturing",
  "Uniform size & shape",
  "Cost-effective solutions",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-[#0f172a] overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pavers-herringbone-closeup.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A365D]/80 via-[#0f172a] to-[#0f172a]" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-blue-900/50 border border-blue-700/50 text-blue-300 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Suksh Enterprise Pvt. Ltd.
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Premium Fly Ash<br />
            <span className="gradient-text">Bricks & Paver</span><br />
            Blocks Manufacturer
          </h1>
          <p className="text-gray-400 mt-6 text-lg max-w-lg leading-relaxed">
            High-strength eco-friendly construction materials for residential, commercial, and infrastructure projects across Gujarat.
          </p>

          <ul className="mt-6 space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/contact"
              className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-blue-900/40"
            >
              Get Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:6357018655"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-white/20 transition-all"
            >
              <PhoneCall className="w-5 h-5" /> Call Now
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16 border-t border-white/10 pt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="text-white"
              >
                <div className="text-blue-400 mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — product grid preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-white font-bold text-lg mb-1">Products</h3>
            <p className="text-gray-400 text-xs mb-5">Premium product and blends solutions</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Paver Blocks", image: "/images/pavers-pattern.jpg" },
                { name: "Parking Tiles", image: "/images/parking-tiles-dark.jpg" },
                { name: "Kerb Stones", image: "/images/paver-road.jpg" },
                { name: "Zigzag Pavers", image: "/images/zigzag-pavers.jpg" },
                { name: "Fly Ash Bricks", image: "/images/suksh-bricks-branded.jpg" },
                { name: "Solid Blocks", image: "/images/suksh-factory-interior.jpg" },
              ].map((product) => (
                <div key={product.name} className="rounded-xl overflow-hidden">
                  <div className="bg-slate-800 h-20 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="bg-white/5 border border-white/10 p-2">
                    <p className="text-white text-xs font-semibold leading-tight">{product.name}</p>
                    <button className="mt-1.5 w-full text-xs bg-blue-700 hover:bg-blue-600 text-white py-1 rounded transition-colors">
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Advantages */}
            <div className="mt-5 border-t border-white/10 pt-4">
              <h4 className="text-white font-semibold text-sm mb-3">Advantages</h4>
              <div className="grid grid-cols-3 gap-2">
                {["High Strength", "Eco-Friendly", "Fire Resistance", "Low Water Absorption", "Sound Insulation", "Cost Effective"].map((adv) => (
                  <div key={adv} className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
                    <p className="text-gray-300 text-xs">{adv}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
