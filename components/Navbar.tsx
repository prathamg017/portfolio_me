export default function Navbar() {
  return (
    <header className="w-full border-b-[2px] border-[var(--color-brand-text)] flex justify-between items-stretch text-[10px] md:text-xs font-semibold uppercase tracking-widest leading-none bg-[var(--color-brand-bg)] sticky top-0 z-40">
      <div className="px-4 py-3 md:py-4 border-r border-[var(--color-brand-text)] flex-1 text-left min-w-0 truncate">
        Pratham
      </div>
      <div className="px-4 py-3 md:py-4 border-r border-[var(--color-brand-text)] flex-1 text-center hidden md:block">
        Software Engineer
      </div>
      <div className="px-4 py-3 md:py-4 flex-1 text-right min-w-0 truncate">
        Based in India
      </div>
    </header>
  );
}
