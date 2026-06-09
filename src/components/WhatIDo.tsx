import { motion } from "framer-motion";
import { Brain, Database } from "lucide-react";
import "./styles/WhatIDo.css";

const cards = [
    {
        Icon: Brain,
        category: "AI & ML",
        title: "Intelligent Systems",
        description:
            "Building end-to-end AI applications from model development to deployment. From multimodal chatbots to deep learning pipelines, I create intelligent systems that solve real-world problems.",
        skills: [
            "Python",
            "PyTorch",
            "TensorFlow",
            "GNNs",
            "LLMs",
            "Generative AI",
            "NLP",
            "Computer Vision",
            "Affective Computing",
            "Transfer Learning",
        ],
    },
    {
        Icon: Database,
        category: "Data",
        title: "Engineering & Analytics",
        description:
            "Designing robust data pipelines and analytics systems. From large-scale data processing to interactive visualizations, I turn raw data into actionable insights.",
        skills: [
            "SQL",
            "Apache Spark",
            "Hadoop",
            "Tableau",
            "Matplotlib",
            "Seaborn",
            "Oracle Cloud",
            "Azure",
            "MySQL",
            "FastAPI",
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
