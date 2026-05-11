import Contact from "@/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Suksh Enterprise",
  description: "Get in touch with Suksh Enterprise for quotes, bulk orders, and product inquiries. Call or WhatsApp +91 63570 18655.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1A365D] to-[#0f172a] pt-36 pb-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-3">Contact Us</h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ready to start your project? Get a free quote or speak directly with our team.
          </p>
        </div>
      </section>
      <Contact showHeader={false} />
    </>
  );
}
