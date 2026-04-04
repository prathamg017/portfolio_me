"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, Rocket } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 relative overflow-hidden selection:bg-[#00f5ff]/20 selection:text-[#00f5ff]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f5ff] blur-[150px] rounded-full" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-4xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#00f5ff] font-bold tracking-[0.4em] uppercase text-xs mb-8 block underline decoration-[#00f5ff]/30 underline-offset-8">404 Error</span>
          
          <h1 className="text-[10rem] sm:text-[18rem] font-black text-white leading-none tracking-tighter mb-8 italic">
            LOST<span className="text-white/10">?</span>
          </h1>

          <p className="text-white/40 text-xl sm:text-2xl font-medium max-w-lg mx-auto mb-16 leading-relaxed">
            The page you are looking for has been moved to a high-performance cluster or simply doesn&apos;t exist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
             <Link 
               href="/" 
               className="group flex items-center gap-4 bg-white/5 border border-white/10 px-10 py-5 rounded-2xl text-white font-bold tracking-widest uppercase hover:bg-white/10 transition-all text-xs"
             >
                <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Return to Command Center
             </Link>
             
             <Link 
               href="/#contact" 
               className="group flex items-center gap-4 bg-[#00f5ff] text-black px-10 py-5 rounded-2xl font-bold tracking-widest uppercase hover:scale-105 transition-all text-xs shadow-xl shadow-[#00f5ff]/20"
             >
                <Rocket className="w-5 h-5" />
                Build Something Real
             </Link>
          </div>
        </motion.div>

        <div className="mt-24 border-t border-white/5 pt-12">
            <p className="text-white/10 text-[10px] uppercase font-black tracking-[1em]">Nirgranth Creations Architecture v1.0</p>
        </div>
      </div>
    </div>
  );
}
