"use client";
import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail, Send, CheckCircle } from "lucide-react";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

const projectTypes = [
  "Residential Building",
  "Commercial Complex",
  "Road / Infrastructure",
  "Industrial Project",
  "Landscaping / Paving",
  "Other",
];

export default function Contact({ showHeader = true }: { showHeader?: boolean }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {showHeader && (
          <RevealOnScroll className="text-center mb-16">
            <span className="text-blue-700 text-sm font-bold uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A365D] mt-3">Contact Us</h2>
            <div className="h-1 w-20 bg-blue-700 mx-auto mt-4" />
          </RevealOnScroll>
        )}

        <div className="grid lg:grid-cols-2 gap-14 max-w-6xl mx-auto">
          {/* Form */}
          <RevealOnScroll direction="left">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#1A365D] mb-6">Send Us a Message</h3>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-gray-800">Message Sent!</h4>
                  <p className="text-gray-500 mt-2">We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Phone *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Project Type *</label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-700 bg-white"
                    >
                      <option value="">Select project type...</option>
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt}>{pt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your project requirements, quantities needed..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-blue-700 hover:bg-blue-600 disabled:opacity-60 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </RevealOnScroll>

          {/* Contact Info */}
          <RevealOnScroll direction="right">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#1A365D] mb-6">Contact Information</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-100 w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Phone</div>
                      <a href="tel:6357018655" className="font-semibold text-gray-800 hover:text-blue-700 transition-colors">
                        +91 63570 18655
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-green-100 w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">WhatsApp</div>
                      <a href="https://wa.me/916357018655" className="font-semibold text-gray-800 hover:text-green-600 transition-colors">
                        +91 63570 18655
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-100 w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Email</div>
                      <a href="mailto:info@sukshenterprise.com" className="font-semibold text-gray-800 hover:text-blue-700 transition-colors">
                        info@sukshenterprise.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-100 w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Address</div>
                      <address className="not-italic font-semibold text-gray-800 text-sm leading-relaxed">
                        Plot No. 123, Industrial Area,<br />
                        Ahmedabad, Gujarat — India
                      </address>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9011866282367!2d72.5799!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzQnNDcuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Suksh Enterprise Location"
                  className="border-0"
                />
              </div>

              {/* CTA Banner */}
              <div className="bg-gradient-to-r from-[#1A365D] to-blue-700 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg">Get a Free Quote Today</h4>
                <p className="text-blue-200 text-sm mt-1">Premium construction materials at competitive prices.</p>
                <a
                  href="https://wa.me/916357018655?text=Hi%2C%20I%20need%20a%20quote%20for%20construction%20materials"
                  className="mt-4 inline-flex items-center gap-2 bg-white text-[#1A365D] px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
