import { motion } from "framer-motion";

export function RBSCTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F6DDFB] relative overflow-hidden">
      
      {/* Decorative L-Shapes matching the mockup visual watermark */}
      <div className="absolute right-[-15%] xl:right-[-5%] top-1/2 -translate-y-1/2 h-[800px] w-[800px] pointer-events-none z-0 hidden md:block">
        {/* Outer L */}
        <div className="absolute right-[20px] bottom-[20%] w-[500px] h-[500px] border-l-[60px] border-b-[60px] border-[#E8C4EE] rounded-bl-[80px]" />
        {/* Middle L */}
        <div className="absolute right-[20px] bottom-[20%] w-[350px] h-[350px] translate-x-[90px] -translate-y-[90px] border-l-[60px] border-b-[60px] border-[#E8C4EE] rounded-bl-[60px]" />
        {/* Inner L */}
        <div className="absolute right-[20px] bottom-[20%] w-[200px] h-[200px] translate-x-[180px] -translate-y-[180px] border-l-[60px] border-b-[60px] border-[#E8C4EE] rounded-bl-[40px]" />
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[700px]"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-bold text-[#2C0052] mb-8 tracking-tight">
            Get Involved
          </h2>
          
          <p className="text-[17px] md:text-[18px] text-[#594B6B] leading-relaxed mb-12 max-w-2xl font-body">
            The RBS mission is expansive. We need forward-thinkers, institutional partners, and community advocates to amplify the resonance.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 sm:gap-6">
            <button className="bg-[#2C0052] text-white font-bold text-[14px] px-8 py-4 rounded hover:bg-[#1C0033] transition-colors w-full sm:w-auto shadow-sm">
              Follow the Journey
            </button>
            <button className="bg-transparent border-[2px] border-[#2C0052] text-[#2C0052] font-bold text-[14px] px-8 py-4 rounded hover:bg-[#2C0052] hover:text-white transition-colors w-full sm:w-auto">
              Partner With Us
            </button>
            <button className="bg-[#FDE047] text-black font-bold text-[14px] px-8 py-4 rounded hover:bg-[#E8CD00] transition-colors w-full sm:w-auto shadow-sm">
              Join Future Cohorts
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
