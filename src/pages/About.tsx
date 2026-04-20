import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { 
  BrainCog, 
  Beaker,
  Compass,
  Hammer, 
  Rocket
} from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import { ApproachSection } from "@/components/about/ApproachSection";
import { CTASection } from "@/components/about/CTASection";

const About = () => {
  return (
    <PageLayout headerVariant="light">
      {/* Hero section with image */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#FCF8FB] overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <span className="text-[#9C0075] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase block mb-8">
                The Mission
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-[#2C0052] mb-8 leading-[1.05] tracking-tight">
                Too much valuable<br />research never<br />leaves papers.
              </h1>
              <div className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl font-body">
                <p>
                  We bridge the gap between abstract intellectual labor and real-world implementation. By applying architectural rigor to translational research, we ensure that every insight finds its pulse in society.
                </p>
              </div>
            </motion.div>
            
            {/* Right Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative mt-12 lg:mt-0"
            >
              <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto lg:ml-auto">
                {/* Offset abstract background shape */}
                <div className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 w-full h-full bg-[#EADDED] rounded-xl -z-10" />
                
                {/* Main Image */}
                <img 
                  src={aboutHero} 
                  alt="Resonans Mission" 
                  className="w-full h-full object-cover rounded-xl shadow-[0_20px_40px_-15px_rgba(44,0,82,0.3)]"
                />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* What Makes Us Different / Bento Box */}
      <section className="py-24 bg-[#FCF8FB]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl md:text-[40px] font-heading font-bold text-[#2C0052] mb-4">
              What makes us different
            </h2>
            <p className="text-lg text-[#594B6B] max-w-2xl font-body">
              We don’t treat research as the final output.
We treat it as the starting point.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Understanding the Problem */}
            <div className="lg:col-span-2 bg-[#FCF5FA] rounded-md p-8 lg:p-10 flex flex-col items-start shadow-sm">
              <div className="mb-6">
                <BrainCog className="w-8 h-8 text-[#9C0075]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C0052] mb-4">Understanding the Problem</h3>
              <p className="text-[#594B6B] flex-grow max-w-md leading-relaxed mb-12">
                We begin by deconstructing complex societal and industrial challenges, identifying the exact architectural flaws where research can provide a structural fix.
              </p>
              <div className="text-[10px] font-bold text-[#9C0075] uppercase tracking-wide mt-auto">
                PHASE 01: DIAGNOSIS
              </div>
            </div>

            {/* 2. Generating Evidence */}
            <div className="bg-[#FAE8FF] rounded-md p-8 lg:p-10 flex flex-col items-start shadow-sm">
              <div className="mb-6">
                <Beaker className="w-8 h-8 text-[#2C0052]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C0052] mb-4">Generating Evidence</h3>
              <p className="text-[#594B6B] text-[15px] leading-relaxed">
                Deep-dive technical investigation and empirical validation in the ResonansLab environment.
              </p>
            </div>

            {/* 3. 360° */}
            <div className="bg-[#27004D] rounded-md p-8 lg:p-10 flex flex-col items-center justify-center text-center shadow-sm">
              <h3 className="text-[40px] font-black text-white mb-2 tracking-tight">360°</h3>
              <p className="text-[#D3BDE3] text-[13px]">
                Translational Excellence
              </p>
            </div>

            {/* 4. Translating Insights */}
            <div className="bg-[#F8E8FF] rounded-md p-8 lg:p-10 flex flex-col items-start shadow-sm">
              <div className="mb-6">
                <Compass className="w-8 h-8 text-[#9C0075]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C0052] mb-4">Translating Insights</h3>
              <p className="text-[#594B6B] text-[15px] leading-relaxed">
                Converting dense academic datasets into actionable architectural blueprints and policy frameworks.
              </p>
            </div>

            {/* 5. Building Solutions */}
            <div className="lg:col-span-2 bg-[#AE2585] rounded-md p-8 lg:p-10 flex flex-col items-start relative overflow-hidden shadow-sm">
              <div className="relative z-10 w-full h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">Building Solutions</h3>
                <p className="text-white/90 text-lg max-w-md leading-relaxed">
                  Our engineering teams turn blueprints into software, hardware, and structural systems ready for the real world.
                </p>
              </div>
              {/* Watermark Icon */}
              <Hammer className="absolute -bottom-10 -right-4 w-48 h-48 text-[#931C6F] pointer-events-none transform -rotate-12" />
            </div>

            {/* 6. Testing & Distribution */}
            <div className="bg-[#FCF5FA] rounded-md p-8 lg:p-10 flex flex-col items-start shadow-sm relative">
              <h3 className="text-xl font-bold text-[#2C0052] mb-4">Testing & Distribution</h3>
              <p className="text-[#594B6B] text-[15px] leading-relaxed mb-6">
                Stress-testing solutions in live pilot environments before wide-scale global deployment.
              </p>
              <div className="mt-auto ml-auto">
                <Rocket className="w-6 h-6 text-[#7F8B17]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <ApproachSection />
      <CTASection />
    </PageLayout>
  );
};

export default About;
