"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden border-b-[2px] border-[var(--color-brand-text)] bg-[var(--color-brand-bg)] min-h-[85vh] flex flex-col pt-8">
      {/* Top Graphic Elements */}
      <div className="flex justify-between px-6 md:px-12 mb-auto">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--color-brand-text)]" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-brand-text)]" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-brand-text)]" />
        </div>
        <div className="text-4xl md:text-6xl font-body cursor-default hover:rotate-180 transition-transform duration-1000">
          *
        </div>
      </div>

      {/* Center Massive Text */}
      <div className="w-full flex-1 flex items-center justify-center relative mt-16 md:mt-0">
        <h1 className="font-anton text-[25vw] md:text-[22vw] leading-[0.8] text-[var(--color-brand-text)] tracking-tight select-none">
          PORTFOLIO
        </h1>
        
        {/* Script Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[8vw] z-20 w-[90%] text-center rotate-[-5deg]">
          <span className="font-script text-[12vw] md:text-[8vw] text-[var(--color-brand-text)] leading-none -ml-12 md:-ml-24">
            software engineer
          </span>
        </div>
      </div>

      {/* Bottom Footer Info inside Hero */}
      <div className="flex justify-between items-end p-6 md:p-12 pb-6 w-full mt-auto relative z-30">
        <div className="max-w-xs text-xs md:text-sm font-body leading-relaxed text-[var(--color-brand-text)]">
          The desire to create is one of the deepest yearnings of the human soul. Building digital systems that last.
        </div>
        <div className="text-xs md:text-sm font-semibold tracking-wider font-body text-[var(--color-brand-text)] hidden md:block hover:underline">
          <a href="mailto:hello@pratham.dev">hello@pratham.dev</a>
        </div>
      </div>
    </section>
  );
}
