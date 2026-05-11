"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

const testimonials = [
  {
    name: "Rajesh Khanna",
    role: "Architect, Khanna Associates",
    avatar: "RK",
    color: "bg-blue-600",
    text: "Suksh Enterprise provides exceptional quality fly ash bricks. Their materials significantly strengthened our recent commercial project. Highly reliable.",
  },
  {
    name: "Vikram Singh",
    role: "Builder, Apex Constructions",
    avatar: "VS",
    color: "bg-green-600",
    text: "As a builder, consistency is key. Suksh's concrete products are always uniform and durable. Our go-to supplier for every major build.",
  },
  {
    name: "Priya Sharma",
    role: "Project Manager, EcoBuild",
    avatar: "PS",
    color: "bg-purple-600",
    text: "Prompt delivery and superior service. The concrete blocks were perfect for our sustainable housing initiative. A trusted partner.",
  },
  {
    name: "Amit Patel",
    role: "Civil Engineer, Gujarat PWD",
    avatar: "AP",
    color: "bg-orange-600",
    text: "We've been sourcing kerb stones from Suksh Enterprise for our road projects. Consistent quality, on-time delivery, and competitive pricing.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-blue-700 text-sm font-bold uppercase tracking-widest">Client Feedback</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A365D] mt-3">Client Testimonials</h2>
          <div className="h-1 w-20 bg-blue-700 mx-auto mt-4" />
        </RevealOnScroll>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial cards */}
          <div className="grid md:grid-cols-3 gap-6 relative">
            <AnimatePresence mode="wait">
              {[0, 1, 2].map((offset) => {
                const idx = (current + offset) % testimonials.length;
                const t = testimonials[idx];
                return (
                  <motion.div
                    key={`${current}-${offset}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: offset * 0.1 }}
                    className={`bg-gray-50 border rounded-2xl p-6 ${offset === 0 ? "border-blue-200 shadow-lg" : "border-gray-100"}`}
                  >
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed italic mb-6">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">- {t.name}</div>
                        <div className="text-gray-500 text-xs">{t.role}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-blue-700 text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-blue-700 w-6" : "bg-gray-300"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-blue-700 text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
