import Link from "next/link";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const quickLinks = ["Home", "About", "Products", "Contact"];
const products = ["Fly Ash Bricks", "Paver Blocks", "Tiles", "Kerb Stones", "Hollow Blocks", "Solid Blocks"];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">SE</span>
            </div>
            <div>
              <div className="text-white font-black text-lg">SUKSH</div>
              <div className="text-blue-400 text-xs uppercase tracking-wider">Enterprise Pvt. Ltd.</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Premium fly ash bricks, paver blocks, and concrete products for sustainable construction across Gujarat.
          </p>
          <div className="flex gap-3 mt-6">
            {["f", "in", "ig"].map((icon) => (
              <div key={icon} className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold hover:bg-blue-600 cursor-pointer transition-colors">
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((label) => (
              <li key={label}>
                <Link
                  href={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-bold text-lg mb-5">Product Categories</h4>
          <ul className="space-y-3">
            {products.map((p) => (
              <li key={p}>
                <Link href="/products" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-lg mb-5">SUKSH ENTERPRISE</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span className="text-gray-400">Plot No. 123, Industrial Area, Ahmedabad, Gujarat, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <a href="tel:6357018655" className="text-gray-400 hover:text-white transition-colors">+91 63570 18655</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
              <a href="https://wa.me/916357018655" className="text-gray-400 hover:text-white transition-colors">WhatsApp Us</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <a href="mailto:sukhsenterprise@gmail.com" className="text-gray-400 hover:text-white transition-colors">sukhsenterprise@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <span>© 2024 SUKSH ENTERPRISE PVT. LTD. All Rights Reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
