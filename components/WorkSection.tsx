import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function WorkSection() {
  return (
    <div id="work" className="w-full bg-[var(--color-brand-bg)] py-16 md:py-32 px-4 sm:px-8 lg:px-16 border-b-[2px] border-[var(--color-brand-text)]">
      <div className="max-w-[1920px] mx-auto w-full">
        
         {/* Section Header */}
         <div className="mb-12 md:mb-20 flex flex-col items-start border-b-[2px] border-[var(--color-brand-text)] pb-6 md:pb-12">
            <h2 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-[var(--color-brand-text)] leading-none mb-4">SELECTED WORK</h2>
            <p className="font-body opacity-80 max-w-xl text-sm md:text-lg uppercase tracking-widest font-bold">We build high-performance systems for ambiguous problems.</p>
         </div>

         {/* Premium Agency Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 lg:gap-x-12 lg:gap-y-24">
            {PROJECTS.map((project, idx) => (
              <Link href={`/work/${project.slug}`} key={project.slug} className="group flex flex-col w-full h-full cursor-pointer">
                 
                 {/* The Image Box (Completely filled) */}
                 <div className="w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-[#E8E6E1] relative border-[2px] border-[var(--color-brand-text)] mb-6 md:mb-8 transition-shadow duration-500 group-hover:shadow-[10px_10px_0px_0px_var(--color-brand-text)]">
                    {project.imageUrl && (
                      <Image 
                        src={project.imageUrl}
                        alt={project.projectName}
                        fill
                        className="object-cover object-top group-hover:scale-[1.05] transition-transform duration-[1s] ease-in-out"
                        quality={100}
                      />
                    )}
                 </div>

                 {/* The Content */}
                 <div className="flex flex-col flex-1 pl-2 md:pl-4 border-l-[2px] border-[var(--color-brand-text)]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                       <h3 className="font-anton text-4xl md:text-5xl uppercase tracking-wide text-[var(--color-brand-text)] mb-2 md:mb-0">
                         {project.projectName}
                       </h3>
                       <span className="font-body text-[10px] md:text-xs uppercase tracking-widest font-bold px-3 py-1 bg-[var(--color-brand-text)] text-[var(--color-brand-bg)] inline-block w-max">
                         {project.categoryBadge}
                       </span>
                    </div>
                    <p className="font-body text-sm md:text-base leading-relaxed opacity-80 mb-6 max-w-[95%]">
                       {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                       {project.stackPills.slice(0, 4).map((pill, i) => (
                         <span key={i} className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70 border border-[var(--color-brand-text)] border-opacity-30 px-3 py-1 bg-white">
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
