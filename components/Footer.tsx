export default function Footer() {
  return (
    <footer className="w-full border-t-[2px] bg-[var(--color-inverse-bg)] text-[var(--color-inverse-text)] border-[var(--color-brand-text)] flex flex-col">
      <div className="flex flex-col md:flex-row border-b-[2px] border-[var(--color-inverse-border)]">
        <div className="w-full md:w-1/2 p-8 md:p-16 border-b-[2px] md:border-b-0 md:border-r-[2px] border-[var(--color-inverse-border)] flex flex-col justify-center">
          <h2 className="font-anton text-[12vw] md:text-[8vw] leading-[0.8] mb-8">
            LET'S WORK<br/>
            TOGETHER
          </h2>
          <div className="font-script text-4xl md:text-5xl opacity-80 -rotate-6">
            software architecture
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-end gap-6 pb-12">
          <div className="flex items-center gap-4 border-b border-[var(--color-inverse-border)] pb-2 text-sm font-body tracking-widest uppercase">
            <span className="opacity-50">Email</span>
            <a href="mailto:gangwalpratham1302@gmail.com" className="hover:underline lowercase">gangwalpratham1302@gmail.com</a>
          </div>
          <div className="flex items-center gap-4 border-b border-[var(--color-inverse-border)] pb-2 text-sm font-body tracking-widest uppercase">
            <span className="opacity-50">WhatsApp</span>
            <a href="https://wa.me/918109224176" className="hover:underline">+91 81092 24176</a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-6 text-[10px] font-bold tracking-widest uppercase font-mono">
        <div>© {new Date().getFullYear()} Pratham.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
