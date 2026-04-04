"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CTASection() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-[var(--color-brand-surface)] relative overflow-hidden flex flex-col items-center justify-center text-center border-t border-[var(--color-brand-border)]">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-[var(--color-brand-accent)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none z-0 translate-x-1/4 -translate-y-1/2" />
      
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-brand-accent)] uppercase block mb-6">
          Initiate Project
        </span>
        
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-[800] leading-[1.05] text-[var(--color-brand-text)] mb-6">
          Ready to establish your digital dominance?
        </h2>
        
        <p className="font-body text-[1.1rem] text-[var(--color-brand-muted)] max-w-2xl mx-auto mb-12">
          You provide the operational vision. We architect and construct the infrastructure necessary for rapid execution and scalability. 
        </p>

        {!formOpen && !submitted && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
            <button 
              onClick={() => setFormOpen(true)}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              Start Your Build <ArrowRight size={18} />
            </button>
          </div>
        )}

        {formOpen && !submitted && (
          <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white border border-[var(--color-brand-border)] p-8 md:p-12 rounded-2xl shadow-sm text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <input required placeholder="Full Name" type="text" className="w-full bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-[var(--color-brand-text)] p-4 font-body text-sm focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors rounded-lg placeholder:text-[var(--color-brand-muted)]" />
                <input required placeholder="Work Email" type="email" className="w-full bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-[var(--color-brand-text)] p-4 font-body text-sm focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors rounded-lg placeholder:text-[var(--color-brand-muted)]" />
             </div>
             <textarea required rows={4} className="w-full bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] text-[var(--color-brand-text)] p-4 font-body text-sm focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors resize-none mb-6 rounded-lg placeholder:text-[var(--color-brand-muted)]" placeholder="Briefly describe your infrastructure or automation needs..."></textarea>
             <button type="submit" className="w-full btn-primary flex justify-center items-center gap-2">
                Submit Strategy Request
             </button>
          </form>
        )}

        {submitted && (
          <div className="w-full max-w-xl bg-white border border-[var(--color-brand-border)] p-12 rounded-2xl shadow-sm text-center animate-in fade-in zoom-in-95 duration-500">
            <CheckCircle2 className="w-12 h-12 text-[var(--color-brand-accent)] mx-auto mb-6" />
            <h3 className="font-display font-[700] text-2xl text-[var(--color-brand-text)] mb-2">Request Processed Successfully.</h3>
            <p className="font-body text-[1.05rem] text-[var(--color-brand-muted)]">
              Our strategy team will respond to your inquiry via your preferred contact method within one business day.
            </p>
          </div>
        )}

        {/* Global corporate standard contact styling */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-20 pt-8 border-t border-[var(--color-brand-border)] w-full max-w-3xl font-mono text-xs font-medium text-[var(--color-brand-muted)]">
          <a href="mailto:hello@nirgranth.com" className="hover:text-[var(--color-brand-accent)] transition-colors">hello@nirgranth.com</a>
          <span className="hidden md:inline text-[var(--color-brand-border)]">•</span>
          <a href="https://wa.me/917987829764" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-accent)] transition-colors">Tel: +91 79878 29764</a>
          <span className="hidden md:inline text-[var(--color-brand-border)]">•</span>
          <span>Global Operations HQ</span>
        </div>
      </div>
    </section>
  );
}
