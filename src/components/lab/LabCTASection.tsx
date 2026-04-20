import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function LabCTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F6E1F9] text-center">
      <div className="container max-w-3xl mx-auto px-6 flex flex-col items-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-[46px] font-heading font-bold text-[#2C0052] mb-6 leading-[1.2] tracking-tight"
        >
          Ready to translate your<br />research?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#65557A] text-lg lg:text-[19px] leading-relaxed max-w-[600px] mb-12"
        >
          Join the next cohort of ResonansLab and bridge the gap between discovery and impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <Link
            to="/lab"
            className="bg-[#2C0052] text-white font-bold py-4 px-8 rounded flex items-center justify-center hover:bg-[#1C0033] transition-colors shadow-sm w-full sm:w-auto min-w-[260px]"
          >
            Explore ResonansLab
          </Link>
          <Link
            to="#"
            className="bg-transparent border border-[#2C0052] text-[#2C0052] font-bold py-4 px-8 rounded flex items-center justify-center hover:bg-[#2C0052]/5 transition-colors shadow-sm w-full sm:w-auto min-w-[260px]"
          >
            Download Prospectus
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
