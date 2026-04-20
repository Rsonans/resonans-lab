import { motion } from "framer-motion";

export function RBSBridgingGapSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FCF8FB]">
      <div className="container max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 lg:col-span-4"
          >
            <h2 className="text-[28px] md:text-3xl font-heading font-bold text-[#2C0052] sticky top-32">
              Bridging the Gap
            </h2>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8 lg:col-span-8"
          >
            <p className="text-[17px] lg:text-[18px] text-[#4A3E59] leading-relaxed mb-16 max-w-[600px]">
              Resonating Beyond Sound (RBS) is a systematic approach to dismantling systemic barriers. We are not just building tools; we are creating a framework for{" "}
              <span className="text-[#AE2585] italic font-bold relative inline-block">
                social resonance.
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E8CD00]"></span>
              </span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="pr-4">
                <h4 className="text-[12px] font-bold text-[#2C0052] mb-3 uppercase tracking-wide">Education</h4>
                <p className="text-[12px] text-[#594B6B] leading-relaxed">
                  Redefining pedagogical frameworks for specialized learning environments.
                </p>
              </div>
              
              <div className="pr-4">
                <h4 className="text-[12px] font-bold text-[#2C0052] mb-3 uppercase tracking-wide">Communication</h4>
                <p className="text-[12px] text-[#594B6B] leading-relaxed">
                  Developing translation technologies that bridge visual and spoken languages.
                </p>
              </div>
              
              <div className="pr-4">
                <h4 className="text-[12px] font-bold text-[#2C0052] mb-3 uppercase tracking-wide">Inclusion</h4>
                <p className="text-[12px] text-[#594B6B] leading-relaxed">
                  Creating economic and social pathways for full participation in Nigerian society.
                </p>
              </div>
            </div>
            
          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
}
