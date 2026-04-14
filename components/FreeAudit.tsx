"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function FreeAudit() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const name = (target.elements[0] as HTMLInputElement).value;
    const email = (target.elements[1] as HTMLInputElement).value;
    const objective = (target.elements[2] as HTMLSelectElement).value;

    const message = `*Strategic Audit Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*Objective:* ${objective}`;
    const whatsappUrl = `https://wa.me/918109224176?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="free-audit" className="w-full bg-[var(--color-brand-bg)] py-24 md:py-32 px-6 md:px-12 border-b-[2px] border-[var(--color-brand-text)] flex flex-col items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Copy & Form */}
        <div>
          <span className="font-mono text-xs font-bold text-[var(--color-brand-accent)] uppercase tracking-[0.2em] mb-8 block">
            Lead Magnet #001 — Strategic Audit
          </span>
          <h2 className="font-anton text-5xl md:text-7xl uppercase leading-[0.9] text-[var(--color-brand-text)] mb-8 tracking-tighter">
            Is your business ready to <span className="text-white bg-[var(--color-brand-text)] px-2">scale</span> with AI?
          </h2>
          <p className="font-body text-lg leading-[1.6] opacity-80 mb-12 max-w-xl font-medium">
            We offer a complimentary strategic audit to identify operational bottlenecks and map out a custom digital infrastructure plan that drives revenue and compounds your value.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="brutalist-card max-w-md w-full bg-white relative">
               <div className="absolute -top-4 -left-4 bg-[var(--color-brand-accent)] text-[#0a0a0f] font-mono text-[10px] font-bold px-3 py-1 border-[2px] border-[var(--color-brand-text)]">
                 SECURE ENCRYPTED FORM
               </div>
               <h3 className="font-anton text-2xl uppercase text-[var(--color-brand-text)] mb-8 pt-4">Request an audit</h3>
               <div className="space-y-6">
                 <div className="flex flex-col gap-2">
                    <label className="font-mono text-[9px] uppercase font-bold opacity-40">Ident_Full_Name</label>
                    <input required placeholder="Pratham G." type="text" className="w-full bg-white border-b-[2px] border-[var(--color-brand-text)] text-[var(--color-brand-text)] py-3 font-body text-sm focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:opacity-30" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="font-mono text-[9px] uppercase font-bold opacity-40">Ident_Work_Email</label>
                    <input required placeholder="gangwalpratham1302@gmail.com" type="email" className="w-full bg-white border-b-[2px] border-[var(--color-brand-text)] text-[var(--color-brand-text)] py-3 font-body text-sm focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:opacity-30" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="font-mono text-[9px] uppercase font-bold opacity-40">Obj_Primary_Metric</label>
                    <select required defaultValue="" className="w-full bg-white border-b-[2px] border-[var(--color-brand-text)] py-3 font-body text-sm focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors text-[var(--color-brand-text)] appearance-none cursor-pointer">
                        <option value="" disabled>Select Objective</option>
                        <option value="leads">Revenue & Growth Operations</option>
                        <option value="convert">Custom AI Infrastructure</option>
                        <option value="ops">Internal Process Automation</option>
                        <option value="speed">Full System Scalability</option>
                    </select>
                 </div>
                 <button type="submit" className="w-full btn-primary flex justify-center items-center gap-2 mt-4">
                    Schedule Consultation <ArrowRight size={18} />
                 </button>
               </div>
            </form>
          ) : (
            <div className="max-w-md brutalist-card text-center bg-white">
               <CheckCircle2 className="w-12 h-12 text-[var(--color-brand-accent)] mx-auto mb-6" />
               <h4 className="font-anton text-3xl uppercase text-[var(--color-brand-text)] mb-4">Request Logged</h4>
               <p className="font-body text-base opacity-70 font-medium">We have redirected you to WhatsApp to schedule your sessions. Our team will follow up shortly.</p>
            </div>
          )}
        </div>

        {/* Right: Premium Value Proposition Graphic */}
        <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
           <div className="bg-white border-[2px] border-[var(--color-brand-text)] p-8 md:p-12 relative overflow-hidden shadow-[15px_15px_0px_0px_var(--color-brand-accent)]">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-accent)] opacity-5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              
              <h3 className="font-anton text-3xl md:text-4xl uppercase text-[var(--color-brand-text)] mb-10 relative z-10 leading-[1]">Audit Inclusions:</h3>
              
              <div className="flex flex-col gap-8 relative z-10">
                {[
                  { title: "Technical Architecture Review", desc: "Analysis of your current stack and infrastructure inefficiencies." },
                  { title: "AI Opportunity Mapping", desc: "Identification of redundant processes primed for automation." },
                  { title: "Conversion Systems Analysis", desc: "UX and performance benchmarking against industry leaders." },
                  { title: "Strategic Roadmap", desc: "A phased action plan for deployment and scaling." },
                ].map((pt, i) => (
                  <div key={i} className="flex gap-6 items-start border-t border-[var(--color-brand-text)] border-opacity-10 pt-6 first:border-0 first:pt-0">
                    <div className="mt-1 font-anton text-2xl text-[var(--color-brand-accent)] shrink-0">0{i+1}</div>
                    <div>
                      <h4 className="font-anton text-xl uppercase text-[var(--color-brand-text)] mb-2">{pt.title}</h4>
                      <p className="font-body text-sm opacity-70 leading-[1.6] font-medium">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
