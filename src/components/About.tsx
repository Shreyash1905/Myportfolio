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
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div
                      className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-5xl font-display font-bold text-primary-foreground">
                        CS
                      </span>
                    </motion.div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Computer Science Student
                    </h3>
                    <p className="text-muted-foreground">
                      UI/UX Designer & Web Developer
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
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
