import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./styles/About.css";

const stats = [
    { value: 71.7, decimals: 1, suffix: "%", label: "MSc Sem 1 Average" },
    { value: 8.73, decimals: 2, suffix: "/10", label: "B.Tech GPA" },
    { value: 4, decimals: 0, suffix: "+", label: "AI Systems Shipped" },
];

function AnimatedStat({
    value,
    decimals,
    suffix,
    label,
    active,
    delay,
}: {
    value: number;
    decimals: number;
    suffix: string;
    label: string;
    active: boolean;
    delay: number;
}) {
    const [displayed, setDisplayed] = useState("0");

    useEffect(() => {
        if (!active) return;
        const duration = 1600;
        const start = Date.now();

        const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = value * eased;
            setDisplayed(current.toFixed(decimals));
            if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    }, [active, value, decimals]);

    return (
        <motion.div
            className="about-stat"
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
        >
            <div className="about-stat-value">
                {displayed}
                {suffix}
            </div>
            <div className="about-stat-label">{label}</div>
        </motion.div>
    );
}

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-120px 0px" });

    return (
        <section className="about-section" id="about" ref={sectionRef}>
            <div className="about-me">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    About Me
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                >
                    MSc Data Science student at King's College London (71.7% Sem 1, Distinction
                    trajectory), whose dissertation audits a published IEEE TAFFC 2025
                    emotion-recognition benchmark and exposes it as an evaluation-leakage artefact,
                    backed by statistically validated honest baselines. Most recently designed the
                    authorization policy layer for an AI agent security runtime at a stealth
                    startup, mapping the OWASP Agentic &amp; LLM Top 10 onto a Cedar-ready decision
                    matrix. Work spans agentic RAG systems, physiological signal AI, and
                    reproducible ML research — from PyTorch prototypes to production FastAPI
                    deployments. Available for Full-Time roles immediately.
                </motion.p>
                <div className="about-stats">
                    {stats.map((stat, i) => (
                        <AnimatedStat
                            key={i}
                            {...stat}
                            active={isInView}
                            delay={0.3 + i * 0.12}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
