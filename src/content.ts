import { createContext, useContext } from "react";

export type Outcome = { figure: string; text: string };
export type Skill = { area: string; items: string };

export type Project = {
    title: string;
    kind: string[];
    date: string;
    featured?: boolean;
    description: string[];
    tech: string[];
    link: string | null;
};

export type CareerItem = { year: string; role: string; company: string; description: string };
export type Publication = { title: string; url: string; year: string };

// Sections added from the admin page; rendered in the same layout as About.
export type CustomSection = { id: string; title: string; paragraphs: string[] };

export type Content = {
    landing: { headline: string[]; intro: string; status: string };
    about: { paragraphs: string[]; outcomes: Outcome[] };
    projects: Project[];
    skills: Skill[];
    sections: CustomSection[];
    career: CareerItem[];
    contact: {
        lead: string;
        email: string;
        phone: string;
        location: string;
        github: string;
        linkedin: string;
        certifications: string[];
        publications: Publication[];
    };
};

// Shipped with the bundle; used until an edited copy is saved from /admin.
export const defaultContent: Content = {
    landing: {
        headline: ["I build AI agents,", "then check whether", "their evaluations hold up."],
        intro: "I'm Vignesh Ram Sivakumar, an AI engineer in London finishing an MSc in Data Science at King's College London. I work on agentic RAG, MCP servers and ML evaluation.",
        status: "London, UK. Available for full-time roles now.",
    },
    about: {
        paragraphs: [
            "I'm an MSc Data Science student at King's College London (71.7% in semester one, on track for a Distinction) who builds agentic systems end to end. That covers a production LangGraph RAG agent over 50,000 ArXiv papers with a Critic-driven retry loop and a CI-gated RAGAS quality bar, and an MCP server that lets Claude Desktop and Claude Web drive an app directly.",
            "My final-year project audits a published IEEE TAFFC 2025 emotion-recognition benchmark and shows its headline number is an evaluation-leakage artefact, backed by statistically validated honest baselines. At a stealth startup I designed the authorization policy layer for an AI agent security runtime, mapping the OWASP Agentic and LLM Top 10 onto a Cedar-ready decision matrix.",
        ],
        outcomes: [
            { figure: "50,000", text: "ArXiv papers indexed by my LangGraph research agent" },
            { figure: "0.80", text: "RAGAS faithfulness bar that CI enforces before any merge" },
            { figure: "0.17pp", text: "gap between my reproduction and a published 71.28% result, which I showed was leakage" },
            { figure: "10", text: "MCP tools served from a stateless, authenticated Vercel deployment" },
        ],
    },
    projects: [
        {
            title: "Multimodal Emotion Recognition on SEED-VII: Reproducibility Critique & Honest Baseline",
            kind: ["Dissertation", "King's College London", "Supervised by Dr. Helen Yannakoudakis"],
            date: "Jan 2026 – Aug 2026",
            featured: true,
            description: [
                "Audited a published IEEE TAFFC 2025 benchmark (71.28% claimed accuracy) by replicating it on King's A100 GPU cluster, proving the figure is an evaluation-leakage artefact unreachable under any leak-free protocol.",
                "Designed a block-size leakage sweep across 20 subjects that reproduced the original figure to within 0.17pp (paired Wilcoxon, W=0, p<2e-6, d=3.72), benchmarked three honest methods with convergent nulls confirming the ceiling is feature-driven not architecture-limited, and validated the leakage mechanism on an independent 44-participant industrial dataset (+13.81pp inflation, p<2e-8, d=1.115).",
            ],
            tech: ["PyTorch", "Graph Neural Networks", "Transformers", "SLURM/HPC", "EEG Signal Processing", "Statistical Hypothesis Testing"],
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
            tech: ["LangGraph", "FastAPI", "PostgreSQL (pgvector)", "Groq", "Gemini 2.5 Flash", "React 18", "Docker", "GitHub Actions", "MLflow"],
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
            tech: ["Python", "FastMCP", "Starlette", "Model Context Protocol", "Vercel Serverless", "Bearer-Token Auth", "REST APIs"],
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
            tech: ["Gemini 2.0 Flash", "Azure Cognitive Services", "FastAPI", "React.js", "OCR", "NLP", "TTS", "STT"],
            link: "https://github.com/V1cky16112003/Conversational-Image-Recognition-Chatbot",
        },
    ],
    skills: [
        {
            area: "AI and ML",
            items: "Python, PyTorch, TensorFlow, graph neural networks, Transformers, LangGraph, RAG, NLP, computer vision, multimodal models, OWASP LLM Top 10",
        },
        {
            area: "Backend and deployment",
            items: "FastAPI, Model Context Protocol (FastMCP, Starlette), PostgreSQL with pgvector, MySQL, SQL, Docker, CI/CD with GitHub Actions, MLflow, Vercel serverless, Azure Cognitive Services",
        },
    ],
    sections: [],
    career: [
        {
            year: "2026",
            role: "AI Security Researcher / Policy Architect",
            company: "Guard AI (stealth startup)",
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
            role: "AI Intern, Clustering & Deep Learning",
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
    ],
    contact: {
        lead: "I'm in London and available for full-time AI engineering roles now. Email is the fastest way to reach me.",
        email: "vigneshsiva9889@gmail.com",
        phone: "+44 07818460941",
        location: "London, UK",
        github: "https://github.com/V1cky16112003",
        linkedin: "https://www.linkedin.com/in/vignesh-ram-sivakumar",
        certifications: [
            "Model Context Protocol: Advanced Topics, Anthropic, 2026",
            "AI Fluency Framework & Foundations, Anthropic, 2026",
        ],
        publications: [
            {
                title: "Survey on Speech Recognition, Transcription & Summarisation Techniques",
                url: "https://doi.org/10.1063/5.0331220",
                year: "2024",
            },
        ],
    },
};

// The CV link goes through the API so a newly uploaded PDF is served without a redeploy.
export const CV_URL = "/api/cv";

// Saved content may predate fields added later; fill any gaps from the defaults.
export const withDefaults = (saved: Partial<Content>): Content => ({
    ...defaultContent,
    ...saved,
    landing: { ...defaultContent.landing, ...saved.landing },
    about: { ...defaultContent.about, ...saved.about },
    contact: { ...defaultContent.contact, ...saved.contact },
});

export const ContentContext = createContext<Content>(defaultContent);
export const useContent = () => useContext(ContentContext);

export const toTel = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "").replace(/^\+440/, "+44")}`;
