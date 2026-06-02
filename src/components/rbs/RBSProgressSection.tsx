import { motion } from "framer-motion";
import { ArrowRight, Globe, Cpu, Shield } from "lucide-react";

export function RBSProgressSection() {
  const teams = [
    {
      name: "WORKPLACE & ECONOMIC INCLUSION",
      focus: "Research on pre-employment exclusion, policy-to-practice gaps, and systemic failures in security and justice access.",
      icon: Globe,
      color: "from-blue-500 to-cyan-400",
      bgLight: "bg-blue-500/10",
      borderLight: "border-blue-500/20"
    },
    {
      name: "EDUCATION & LEARNING INCLUSION",
      focus: "Research on NSL in schools, teacher training gaps, academic outcomes, leadership exclusion, and digital access.",
      icon: Cpu,
      color: "from-[#FDE047] to-[#F59E0B]",
      bgLight: "bg-[#FDE047]/10",
      borderLight: "border-[#FDE047]/20"
    },
    {
      name: "COMMUNICATION & SOCIAL INCLUSION",
      focus: "Research on lived experience of exclusion, coping strategies, healthcare barriers, family breakdown, assistive tech gaps, and mental health impacts.",
      icon: Shield,
      color: "from-emerald-400 to-teal-500",
      bgLight: "bg-emerald-500/10",
      borderLight: "border-emerald-500/20"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#12002B] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#AE2585] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#2563EB] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FDE047] text-[11px] font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#FDE047] animate-pulse"></span>
              The Fellowship
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[36px] md:text-[46px] lg:text-[52px] font-heading font-bold text-white mb-6 leading-[1.1]"
            >
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] to-[#F59E0B]">Pioneers</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#A28FBB] text-[16px] md:text-[18px] leading-relaxed font-body"
            >
              Three specialized teams driving the next generation of translational AI, haptic hardware, and cultural integration.
            </motion.p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {teams.map((team, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative rounded-3xl ${team.bgLight} border ${team.borderLight} p-8 lg:p-10 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden isolate flex flex-col justify-between min-h-[420px] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] hover:-translate-y-2 backdrop-blur-sm`}
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
              
              <div>
                <div className="mb-10 relative inline-block">
                  <div className={`absolute inset-0 bg-gradient-to-br ${team.color} blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500`}></div>
                  <div className={`relative w-16 h-16 rounded-2xl bg-[#1A0538] border border-white/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                    <team.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                <h3 className="text-[24px] lg:text-[26px] font-bold text-white mb-5 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all leading-tight">
                  {team.name}
                </h3>
                
                <p className="text-[#A28FBB] text-[15px] leading-[1.8] group-hover:text-[#D4C5ED] transition-colors duration-300">
                  {team.focus}
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                <button className="flex items-center gap-4 text-white font-bold text-[12px] tracking-widest uppercase transition-all duration-300 group-hover:text-[#FDE047] group-hover:tracking-[0.2em]">
                  See More 
                  <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FDE047]/20 transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
