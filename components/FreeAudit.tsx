"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function FreeAudit() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="free-audit" className="py-24 md:py-32 px-6 md:px-12 w-full relative bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Copy & Form */}
        <div>
          <span className="font-mono text-xs font-bold px-3 py-1 bg-[var(--color-brand-accent)]/10 text-[var(--color-brand-accent)] uppercase tracking-widest rounded-full mb-6 inline-block">
            Free Consultation
          </span>
          <h2 className="font-display font-[800] text-[clamp(2rem,4vw,3rem)] text-[var(--color-brand-text)] leading-[1.1] mb-4">
            Is your business ready to scale with AI?
          </h2>
          <p className="font-body text-[1.1rem] leading-[1.7] text-[var(--color-brand-muted)] mb-10 max-w-xl">
            We offer a complimentary strategic audit to identify operational bottlenecks and map out a custom digital infrastructure plan that drives revenue.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] p-6 md:p-8 rounded-xl max-w-md w-full shadow-sm">
               <h3 className="font-display font-[600] text-lg text-[var(--color-brand-text)] mb-6">Request an audit</h3>
               <div className="space-y-4">
                 <input required placeholder="Full Name" type="text" className="w-full bg-white border border-[var(--color-brand-border)] text-[var(--color-brand-text)] p-3.5 font-body text-sm focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors rounded-lg shadow-sm placeholder:text-[var(--color-brand-muted)]" />
                 <input required placeholder="Work Email" type="email" className="w-full bg-white border border-[var(--color-brand-border)] text-[var(--color-brand-text)] p-3.5 font-body text-sm focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors rounded-lg shadow-sm placeholder:text-[var(--color-brand-muted)]" />
                 <select required defaultValue="" className="w-full bg-white border border-[var(--color-brand-border)] py-3.5 px-4 font-body text-sm focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors rounded-lg text-[var(--color-brand-text)] shadow-sm appearance-none">
                    <option value="" disabled>Primary Objective</option>
                    <option value="leads">Revenue & Growth Operations</option>
                    <option value="convert">Custom Applications</option>
                    <option value="ops">Internal AI Automation</option>
                    <option value="speed">Full System Modernization</option>
                 </select>
                 <button type="submit" className="w-full bg-[var(--color-brand-accent)] text-white font-display font-[600] px-6 py-4 rounded-lg shadow-sm hover:bg-[var(--color-brand-accent-hover)] transition-colors flex items-center justify-center gap-2 mt-2">
                   Schedule Consultation <ArrowRight size={18} />
                 </button>
               </div>
            </form>
          ) : (
            <div className="max-w-md bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] p-8 rounded-xl text-center shadow-sm">
               <CheckCircle2 className="w-12 h-12 text-[var(--color-brand-accent)] mx-auto mb-4" />
               <h4 className="font-display font-[700] text-2xl text-[var(--color-brand-text)] mb-2">Request Received</h4>
               <p className="font-body text-[0.95rem] text-[var(--color-brand-muted)]">We will be in touch shortly to schedule your strategic audit session.</p>
            </div>
          )}
        </div>

        {/* Right: Premium Value Proposition Graphic */}
        <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
           <div className="bg-[var(--color-brand-surface)] rounded-2xl p-8 md:p-10 border border-[var(--color-brand-border)] relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-accent)]/10 blur-[50px] rounded-full" />
              
              <h3 className="font-display font-[700] text-2xl text-[var(--color-brand-text)] mb-6 relative z-10">What's included in the audit:</h3>
              
              <div className="flex flex-col gap-6 relative z-10">
                {[
                  { title: "Technical Architecture Review", desc: "Analysis of your current stack and infrastructure inefficiencies." },
                  { title: "AI Opportunity Mapping", desc: "Identification of redundant processes primed for automation." },
                  { title: "Conversion Systems Analysis", desc: "UX and performance benchmarking against industry leaders." },
                  { title: "Strategic Roadmap", desc: "A phased action plan for deployment and scaling." },
                ].map((pt, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-white p-1 rounded-full border border-[var(--color-brand-border)] shrink-0 shadow-sm h-min">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-accent)]" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-[1.05rem] text-[var(--color-brand-text)] mb-1">{pt.title}</h4>
                      <p className="font-body text-sm text-[var(--color-brand-muted)] leading-[1.6]">{pt.desc}</p>
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
