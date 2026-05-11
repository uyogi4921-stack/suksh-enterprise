import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suksh Enterprise Pvt. Ltd. | Premium Fly Ash Bricks & Paver Blocks",
  description:
    "Leading manufacturer of fly ash bricks, paver blocks, parking tiles, kerb stones, hollow blocks and solid blocks in Gujarat. Eco-friendly, high-strength construction materials.",
  keywords: "fly ash bricks, paver blocks, concrete blocks, Gujarat, manufacturer, kerb stones, hollow blocks",
  openGraph: {
    title: "Suksh Enterprise Pvt. Ltd.",
    description: "Premium fly ash bricks & paver blocks manufacturer in Gujarat.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
