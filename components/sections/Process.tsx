import RevealOnScroll from "@/components/animations/RevealOnScroll";

const steps = [
  {
    step: "01",
    title: "Raw Material Selection",
    desc: "Rigorous testing of fly ash, cement, and aggregates for quality. Only grade-A materials enter production.",
    icon: "🧱",
  },
  {
    step: "02",
    title: "Mixing",
    desc: "Precise proportioning and homogeneous blending in automated batching plants for consistency.",
    icon: "⚙️",
  },
  {
    step: "03",
    title: "Hydraulic Pressing",
    desc: "High-pressure molding using advanced German technology for superior density and strength.",
    icon: "🔩",
  },
  {
    step: "04",
    title: "Curing",
    desc: "Controlled steam curing in specialized chambers for optimal hydration and durability.",
    icon: "💨",
  },
  {
    step: "05",
    title: "Quality Inspection",
    desc: "Comprehensive testing for compressive strength, dimensions, and finish before dispatch.",
    icon: "🔬",
  },
  {
    step: "06",
    title: "Delivery",
    desc: "Efficient logistics and secure packaging for timely project delivery across Gujarat.",
    icon: "🚚",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-blue-700 text-sm font-bold uppercase tracking-widest">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A365D] mt-3">Manufacturing Process</h2>
          <div className="h-1 w-20 bg-blue-700 mx-auto mt-4" />
        </RevealOnScroll>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 hidden lg:block -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <RevealOnScroll key={step.step} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex gap-8 items-center ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-4xl mb-3">{step.icon}</div>
                      <div className="text-blue-600 font-black text-sm uppercase tracking-widest mb-1">Step {step.step}</div>
                      <h3 className="text-xl font-bold text-[#1A365D] mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-12 h-12 bg-blue-700 rounded-full items-center justify-center text-white font-black text-sm shrink-0 z-10 shadow-lg">
                    {step.step}
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
