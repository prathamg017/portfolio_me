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

export const metadata: Metadata = {
  title: "PRATHAM // Software Engineer",
  description: "Editorial personal portfolio of Pratham.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${anton.variable} ${script.variable} ${inter.variable} antialiased min-h-screen flex flex-col relative`}>
        {/* Universal Page Border Frame */}
        <div className="fixed inset-0 pointer-events-none z-50 border-[2px] md:border-[4px] border-[var(--color-brand-text)]" />
        {children}
      </body>
    </html>
  );
}
