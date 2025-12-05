import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Users, Briefcase } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "HackVyuha 2025 Participant",
    description: "National-level hackathon at BLDE's P G Halakatti College of Engineering, Bijapur",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "UI/UX Design Workshop",
    description: "Completed Figma workshop organized by Department of ISE, SDMIT",
    color: "from-primary to-primary-glow",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Creative Collaboration",
    description: "Enthusiastic about peer learning and team-based creative projects",
    color: "from-secondary to-teal-400",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "UI/UX Design Internship",
    description: "Successfully completed a 1-month virtual internship in UI/UX Design at HyperionyX Technologies. Demonstrated strong commitment, professionalism.",
    color: "from-indigo-500 to-violet-500",
  },
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Recognition
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Achievements & Activities
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl border border-border p-6 card-hover">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${achievement.color} text-white mb-4`}
                >
                  {achievement.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
