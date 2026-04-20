import { motion } from "framer-motion";

export function LabHowItWorksSection() {
  const phases = [
    {
      num: "01",
      title: "Apply",
      description: "Submit your research project for evaluation by our translational board."
    },
    {
      num: "02",
      title: "Learn and Build",
      description: "Enter the intensive 6-month product development cycle with our mentors."
    },
    {
      num: "03",
      title: "Translate Research",
      description: "Map your technical findings to validated clinical or commercial pathways."
    },
    {
      num: "04",
      title: "Lead",
      description: "Spin out as a lead architect of a new Resonans-backed entity."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#1C003D]">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Header content */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-white mb-4">
            How the Lab Works
          </h2>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              {/* Giant Faded Number */}
              <div className="text-[80px] lg:text-[100px] font-black leading-none mb-6 text-[#3A1061]">
                {phase.num}
              </div>
              
              <h3 className="text-xl font-bold text-[#E8CD00] mb-4">
                {phase.title}
              </h3>
              
              <p className="text-[#BCA8D1] text-[15px] leading-relaxed max-w-xs">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
