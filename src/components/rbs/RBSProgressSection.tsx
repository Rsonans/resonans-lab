import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import news1 from "@/assets/about-hero.jpg";

export function RBSProgressSection() {
  const reports = [
    {
      category: "MILESTONE / 12 OCT 2024",
      title: "Translation Engine Beta V1.2 Released",
      description: "Our linguistic team has successfully mapped 450 unique regional sign variations across Southern Nigeria.",
      linkText: "READ FULL REPORT",
      image: news1,
    },
    {
      category: "ARTICLE / 05 OCT 2024",
      title: "The Ethics of Translational AI",
      description: "Exploring the delicate balance of cultural sensitivity and machine learning speed in deafness solutions.",
      linkText: "READ ARTICLE",
      image: news1,
    },
    {
      category: "PROTOTYPE / 28 SEP 2024",
      title: "Haptic Glove Concept V0.9",
      description: "Initial hardware tests for non-verbal sensory feedback have surpassed efficiency benchmarks by 12%.",
      linkText: "VIEW PROTOTYPE",
      image: news1,
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#200247]">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 gap-6">
          <div>
            <h2 className="text-[32px] md:text-[38px] font-heading font-bold text-white mb-4 leading-tight">
              Program Progress
            </h2>
            <p className="text-[#A28FBB] text-[13px] md:text-[14px] max-w-md leading-relaxed font-body">
              Real-time updates from the field, laboratories, and design studios.
            </p>
          </div>
          <a href="#" className="font-heading text-[#FDE047] font-bold text-[12px] tracking-wide border-b-[2px] border-[#FDE047] pb-1 hover:text-white hover:border-white transition-colors whitespace-nowrap">
            View All Reports
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reports.map((report, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#290554] border border-[#3E116A] rounded-xl overflow-hidden flex flex-col shadow-xl min-h-[440px]"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={report.image} 
                  alt={report.title} 
                  className="w-full h-full object-cover opacity-80 mix-blend-screen"
                  style={{ filter: "sepia(0.2) hue-rotate(280deg) saturate(1.8) contrast(1.2)" }} 
                />
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="text-[9px] font-bold text-[#FDE047] tracking-widest uppercase mb-4">
                  {report.category}
                </div>
                
                <h3 className="text-[18px] lg:text-[20px] font-bold text-white mb-4 leading-[1.3]">
                  {report.title}
                </h3>
                
                <p className="text-[#A28FBB] text-[13px] leading-relaxed mb-10">
                  {report.description}
                </p>
                
                <a href="#" className="mt-auto text-[#FDE047] font-bold text-[10px] tracking-widest uppercase flex items-center gap-2 hover:text-white transition-colors group">
                  {report.linkText} <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
