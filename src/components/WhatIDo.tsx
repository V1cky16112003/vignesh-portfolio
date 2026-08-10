import { motion } from "framer-motion";
import { Brain, Database } from "lucide-react";
import "./styles/WhatIDo.css";

const cards = [
    {
        Icon: Brain,
        category: "AI & ML",
        title: "Intelligent & Secure Systems",
        description:
            "Building end-to-end AI systems — from multimodal deep learning research to agentic RAG platforms and LLM security policy design. I create intelligent systems that solve real-world problems and hold up under adversarial pressure.",
        skills: [
            "Python",
            "PyTorch",
            "TensorFlow",
            "GNNs",
            "LangGraph",
            "RAG",
            "OWASP LLM Top 10",
            "NLP",
            "Computer Vision",
            "Multimodal AI",
        ],
    },
    {
        Icon: Database,
        category: "Engineering",
        title: "Backend & Deployment",
        description:
            "Designing production-grade backend systems and MLOps pipelines. From containerised REST APIs to CI/CD-gated RAG platforms, I ship AI systems that run reliably beyond the notebook.",
        skills: [
            "SQL",
            "FastAPI",
            "Docker",
            "PostgreSQL",
            "CI/CD",
            "MLflow",
            "Azure Cognitive Services",
            "MySQL",
            "Matplotlib",
            "Seaborn",
        ],
    },
];

const WhatIDo = () => {
    return (
        <section className="whatido-section">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <span>WHAT I DO</span>
            </motion.h2>
            <div className="whatido-container">
                {cards.map(({ Icon, category, title, description, skills }, i) => (
                    <motion.div
                        key={i}
                        className="whatido-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                            duration: 0.65,
                            delay: i * 0.15,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        whileHover={{ y: -6 }}
                    >
                        <div className="whatido-icon">
                            <Icon size={22} strokeWidth={1.5} />
                        </div>
                        <h3>{category}</h3>
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <h5>Skillset &amp; tools</h5>
                        <div className="whatido-skills">
                            {skills.map((skill, j) => (
                                <motion.span
                                    key={j}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.3,
                                        delay: i * 0.12 + j * 0.04,
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhatIDo;
