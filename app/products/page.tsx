import { allProducts } from "@/lib/products-data";
import Process from "@/components/sections/Process";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Manufacturing | Suksh Enterprise",
  description: "Explore our full range of fly ash bricks, paver blocks, tiles, kerb stones, hollow and solid blocks with technical specifications.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1A365D] to-[#0f172a] pt-36 pb-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">What We Make</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-3">
            Products &amp; Manufacturing
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Precision engineered concrete solutions using advanced German hydraulic press technology.
          </p>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-[#1A365D] text-center mb-14">Product Showcase</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {allProducts.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col md:flex-row"
              >
                <div className={`bg-gradient-to-br ${product.gradient} md:w-48 h-40 md:h-auto flex items-center justify-center shrink-0`}>
                  <div className="grid grid-cols-3 gap-1 p-4 opacity-30">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="w-8 h-5 bg-white rounded-sm" />
                    ))}
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#1A365D]">{product.name}</h3>
                    {product.badge && (
                      <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">{product.badge}</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left px-3 py-2 text-gray-500 text-xs uppercase font-semibold border border-gray-200">Property</th>
                          <th className="text-left px-3 py-2 text-gray-500 text-xs uppercase font-semibold border border-gray-200">Specification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(product.specs).map(([key, val]) => (
                          <tr key={key} className="hover:bg-gray-50">
                            <td className="px-3 py-2 border border-gray-200 text-gray-700">{key}</td>
                            <td className="px-3 py-2 border border-gray-200 font-semibold text-[#1A365D]">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-600 transition-colors"
                  >
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-[#1A365D] text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🏭", title: "Modern Manufacturing", desc: "State-of-the-art automated batching plants and German hydraulic press technology for consistent quality and high production capacity." },
              { icon: "🚚", title: "Timely Delivery", desc: "Dedicated logistics team ensuring prompt and reliable supply to meet project deadlines across Gujarat." },
              { icon: "♻️", title: "Sustainable Practices", desc: "Commitment to eco-friendly production using fly ash and minimising environmental impact. Green building certified." },
            ].map((item) => (
              <div key={item.title} className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1A365D] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
