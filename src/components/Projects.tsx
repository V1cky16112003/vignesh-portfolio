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
        title: "DAMS-GCT: Uncertainty-Aware Multimodal Emotion Recognition",
        subtitle: "MSc Dissertation",
        date: "Jan 2026 – Present",
        supervisor: "King's College London · Supervisor: Dr. Helen Yannakoudakis",
        description:
            "Designed DAMS-GCT (Dynamic Adaptive Multi-Scale Graph-Convolutional Transformer) — cross-modal attention fusion over spatio-temporal GNNs and Transformer encoders, processing EEG (310-dim) and eye-movement signals (33-dim) jointly on SEED-VII (20 subjects, 7 emotion classes). Reproduced the MAET baseline (52.46%) and implemented Monte Carlo Dropout for calibrated uncertainty quantification.",
        tech: [
            "PyTorch",
            "GNNs",
            "Transformers",
            "EEG Signal Processing",
            "Uncertainty Quantification",
            "Transfer Learning",
            "Weights & Biases",
            "SLURM/HPC",
        ],
        link: null,
    },
    {
        title: "Conversational Multimodal Image Recognition Chatbot",
        subtitle: "A Multimodal AI Approach",
        date: "Jan 2025 – May 2025",
        supervisor: "SRM Institute · Supervisor: Dr. J. Selvin Paul Peter",
        description:
            "Built a multimodal chatbot combining real-time image recognition (Gemini 2.0 Flash), OCR (Azure Computer Vision), and voice I/O (Azure Speech) with support for English, Tamil, Hindi, and Telugu. Designed a production REST API with FastAPI backend and React.js frontend handling real-time multimodal inference with sub-second latency.",
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
    {
        title: "Automated Lecture Transcription & Summarisation System",
        subtitle: "AI-Powered Education Tool",
        date: "Aug 2024 – Nov 2024",
        supervisor: "SRM Institute · Supervisor: Dr. J. Selvin Paul Peter",
        description:
            "Built an automated pipeline using OpenAI Whisper (transcription), T5 (summarisation), and Google Translate API (translation) across 4 languages — English, Tamil, Hindi, and Telugu. Tested on live TedX audio, achieving 95% transcription accuracy.",
        tech: [
            "OpenAI Whisper",
            "T5 Summarisation",
            "Google Translate API",
            "Python",
            "NLP",
            "Neural Machine Translation",
        ],
        link: "https://github.com/V1cky16112003/Automated-Lecture-Transcription-and-Summarization-Sytsem-with-Multilingual-Support",
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
                whileHover={{ borderColor: "rgba(94,234,212,0.22)" }}
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
