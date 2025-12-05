import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-1000">
      {/* 3. Glowing Grid Background */}
      <div className="absolute inset-0 -z-20 bg-background overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "inherit",
              backgroundSize: "inherit"
            }}
          />
        </div>
        {/* Gradient Overlay for Fade */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-background" />
      </div>

      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* 4. Rotating "SS" Logo */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none select-none overflow-hidden"
      >
        <motion.div
          className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full border-[1px] border-primary/20 flex items-center justify-center font-display font-bold text-[30vw] md:text-[400px] text-primary/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          SS
        </motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Column: Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d"
            }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8 mx-auto md:mx-0"
              style={{ transform: "translateZ(30px)" }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Open to Opportunities</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight select-none"
              style={{ transform: "translateZ(60px)" }}
            >
              Hello <motion.span
                className="inline-block origin-bottom-right"
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
              >
                👋
              </motion.span>, I'm{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 gradient-text">Shreyash</span>
              </span>
              <br />
              <span className="gradient-text-accent">Full Stack Developer</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0"
              style={{ transform: "translateZ(30px)" }}
            >
              Passionate Computer Science student dedicated to creating impactful,
              user-centered digital experiences that balance{" "}
              <span className="text-foreground font-medium">creativity</span>,{" "}
              <span className="text-foreground font-medium">design</span>, and{" "}
              <span className="text-foreground font-medium">technology</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
              style={{ transform: "translateZ(30px)" }}
            >
              <Button variant="hero" size="xl" asChild className="group">
                <a href="#projects">
                  View Projects
                  <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">Message Me</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center md:justify-end relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Rotating Ring */}
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Floating Animation Container */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-white/20 to-white/0 overflow-hidden shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/profile.jpg"
                  alt="Shreyash Sahukar"
                  className="w-full h-full object-cover rounded-full border-4 border-black/20"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
