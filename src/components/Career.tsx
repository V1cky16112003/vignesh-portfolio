import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./styles/Career.css";

const careerData = [
    {
        year: "NOW",
        role: "AI Security Researcher / Policy Architect",
        company: "Guard AI — Stealth Startup",
        description:
            "Designed and stress-tested the authorization policy layer of a runtime security system mediating every action an autonomous AI agent proposes. Authored a Cedar-ready policy specification mapping the full OWASP Agentic & LLM Top 10 onto an action×resource decision matrix, and architected a core information-flow model — structural provenance tracking, two-axis authorization, and a bounded declassification lattice — validated against real production incidents including EchoLeak (CVE-2025-32711) and MCP Tool Poisoning.",
    },
    {
        year: "2025",
        role: "MSc in Data Science",
        company: "King's College London",
        description:
            "Expected Distinction — Semester 1 average: 71.7% (Distinction in 3 subjects). Key modules: Neural Networks & Deep Learning, Data Mining, Big Data Technologies, Statistics. Dissertation supervised by Dr. Helen Yannakoudakis.",
    },
    {
        year: "2024",
        role: "AI Intern — Clustering & Deep Learning",
        company: "4i Apps Solutions",
        description:
            "Built a K-Means segmentation pipeline on ~3–4 GB of purchase data for customer behavioural analysis. Trained and evaluated TensorFlow/Keras deep learning models for image classification and NLP tasks.",
    },
    {
        year: "2023",
        role: "Data Science Intern",
        company: "4i Apps Solutions",
        description:
            "Built an end-to-end classification pipeline — data cleaning with Pandas/NumPy, EDA, and model development with Scikit-Learn. Produced Matplotlib and Seaborn dashboards for client business reporting.",
    },
    {
        year: "2021",
        role: "B.Tech Computer Science & Engineering",
        company: "SRM Institute of Science & Technology",
        description:
            "First Class with Distinction — GPA 8.73/10. Built a strong foundation in algorithms, data structures, and software engineering across a 4-year programme.",
    },
];

const Career = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 65%", "end 85%"],
    });

    const timelineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section className="career-section" id="career" ref={sectionRef}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <span>My career &amp; experience</span>
            </motion.h2>
            <div className="career-info section-container career-container">
                <motion.div
                    className="career-timeline"
                    style={{
                        scaleY: timelineScaleY,
                        transformOrigin: "top center",
                    }}
                >
                    <div className="career-dot" />
                </motion.div>

                {careerData.map((item, index) => (
                    <motion.div
                        className="career-info-box"
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                            duration: 0.65,
                            delay: index * 0.08,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        <div className="career-info-in">
                            <div>
                                <h4>{item.role}</h4>
                                <h5>{item.company}</h5>
                            </div>
                            <h3>{item.year}</h3>
                        </div>
                        <p>{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Career;
