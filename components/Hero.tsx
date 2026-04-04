"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full border-b-[2px] border-[var(--color-brand-text)] bg-[var(--color-brand-bg)] min-h-[95vh] flex flex-col justify-center px-6 md:px-16 pt-32 pb-12 overflow-hidden">
      
      {/* Huge Background Background Text for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.03] font-anton text-[60vw] leading-none text-black">
        STUDIO
      </div>

      <div className="flex flex-col max-w-[1400px] mx-auto w-full flex-1 justify-center relative z-10">
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[var(--color-brand-accent)] text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-12 md:mb-16 flex items-center gap-4"
        >
          <span className="w-12 h-[2px] bg-[var(--color-brand-accent)]" />
          Nirgranth Creations — AI · Web · App Studio
        </motion.div>

        {/* Headline */}
        <div className="font-anton text-[14vw] md:text-[9vw] leading-[0.8] uppercase tracking-tighter flex flex-col gap-4 md:gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            We don't build
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white drop-shadow-[5px_5px_0px_var(--color-brand-text)]"
            style={{ WebkitTextStroke: "2px var(--color-brand-text)" }}
          >
            websites.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            We build <span className="text-[var(--color-brand-accent)]">Systems.</span>
          </motion.div>
        </div>

        {/* Subhead */}
        <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-24">
           <motion.p 
            className="font-body text-lg md:text-2xl leading-relaxed max-w-xl opacity-80 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Nirgranth Creations is an elite architectural studio engineering AI automation pipelines, high-conversion static platforms, and physics-driven mobile applications.
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link href="#work" className="btn-primary py-8 px-12 text-xl font-anton tracking-widest shadow-[8px_8px_0px_0px_black] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              See Our Work
            </Link>
            <Link href="#free-audit" className="btn-secondary py-8 px-12 text-xl font-anton tracking-widest border-black text-black hover:bg-black hover:text-[var(--color-brand-accent)] shadow-[8px_8px_0px_0px_var(--color-brand-accent)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              Get Free Audit
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Row */}
      <motion.div 
        className="w-full max-w-[1400px] mx-auto mt-auto pt-10 border-t-[2px] border-[var(--color-brand-text)] border-opacity-20 flex flex-wrap justify-between gap-6 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold opacity-40 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="flex items-center gap-2">◈ 11 Active Systems Built</span>
        <span className="hidden lg:inline">•</span>
        <span className="flex items-center gap-2">◈ AI-Centric Engineering</span>
        <span className="hidden lg:inline">•</span>
        <span className="flex items-center gap-2">◈ Next.js + Flutter Native</span>
        <span className="hidden lg:inline">•</span>
        <span className="flex items-center gap-2">◈ India → GLOBAL OPS</span>
      </motion.div>
    </section>
  );
}
