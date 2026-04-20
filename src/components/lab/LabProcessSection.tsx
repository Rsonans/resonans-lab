import { motion } from "framer-motion";
import { 
  Rocket, 
  Microscope, 
  LineChart, 
  Cpu 
} from "lucide-react";

export function LabProcessSection() {
  const steps = [
    {
      icon: Rocket,
      title: "Onboarding",
      description: "Transition from academic researcher to venture architect through our immersive technical bootcamp."
    },
    {
      icon: Microscope,
      title: "Real-world Research",
      description: "Validate your findings against real-world market constraints and end-user requirements."
    },
    {
      icon: LineChart,
      title: "Translation",
      description: 'The "bridge" phase where technical breakthroughs are mapped to specific commercial outcomes.'
    },
    {
      icon: Cpu,
      title: "Building Products",
      description: "Rapid prototyping and scaling of functional solutions ready for clinical or industrial application."
    }
  ];

  return (
    <section className="py-24 bg-[#FAE6FF]">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Header content */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2C0052] mb-4">
            What Happens Inside the Lab
          </h2>
          <p className="text-lg text-[#594B6B] max-w-2xl font-body">
            The lab provides a structured path for academic rigor to meet market viability through four distinct transformation phases.
          </p>
        </div>

        {/* 4 Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FFFAFD] rounded-md p-8 shadow-[0_4px_20px_-5px_rgba(44,0,82,0.1)] hover:shadow-[0_8px_30px_-5px_rgba(44,0,82,0.15)] transition-shadow flex flex-col items-start"
            >
              <div className="bg-[#FAE6FF] p-3 rounded mb-8">
                <step.icon className="w-5 h-5 text-[#2C0052]" />
              </div>
              
              <h3 className="text-lg font-bold text-[#2C0052] mb-4">
                {step.title}
              </h3>
              
              <p className="text-[#594B6B] text-[15px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
