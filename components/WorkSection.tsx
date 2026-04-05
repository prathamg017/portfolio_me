"use client";

import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = ["All", "AI", "Web", "App", "Systems"];

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeTab === "All") return true;
    if (activeTab === "AI" && project.categoryBadge.includes("AI")) return true;
    if (activeTab === "Web" && project.categoryBadge.includes("Web")) return true;
    if (activeTab === "App" && project.categoryBadge.includes("App")) return true;
    if (activeTab === "Systems" && project.categoryBadge.includes("System")) return true;
    return false;
  });

  return (
    <div id="work" className="w-full bg-[var(--color-brand-bg)] py-16 md:py-32 px-4 sm:px-8 lg:px-16 border-b-[2px] border-[var(--color-brand-text)]">
      <div className="max-w-[1920px] mx-auto w-full">
        
         {/* Section Header */}
         <div className="mb-12 flex flex-col items-start border-b-[2px] border-[var(--color-brand-text)] pb-6 md:pb-12">
            <h2 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-[var(--color-brand-text)] leading-none mb-4">SELECTED WORK</h2>
            <p className="font-body opacity-80 max-w-xl text-sm md:text-lg uppercase tracking-widest font-bold">We build high-performance systems for ambiguous problems.</p>
         </div>

         {/* Filter Tabs */}
         <div className="flex flex-wrap gap-4 mb-12 md:mb-16">
            {CATEGORIES.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setActiveTab(cat)}
                 className={`font-mono text-xs md:text-sm uppercase tracking-widest font-bold px-6 py-2 border-[2px] transition-colors ${
                   activeTab === cat 
                   ? "bg-[#00e5c3] border-[#00e5c3] text-[#0a0a0f]" 
                   : "bg-transparent border-[var(--color-brand-text)] text-[var(--color-brand-text)] opacity-70 hover:opacity-100"
                 }`}
               >
                 {cat}
               </button>
            ))}
         </div>

         {/* Premium Agency Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 lg:gap-x-12 lg:gap-y-24">
            {filteredProjects.map((project, idx) => (
              <Link href={`/work/${project.slug}`} key={project.slug} className="group flex flex-col w-full h-full cursor-pointer">
                 
                 {/* The Image Box (Completely filled) */}
                 <div className="w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-[#E8E6E1] relative border-[2px] border-[var(--color-brand-text)] mb-6 md:mb-8 transition-shadow duration-500 group-hover:shadow-[10px_10px_0px_0px_var(--color-brand-text)]">
                    {project.imageUrl && (
                      <Image 
                        src={project.imageUrl}
                        alt={project.projectName}
                        fill
                        className="object-cover object-top group-hover:scale-[1.05] transition-transform duration-[1s] ease-in-out"
                        quality={90}
                      />
                    )}
                 </div>

                 {/* The Content */}
                 <div className="flex flex-col flex-1 pl-2 md:pl-4 border-l-[2px] border-[var(--color-brand-text)]">
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-2">
                       <h3 className="font-anton text-4xl md:text-5xl uppercase tracking-wide text-[var(--color-brand-text)]">
                         {project.projectName}
                       </h3>
                       <span className="font-body text-[10px] md:text-xs uppercase tracking-widest font-bold px-3 py-1 bg-[var(--color-brand-text)] text-[var(--color-brand-bg)] inline-block w-max">
                         {project.categoryBadge}
                       </span>
                    </div>
                    <p className="font-body text-sm md:text-base leading-relaxed opacity-80 mb-3 max-w-[95%] text-[var(--color-brand-text)]">
                       {project.shortDescription}
                    </p>
                    
                    {/* Key Outcome - Teal */}
                    <p className="font-body text-base md:text-lg font-bold tracking-tight mb-6 text-[#00e5c3]">
                      ↳ {project.keyOutcome}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                       {project.stackPills.slice(0, 4).map((pill, i) => (
                         <span key={i} className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--color-brand-text)] opacity-70 border border-[var(--color-brand-text)] border-opacity-30 px-3 py-1 bg-white">
                           {pill}
                         </span>
                       ))}
                    </div>
                 </div>

              </Link>
            ))}
         </div>

      </div>
    </div>
  );
}
