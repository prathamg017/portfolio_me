"use client";

const REVIEWS = [
  {
    quote: "The architecture behind this builder is the first we've evaluated that successfully bridges complex technical integrations with intuitive business operations logic.",
    author: "Enterprise Technology Audit",
    project: "Orbit OS"
  },
  {
    quote: "Classification accuracy and response latency benchmark favorably against major industry players. The seamless AI layer creates a genuinely intelligent product experience.",
    author: "Quality & Performance Assessment",
    project: "VoxIQ v0.9"
  },
  {
    quote: "System performance scores achieved Lighthouse 100 on deployment—outperforming 94% of evaluated competitors. The underlying code structure actively facilitates conversion.",
    author: "Technical Strategy Review",
    project: "Prism Platform"
  }
];

const TRUST_STRIP = [
  "Production Grade",
  "Scalable Infrastructure",
  "AI Integration",
  "Performance Optimized"
];

export default function SocialProof() {
  return (
    <section className="section-padding bg-white relative">
      <div className="mb-16 max-w-2xl mx-auto text-center">
        <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-brand-accent)] uppercase block mb-4">
          Client Impact
        </span>
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-[800] text-[var(--color-brand-text)] leading-tight">
          Engineered for measurable results.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 md:mb-24">
        {REVIEWS.map((review, i) => (
          <div key={i} className="bg-white border border-[var(--color-brand-border)] p-8 md:p-10 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <blockquote className="font-body text-[1.05rem] text-[var(--color-brand-muted)] leading-[1.7] mb-8 relative">
              <span className="absolute -top-4 -left-2 text-4xl text-[var(--color-brand-border)] font-display">"</span>
              <span className="relative z-10">{review.quote}</span>
            </blockquote>
            
            <div className="pt-6 border-t border-[var(--color-brand-border)] flex flex-col items-start gap-1">
              <span className="font-mono text-[11px] font-semibold text-[var(--color-brand-text)] uppercase tracking-wider">{review.author}</span>
              <span className="font-mono text-[10px] bg-[var(--color-brand-surface)] px-2 py-0.5 rounded text-[var(--color-brand-muted)] uppercase mt-1 border border-[var(--color-brand-border)]">{review.project}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 pt-12 border-t border-[var(--color-brand-border)] opacity-70 grayscale">
        {TRUST_STRIP.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-mono font-semibold text-sm md:text-base text-[var(--color-brand-muted)] uppercase tracking-wider">
              {item}
            </span>
            {i !== TRUST_STRIP.length - 1 && (
              <span className="text-[var(--color-brand-border)] hidden md:inline-block">/</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
