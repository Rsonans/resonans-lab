import { motion } from "framer-motion";
import { BarChart, Users, Settings } from "lucide-react";
import mapPlaceholder from "@/assets/about-hero.jpg";

export function RBSWhatWeDoSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FCF8FB]">
      <div className="container max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-[32px] md:text-[40px] font-heading font-bold text-[#2C0052]">
            What We're Doing
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Nationwide Research */}
          <div className="md:col-span-8 bg-[#F7E6FE] rounded-2xl overflow-hidden flex flex-col shadow-[0_4px_20px_-5px_rgba(44,0,82,0.05)] border border-white/50">
             <div className="p-10 lg:pl-12 lg:pt-12 lg:pr-12 md:pb-6 flex-none">
                 <div className="mb-6 w-10 h-10 border-2 border-[#AC2283] rounded-md flex items-center justify-center text-[#AC2283] bg-white/30">
                    <BarChart className="w-5 h-5" />
                 </div>
                 <h3 className="text-[22px] font-bold text-[#2C0052] mb-4">Nationwide Research</h3>
                 <p className="text-[#594B6B] text-[14px] leading-relaxed max-w-sm">
                   Gathering deep data from over 36 states to understand the nuance of lived experience in Nigeria.
                 </p>
             </div>
             <div className="w-full mt-auto px-6 lg:px-10">
               <div className="w-full h-40 lg:h-56 rounded-t-xl overflow-hidden">
                 <img src={mapPlaceholder} alt="Maps and data" className="w-full h-full object-cover object-top opacity-70 mix-blend-multiply" />
               </div>
             </div>
          </div>

          {/* Card 2: Community Engagement */}
          <div className="md:col-span-4 bg-[#21024D] rounded-2xl p-10 lg:p-12 shadow-[0_4px_20px_-5px_rgba(44,0,82,0.1)] flex flex-col min-h-[380px]">
             <div className="mb-6 text-[#E8CD00] flex items-center gap-1">
                <Users className="w-7 h-7" />
             </div>
             <h3 className="text-[24px] font-bold text-white mb-4 leading-tight">Community Engagement</h3>
             <p className="text-[#C6B6D6] text-[14px] leading-relaxed">
               Direct workshops with deaf leaders, educators, and technology pioneers.
             </p>
          </div>

          {/* Card 3: Prototyping */}
          <div className="md:col-span-4 bg-[#F7E6FE] rounded-2xl p-10 lg:p-12 flex flex-col items-center text-center shadow-[0_4px_20px_-5px_rgba(44,0,82,0.05)] justify-center border border-white/50 min-h-[320px]">
             <div className="mb-5 text-[#AC2283]">
                <Settings className="w-10 h-10" />
             </div>
             <h3 className="text-[22px] font-bold text-[#2C0052] mb-3">Prototyping</h3>
             <p className="text-[#594B6B] text-[14px] leading-relaxed max-w-[240px]">
               Iterative development of haptic and visual translation devices.
             </p>
          </div>

          {/* Card 4: Barrier Identification */}
          <div className="md:col-span-8 bg-[#F7E6FE] rounded-2xl p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between shadow-[0_4px_20px_-5px_rgba(44,0,82,0.05)] border border-white/50 min-h-[320px]">
             <div className="max-w-[340px] pr-8 mb-10 md:mb-0">
               <h3 className="text-[24px] font-bold text-[#2C0052] mb-4">Barrier Identification</h3>
               <p className="text-[#594B6B] text-[15px] leading-relaxed">
                 Mapping the specific social and economic friction points in the translational pipeline.
               </p>
             </div>
             <div className="border-[3px] border-[#AC2283] rounded-xl px-8 py-10 md:px-12 md:py-16 flex items-center justify-center shrink-0 w-full sm:w-auto bg-white/20">
               <span className="text-[#AC2283] font-bold text-[18px] tracking-wide whitespace-nowrap">Phase 01</span>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
