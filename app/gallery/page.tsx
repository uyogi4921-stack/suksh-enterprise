import GallerySection from "@/components/sections/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Suksh Enterprise",
  description: "See our manufacturing plant, projects, and product gallery — Suksh Enterprise Pvt. Ltd.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1A365D] to-[#0f172a] pt-36 pb-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">Visual Tour</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-3">Gallery</h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A glimpse into our state-of-the-art manufacturing facility, completed projects, and product range.
          </p>
        </div>
      </section>
      <GallerySection />
    </>
  );
}
