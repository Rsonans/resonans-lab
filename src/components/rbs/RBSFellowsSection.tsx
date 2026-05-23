import { motion } from "framer-motion";
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";

import img1 from "@/assets/rbs-fellows/41.png";
import img2 from "@/assets/rbs-fellows/41 (2).png";
import img3 from "@/assets/rbs-fellows/42 (1).png";
import img4 from "@/assets/rbs-fellows/44.png";
import img5 from "@/assets/rbs-fellows/44 (1).png";
import img6 from "@/assets/rbs-fellows/44 (2).png";
import img7 from "@/assets/rbs-fellows/47 (1).png";
import img8 from "@/assets/rbs-fellows/47 (2).png";
import img9 from "@/assets/rbs-fellows/47 (3).png";

export function RBSFellowsSection() {
  const fellows = [
    {
      name: "Fatimah Usman",
      team: "WORKPLACE & ECONOMIC INCLUSION",
      bio: "Systems thinker who identified the pre-employment exclusion problem—barriers happen before hiring.",
      image: img5,
    },
    {
      name: "Goodluck Chisom Ukpaka",
      team: "WORKPLACE & ECONOMIC INCLUSION",
      bio: "Policy analyst focused on the gap between what inclusion promises and what workplaces actually deliver.",
      image: img8,
    },
    {
      name: "Iyanu Olaosebikan",
      team: "WORKPLACE & ECONOMIC INCLUSION",
      bio: "Identified how security and justice systems actively endanger deaf individuals.",
      image: img4,
    },
    {
      name: "Zulkifil Aminu",
      team: "Education & Learning Inclusion",
      bio: "Identified NSL as the foundation of deaf education that is being systematically ignored.",
      image: img1,
    },
    {
      name: "Bello Abubakar",
      team: "Education & Learning Inclusion",
      bio: "Identified digital learning barriers that compound exclusion for vulnerable students.",
      image: img3,
    },
    {
      name: "Chisom Irene",
      team: "Education & Learning Inclusion",
      bio: "Identified structural exclusion from education and leadership pathways.",
      image: img2,
    },
    {
      name: "Tolulope Azeez",
      team: "Communication & Social Inclusion",
      bio: "Identified how overlapping barriers (financial, health, systemic) compound to prevent people from reaching their potential.",
      image: img6,
    },
    {
      name: "Damilola Lugard",
      team: "Communication & Social Inclusion",
      bio: "Identified how distance, cost, and weak infrastructure create overlapping barriers to care.",
      image: img7,
    },
    {
      name: "Zulaihatu Sani",
      team: "Communication & Social Inclusion",
      bio: "Documented the daily texture of communication exclusion, isolation, and discrimination.",
      image: img9,
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0B001A] relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-fuchsia-600/20 to-pink-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-pink-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            Our Minds
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[36px] md:text-[48px] lg:text-[56px] font-heading font-bold text-white mb-6 leading-[1.1]"
          >
            The Fellowship <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Cohorts</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#A28FBB] text-[16px] md:text-[18px] leading-relaxed font-body"
          >
            Meet the brilliant researchers, engineers, and visionaries dedicating their expertise to revolutionizing deaf communication technology.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mt-16">
          {fellows.map((fellow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Image Container */}
              <div className="relative w-56 h-56 lg:w-64 lg:h-64 mb-8">
                {/* Glow effect behind the shaped image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-75 group-hover:scale-110"></div>
                
                <img 
                  src={fellow.image} 
                  alt={fellow.name} 
                  className="w-full h-full object-contain drop-shadow-2xl grayscale-[0.2] group-hover:grayscale-0 group-hover:-translate-y-3 transition-all duration-500 ease-out relative z-10"
                />
              </div>

              {/* Content Layer */}
              <div className="flex flex-col items-center">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-pink-400 text-[10px] font-bold uppercase tracking-widest mb-4 transition-colors group-hover:bg-white/10 group-hover:border-pink-500/30">
                  {fellow.team}
                </span>

                <h3 className="text-[22px] lg:text-[26px] font-bold text-white mb-3 font-heading leading-tight group-hover:text-pink-300 transition-colors duration-300">
                  {fellow.name}
                </h3>
                
                <p className="text-[#A28FBB] text-[15px] leading-relaxed max-w-sm mb-6">
                  {fellow.bio}
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <button className="w-10 h-10 rounded-full bg-[#1A0B2E] border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center text-white transition-all group-hover:-translate-y-1">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#1A0B2E] border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center text-white transition-all group-hover:-translate-y-1 delay-75">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-2 text-[11px] font-bold text-white uppercase tracking-widest hover:text-pink-400 transition-colors ml-2 group-hover:-translate-y-1 delay-150">
                    Profile <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
