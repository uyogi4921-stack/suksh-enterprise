"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

const galleryItems = [
  { id: 1, title: "Fly Ash Brick Production", category: "Production", gradient: "from-slate-700 to-slate-900", size: "col-span-2 row-span-2" },
  { id: 2, title: "Paver Block Laying", category: "Projects", gradient: "from-blue-700 to-blue-900" },
  { id: 3, title: "Quality Testing Lab", category: "Quality", gradient: "from-gray-600 to-gray-800" },
  { id: 4, title: "Manufacturing Plant", category: "Facility", gradient: "from-slate-600 to-slate-800" },
  { id: 5, title: "Garden Pathway", category: "Projects", gradient: "from-green-700 to-green-900" },
  { id: 6, title: "Driveway Pavers", category: "Projects", gradient: "from-amber-700 to-amber-900" },
  { id: 7, title: "Kerb Stone Installation", category: "Projects", gradient: "from-indigo-700 to-indigo-900", size: "col-span-2" },
  { id: 8, title: "Batch Mixing Plant", category: "Facility", gradient: "from-teal-700 to-teal-900" },
];

const categories = ["All", "Production", "Projects", "Quality", "Facility"];

export default function GallerySection() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<null | typeof galleryItems[0]>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-blue-700 text-sm font-bold uppercase tracking-widest">Visual Tour</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A365D] mt-3">Gallery</h2>
          <div className="h-1 w-20 bg-blue-700 mx-auto mt-4" />
        </RevealOnScroll>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-blue-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`rounded-2xl overflow-hidden cursor-pointer group relative ${item.size ?? ""}`}
                onClick={() => setLightbox(item)}
              >
                <div className={`bg-gradient-to-br ${item.gradient} h-48 w-full relative`}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="grid grid-cols-5 gap-1 p-4">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="w-6 h-4 bg-white rounded-sm" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end p-4">
                    <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                      <div className="text-blue-300 text-xs uppercase tracking-wider">{item.category}</div>
                      <div className="text-white font-bold">{item.title}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-2xl w-full rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`bg-gradient-to-br ${lightbox.gradient} h-96 flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="text-6xl opacity-20 font-black">SE</div>
                    <p className="font-bold text-xl mt-2">{lightbox.title}</p>
                    <p className="text-blue-200 text-sm">{lightbox.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
