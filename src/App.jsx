import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Ghost, Star, Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="fixed inset-0 bg-[#FFFC00] flex items-center justify-center overflow-hidden p-6 select-none font-sans">
      
      {/* Dynamic Vibe Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <Ghost size={800} />
        </div>
        
        {/* Floating Vibe Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 0 }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 0.1, 0],
              rotate: 360 
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              delay: Math.random() * 20,
              ease: "linear"
            }}
            className="absolute text-black/10"
          >
            {i % 2 === 0 ? <Star size={24} /> : <Heart size={20} />}
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 20 }}
        className="w-full max-w-[300px] bg-white rounded-[3.5rem] p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] flex flex-col items-center gap-8 relative z-10 border-b-[10px] border-black/5"
      >
         {/* The Snapcode - Ultra Clean */}
         <div className="w-44 h-44 bg-[#FFFC00] rounded-[2.5rem] flex items-center justify-center relative overflow-hidden border-2 border-black/5 shadow-inner group">
            <img 
              src="/snapprofile.jpeg" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Snapcode"
            />
            <div className="absolute inset-0 border-[15px] border-[#FFFC00] rounded-[2.5rem] pointer-events-none" />
         </div>

         {/* Content Area - The Vibe */}
         <div className="text-center space-y-6 w-full">
            <div className="space-y-4 px-2">
               <p className="text-[13px] font-black text-black/90 leading-relaxed italic tracking-tight">
                 POV: you found my secret corner on Snapchat 👀💛 
               </p>
               
              

               <p className="text-[14px] font-black text-black italic bg-black/5 py-3 rounded-2xl border border-black/5">
                 👻 “Hi dude… it’s my snap profile”
               </p>
               
               
            </div>
         </div>

         {/* Minimalist Add Friend Button (Text Only) */}
         <div className="w-full pt-2">
            <motion.a
              href="https://www.snapchat.com/add/selva_0704"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex flex-col items-center gap-3 group no-underline"
            >
               <span className="text-black font-black uppercase tracking-[0.4em] text-[12px] group-hover:text-black/60 transition-colors flex items-center gap-3">
                  ADD FRIEND <Sparkles size={16} className="text-[#FFFC00] fill-black stroke-black" />
               </span>
               <div className="w-8 h-[3px] bg-black rounded-full group-hover:w-24 transition-all duration-700 ease-out" />
            </motion.a>
         </div>

         {/* Verification Hint */}
         <div className="flex items-center gap-2 opacity-10">
            <div className="w-1 h-1 rounded-full bg-black" />
            <span className="text-[7px] font-black uppercase tracking-[0.5em]">selva_0704 • 10,402</span>
            <div className="w-1 h-1 rounded-full bg-black" />
         </div>
      </motion.div>
    </div>
  );
}
