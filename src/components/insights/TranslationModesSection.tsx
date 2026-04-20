import { motion } from "framer-motion";
import { Brain, Cpu, CheckCircle2 } from "lucide-react";

export function TranslationModesSection() {
  return (
    <section className="py-24 bg-[#FAE6FF]">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-12 mb-16">
          <h2 className="text-3xl md:text-[36px] font-heading font-bold text-[#2C0052] leading-tight max-w-xl">
            Two modes of translation, one standard of precision.
          </h2>
          <p className="text-[#594B6B] text-[15px] leading-relaxed max-w-md">
            Whether through human expertise or machine learning, our focus remains on structural integrity and utility.
          </p>
        </div>

        {/* Dual Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFFAFD] rounded-xl shadow-lg border border-black/5 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/5">
            
            {/* Left Box: Researcher-Led */}
            <div className="p-10 lg:p-14 flex flex-col items-start bg-white">
              <div className="flex items-center gap-4 mb-6">
                <Brain className="w-8 h-8 text-[#8C861B]" />
                <h3 className="text-[22px] font-bold text-[#2C0052]">Researcher-Led Synthesis</h3>
              </div>
              
              <p className="text-[#594B6B] text-[15px] leading-relaxed mb-10">
                Bespoke interpretation by domain specialists who identify nuance, ethical implications, and contextual relevance that algorithms might overlook.
              </p>
              
              <ul className="space-y-4 w-full">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#9C0075] shrink-0 mt-0.5" />
                  <span className="text-[#2C0052] font-bold text-[14px]">Nuanced Context Extraction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#9C0075] shrink-0 mt-0.5" />
                  <span className="text-[#2C0052] font-bold text-[14px]">Strategic Impact Assessment</span>
                </li>
              </ul>
            </div>

            {/* Right Box: AI-Powered */}
            <div className="p-10 lg:p-14 flex flex-col items-start bg-white">
              <div className="flex items-center gap-4 mb-6">
                <Cpu className="w-8 h-8 text-[#9C0075]" />
                <h3 className="text-[22px] font-bold text-[#2C0052]">AI-Powered Extraction</h3>
              </div>
              
              <p className="text-[#594B6B] text-[15px] leading-relaxed mb-10">
                Rapid processing of vast datasets and literature to map connections and surface high-frequency insights with mathematical objectivity.
              </p>
              
              <ul className="space-y-4 w-full">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#9C0075] shrink-0 mt-0.5" />
                  <span className="text-[#2C0052] font-bold text-[14px]">Rapid Multi-source Synthesis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#9C0075] shrink-0 mt-0.5" />
                  <span className="text-[#2C0052] font-bold text-[14px]">Structural Pattern Recognition</span>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
