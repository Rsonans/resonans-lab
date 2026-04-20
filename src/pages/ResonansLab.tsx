import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { ArrowRight } from "lucide-react";
import labImage from "@/assets/about-hero.jpg";
import { LabProcessSection } from "@/components/lab/LabProcessSection";
import { SupportPillarsSection } from "@/components/lab/SupportPillarsSection";
import { LabHowItWorksSection } from "@/components/lab/LabHowItWorksSection";
import { LabCTASection } from "@/components/lab/LabCTASection";

const ResonansLab = () => {
  return (
    <PageLayout headerVariant="light">
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#FCF8FB] overflow-hidden min-h-[90vh] flex items-center">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12 items-center">
            
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <span className="bg-[#FF66CC] text-[#2C0052] text-[10px] font-bold tracking-[0.1em] uppercase py-1.5 px-4 rounded-full mb-8">
                INNOVATION ENGINE
              </span>
              
              <h1 className="text-5xl md:text-[56px] lg:text-[64px] font-heading font-bold text-[#2C0052] mb-8 leading-[1.1] tracking-tight">
                Where research<br />becomes real-world<br />solutions
              </h1>
              
              <p className="text-[17px] text-[#594B6B] leading-relaxed max-w-[480px] mb-10 font-body">
                ResonansLab is the metabolic heart of our ecosystem. It is the architectural engine where researchers transcend the laboratory to learn the art of building, translating complex theories into high-impact ventures.
              </p>
              
              <button className="bg-[#2C0052] text-white font-bold text-sm px-6 py-3.5 rounded hover:bg-[#1C0033] transition-colors flex items-center gap-2">
                Explore ResonansLab
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </motion.div>
            
            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full aspect-[4/5] max-w-[500px] mx-auto lg:ml-auto mt-12 lg:mt-0"
            >
              <img 
                src={labImage} 
                alt="Resonans Lab Dashboard Environment" 
                className="w-full h-full object-cover rounded-md shadow-2xl"
                style={{ filter: "sepia(1) hue-rotate(250deg) saturate(1.5) brightness(0.4) contrast(1.1)" }}
              />
              
              {/* Floating Yellow Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-8 -left-8 lg:-bottom-6 lg:-left-12 bg-[#FDE047] p-8 lg:p-8 rounded-sm shadow-xl max-w-[220px]"
              >
                <div className="text-[40px] font-bold text-black mb-1 font-heading leading-tight">
                  94%
                </div>
                <div className="text-[11px] font-bold text-black leading-snug">
                  Translational Success Rate for ResonansLab Graduates
                </div>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </section>
      
      <LabProcessSection />
      <SupportPillarsSection />
      <LabHowItWorksSection />
      <LabCTASection />
    </PageLayout>
  );
};

export default ResonansLab;