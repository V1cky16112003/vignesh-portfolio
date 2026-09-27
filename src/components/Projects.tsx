import "./styles/Projects.css";

type Project = {
    title: string;
    kind: string[];
    date: string;
    featured?: boolean;
    description: string[];
    tech: string[];
    link: string | null;
};

const projectsData: Project[] = [
    {
        title:
            "Multimodal Emotion Recognition on SEED-VII: Reproducibility Critique & Honest Baseline",
        kind: ["Dissertation", "King's College London", "Supervised by Dr. Helen Yannakoudakis"],
        date: "Jan 2026 – Aug 2026",
        featured: true,
        description: [
            "Audited a published IEEE TAFFC 2025 benchmark (71.28% claimed accuracy) by replicating it on King's A100 GPU cluster, proving the figure is an evaluation-leakage artefact unreachable under any leak-free protocol.",
            "Designed a block-size leakage sweep across 20 subjects that reproduced the original figure to within 0.17pp (paired Wilcoxon, W=0, p<2e-6, d=3.72), benchmarked three honest methods with convergent nulls confirming the ceiling is feature-driven not architecture-limited, and validated the leakage mechanism on an independent 44-participant industrial dataset (+13.81pp inflation, p<2e-8, d=1.115).",
        ],
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
        title: "ArXiv Research Intelligence Agent",
        kind: ["Production Agentic RAG System", "Personal Project"],
        date: "Jun 2026 – Aug 2026",
        description: [
            "Engineered a four-node LangGraph agent (Planner → Executor → Critic → Reporter) with a Critic-driven retry loop, shipped as a full-stack platform over 50,000 ArXiv ML papers — FastAPI backend on Hugging Face Spaces, React 18/Vite frontend on Vercel, with GitHub Actions CI/CD running a RAGAS quality gate that blocks merges below 0.80 faithfulness or 0.75 answer relevancy.",
            "Built a two-stage ingestion pipeline embedding abstracts with Nomic-embed-text-v2 (768-dim) into Neon Postgres via pgvector with HNSW indexing, and an LLM routing layer — Groq Llama 3.3 70B primary with automatic Gemini 2.5 Flash fallback — with metrics logged to MLflow on DagsHub.",
        ],
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
        kind: ["Full-Stack MCP Server", "Personal Project"],
        date: "Aug 2026 – Sep 2026",
        description: [
            "Built a full-stack chore-management app with a custom MCP server exposing 10 tools (add/assign/complete chores, member management, round-robin logic), enabling direct LLM control from Claude Desktop/Web.",
            "Deployed the MCP server serverless on Vercel in stateless HTTP mode, resolving Starlette session-affinity and DNS-rebinding constraints incompatible with a serverless request lifecycle.",
            "Implemented bearer-token auth via Starlette middleware with TransportSecuritySettings host allowlisting, and diagnosed a chain of 5 production issues (404 routing, 421 invalid-host, 401 auth, SDK v1/v2 incompatibility) across 25 commits to reach a stable authenticated endpoint.",
        ],
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
        title: "Conversational Multimodal Image Recognition Chatbot",
        kind: ["SRM Institute of Science and Technology"],
        date: "Jan 2025 – May 2025",
        description: [
            "Built a multimodal chatbot combining real-time image recognition (Gemini 2.0 Flash), OCR (Azure Computer Vision), and voice I/O (Azure Speech) with support for English, Tamil, Hindi, and Telugu.",
            "Designed a production REST API with FastAPI backend and React.js frontend handling real-time multimodal inference across 4 languages with sub-second latency.",
        ],
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

const Projects = () => {
    return (
        <section className="section projects" id="work" aria-labelledby="work-title">
            <h2 className="section-title" id="work-title">
                Projects
            </h2>
            {projectsData.map((project) => (
                <article
                    className={project.featured ? "project project-featured" : "project"}
                    key={project.title}
                >
                    <div className="project-meta">
                        {project.kind.map((part, i) => (
                            <p key={part} className={i === 0 ? "project-kind" : undefined}>
                                {part}
                            </p>
                        ))}
                        <p>{project.date}</p>
                    </div>
                    <div className="project-body">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-description">
                            {project.description.map((para) => (
                                <p key={para}>{para}</p>
                            ))}
                        </div>
                        <p className="project-tech">
                            <span className="visually-hidden">Built with: </span>
                            {project.tech.join(", ")}
                        </p>
                        {project.link && (
                            <a
                                className="project-link"
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source code on GitHub
                                <span className="visually-hidden"> for {project.title}</span>
                            </a>
                        )}
                    </div>
                </article>
            ))}
        </section>
    );
};

export default Projects;
