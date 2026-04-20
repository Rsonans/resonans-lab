import { motion } from "framer-motion";

export function StructuredInsightsSection() {
  return (
    <section className="py-24 bg-[#FCF8FB]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <h2 className="text-4xl lg:text-[44px] font-heading font-bold text-[#2C0052] mb-6 leading-[1.15] tracking-tight">
              Structured insights<br />that can be <span className="text-[#AE2585]">used</span>,<br />not just read.
            </h2>
            
            <p className="text-[#594B6B] text-[16px] leading-relaxed mb-12 max-w-lg font-body">
              We don't just summarize; we architect. Every output from Resonans Insights is formatted for immediate integration into decision pipelines, policy briefs, and innovation roadmaps.
            </p>
            
            <div className="flex flex-col gap-8">
              {/* Feature 01 */}
              <div className="flex items-start gap-5">
                <div className="bg-[#2C0052] text-white font-bold text-sm w-12 h-12 rounded-md flex items-center justify-center shrink-0">
                  01
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#2C0052] mb-1.5">Executive Fidelity</h3>
                  <p className="text-[#594B6B] text-[14px] leading-relaxed max-w-sm">
                    Core findings stripped of academic jargon while retaining scientific integrity.
                  </p>
                </div>
              </div>
              
              {/* Feature 02 */}
              <div className="flex items-start gap-5">
                <div className="bg-[#2C0052] text-white font-bold text-sm w-12 h-12 rounded-md flex items-center justify-center shrink-0">
                  02
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#2C0052] mb-1.5">Architectural Logic</h3>
                  <p className="text-[#594B6B] text-[14px] leading-relaxed max-w-sm">
                    Data visualized through a hierarchical pulse that guides the eye to the most critical outcomes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-[560px]"
          >
            {/* Background decorative blob/card */}
            <div className="absolute inset-0 bg-[#F6DEFA] rounded-2xl transform translate-x-4 md:translate-x-8 translate-y-4 md:translate-y-8 -z-10 overflow-hidden">
              {/* Fake grid lines */}
              <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(#f0bcf5 1px, transparent 1px), linear-gradient(90deg, #f0bcf5 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.3 }} />
            </div>

            {/* Main Mockup Card */}
            <div className="bg-white rounded-md shadow-[0_20px_50px_-12px_rgba(44,0,82,0.15)] overflow-hidden flex flex-col relative border border-gray-50">
              {/* Colored left border */}
              <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#9C0075]" />
              
              <div className="p-8 md:p-10 pl-10 md:pl-12">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#AE2585] text-[9px] font-bold tracking-[0.15em] uppercase">
                    Research Output #1042
                  </span>
                  <div className="flex gap-1 items-center opacity-40">
                    <div className="w-1 h-1 bg-[#2C0052] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#2C0052] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#2C0052] rounded-full"></div>
                  </div>
                </div>
                
                <h4 className="text-[22px] md:text-[26px] font-heading font-bold text-[#2C0052] leading-snug mb-5">
                  Translational Efficacy in Urban Logistics
                </h4>
                
                {/* Yellow Separator */}
                <div className="w-12 h-1 bg-[#FDE047] mb-6"></div>
                
                <p className="text-[#594B6B] text-[13px] leading-relaxed mb-8 pr-4">
                  Cross-sectional analysis of 14 metropolitan studies reveals a 22% increase in operational throughput when implementing Resonans architectural frameworks.
                </p>
                
                {/* Footer Metrics */}
                <div className="border-t border-gray-100 pt-5 grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-[8px] text-gray-400 font-bold tracking-wider mb-1 uppercase">Impact</div>
                    <div className="text-[14px] font-heading font-bold text-[#2C0052]">High</div>
                  </div>
                  <div>
                    <div className="text-[8px] text-gray-400 font-bold tracking-wider mb-1 uppercase">Confidence</div>
                    <div className="text-[14px] font-heading font-bold text-[#2C0052]">94%</div>
                  </div>
                  <div>
                    <div className="text-[8px] text-gray-400 font-bold tracking-wider mb-1 uppercase">Priority</div>
                    <div className="text-[14px] font-heading font-bold text-[#9C0075]">A1</div>
                  </div>
                </div>
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
