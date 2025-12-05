
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AnimatedBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-background pointer-events-none">
            {/* Layer 1: Wavy SVG Background */}
            <div className="absolute inset-0 opacity-30">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#4F46E5" // Indigo-600
                        d="M0,0 L100,0 L100,100 L0,100 Z"
                        className="hidden" // Placeholder background if needed
                    />
                    {/* Animated Waves */}
                    <motion.path
                        d="M0,50 C20,60 40,40 60,50 C80,60 100,40 120,50 L120,100 L0,100 Z"
                        fill="url(#gradient1)"
                        animate={{
                            d: [
                                "M0,50 C20,60 40,40 60,50 C80,60 100,40 120,50 L120,100 L0,100 Z",
                                "M0,50 C30,40 50,60 70,50 C90,40 110,60 130,50 L120,100 L0,100 Z",
                                "M0,50 C20,60 40,40 60,50 C80,60 100,40 120,50 L120,100 L0,100 Z",
                            ],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(79, 70, 229, 0.2)" />
                            <stop offset="100%" stopColor="rgba(147, 51, 234, 0.2)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Layer 2: Floating Glassmorphism Blobs */}
            <div className="absolute inset-0">
                {/* Blob 1 - Purple/Pink */}
                <motion.div
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 mix-blend-screen opacity-50 blur-[80px]"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Blob 2 - Cyan/Blue */}
                <motion.div
                    className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-600/30 mix-blend-screen opacity-50 blur-[80px]"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Blob 3 - Interactive Mouse Follower */}
                <motion.div
                    className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 mix-blend-screen opacity-40 blur-[80px]"
                    animate={{
                        x: mousePosition.x - window.innerWidth / 2,
                        y: mousePosition.y - window.innerHeight / 2,
                    }}
                    transition={{
                        type: "spring",
                        damping: 50,
                        stiffness: 50,
                    }}
                    style={{
                        left: "50%",
                        top: "50%",
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                />
            </div>

            {/* Noise Texture Overlay for "frosted glass" look */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
};
