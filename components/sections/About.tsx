"use client";
import { useState } from "react";
import { Settings, Building2, ShieldCheck, Play, X, Truck, Factory, Award } from "lucide-react";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

const pillars = [
  {
    icon: <Settings className="w-8 h-8 text-blue-600" />,
    title: "Mission",
    desc: "Committed to building the future with superior, sustainable products that meet the highest standards of quality and durability.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    title: "Vision",
    desc: "To be the leading innovator in eco-conscious construction materials, setting new benchmarks for the industry.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Quality",
    desc: "Ensuring the highest standards of strength and durability through rigorous testing at every stage of production.",
  },
];

const advantages = [
  { icon: "🔨", title: "High Strength", desc: "Compressive strength up to M40 grade" },
  { icon: "🌱", title: "Eco-Friendly", desc: "Made with fly ash waste — reduces carbon footprint" },
  { icon: "🔥", title: "Fire Resistance", desc: "Excellent thermal barrier properties" },
  { icon: "💧", title: "Low Water Absorption", desc: "< 5% absorption rate" },
  { icon: "🔇", title: "Sound Insulation", desc: "Better acoustic performance than clay bricks" },
  { icon: "💰", title: "Cost Effective", desc: "Up to 30% cheaper than conventional bricks" },
];

const factoryImages = [
  { src: "/images/suksh-factory-interior.jpg", alt: "SUKSH Factory Interior — Manufacturing facility", label: "Factory Floor" },
  { src: "/images/suksh-bricks-branded.jpg", alt: "SUKSH Branded Fly Ash Bricks", label: "Branded Bricks" },
  { src: "/images/suksh-bricks-workers.jpg", alt: "Quality Check — Workers inspecting bricks", label: "Quality Check" },
  { src: "/images/brick-stacks-yard.jpg", alt: "Brick storage yard with stacked pallets", label: "Storage Yard" },
  { src: "/images/brick-delivery-truck.jpg", alt: "Brick delivery truck with crane loading", label: "Delivery Fleet" },
];

export default function About() {
  const [videoOpen, setVideoOpen] = useState<string | null>(null);

  return (
    <>
      {/* About Us */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll className="text-center mb-16">
            <span className="text-blue-700 text-sm font-bold uppercase tracking-widest">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A365D] mt-3">About Us</h2>
            <div className="h-1 w-20 bg-blue-700 mx-auto mt-4" />
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <RevealOnScroll direction="left">
              <div className="space-y-4">
                {/* Main factory image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                  <img
                    src="/images/suksh-factory-interior.jpg"
                    alt="SUKSH Enterprise — Manufacturing facility in Ahmedabad"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A365D]/90 to-transparent p-6">
                    <p className="text-lg font-semibold text-white">Manufacturing Plant</p>
                    <p className="text-sm text-blue-300">Ahmedabad, Gujarat</p>
                  </div>
                </div>
                {/* Two smaller images below */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-lg relative group">
                    <img
                      src="/images/suksh-bricks-branded.jpg"
                      alt="SUKSH Branded Fly Ash Bricks"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-end">
                      <span className="text-white text-xs font-semibold p-3 opacity-0 group-hover:opacity-100 transition-opacity">SUKSH Branded Bricks</span>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg relative group">
                    <img
                      src="/images/brick-delivery-truck.jpg"
                      alt="Brick delivery truck with crane"
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-end">
                      <span className="text-white text-xs font-semibold p-3 opacity-0 group-hover:opacity-100 transition-opacity">Delivery Fleet</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <h3 className="text-2xl font-bold text-[#1A365D] mb-4">
                Two Decades of Building Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suksh Enterprise Pvt. Ltd. has been at the forefront of eco-friendly construction material manufacturing in Gujarat. We leverage advanced German hydraulic press technology to produce superior fly ash bricks, paver blocks, and concrete products.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our state-of-the-art facility in Ahmedabad produces over 50,000 units daily, serving builders, contractors, and government infrastructure projects across the region.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[["500+", "Projects"], ["50K+", "Units/Day"], ["20+", "Years Exp."]].map(([val, label]) => (
                  <div key={label} className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                    <div className="text-2xl font-black text-[#1A365D]">{val}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{label}</div>
                  </div>
                ))}
              </div>

              {/* Key highlights */}
              <div className="space-y-3">
                {[
                  { icon: <Factory className="w-5 h-5 text-blue-600" />, text: "State-of-the-art automated manufacturing plant" },
                  { icon: <Award className="w-5 h-5 text-blue-600" />, text: "ISO quality assured — every brick tested" },
                  { icon: <Truck className="w-5 h-5 text-blue-600" />, text: "On-time delivery with dedicated logistics fleet" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                    {item.icon}
                    <span className="text-sm text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Factory Photo Strip */}
          <RevealOnScroll className="mb-20">
            <h3 className="text-2xl font-bold text-[#1A365D] text-center mb-8">Our Manufacturing Facility</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {factoryImages.map((img) => (
                <div key={img.label} className="rounded-xl overflow-hidden relative group cursor-pointer shadow-md">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-xs font-bold">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Factory Video Section */}
          <RevealOnScroll className="mb-20">
            <h3 className="text-2xl font-bold text-[#1A365D] text-center mb-3">See Our Factory in Action</h3>
            <p className="text-gray-500 text-center text-sm mb-8 max-w-lg mx-auto">
              Watch how we manufacture premium fly ash bricks and paver blocks at our Ahmedabad facility.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { src: "/videos/factory-tour-1.mp4", label: "Manufacturing Process", desc: "Automated brick pressing and production line" },
                { src: "/videos/factory-tour-2.mp4", label: "Factory Tour", desc: "Complete walkthrough of our facility" },
              ].map((video) => (
                <div
                  key={video.src}
                  className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 cursor-pointer group"
                  onClick={() => setVideoOpen(video.src)}
                >
                  <div className="relative h-56 bg-[#1A365D] flex items-center justify-center">
                    <video
                      src={video.src}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-blue-700 hover:bg-blue-600 rounded-full p-5 shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-[#1A365D]">{video.label}</h4>
                    <p className="text-gray-500 text-sm mt-1">{video.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Video Lightbox */}
          {videoOpen && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setVideoOpen(null)}
            >
              <div
                className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  src={videoOpen}
                  className="w-full max-h-[80vh]"
                  controls
                  autoPlay
                  playsInline
                />
                <button
                  onClick={() => setVideoOpen(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 0.15}>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-5">
                    {p.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#1A365D] mb-3">{p.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-[#1A365D]">
        <div className="container mx-auto px-6">
          <RevealOnScroll className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Choose Our Products?</h2>
            <div className="h-1 w-20 bg-blue-400 mx-auto mt-4" />
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <RevealOnScroll key={adv.title} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="text-4xl mb-3">{adv.icon}</div>
                  <h4 className="text-white font-bold text-lg">{adv.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">{adv.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
