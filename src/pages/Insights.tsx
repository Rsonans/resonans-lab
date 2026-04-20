import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import insightsBg from "@/assets/about-hero.jpg"; // Placeholder image
import { TranslationModesSection } from "@/components/insights/TranslationModesSection";
import { StructuredInsightsSection } from "@/components/insights/StructuredInsightsSection";
import { InsightsCTASection } from "@/components/insights/InsightsCTASection";

const Insights = () => {
  return (
    <PageLayout headerVariant="light">
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#FCF8FB] overflow-hidden min-h-[90vh] flex items-center">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <span className="bg-[#F3DEEF] text-[#2C0052] font-heading text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase py-2 px-4 rounded-full mb-8 shadow-sm">
                COMING SOON
              </span>
              
              <h1 className="text-4xl md:text-[48px] lg:text-[56px] font-heading font-bold text-[#2C0052] mb-8 leading-[1.1] tracking-tight">
                Research translated into <span className="text-[#AE2585]">decision-ready</span> insights.
              </h1>
              
              <p className="text-[17px] lg:text-[18px] text-[#594B6B] leading-relaxed max-w-[500px] mb-12 font-body">
                A platform designed to turn complex research into clear, actionable outputs. We bridge the gap between heavy academic data and real-world strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full lg:w-auto">
                <button className="bg-[#2C0052] text-white font-bold text-[15px] px-8 py-4 rounded-md hover:bg-[#1C0033] transition-colors w-full sm:w-auto shadow-md">
                  Join the Waitlist
                </button>
                <Link
                  to="/about"
                  className="text-[#2C0052] font-bold text-[15px] px-1 py-3 border-b-[3px] border-[#E8CD00] hover:text-[#000] transition-colors w-full sm:w-auto text-center"
                >
                  Learn more about our methodology
                </Link>
              </div>
            </motion.div>
            
            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full aspect-square max-w-[540px] mx-auto lg:ml-auto mt-12 lg:mt-0"
            >
              {/* Abstract Purple Visual Placeholder */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(44,0,82,0.4)] relative bg-[#1B053A]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B053A] to-[#4A0B4A] opacity-80 mix-blend-multiply z-10" />
                <img 
                  src={insightsBg} 
                  alt="Abstract Data Visualization" 
                  className="w-full h-full object-cover opacity-50 mix-blend-screen"
                  style={{ filter: "hue-rotate(290deg) saturate(2.5) contrast(1.5)" }}
                />
                {/* Thin faint inner rectangle as seen in the mockup */}
                <div className="absolute inset-[15%] lg:inset-[20%] border border-white/5 rounded-2xl z-20 pointer-events-none" />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
      <TranslationModesSection />
      <StructuredInsightsSection />
      <InsightsCTASection />
    </PageLayout>
  );
};

export default Insights;