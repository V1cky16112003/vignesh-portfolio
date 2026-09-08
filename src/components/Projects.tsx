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
        title: "ArXiv Research Intelligence Agent",
        subtitle: "Production Agentic RAG System · Personal Project",
        date: "Jun 2026 – Aug 2026",
        supervisor: null,
        description:
            "Engineered a four-node LangGraph agent (Planner → Executor → Critic → Reporter) with a Critic-driven retry loop, shipped as a full-stack platform over 50,000 ArXiv ML papers — FastAPI backend on Hugging Face Spaces, React 18/Vite frontend on Vercel, with GitHub Actions CI/CD running a RAGAS quality gate that blocks merges below 0.80 faithfulness or 0.75 answer relevancy. Built a two-stage ingestion pipeline embedding abstracts with Nomic-embed-text-v2 (768-dim) into Neon Postgres via pgvector with HNSW indexing, and an LLM routing layer — Groq Llama 3.3 70B primary with automatic Gemini 2.5 Flash fallback — with metrics logged to MLflow on DagsHub.",
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
        link: "https://github.com/V1cky16112003/research-intelligence-agent",
    },
    {
        title: "Chore Manager — Agentic Household Automation via MCP",
        subtitle: "Full-Stack MCP Server · Personal Project",
        date: "Aug 2026 – Sep 2026",
        supervisor: null,
        description:
            "Built a full-stack chore-management app with a custom MCP server exposing 10 tools (add/assign/complete chores, member management, round-robin logic), enabling direct LLM control from Claude Desktop/Web. Deployed the MCP server serverless on Vercel in stateless HTTP mode, resolving Starlette session-affinity and DNS-rebinding constraints incompatible with a serverless request lifecycle. Implemented bearer-token auth via Starlette middleware with TransportSecuritySettings host allowlisting, and diagnosed a chain of 5 production issues (404 routing, 421 invalid-host, 401 auth, SDK v1/v2 incompatibility) across 25 commits to reach a stable authenticated endpoint.",
        tech: [
            "Python",
            "FastMCP",
            "Starlette",
            "Model Context Protocol",
            "Vercel Serverless",
            "Bearer-Token Auth",
            "REST APIs",
        ],
        link: "https://github.com/V1cky16112003/chore-manager",
    },
    {
        title:
            "Multimodal Emotion Recognition on SEED-VII: Reproducibility Critique & Honest Baseline",
        subtitle: "MSc Final-Year Project",
        date: "Jan 2026 – Aug 2026",
        supervisor: "King's College London",
        description:
            "Audited a published IEEE TAFFC 2025 benchmark (71.28% claimed accuracy) by replicating it on King's A100 GPU cluster, proving the figure is an evaluation-leakage artefact unreachable under any leak-free protocol. Designed a block-size leakage sweep across 20 subjects that reproduced the original figure to within 0.17pp (paired Wilcoxon, W=0, p<2e-6, d=3.72), benchmarked three honest methods with convergent nulls confirming the ceiling is feature-driven not architecture-limited, and validated the leakage mechanism on an independent 44-participant industrial dataset (+13.81pp inflation, p<2e-8, d=1.115).",
        tech: [
            "PyTorch",
            "Graph Neural Networks",
            "Transformers",
            "SLURM/HPC",
            "EEG Signal Processing",
            "Statistical Hypothesis Testing",
        ],
        link: "https://github.com/V1cky16112003/Kings-final-year-project",
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
