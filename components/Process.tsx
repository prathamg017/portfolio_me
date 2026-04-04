"use client";

const STEPS = [
  {
    num: "01",
    title: "Strategic Discovery",
    desc: "Before writing code, we map your business ecosystem to identify where value compounds and where inefficiencies occur."
  },
  {
    num: "02",
    title: "System Architecture",
    desc: "We deliver a comprehensive technical and UX blueprint, establishing full clarity on data models, tech stack, and user flow."
  },
  {
    num: "03",
    title: "Iterative Engineering",
    desc: "Rapid deployment cycles. You see working software weekly, allowing for continuous alignment and agile course correction."
  },
  {
    num: "04",
    title: "Deployment & Scale",
    desc: "A successful launch is the starting line. We actively monitor systems, implement growth analytics, and iteratively optimize."
  }
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-[var(--color-brand-surface)] border-y border-[var(--color-brand-border)]">
      <div className="max-w-3xl mb-20 md:mb-24">
        <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-brand-accent)] uppercase block mb-4">
          Methodology
        </span>
        <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-[800] text-[var(--color-brand-text)] leading-tight">
          How we architect systems.
        </h2>
      </div>

      <div className="max-w-4xl relative">
        {/* Subtle Vertical Line */}
        <div className="absolute top-0 bottom-0 left-[27px] md:left-[39px] w-[1px] bg-[var(--color-brand-border)] z-0" />
        
        <div className="flex flex-col gap-12 md:gap-16">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative z-10 flex gap-6 md:gap-12 items-start group">
              {/* Clean Number Indicator */}
              <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-full bg-white border border-[var(--color-brand-border)] shadow-sm flex items-center justify-center transition-all duration-300 group-hover:border-[var(--color-brand-accent)]">
                <span className="font-mono font-medium text-lg md:text-xl text-[var(--color-brand-muted)] group-hover:text-[var(--color-brand-accent)] transition-colors">
                  {step.num}
                </span>
              </div>
              
              {/* Content */}
              <div className="pt-2 md:pt-5 bg-white p-6 md:p-8 rounded-2xl border border-[var(--color-brand-border)] shadow-sm flex-1 group-hover:shadow-md transition-shadow">
                <h3 className="font-display font-[700] text-xl md:text-2xl text-[var(--color-brand-text)] mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-[1.05rem] text-[var(--color-brand-muted)] leading-[1.6]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
