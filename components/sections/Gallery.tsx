"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import { galleryImages } from "@/lib/products-data";

const galleryItems = galleryImages.map((img, i) => ({
  ...img,
  size: i === 0 ? "col-span-2 row-span-2" : i === 3 ? "col-span-2" : undefined,
}));

const categories = ["All", "Products", "Projects", "Production"];

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

        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
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
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end p-4">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                    <div className="text-blue-300 text-xs uppercase tracking-wider">{item.category}</div>
                    <div className="text-white font-bold">{item.title}</div>
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
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-3xl w-full rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="w-full h-auto max-h-[80vh] object-contain bg-black"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-blue-300 text-xs uppercase tracking-wider">{lightbox.category}</div>
                  <div className="text-white font-bold text-lg">{lightbox.title}</div>
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
