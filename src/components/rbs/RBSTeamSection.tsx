import { motion } from "framer-motion";

export function RBSTeamSection() {
  const teamColumns = [
    {
      role: "Engineers",
      members: [
        { name: "Adebayo Okafor", title: "LEAD SYSTEMS ARCHITECT" },
        { name: "Sarah Chen", title: "HAPTICS SPECIALIST" }
      ]
    },
    {
      role: "Researchers",
      members: [
        { name: "Dr. Ifeoma Balogun", title: "SOCIOLOGY LEAD" },
        { name: "Marcus Thorne", title: "ETHICAL AI ANALYST" }
      ]
    },
    {
      role: "Storytelling",
      members: [
        { name: "Zainab Sadiq", title: "CULTURAL ARCHIVIST" }
      ]
    },
    {
      role: "Advisors",
      members: [
        { name: "Hon. Emmanuel Nwosu", title: "PUBLIC POLICY" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#FCF8FB]">
      <div className="container max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-[32px] md:text-[36px] font-heading font-bold text-[#2C0052]">
            The Pulse Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {teamColumns.map((col, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-[20px] font-bold text-[#AE2585] mb-8 border-l-[3px] border-[#AE2585] pl-4 leading-tight">
                {col.role}
              </h3>
              
              <div className="space-y-8">
                {col.members.map((member, mIdx) => (
                  <div key={mIdx}>
                    <div className="font-bold text-[#2C0052] text-[15px] mb-1">
                      {member.name}
                    </div>
                    <div className="text-[#897C9B] text-[10px] tracking-wider uppercase font-bold">
                      {member.title}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
