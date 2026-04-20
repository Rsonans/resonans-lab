import { motion } from "framer-motion";
import abstractChart from "@/assets/partnerships-network.jpg"; // Using a placeholder asset

export function ApproachSection() {
  const leftItems = [
    {
      num: "01.",
      title: "Research First. Always.",
      text: "We do not build on assumptions. Every project at Resonans begins with a rigorous literature review and original research, ensuring our foundations are intellectually sound before the first brick is laid.",
    },
    {
      num: "02.",
      title: "Translation is the focus",
      text: "Knowledge without application is wasted potential. Our primary metric of success is how effectively an academic insight translates into a measurable improvement in human outcomes.",
    },
  ];

  const rightItems = [
    {
      num: "03.",
      title: "Build what matters",
      text: "We reject \"innovation for innovation's sake.\" We prioritize projects that solve structural deficits in healthcare, infrastructure, and sustainable energy—areas where translation has the highest impact.",
    },
    {
      num: "04.",
      title: "Scale what works",
      text: "Once a solution is validated, we architecturalize the scaling process. Our systems are designed to expand fluidly from local pilots to international standards without losing their precision.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#1C053A] text-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <div className="mb-16 pl-6 border-l-4 border-[#E8CD00]">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-bold leading-tight">
                The Resonans<br />Approach
              </h2>
            </div>
            
            <div className="space-y-16">
              {leftItems.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-4 flex gap-3">
                    <span className="text-[#E8CD00]">{item.num}</span>
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-[#BCA8D1] text-lg leading-relaxed pl-[44px]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 rounded-xl overflow-hidden shadow-2xl h-64 md:h-80 w-full"
            >
              {/* Fallback to something like a cyan gradient if image isn't perfect, but img works */}
              <div className="w-full h-full relative bg-[#130E26]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#143d4d] to-[#121c2d] opacity-50 z-10 mix-blend-overlay"></div>
                <img 
                  src={abstractChart} 
                  alt="Chart visualization" 
                  className="w-full h-full object-cover opacity-60"
                  style={{ filter: "hue-rotate(180deg) brightness(0.8)" }} // Make it bluish
                />
              </div>
            </motion.div>

            <div className="space-y-16 mt-auto">
              {rightItems.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4 flex gap-3">
                    <span className="text-[#E8CD00]">{item.num}</span>
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-[#BCA8D1] text-lg leading-relaxed pl-[44px]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
