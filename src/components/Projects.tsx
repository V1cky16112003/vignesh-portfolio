import { useEffect, useRef } from "react";
import "./styles/Projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const Projects = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-card", {
                scrollTrigger: {
                    trigger: ".projects-section",
                    start: "top 70%",
                    end: "center 50%",
                    scrub: 1,
                },
                opacity: 0,
                y: 60,
                stagger: 0.2,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="projects-section" id="projects" ref={sectionRef}>
            <h2>
                <span>My Projects</span>
            </h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
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
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
