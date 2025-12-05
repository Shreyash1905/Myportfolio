import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Layers, Award, X, Train, ListTodo } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  highlights: string[];
  icon: React.ReactNode;
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Manufacturing Dashboard",
    subtitle: "HackVyuha 2025 — National Level Hackathon",
    description:
      "Real-time operational dashboard and workflow manager designed for small-scale manufacturing units. Led the UI design with a user-centered approach ensuring clear and responsive interfaces.",
    tags: ["UI/UX Design", "Dashboard", "Real-time Analytics", "Responsive"],
    highlights: [
      "Led UI design for the entire project",
      "User-centered, clear & responsive design",
      "Modular web app architecture",
      "Real-time shop floor visibility",
      "Production KPIs and analytics",
    ],
    icon: <Layers className="w-8 h-8" />,
    gradient: "from-primary to-primary-glow",
  },
  {
    id: 2,
    title: "Streaming Platform UI",
    subtitle: "Figma Workshop Project",
    description:
      "Fully functional streaming web interface designed in Figma during a one-day workshop. Focused on layout, wireframing, color consistency, and user experience flow.",
    tags: ["Figma", "Wireframing", "UI Design", "Prototyping"],
    highlights: [
      "Complete streaming interface design",
      "One-day workshop deliverable",
      "Focus on layout and composition",
      "Color consistency throughout",
      "Intuitive user experience flow",
    ],
    icon: <Award className="w-8 h-8" />,
    gradient: "from-secondary to-primary",
  },
  {
    id: 3,
    title: "Redesigned IRCTC Website",
    subtitle: "UI/UX Case Study",
    description:
      "A modern redesign of the IRCTC booking portal focusing on improved UX, simplified navigation, and an enhanced booking flow for a seamless user experience.",
    tags: ["UI/UX Design", "Web App", "Prototyping", "Figma"],
    highlights: [
      "Modern & clean user interface",
      "Simplified booking navigation",
      "Enhanced user journey flow",
      "Mobile-responsive layout",
      "Accessibility improvements",
    ],
    icon: <Train className="w-8 h-8" />,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Internship Todo App",
    subtitle: "Virtual Internship Project",
    description:
      "A productivity-focused To-Do application developed during a virtual internship. Features task management, categorization, and a clean, intuitive interface.",
    tags: ["React", "Web App", "Productivity", "Internship"],
    highlights: [
      "Task creation and management",
      "Category organization",
      "Local storage persistence",
      "Clean & intuitive UI",
      "Responsive design",
    ],
    icon: <ListTodo className="w-8 h-8" />,
    gradient: "from-blue-500 to-emerald-500",
  },
];

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative h-full bg-card rounded-2xl border border-border overflow-hidden card-hover">
        {/* Gradient header */}
        <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm text-white"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.icon}
            </motion.div>
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {project.subtitle}
          </span>
          <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* View details indicator */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="p-2 rounded-full bg-primary text-primary-foreground">
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  // ESC Key & Body Scroll Lock
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      // Restore scroll
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Slight delay to allow exit animation to start (handled by AnimatePresence in parent usually, 
    // but here we are controlling state in parent. 
    // The parent conditionally renders this component. 
    // To ensure exit animation plays, we should ideally use AnimatePresence in parent.
    // However, looking at usage: {selectedProject && <ProjectModal ... />}
    // We can just call onClose directly and let Framer Motion's exit prop handle it IF wrapped in AnimatePresence.
    // BUT the parent 'Projects' component does NOT use AnimatePresence wrapping the conditional render.
    // So 'exit' animation wont play unless we add AnimatePresence there too. 
    // For now, let's fix the functional requirements first: Scroll lock, ESC, etc.
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
      onClick={handleClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`h-40 bg-gradient-to-br ${project.gradient} relative`}>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 pointer-events-none" />
          </button>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm text-white">
              {project.icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            {project.subtitle}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlights */}
          <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
          <ul className="space-y-2 mb-6">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Featured Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Projects & Experience
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my recent work in UI/UX design and web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#contact">Let's Work Together</a>
          </Button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key="modal"
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
