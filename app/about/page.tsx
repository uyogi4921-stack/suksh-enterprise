import About from "@/components/sections/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Suksh Enterprise",
  description: "Learn about Suksh Enterprise — Gujarat's trusted manufacturer of eco-friendly fly ash bricks and paver blocks.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1A365D] to-[#0f172a] pt-36 pb-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-3">About Us</h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Two decades of building Gujarat&apos;s future with sustainable, high-quality construction materials.
          </p>
        </div>
      </section>
      <About />
    </>
  );
}
