import { motion } from "framer-motion";
import { Circle, ChevronDown, ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
            animate={{ opacity: 1, y: 0, rotate }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{ width, height }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

const ROLES = [
    "AI/ML Engineer",
    "Data Scientist",
    "ML Researcher",
    "Multimodal AI Specialist",
];

function TypewriterRole() {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = ROLES[index];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && text.length < current.length) {
            timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
        } else if (!deleting && text.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2200);
        } else if (deleting && text.length > 0) {
            timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
        } else {
            setDeleting(false);
            setIndex((i) => (i + 1) % ROLES.length);
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, index]);

    return (
        <span>
            {text}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                className="text-violet-400 ml-0.5"
            >
                |
            </motion.span>
        </span>
    );
}

function HeroGeometric({
    badge = "MSc Data Science · King's College London",
    title1 = "Vignesh Ram",
    title2 = "Sivakumar",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050810]">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.05] via-transparent to-purple-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-violet-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />
                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-purple-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />
                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />
                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-violet-400/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />
                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-purple-400/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-10"
                    >
                        <Circle className="h-2 w-2 fill-violet-400/80" />
                        <span className="text-sm text-white/60 tracking-wide">{badge}</span>
                    </motion.div>

                    {/* Name */}
                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-white/90 to-purple-300">
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Typewriter role */}
                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-5"
                    >
                        <p className="text-lg md:text-xl text-white/50 font-light tracking-wide min-h-[2rem]">
                            <TypewriterRole />
                        </p>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-10"
                    >
                        <p className="text-sm sm:text-base text-white/30 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            Building uncertainty-aware AI systems — from GNN-Transformer architectures
                            to multimodal REST APIs. Available for AI/ML Engineer roles in London from
                            August 2026.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        custom={4}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center justify-center gap-4 flex-wrap"
                    >
                        <motion.button
                            onClick={() =>
                                document
                                    .getElementById("projects")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="group flex items-center gap-2 px-7 py-3 rounded-full bg-violet-600/20 border border-violet-500/30 text-white/80 text-sm font-medium tracking-wide cursor-pointer"
                            whileHover={{
                                scale: 1.04,
                                backgroundColor: "rgba(124,58,237,0.25)",
                                borderColor: "rgba(139,92,246,0.5)",
                            }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                        >
                            View My Work
                            <motion.span
                                className="inline-flex"
                                initial={{ x: 0 }}
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.15 }}
                            >
                                <ArrowRight className="w-4 h-4" />
                            </motion.span>
                        </motion.button>

                        <motion.a
                            href="/Vignesh_Ram_Sivakumar_CV_LaTeX.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-7 py-3 rounded-full border border-white/10 text-white/40 text-sm font-medium tracking-wide"
                            whileHover={{
                                scale: 1.04,
                                borderColor: "rgba(255,255,255,0.2)",
                                color: "rgba(255,255,255,0.65)",
                            }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Download className="w-4 h-4" />
                            Download CV
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.6 }}
                onClick={() =>
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }
            >
                <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-4 h-4 text-white/20" />
                </motion.div>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-[#050810]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric };
