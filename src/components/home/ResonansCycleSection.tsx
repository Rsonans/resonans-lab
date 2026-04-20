import { motion } from "framer-motion";
import { Beaker, Lightbulb, SlidersHorizontal, Box, Sparkles } from "lucide-react";
import heroAbstract from "@/assets/hero-abstract.jpg"; // Using an existing abstract image

export function ResonansCycleSection() {
  const steps = [
    {
      title: "Research",
      description: "Deep academic interrogation",
      icon: Beaker,
      borderColor: "border-[#E8CD00]", // Yellow
    },
    {
      title: "Insight",
      description: "Pattern recognition & logic",
      icon: Lightbulb,
      borderColor: "border-[#9C0075]", // Magenta
    },
    {
      title: "Translation",
      description: "Architectural engineering",
      icon: SlidersHorizontal,
      borderColor: "border-[#E8CD00]", // Yellow
    },
    {
      title: "Solution",
      description: "Functional deployment",
      icon: Box,
      borderColor: "border-[#9C0075]", // Magenta
    },
    {
      title: "Impact",
      description: "Life-changing outcomes",
      icon: Sparkles,
      borderColor: "border-[#E8CD00]", // Yellow
    },
  ];

  return (
    <section className="py-24 bg-[#14002B]">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            The Resonans Cycle
          </h2>
          <p className="text-[#D3BDE3] text-lg max-w-2xl mx-auto">
            Our proprietary methodology for continuous translation and improvement.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-24 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div 
                className={`w-24 h-24 rounded-2xl flex items-center justify-center border-2 ${step.borderColor} mb-6 bg-[#1A0033] shadow-lg transition-transform hover:-translate-y-1 duration-300`}
              >
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{step.title}</h4>
              <p className="text-[#987DAA] text-sm leading-tight max-w-[140px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Card */}
        <div className="bg-[#260B44] border border-[#3A1461] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#E8CD00] mb-6 leading-snug">
              Research-Driven, Impact-Measured.
            </h3>
            <p className="text-[#D3BDE3] text-lg leading-relaxed">
              Our cycle isn't just linear; it's a resonant loop. Every impact measured feeds back into the research phase, refining our models for the next generation of solutions.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            {/* The image is contained inside a dark placeholder just in case */}
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-black/50 shadow-2xl">
              <img 
                src={heroAbstract} 
                alt="Abstract Lightbulb Loop" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
