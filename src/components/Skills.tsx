import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Users, Wrench } from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
  color?: string;
}

const technicalSkills: Skill[] = [
  { name: "UI/UX Design", percentage: 95 },
  { name: "HTML", percentage: 80 },
  { name: "C Programming", percentage: 80 },
  { name: "Java", percentage: 70 },
  { name: "C++", percentage: 60 },
];

const designTools = [
  "Figma",
  "Canva",
  "Wireframing",
  "Prototyping",
  "Layout Design",
  "Typography",
  "Color Theory",
  "Design Thinking",
];

const softSkills = [
  "Team Collaboration",
  "Problem Solving",
  "Team Managing",
  "Communication",
  "Creativity",
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm font-semibold text-primary">{skill.percentage}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillTag = ({ skill, index }: { skill: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground cursor-default transition-shadow hover:shadow-md"
    >
      {skill}
    </motion.span>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Skills & Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              What I Bring to the Table
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Technical Skills
                </h3>
              </div>
              <div className="space-y-6 bg-card rounded-2xl p-6 border border-border">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Design Tools & UX Fundamentals */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-secondary/10">
                  <Palette className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Design Tools & UI/UX
                </h3>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex flex-wrap gap-3">
                  {designTools.map((tool, index) => (
                    <SkillTag key={tool} skill={tool} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-accent">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Soft Skills
                </h3>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex flex-wrap justify-center gap-4">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-border"
                    >
                      <Wrench className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
