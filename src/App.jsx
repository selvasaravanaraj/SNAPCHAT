import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Ghost } from 'lucide-react';

export default function App() {
  return (
    <div className="fixed inset-0 bg-[#FFFC00] flex items-center justify-center overflow-hidden p-6 select-none">
      {/* Subtle background element to break the solid color */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <Ghost size={600} />
      </div>

      <motion.div 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-[320px] bg-white rounded-[3rem] p-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] flex flex-col items-center gap-6 relative z-10"
      >
         {/* The Snapcode / Identity */}
         <div className="w-44 h-44 bg-[#FFFC00] rounded-[2.5rem] flex items-center justify-center relative overflow-hidden border-2 border-black/5 shadow-inner">
            <img 
              src="/snapprofile.jpeg" 
              className="w-full h-full object-cover" 
              alt="Snapcode"
            />
            <div className="absolute inset-0 border-[12px] border-[#FFFC00] rounded-[2.5rem] pointer-events-none" />
         </div>

         {/* Content Area */}
         <div className="text-center space-y-4">
           

            {/* The Vibe Content */}
            <div className="space-y-3 px-2">
               <p className="text-[12px] font-bold text-black/80 leading-relaxed italic">
                 POV: you found my secret corner on Snapchat 👀💛 
               </p>
               
               <p className="text-[12px] font-black text-black italic">
                 👻 “Hi dude… it’s my snap profile”
               </p>
               <p className="text-[10px] font-bold text-black/40">
                 💫 Come join the chaos 😂🫶
               </p>
            </div>
         </div>

         {/* The Minimalist Action (Text Only as requested) */}
         <div className="w-full pt-4">
            <motion.a
              href="https://www.snapchat.com/add/selva_0704"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex flex-col items-center gap-2 group no-underline"
            >
               <span className="text-black font-black uppercase tracking-[0.3em] text-[12px] group-hover:text-black/60 transition-colors flex items-center gap-2">
                  ADD FRIEND <Sparkles size={14} className="animate-pulse" />
               </span>
               <div className="w-12 h-[2px] bg-black/5 group-hover:w-20 transition-all duration-500" />
            </motion.a>
         </div>

         <div className="text-[7px] font-black uppercase tracking-[0.5em] opacity-10">
            Click to nav my profile
         </div>
      </motion.div>
    </div>
  );
}
