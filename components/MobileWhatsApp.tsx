import { MessageCircle } from "lucide-react";

export default function MobileWhatsApp() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <a 
        href="https://wa.me/917987829764" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full h-[60px] bg-[var(--color-brand-accent)] text-black font-display font-[700] flex items-center justify-center gap-2 border-t border-black/10"
      >
        <MessageCircle size={20} className="fill-black" />
        WhatsApp Us <span>→</span>
      </a>
    </div>
  );
}
