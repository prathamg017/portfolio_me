import type { Metadata } from "next";
import { Anton, Nothing_You_Could_Do, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const script = Nothing_You_Could_Do({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nirgranth Creations — AI · Web · App Studio",
  description: "We build AI automation systems, Next.js platforms, and Flutter apps that compound business value. Based in India, building globally.",
  openGraph: {
    title: "Nirgranth Creations — AI · Web · App Studio",
    description: "We build AI automation systems, Next.js platforms, and Flutter apps that compound business value. Based in India, building globally.",
    url: "https://nirgranth.com",
    siteName: "Nirgranth Creations",
    images: [{ url: "/og-image.jpg" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirgranth Creations — AI · Web · App Studio",
    description: "We build AI automation systems, Next.js platforms, and Flutter apps that compound business value. Based in India, building globally."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${anton.variable} ${script.variable} ${inter.variable} antialiased min-h-screen flex flex-col relative`}>
        {/* PERMANENT BORDER FRAME FOR BRUTALIST AESTHETIC */}
        <div className="fixed inset-0 pointer-events-none z-50 border-[2px] md:border-[4px] border-[var(--color-brand-text)]" />
        
        <Navbar />
        <main className="flex-grow pt-24 md:pt-32 relative z-10 w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
