"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CTASection() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const name = (target.elements[0] as HTMLInputElement).value;
    const email = (target.elements[1] as HTMLInputElement).value;
    const spec = (target.elements[2] as HTMLTextAreaElement).value;

    const message = `*Project Request #002*\n\n*Name:* ${name}\n*Email:* ${email}\n*Build Spec:* ${spec}`;
    const whatsappUrl = `https://wa.me/918109224176?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[var(--color-brand-text)] py-24 md:py-48 px-6 md:px-12 relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-[1000px] bg-[var(--color-brand-accent)] opacity-[0.05] blur-[200px] rounded-full pointer-events-none z-0 translate-x-1/4 -translate-y-1/2" />
      
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        <span className="font-mono text-xs font-bold text-[var(--color-brand-accent)] uppercase tracking-[0.4em] mb-12 block">
          Initiate Project_Request #002
        </span>
        
        <h2 className="font-anton text-[12vw] md:text-[8vw] leading-[0.8] text-white uppercase mb-12 tracking-tighter">
          Establish <span className="text-[var(--color-brand-accent)]">Digital</span> Dominance.
        </h2>
        
        <p className="font-body text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
          You provide the operational vision. We architect and construct the infrastructure necessary for rapid execution and scalability. 
        </p>

        {!formOpen && !submitted && (
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md mx-auto relative group">
            <button 
              onClick={() => setFormOpen(true)}
              className="bg-[var(--color-brand-accent)] text-[#0a0a0f] font-anton text-2xl uppercase tracking-widest px-12 py-8 text-center transition-all duration-300 hover:shadow-[12px_12px_0px_0px_white] hover:-translate-x-1 hover:-translate-y-1 relative"
            >
              Start Your Build <ArrowRight className="inline-block ml-3 mb-1 w-6 h-6" />
            </button>
          </div>
        )}

        {formOpen && !submitted && (
          <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white border-[3px] border-[var(--color-brand-accent)] p-8 md:p-16 text-left shadow-[15px_15px_0px_0px_var(--color-brand-accent)]">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[10px] uppercase font-bold opacity-30">Full_Name</label>
                  <input required placeholder="Enter Name" type="text" className="w-full bg-white border-b-2 border-black/10 text-[var(--color-brand-text)] py-4 font-body text-base focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:opacity-20" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[10px] uppercase font-bold opacity-30">Work_Email</label>
                  <input required placeholder="Enter Email" type="email" className="w-full bg-white border-b-2 border-black/10 text-[var(--color-brand-text)] py-4 font-body text-base focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:opacity-20" />
                </div>
             </div>
             <div className="flex flex-col gap-3 mb-10">
                <label className="font-mono text-[10px] uppercase font-bold opacity-30">Build_Spec</label>
                <textarea required rows={4} className="w-full bg-white border-b-2 border-black/10 text-[var(--color-brand-text)] py-4 font-body text-base focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors resize-none placeholder:opacity-20 translate-y-2" placeholder="Briefly describe your infrastructure or automation needs..."></textarea>
             </div>
             <button type="submit" className="w-full btn-primary bg-black text-[var(--color-brand-accent)] border-black py-8 text-2xl font-anton hover:bg-[var(--color-brand-accent)] hover:text-black">
                Submit Strategy Request
             </button>
          </form>
        )}

        {submitted && (
          <div className="w-full max-w-xl bg-white border-[3px] border-[var(--color-brand-accent)] p-12 md:p-20 text-center shadow-[15px_15px_0px_0px_var(--color-brand-accent)]">
            <CheckCircle2 className="w-16 h-16 text-[var(--color-brand-accent)] mx-auto mb-10" />
            <h3 className="font-anton text-4xl text-[var(--color-brand-text)] mb-4 uppercase">Request Logged</h3>
            <p className="font-body text-lg text-black/60 font-medium">
              We have redirected you to WhatsApp to finalize your build request. Our team will follow up shortly.
            </p>
          </div>
        )}

        {/* Global corporate standard contact styling */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-24 pt-12 border-t border-white/10 w-full max-w-4xl font-mono text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em]">
          <Link href="mailto:gangwalpratham1302@gmail.com" className="hover:text-[var(--color-brand-accent)] transition-colors">Mail: gangwalpratham1302@gmail.com</Link>
          <span className="hidden md:inline">•</span>
          <Link href="https://wa.me/918109224176" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-accent)] transition-colors">Whatsapp: +91 81092 24176</Link>
          <span className="hidden md:inline">•</span>
          <span>India HQ / Global OPS</span>
        </div>
      </div>
    </section>
  );
}
