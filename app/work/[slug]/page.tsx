import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-[1920px] mx-auto min-h-screen flex flex-col bg-[var(--color-brand-bg)]">
      
      {/* 1. NAVIGATION BAR REPEATED/STICKY OR JUST TOP */}
      <section className="w-full flex justify-between px-6 md:px-12 py-6 border-b-[2px] border-[var(--color-brand-text)] items-center sticky top-0 bg-[var(--color-brand-bg)] z-30">
        <Link href="/#work" className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:text-[var(--color-brand-accent)] transition-colors flex items-center gap-2">
          <span>←</span> SELECTED WORK
        </Link>
        <div className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-40">
          STUDIO / {project.slug}
        </div>
      </section>

      {/* 2. HUGE CASE STUDY HERO */}
      <section className="w-full border-b-[2px] border-[var(--color-brand-text)] flex flex-col items-center pt-20 pb-16 md:pt-32 md:pb-24 px-6 text-center bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none font-anton text-[40vw] text-[var(--color-brand-text)] leading-none -translate-y-1/2">
          {project.projectName.charAt(0)}
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="font-mono text-[10px] md:text-xs text-[var(--color-brand-accent)] uppercase tracking-[0.3em] font-bold mb-6">
            [{project.categoryBadge}]
          </div>
          <h1 className="font-anton text-[12vw] md:text-[8vw] leading-[0.85] uppercase mb-10 tracking-tighter">
            {project.projectName}
          </h1>
          <p className="font-body text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto opacity-80 mb-12">
            {project.shortDescription}
          </p>

          {project.live && (
            <div className="mb-16">
               <Link 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary px-12 py-6 text-xl md:text-2xl font-anton tracking-widest inline-flex items-center gap-4 shadow-[10px_10px_0px_0px_black] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Visit Live Site <span className="text-2xl">↗</span>
              </Link>
            </div>
          )}

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-[2px] border-[var(--color-brand-text)] bg-[var(--color-brand-bg)]">
            {project.metrics.map((m, i) => (
              <div key={i} className={`p-8 flex flex-col items-center justify-center ${i !== project.metrics.length - 1 ? 'border-b-[2px] md:border-b-0 md:border-r-[2px] border-[var(--color-brand-text)]' : ''}`}>
                <span className="font-anton text-5xl md:text-6xl text-[var(--color-brand-text)] mb-2">{m.value}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold opacity-60">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH IMAGE SHOWCASE */}
      <section className="w-full aspect-[4/3] md:aspect-[16/8] bg-[#E8E6E1] border-b-[2px] border-[var(--color-brand-text)] relative overflow-hidden group">
         <Image 
            src={project.imageUrl}
            alt={project.projectName}
            fill
            className="object-cover object-top"
            quality={90}
            priority
         />
      </section>

      {/* 4. CONTEXT GRID (Problem vs Solution) */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 border-b-[2px] border-[var(--color-brand-text)] bg-white">
          <div className="p-8 md:p-16 border-b-[2px] md:border-b-0 md:border-r-[2px] border-[var(--color-brand-text)]">
             <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-brand-accent)] mb-8">The Problem</h3>
             <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 italic">
               "{project.problemContext}"
             </p>
          </div>
          <div className="p-8 md:p-16 bg-[var(--color-brand-bg)]">
             <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-brand-text)] mb-8 opacity-40">The Solution</h3>
             <p className="font-body text-lg md:text-xl leading-relaxed font-medium">
               {project.problemSolution}
             </p>
          </div>
      </section>

      {/* 5. CLIENT DIALOGUE (Story bubbles) */}
      <section className="w-full p-8 md:p-24 border-b-[2px] border-[var(--color-brand-text)] bg-white flex flex-col gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-accent)] opacity-10 blur-[100px] rounded-full" />
          
          <div className="max-w-4xl mx-auto w-full flex flex-col gap-12 relative z-10">
             {/* Client Bubble */}
             <div className="self-start max-w-[80%]">
                <div className="font-mono text-[10px] uppercase tracking-widest font-bold mb-2 opacity-40">The Client</div>
                <div className="bg-[#f0f0f0] border-[2px] border-[var(--color-brand-text)] p-6 md:p-8 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl">
                   <p className="font-body text-base md:text-lg italic">"{project.storyClient}"</p>
                </div>
             </div>

             {/* Studio Bubble */}
             <div className="self-end max-w-[80%] text-right">
                <div className="font-mono text-[10px] uppercase tracking-widest font-bold mb-2 text-[var(--color-brand-accent)]">Pratham Studio</div>
                <div className="bg-[var(--color-brand-text)] text-white p-6 md:p-8 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl shadow-[8px_8px_0px_0px_var(--color-brand-accent)]">
                   <p className="font-body text-base md:text-lg font-medium">{project.storyPratham}</p>
                </div>
             </div>
          </div>
      </section>

      {/* 6. FEATURES GRID */}
      <section className="w-full p-8 md:p-24 border-b-[2px] border-[var(--color-brand-text)]">
          <h3 className="font-anton text-5xl md:text-7xl uppercase mb-12 md:mb-20 text-center">System Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {project.features.map((feature, i) => (
               <div key={i} className="bg-white border-[2px] border-[var(--color-brand-text)] p-8 hover:bg-[var(--color-brand-accent)] hover:text-[#0a0a0f] transition-all duration-300 group">
                  <span className="font-mono text-[10px] font-bold opacity-30 mb-4 block group-hover:opacity-60">0{i+1}</span>
                  <h4 className="font-anton text-2xl uppercase mb-4">{feature.title}</h4>
                  <p className="font-body text-sm opacity-80 leading-relaxed font-medium">{feature.desc}</p>
               </div>
             ))}
          </div>
      </section>

      {/* 7. UX PHILOSOPHY Block */}
      <section className="w-full bg-[var(--color-brand-text)] text-white p-12 md:p-32 border-b-[2px] border-[var(--color-brand-text)] text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="font-script text-4xl md:text-6xl text-[var(--color-brand-accent)] mb-8 -rotate-3">The Logic</div>
            <h3 className="font-anton text-4xl md:text-6xl uppercase leading-tight max-w-4xl mx-auto">
              {project.uxPhilosophy}
            </h3>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-accent)_0%,_transparent_70%)]" />
          </div>
      </section>

      {/* 8. DYNAMIC PROJECT CTA */}
      <section className="w-full py-24 md:py-48 px-6 text-center flex flex-col items-center bg-white">
          <h2 className="font-anton text-[7vw] md:text-[5vw] leading-[1] mb-12 max-w-4xl uppercase">
            {project.projectCTA}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/#contact" className="btn-primary">
              Initialize System Build
            </Link>
            
            {project.live && (
              <Link 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-brutalist border-[#00e5c3] bg-[#00e5c3] text-[#0a0a0f] hover:bg-white hover:text-[var(--color-brand-text)]"
              >
                Visit Live Site
              </Link>
            )}

            {project.github && (
              <Link 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-brutalist flex items-center gap-2"
              >
                View on GitHub
              </Link>
            )}

            <Link href="/#work" className="btn-brutalist">
              View Other Projects
            </Link>
          </div>
      </section>
    </div>
  );
}
