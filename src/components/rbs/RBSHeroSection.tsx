import { motion } from "framer-motion";
import rbsHeroPlaceholder from "@/assets/about-hero.jpg";

export function RBSHeroSection() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Top Typography */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#FF66CC] text-[#2C0052] text-[10px] font-bold tracking-[0.1em] uppercase py-1.5 px-3 rounded-full">
              FLAGSHIP PROGRAM
            </span>
            <span className="text-[#2C0052] font-bold text-[10px] tracking-widest uppercase">
              • NIGERIA
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-bold text-[#2C0052] mb-6 leading-[1.1] tracking-tight">
            Resonating Beyond Sound
          </h1>
          
          <p className="text-[17px] text-[#594B6B] leading-relaxed max-w-2xl font-body">
            Our first flagship program translating research into solutions<br className="hidden md:block" /> for the deaf community in Nigeria.
          </p>
        </motion.div>

        {/* Hero Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.3/1] rounded-xl overflow-hidden shadow-sm bg-[#1C003D]"
        >
          <img 
            src={rbsHeroPlaceholder} 
            alt="Nigeria Deaf Community Program" 
            className="w-full h-full object-cover opacity-90"
            style={{ filter: "saturate(0.5) contrast(1.1) brightness(0.8) hue-rotate(240deg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C0052]/50 to-transparent mix-blend-multiply"></div>
          
          {/* Yellow status tag */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-[#FDE047] px-4 py-2 rounded-sm shadow-md max-w-[90%]">
            <span className="text-black text-xs md:text-[13px] font-bold tracking-tight">
              Current Status: Research phase in progress
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
