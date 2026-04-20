import { motion } from "framer-motion";
import {
  Package,
  Settings,
  Banknote,
  Megaphone,
  CircleDollarSign
} from "lucide-react";
import dashboardImage from "@/assets/about-hero.jpg"; // Placeholder for the dashboard image

export function SupportPillarsSection() {
  return (
    <section className="py-24 bg-[#FCF8FB]">
      <div className="container max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-[40px] font-heading font-bold text-[#2C0052] mb-4">
            Core Support Pillars
          </h2>
        </div>

        <div className="flex flex-col gap-6">

          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* 1. Product */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#2C0052] rounded-md p-8 flex flex-col items-start shadow-sm min-h-[260px]"
            >
              <div className="mb-auto border border-[#4D316E] p-2.5 rounded-md flex items-center justify-center">
                <Package className="w-5 h-5 text-[#D3BDE3]" />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-white mb-3">Product</h3>
                <p className="text-[#C78ED4] text-[14px] leading-relaxed">
                  Technical roadmap development, UI/UX architecture, and manufacturing strategy.
                </p>
              </div>
            </motion.div>

            {/* 2. Operations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#FAE7FF] rounded-md p-8 flex flex-col items-start shadow-sm min-h-[260px]"
            >
              <div className="mb-auto bg-[#EEDBFC] p-2.5 rounded-md flex items-center justify-center">
                <Settings className="w-5 h-5 text-[#2C0052]" />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-[#2C0052] mb-3">Operations</h3>
                <p className="text-[#594B6B] text-[14px] leading-relaxed">
                  Logistics, infrastructure scaling, and regulatory compliance frameworks.
                </p>
              </div>
            </motion.div>

            {/* 3. Finance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#FBE42E] rounded-md p-8 flex flex-col items-start shadow-sm relative overflow-hidden min-h-[260px]"
            >
              <div className="relative z-10 w-full h-full flex flex-col">
                <div className="mb-auto bg-[#E5D021] p-2.5 rounded-md flex items-center justify-center self-start">
                  <Banknote className="w-5 h-5 text-[#2C0052]" />
                </div>
                <div>
                  <h3 className="text-[22px] font-bold text-[#2C0052] mb-3">Finance</h3>
                  <p className="text-[#4A3E59] text-[14px] leading-relaxed pr-6">
                    Venture capital readiness, capitalization tables, and grant management.
                  </p>
                </div>
              </div>
              {/* Abstract faded watermark */}
              <CircleDollarSign className="absolute top-6 -right-6 w-32 h-32 text-[#E2CD1C] pointer-events-none opacity-60" />
            </motion.div>

          </div>

          {/* Bottom Row: Marketing & Sales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#FFFAFD] rounded-md p-8 lg:p-12 shadow-[0_4px_20px_-5px_rgba(44,0,82,0.06)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* Content */}
              <div className="flex flex-col items-start pr-0 lg:pr-8">
                <div className="mb-8 bg-[#FAE6FF] p-3 rounded-md inline-flex items-center justify-center">
                  <Megaphone className="w-5 h-5 text-[#9C0075]" />
                </div>
                <h3 className="text-3xl font-bold text-[#2C0052] mb-4">Marketing & Sales</h3>
                <p className="text-[#594B6B] text-[16px] leading-relaxed">
                  Developing the narrative for translational research. We help you build the commercial engine that drives adoption of your scientific breakthroughs.
                </p>
              </div>

              {/* Dashboard Image */}
              <div className="w-full h-48 md:h-64 rounded-md overflow-hidden bg-[#181124] shadow-inner relative">
                {/* Fallback styling for dashboard to look like chart UI if image isn't exact */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#181124] to-[#251838] mix-blend-overlay z-10" />
                <img
                  src={dashboardImage}
                  alt="Dashboard view"
                  className="w-full h-full object-cover opacity-80 mix-blend-lighten"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5) contrast(1.2)" }}
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
