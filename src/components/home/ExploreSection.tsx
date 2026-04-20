import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function ExploreSection() {
  const cards = [
    {
      category: "Portfolio",
      title: "Our Work",
      description: "Case studies of successful transitions from lab to market.",
      linkText: "Explore Cases",
      linkTo: "/work",
      isDark: false,
    },
    {
      category: "R&D Hub",
      title: "ResonansLab",
      description: "Where our most experimental theories are stress-tested for reality.",
      linkText: "Go To Lab",
      linkTo: "/lab",
      isDark: false,
    },
    {
      category: "Intelligence",
      title: "Insights Platform",
      description: "Real-time translational analytics and predictive forecasting.",
      linkText: "Access Portal",
      linkTo: "/insights",
      isDark: false,
    },
    {
      category: "Careers",
      title: "Join Us",
      description: "We are looking for translators, scientists, and architects of change.",
      linkText: "Open Roles",
      linkTo: "/careers",
      isDark: true,
    },
  ];

  return (
    <section className="py-24 bg-[#FCF5FC]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg p-10 flex flex-col h-full shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 duration-300 ${
                card.isDark ? "bg-[#2C0052]" : "bg-white"
              }`}
            >
              <span
                className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-6 block ${
                  card.isDark ? "text-[#9C0075]" : "text-gray-400"
                }`}
              >
                {card.category}
              </span>
              
              <h3
                className={`text-3xl font-bold mb-6 ${
                  card.isDark ? "text-white" : "text-[#2C0052]"
                }`}
              >
                {card.title}
              </h3>
              
              <p
                className={`flex-grow mb-16 text-[15px] leading-relaxed ${
                  card.isDark ? "text-[#D3BDE3]" : "text-gray-600"
                }`}
              >
                {card.description}
              </p>
              
              <Link
                to={card.linkTo}
                className={`text-[11px] font-bold tracking-[0.15em] uppercase flex items-center gap-1.5 group w-fit mt-auto ${
                  card.isDark ? "text-[#E8CD00]" : "text-[#9C0075]"
                }`}
              >
                {card.linkText}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
