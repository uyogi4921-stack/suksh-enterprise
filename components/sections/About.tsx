"use client";
import { Settings, Building2, ShieldCheck } from "lucide-react";
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

export default function About() {
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
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="bg-gradient-to-br from-[#1A365D] to-blue-900 h-80 flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-2 p-8 opacity-30">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div key={i} className="w-10 h-6 bg-white rounded-sm" />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="text-6xl font-black opacity-20">SE</div>
                    <p className="text-lg font-semibold">Manufacturing Plant</p>
                    <p className="text-sm text-blue-300">Ahmedabad, Gujarat</p>
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
              <div className="grid grid-cols-3 gap-4">
                {[["500+", "Projects"], ["50K+", "Units/Day"], ["20+", "Years Exp."]].map(([val, label]) => (
                  <div key={label} className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                    <div className="text-2xl font-black text-[#1A365D]">{val}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

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
