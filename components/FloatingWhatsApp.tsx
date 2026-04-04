"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = "https://wa.me/917987829764?text=Hi%20Nirgranth%2C%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in...";

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <Link 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center bg-[#25D366] text-white rounded-full shadow-lg overflow-hidden group hover:scale-105 transition-all duration-300 border border-white/20"
      >
        <div className="w-[56px] h-[56px] flex items-center justify-center shrink-0">
          <MessageCircle size={24} fill="currentColor" stroke="none" />
        </div>
        <div className={cn(
          "flex flex-col justify-center whitespace-nowrap overflow-hidden transition-all duration-300",
          isHovered ? "w-[200px] opacity-100 pr-6" : "w-0 opacity-0"
        )}>
          <span className="font-display font-[700] text-sm leading-tight">Chat with us</span>
          <span className="font-body text-[10px] opacity-90 leading-tight mt-0.5">Usually replies in 1 hour</span>
        </div>
      </Link>
    </div>
  );
}
