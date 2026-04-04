import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row border-b-[2px] border-[var(--color-brand-text)] bg-[var(--color-brand-bg)]">
        {/* Left half - Introduction */}
        <div className="w-full md:w-1/2 flex flex-col md:border-r-[2px] border-b-[2px] md:border-b-0 border-[var(--color-brand-text)]">
          <div className="flex justify-between items-center px-6 py-4 border-b-[2px] border-[var(--color-brand-text)]">
            <h2 className="font-anton text-4xl md:text-5xl uppercase tracking-widest">Introduction</h2>
            <div className="text-4xl hover:rotate-90 transition-transform duration-500">*</div>
          </div>
          <div className="p-8 md:p-12 flex-1 relative flex flex-col justify-center">
            <div className="font-script text-5xl md:text-6xl absolute top-6 -left-4 opacity-30 -rotate-12 select-none">
              Pratham . dev
            </div>
            <p className="font-body text-sm md:text-base font-medium leading-relaxed max-w-md mt-8 relative z-10 opacity-80 w-full mb-4">
              I am a digital architect specializing in bridging complex technologies. From high-performance <span className="font-bold text-[var(--color-brand-text)]">Flutter architectures</span> to highly dynamic <span className="font-bold text-[var(--color-brand-text)]">GenAI pipelines</span>, I engineer scalable mobile and web ecosystems the market demands. My expertise lies in orchestrating deep system integrations that feel indistinguishable from magic.
            </p>
          </div>
        </div>
        
        {/* Right half - Image/Graphic */}
        <div className="w-full md:w-1/2 relative bg-[#E8E6E1] border-b-[2px] md:border-b-0 border-[var(--color-brand-text)] flex items-center justify-center p-8 md:p-16">
           <div className="w-full max-w-sm aspect-[4/5] md:aspect-[3/4] relative group overflow-hidden border-[2px] border-[var(--color-brand-text)] shadow-[15px_15px_0px_0px_var(--color-brand-text)] bg-black/5">
              <Image 
                src="/me.png"
                alt="Pratham Software Engineer"
                fill
                quality={100}
                priority
                className="object-cover object-[50%_15%] grayscale-[30%] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-[1.03]"
              />
           </div>
        </div>
      </section>

      {/* Inverse Section - Strengths */}
      <section className="w-full flex flex-col md:flex-row border-b-[2px] border-[var(--color-brand-text)] inverse-section">
        
        {/* Left half - Graphic */}
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto flex items-center justify-center p-8 bg-[var(--color-brand-text)] border-b-[2px] md:border-b-0 md:border-r-[2px] border-[var(--color-inverse-border)] order-2 md:order-1">
           <div className="w-full h-full border border-[var(--color-brand-bg)] border-opacity-20 flex flex-col items-center justify-center p-8 relative">
              <div className="w-4 h-4 bg-[var(--color-brand-bg)] opacity-50 absolute bottom-4 left-4" />
              <div className="w-4 h-4 bg-[var(--color-brand-bg)] opacity-50 absolute top-4 right-4" />
              <h3 className="font-anton text-8xl text-[var(--color-brand-bg)] opacity-10">02</h3>
           </div>
        </div>

        {/* Right half - Strengths */}
        <div className="w-full md:w-1/2 flex flex-col order-1 md:order-2">
          <div className="flex justify-between items-center px-6 py-4 border-b-[2px] border-[var(--color-inverse-border)]">
            <h2 className="font-anton text-4xl md:text-5xl uppercase tracking-widest text-[#F3F1ED]">My Architecture</h2>
            <div className="text-4xl hover:rotate-90 transition-transform duration-500 text-[#F3F1ED]">*</div>
          </div>
          <div className="p-8 md:p-12 flex flex-col gap-6 flex-1 relative justify-center">
            <div className="font-script text-5xl md:text-6xl absolute top-6 -right-4 opacity-20 rotate-6 select-none text-[#F3F1ED]">
              The stack
            </div>
            
            <div className="relative z-10 grid grid-cols-1 gap-6">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-2 border-b border-[var(--color-inverse-border)] pb-2 pr-4 text-[#F3F1ED]">Adaptability</h4>
                <p className="font-body text-xs text-white/70 leading-relaxed max-w-xs">I thrive in evolving environments, quickly adjusting to complex requirements and heavy traffic demands.</p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-2 border-b border-[var(--color-inverse-border)] pb-2 pr-4 text-[#F3F1ED]">System Integration</h4>
                <p className="font-body text-xs text-white/70 leading-relaxed max-w-xs">I weave disparate APIs and monolithic databases into single, high-speed applications that never block the user.</p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-2 border-b border-[var(--color-inverse-border)] pb-2 pr-4 text-[#F3F1ED]">Tech-Savvy</h4>
                <p className="font-body text-xs text-white/70 leading-relaxed max-w-xs">Deep proficiency in Next.js, Node.js, and modern AI pipelines to produce edge-ready scalable products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
