export default function IntroSection() {
  return (
    <section className="w-full border-b-[2px] border-[var(--color-brand-text)] bg-[var(--color-brand-bg)]">
      {/* Top Header Bar */}
      <div className="flex justify-between items-center px-6 py-4 border-b-[2px] border-[var(--color-brand-text)]">
        <h2 className="font-mono text-xs text-[#00e5c3] uppercase tracking-[0.2em] font-bold">About the Studio</h2>
        <div className="text-2xl hover:rotate-90 transition-transform duration-500 font-bold">*</div>
      </div>

      {/* Main Content Area - Full Width & Centered */}
      <div className="p-8 md:p-24 lg:p-32 relative bg-white flex flex-col items-center text-center">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-anton text-[25vw] opacity-[0.03] pointer-events-none select-none uppercase">
          Studio
        </div>

        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          <h3 className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight text-[var(--color-brand-text)] mb-6 leading-[0.9]">
            We're pratz.tech.
          </h3>
          
          <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
            <div className="font-body text-xs md:text-sm font-bold opacity-60 uppercase tracking-widest text-[var(--color-brand-text)]">
              A small, precise digital studio.
            </div>
            <span className="hidden md:block opacity-20">•</span>
            <div className="font-mono text-[9px] font-bold text-[var(--color-brand-accent)] uppercase tracking-widest border-[1px] border-[var(--color-brand-accent)] px-3 py-1">
              Founder & CTO / Pratz
            </div>
          </div>
          
          <div className="space-y-8">
            <p className="font-body text-xl md:text-3xl font-medium leading-tight text-[var(--color-brand-text)]">
              We started with a simple conviction: most digital agencies build deliverables. We build <span className="bg-[var(--color-brand-text)] text-white px-2">systems</span>. 
            </p>
            <p className="font-body text-base md:text-xl font-medium leading-relaxed opacity-80 max-w-3xl mx-auto text-[var(--color-brand-text)]">
              Ones that learn, scale, and compound in value long after launch day. Every engagement begins with architecture — not aesthetics. We work at the intersection of AI engineering, high-performance web development, and growth strategy. Our clients don't just get software — they get infrastructure that moves the needle.
            </p>
          </div>
          
          {/* Services Strip - Horizontal Spread */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-mono text-[10px] md:text-xs text-[var(--color-brand-text)] uppercase font-bold tracking-[0.2em] mt-24 pt-12 border-t-[2px] border-[var(--color-brand-text)] border-opacity-10 w-full">
             <span className="flex items-center gap-3"><span className="text-[#00e5c3]">◈</span> AI Automation</span>
             <span className="flex items-center gap-3"><span className="text-[#00e5c3]">◈</span> Web Development</span>
             <span className="flex items-center gap-3"><span className="text-[#00e5c3]">◈</span> App Development</span>
             <span className="flex items-center gap-3"><span className="text-[#00e5c3]">◈</span> Growth Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
}
