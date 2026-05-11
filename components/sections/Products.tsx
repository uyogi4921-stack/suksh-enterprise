"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import { allProducts } from "@/lib/products-data";

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-blue-700 text-sm font-bold uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A365D] mt-3">Premium Products</h2>
          <div className="h-1 w-20 bg-blue-700 mx-auto mt-4" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Manufactured using state-of-the-art German hydraulic press technology with rigorous quality control.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((item, idx) => (
            <RevealOnScroll key={item.id} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group border border-gray-100 hover:border-blue-200 transition-all"
              >
                <div className={`h-48 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {item.badge && (
                    <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">{item.desc}</p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {Object.entries(item.specs).map(([key, val]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-2">
                        <div className="text-xs text-gray-400 uppercase">{key}</div>
                        <div className="text-sm font-semibold text-gray-800">{val}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-6 block w-full py-3 text-center border-2 border-blue-700 text-blue-700 font-bold rounded-xl group-hover:bg-blue-700 group-hover:text-white transition-all"
                  >
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#1A365D] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-900 transition-all hover:scale-105"
          >
            View All Products & Specs
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
