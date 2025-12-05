import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Heart } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Building Digital Experiences
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Profile Card */}
            <motion.div
              variants={itemVariants}
              className="relative group perspective-1000"
            >
              <motion.div
                className="aspect-square rounded-[2rem] p-[2px] relative overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                }}
                whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Animated Conic Gradient Border */}
                <motion.div
                  className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,#a855f7_120deg,#06b6d4_180deg,transparent_360deg)]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />

                {/* Glass Card Content */}
                <div className="w-full h-full rounded-[2rem] bg-black/80 backdrop-blur-xl relative z-10 flex flex-col items-center justify-center border border-white/5 shadow-2xl overflow-hidden group-hover:border-white/20 transition-colors duration-500">

                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute rounded-full ${i % 2 === 0 ? "bg-purple-500/20" : "bg-blue-500/20"
                        } blur-xl`}
                      style={{
                        width: Math.random() * 50 + 20,
                        height: Math.random() * 50 + 20,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}

                  {/* Background Glow - Intensifies on Hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/10 group-hover:bg-blue-500/20 rounded-full blur-[60px] pointer-events-none transition-all duration-500" />

                  <div className="text-center p-8 relative z-20 transform-style-3d">
                    {/* Static Premium 3D Orb */}
                    <div className="w-32 h-32 mx-auto mb-6 relative">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl" />

                      {/* Orb Container */}
                      <motion.div
                        className="w-full h-full rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 shadow-lg flex items-center justify-center relative z-10 border border-white/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Shine Reflection */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full pointer-events-none" />

                        <span className="text-5xl font-display font-bold text-white drop-shadow-md z-20 tracking-tight">
                          CS
                        </span>
                      </motion.div>

                      {/* Layered Circular Outlines */}
                      <div className="absolute inset-[-6px] rounded-full border border-white/10" />
                      <div className="absolute inset-[-12px] rounded-full border border-white/5" />
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-2 drop-shadow-md tracking-wide">
                      Computer Science Student
                    </h3>
                    <p className="text-blue-200/90 font-medium text-lg tracking-wide drop-shadow-sm">
                      UI/UX Designer & Web Developer
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative background glow behind the entire card - Intensifies on Hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
            </motion.div>

            {/* Right - Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate B.E. Computer Science and Engineering student with
                a deep interest in UI/UX design and web development. I believe in
                creating digital experiences that are not just functional, but
                delightful to use.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border card-hover">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      B.E. in Computer Science & Engineering
                    </p>
                    <p className="text-sm text-muted-foreground">
                      SDM Institute of Technology (SDMIT), Ujire
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border card-hover">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Ujire, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border card-hover">
                  <div className="p-2 rounded-lg bg-accent">
                    <Heart className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Interests</h4>
                    <p className="text-sm text-muted-foreground">
                      UI/UX Design, Web Development, Creative Collaboration
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
