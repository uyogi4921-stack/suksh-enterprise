import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import GallerySection from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Process />
      <GallerySection />
      <Testimonials />
      <Contact />

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-800 to-[#1A365D] py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Get Premium Construction Materials Today
            </h2>
            <p className="text-blue-300 mt-1">Fast delivery across Gujarat. Competitive pricing.</p>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#1A365D] px-8 py-4 rounded-xl font-black hover:bg-blue-50 transition-all hover:scale-105 shrink-0"
          >
            Request a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
