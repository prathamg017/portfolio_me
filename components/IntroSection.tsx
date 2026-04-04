import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row border-b-[2px] border-[var(--color-brand-text)] bg-[var(--color-brand-bg)]">
      {/* Left half - Studio Introduction */}
      <div className="w-full md:w-1/2 flex flex-col md:border-r-[2px] border-b-[2px] md:border-b-0 border-[var(--color-brand-text)]">
        <div className="flex justify-between items-center px-6 py-4 border-b-[2px] border-[var(--color-brand-text)]">
          <h2 className="font-mono text-xs text-[#00e5c3] uppercase tracking-[0.2em] font-bold">About the Studio</h2>
          <div className="text-2xl hover:rotate-90 transition-transform duration-500 font-bold">*</div>
        </div>
        <div className="p-8 md:p-12 flex-1 relative flex flex-col justify-center bg-white">
          <h3 className="font-anton text-4xl md:text-5xl uppercase tracking-wider text-[var(--color-brand-text)] mb-3">
            We're Nirgranth Creations.
          </h3>
          <div className="font-body text-xs md:text-sm font-bold opacity-60 uppercase tracking-widest mb-2 text-[var(--color-brand-text)]">
            A small, precise digital studio from India.
          </div>
          <div className="font-mono text-[9px] font-bold text-[var(--color-brand-accent)] uppercase tracking-widest mb-8 border-[1px] border-[var(--color-brand-accent)] w-fit px-2 py-0.5">
            Founder & CTO / Pratham
          </div>
          
          <p className="font-body text-sm md:text-base font-medium leading-relaxed opacity-80 w-full mb-6 max-w-md text-[var(--color-brand-text)]">
            We started with a simple conviction: most digital agencies build deliverables. We build systems. Ones that learn, scale, and compound in value long after launch day. Every engagement begins with architecture — not aesthetics.
          </p>
          <p className="font-body text-sm md:text-base font-medium leading-relaxed opacity-80 w-full mb-10 max-w-md text-[var(--color-brand-text)]">
            We work at the intersection of AI engineering, high-performance web development, and growth strategy. Our clients don't just get software — they get infrastructure that moves the needle.
          </p>
          
          {/* Services Strip */}
          <div className="flex flex-wrap gap-x-6 gap-y-4 font-mono text-[10px] md:text-xs text-[var(--color-brand-text)] uppercase font-bold tracking-wider mt-auto pt-8 border-t-[2px] border-[var(--color-brand-text)] border-opacity-10">
             <span className="flex items-center gap-2"><span className="text-[#00e5c3]">◈</span> AI Automation</span>
             <span className="flex items-center gap-2"><span className="text-[#00e5c3]">◈</span> Web Development</span>
             <span className="flex items-center gap-2"><span className="text-[#00e5c3]">◈</span> App Development</span>
             <span className="flex items-center gap-2"><span className="text-[#00e5c3]">◈</span> Growth Systems</span>
          </div>
        </div>
      </div>
      
      {/* Right half - Image/Graphic */}
      <div className="w-full md:w-1/2 relative bg-[#E8E6E1] border-b-[2px] md:border-b-0 border-[var(--color-brand-text)] flex items-center justify-center p-8 md:p-16">
         <div className="w-full max-w-sm aspect-[4/5] md:aspect-[3/4] relative group overflow-hidden border-[2px] border-[var(--color-brand-text)] shadow-[15px_15px_0px_0px_var(--color-brand-text)] bg-black/5">
            <Image 
              src="/me.png"
              alt="Pratham — Tech Lead & CTO of Nirgranth Creations"
              fill
              quality={100}
              priority
              className="object-cover object-[50%_15%] grayscale-[30%] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-[1.03]"
            />
         </div>
      </div>
    </section>
  );
}
