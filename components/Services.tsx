"use client";

const SERVICES = [
  {
    id: "01",
    title: "AI Automation Systems",
    desc: "Custom AI workflows that eliminate the repetitive intelligence tax on your business operations.",
    deliverables: "Lead qualification · Customer support · Document processing",
    pills: ["OpenAI", "Claude", "n8n", "Python"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <path d="M8.12 8.12 15.88 15.88" />
        <path d="M15.88 8.12 8.12 15.88" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Web Platforms",
    desc: "Performance-first web applications and scalable platforms engineered for continuous growth.",
    deliverables: "Enterprise portals · SaaS applications · E-commerce",
    pills: ["Next.js", "TypeScript", "React", "PostgreSQL"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Mobile Architecture",
    desc: "Native-feeling mobile applications built efficiently for both iOS and Android platforms simultaneously.",
    deliverables: "Consumer apps · Enterprise mobility · B2B tools",
    pills: ["Flutter", "Dart", "Firebase", "Supabase"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Growth Infrastructure",
    desc: "The critical systems beneath the surface: robust analytics, CRM integration, and infrastructure scale.",
    deliverables: "Data pipelines · Growth dashboards · CRM automation",
    pills: ["AWS", "Vercel", "Stripe", "Webhooks"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="2 18 6 14 12 4 18 10 22 2" />
      </svg>
    ),
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="mb-16">
        <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-brand-accent)] uppercase block mb-4">
          Core Capabilities
        </span>
        <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-[800] text-[var(--color-brand-text)] leading-tight max-w-2xl">
          Comprehensive digital infrastructure.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((srv) => (
          <div key={srv.id} className="bg-[var(--color-brand-surface)] p-8 md:p-10 rounded-2xl border border-[var(--color-brand-border)] flex flex-col relative group hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start mb-8">
              <div className="text-[var(--color-brand-accent)] bg-white p-3 rounded-lg shadow-sm border border-[var(--color-brand-border)]">
                {srv.icon}
              </div>
              <span className="font-mono text-sm font-medium text-[var(--color-brand-muted)]">{srv.id}</span>
            </div>
            
            <h3 className="text-2xl font-display font-[700] text-[var(--color-brand-text)] mb-3">{srv.title}</h3>
            
            <p className="font-body text-[1.05rem] text-[var(--color-brand-muted)] leading-[1.6] mb-8 flex-1">
              {srv.desc}
            </p>

            <div className="mb-8 pt-6 border-t border-[var(--color-brand-border)]">
              <span className="font-mono text-[10px] uppercase text-[var(--color-brand-muted)] tracking-widest block mb-2 font-semibold">Primary Output</span>
              <p className="font-body text-sm font-medium text-[var(--color-brand-text)]">{srv.deliverables}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {srv.pills.map((pill, i) => (
                <span key={i} className="font-mono text-[10px] font-medium px-2.5 py-1 bg-white text-[var(--color-brand-muted)] border border-[var(--color-brand-border)] rounded-md">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
