import { motion } from "framer-motion";

export function InsightsCTASection() {
  return (
    <section className="py-24 bg-[#FCF8FB]">
      <div className="container max-w-[1100px] mx-auto px-6">
        
        {/* Deep Purple Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#1C003D] rounded-3xl overflow-hidden px-8 py-20 lg:py-24 flex flex-col items-center justify-center text-center shadow-xl border border-black/10"
        >
          {/* Subtle atmospheric glow effect on the left */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] -left-[10%] w-[60%] h-[120%] bg-[#5C167A] rounded-full blur-[140px] opacity-40 mix-blend-screen" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-heading font-bold text-[#FDE047] mb-6 tracking-tight leading-tight">
              Secure your early access.
            </h2>
            
            <p className="text-[#D3BDE3] text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-[560px] mx-auto text-center font-body">
              Be the first to know when the platform goes live. Join a community of researchers and decision-makers bridging the translational gap.
            </p>
            
            {/* Opt-in Form */}
            <form 
              className="flex flex-col sm:flex-row items-stretch justify-center gap-4 w-full max-w-[500px] mx-auto" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input 
                type="email" 
                placeholder="Email address"
                required
                className="flex-1 bg-[#2C0854]/40 border border-[#7A6A95]/50 text-white placeholder:text-[#A08CBF] px-6 py-4 rounded-sm outline-none focus:border-[#FDE047] transition-colors"
              />
              <button 
                type="submit"
                className="bg-[#FDE047] text-[#1C003D] hover:text-black font-bold text-[14px] px-8 py-3.5 rounded-sm hover:bg-[#E8CD00] transition-colors flex flex-col items-center justify-center shrink-0 w-full sm:w-[150px] leading-tight shadow-md shadow-[#FDE047]/10"
              >
                <span>Join the</span>
                <span>Waitlist</span>
              </button>
            </form>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
