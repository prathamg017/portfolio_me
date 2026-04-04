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
    <div className="max-w-[1920px] mx-auto border-x-[2px] md:border-x-[4px] border-[var(--color-brand-text)] min-h-screen flex flex-col bg-[var(--color-brand-bg)]">
      <Navbar />

      {/* 1. HERO */}
      <section className="w-full flex justify-between px-8 py-4 border-b-[2px] border-[var(--color-brand-text)] items-center">
        <Link href="/#work" className="font-body text-xs font-bold uppercase tracking-widest hover:underline">
          * BACK TO WORK
        </Link>
        <div className="font-script text-xl opacity-80 rotate-[-5deg]">Case Study</div>
      </section>

      <section className="w-full flex flex-col border-b-[2px] border-[var(--color-brand-text)]">
        {/* Title + Description Header */}
        <div className="w-full border-b-[2px] border-[var(--color-brand-text)] p-8 md:p-12 lg:p-16 text-center bg-white">
          <h1 className="font-anton text-[12vw] md:text-[8vw] leading-[0.8] uppercase mb-8">
            {project.projectName}
          </h1>
          <div className="max-w-2xl mx-auto">
             <h3 className="font-body font-bold text-sm md:text-base mb-4 uppercase tracking-widest">
               {project.typeBadge}
             </h3>
             <p className="font-body text-base md:text-lg opacity-80 leading-relaxed mb-6">
               {project.shortDescription}
             </p>
             <p className="font-body text-sm opacity-60 leading-relaxed">
               {project.fullDescription}
             </p>
          </div>
        </div>

        {/* 2. THE SINGULAR SHOWCASE (Filled Box) */}
        <a href={project.imageUrl} target="_blank" rel="noopener noreferrer" className="w-full aspect-[4/3] md:aspect-[16/9] bg-[#E8E6E1] border-b-[2px] border-[var(--color-brand-text)] relative overflow-hidden group cursor-zoom-in block">
          <Image 
            src={project.imageUrl}
            alt={project.projectName}
            fill
            className="w-full h-full object-cover object-top group-hover:scale-[1.05] transition-transform duration-[1.5s] ease-out"
            quality={100}
            priority
          />
        </a>
      </section>

      {/* 4. FEATURES & POSITIONING */}
      <section className="w-full flex flex-col md:flex-row border-b-[2px] border-[var(--color-brand-text)] bg-white text-[var(--color-brand-text)] p-8 md:p-16">
         <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h3 className="font-anton text-5xl md:text-7xl uppercase mb-8">Features</h3>
            <ul className="flex flex-col gap-4">
              {project.features.map((feature, i) => (
                <li key={i} className="flex gap-4 items-start border-t border-[var(--color-brand-text)] pt-4">
                  <span className="font-anton text-2xl">•</span>
                  <div>
                    <h4 className="font-bold font-body text-sm uppercase tracking-widest mb-1">{feature.title}</h4>
                    <p className="font-body text-sm opacity-70 leading-relaxed">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
         </div>

         <div className="w-full md:w-1/2 md:pl-16 flex flex-col justify-center border-l-0 md:border-l-[2px] border-[var(--color-brand-text)] pt-12 md:pt-0">
             <div className="font-script text-4xl mb-6 opacity-80 -rotate-6">The System</div>
             <p className="font-anton text-3xl md:text-5xl uppercase leading-tight mb-8">
               We design and build high-performance digital systems — from AI platforms to scalable SaaS products.
             </p>
         </div>
      </section>

      {/* 5. CTA */}
      <section className="w-full bg-[var(--color-inverse-bg)] text-[var(--color-inverse-text)] py-20 px-8 text-center flex flex-col items-center">
         <h2 className="font-anton text-[6vw] leading-[1] mb-8 max-w-4xl uppercase">
           We design systems like this for modern businesses.
         </h2>
         <a href="mailto:hello@pratham.dev" className="px-8 py-4 border-[2px] border-white font-bold uppercase tracking-widest font-body hover:bg-white hover:text-black transition-colors text-sm">
           Initiate Project
         </a>
      </section>

      <Footer />
    </div>
  );
}
