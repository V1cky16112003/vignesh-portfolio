import { useRef } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import "./styles/Projects.css";

const projectsData = [
    {
        title:
            "Multimodal Emotion Recognition on SEED-VII: Reproducibility Critique & Honest Baseline",
        subtitle: "MSc Dissertation",
        date: "2025 – 2026",
        supervisor: "King's College London",
        description:
            "Audited a published IEEE TAFFC 2025 benchmark (71.28% claimed accuracy) by replicating it on King's A100 GPU cluster, proving the figure is an evaluation-leakage artefact unreachable under any leak-free protocol. Designed a block-size leakage sweep across 20 subjects that reproduced the original figure to within 0.17pp (paired Wilcoxon, W=0, p<2e-6, d=3.72), established honest baselines of 48–53%, and validated the leakage mechanism on an independent 44-participant industrial EEG dataset (+13.81pp inflation, p=1.15e-8). Delivered a full reproducibility package with pinned dependencies, fixed seeds, and unit tests.",
        tech: [
            "PyTorch",
            "Graph Neural Networks",
            "Self-Supervised Learning",
            "SLURM/HPC",
            "EEG Signal Processing",
            "Statistical Hypothesis Testing",
        ],
        link: null,
    },
    {
        title: "ArXiv Research Intelligence Agent",
        subtitle: "Production RAG System · Personal Project",
        date: "2026",
        supervisor: null,
        description:
            "Engineered a four-node LangGraph agent (Planner → Executor → Critic → Reporter) with a Critic-driven retry loop, shipped as a full-stack platform over 50,000 ArXiv ML papers — FastAPI backend on Hugging Face Spaces, React 18/Vite frontend on Vercel, with GitHub Actions CI/CD running a RAGAS quality gate that blocks merges below 0.80 faithfulness. Built a two-stage ingestion pipeline embedding abstracts into pgvector with HNSW indexing, and an LLM routing layer — Groq Llama 3.3 70B primary with automatic Gemini 2.5 Flash fallback — plus Upstash Redis caching for response deduplication.",
        tech: [
            "LangGraph",
            "FastAPI",
            "PostgreSQL (pgvector)",
            "Groq",
            "Gemini 2.5 Flash",
            "React 18",
            "Docker",
            "GitHub Actions",
            "MLflow",
        ],
        link: null,
    },
    {
        title: "Conversational Multimodal Image Recognition Chatbot",
        subtitle: "SRM Institute of Science and Technology",
        date: "Jan 2025 – May 2025",
        supervisor: null,
        description:
            "Built a multimodal chatbot combining real-time image recognition (Gemini 2.0 Flash), OCR (Azure Computer Vision), and voice I/O (Azure Speech) with support for English, Tamil, Hindi, and Telugu. Designed a production REST API with FastAPI backend and React.js frontend handling real-time multimodal inference across 4 languages with sub-second latency.",
        tech: [
            "Gemini 2.0 Flash",
            "Azure Cognitive Services",
            "FastAPI",
            "React.js",
            "OCR",
            "NLP",
            "TTS",
            "STT",
        ],
        link: "https://github.com/V1cky16112003/Conversational-Image-Recognition-Chatbot",
    },
];

function ProjectCard({
    project,
    index,
}: {
    project: (typeof projectsData)[0];
    index: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), {
        stiffness: 300,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), {
        stiffness: 300,
        damping: 30,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <div style={{ perspective: "1200px" }}>
            <motion.div
                ref={cardRef}
                className="project-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{ rotateX, rotateY }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ borderColor: "rgba(167,139,250,0.25)" }}
            >
                <div className="project-number">0{index + 1}</div>
                <div className="project-content">
                    <h3>{project.title}</h3>
                    <div className="project-date">{project.date}</div>
                    {project.supervisor && (
                        <div className="project-supervisor">{project.supervisor}</div>
                    )}
                    <p>{project.description}</p>
                    <div className="project-tech">
                        {project.tech.map((t, i) => (
                            <span key={i}>{t}</span>
                        ))}
                    </div>
                    {project.link && (
                        <a
                            className="project-github-link"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub →
                        </a>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <span>My Projects</span>
            </motion.h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
