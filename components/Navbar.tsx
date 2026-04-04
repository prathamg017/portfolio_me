import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b-[2px] border-[var(--color-brand-text)] flex justify-between items-stretch text-[10px] md:text-xs font-semibold uppercase tracking-widest leading-none bg-[var(--color-brand-bg)] sticky top-0 z-40 h-[50px] md:h-[60px]">
      <div className="px-4 border-[2px] border-transparent md:border-r-[var(--color-brand-text)] flex-1 text-left min-w-0 truncate flex items-center">
        <Link href="/">NIRGRANTH<span className="text-[#00e5c3]">.</span></Link>
      </div>
      <div className="px-4 border-r-[2px] border-[var(--color-brand-text)] flex-1 text-center hidden md:flex items-center justify-center">
        AI · Web · App Studio
      </div>
      <div className="flex-1 flex justify-end items-stretch min-w-0">
        <div className="hidden lg:flex items-center text-right truncate border-r-[2px] border-[var(--color-brand-text)] px-4 h-full">
          Building globally from India
        </div>
        <Link 
          href="#contact" 
          className="bg-[#00e5c3] text-[#0a0a0f] font-[600] text-[0.82rem] tracking-[0.06em] flex items-center justify-center px-[1.4rem] h-full whitespace-nowrap hover:bg-[#00c5a3] transition-colors"
        >
          Start a Project
        </Link>
      </div>
    </header>
  );
}
