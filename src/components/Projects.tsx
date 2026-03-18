import { useEffect, useRef } from "react";
import "./styles/Projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        title: "Multimodal Emotion Recognition System",
        subtitle: "MSc Dissertation",
        date: "Jan 2026 - Present",
        supervisor: "Supervisor: Dr. Helen Yannakoudakis",
        description:
            "Developing an uncertainty-aware multimodal emotion recognition system fusing physiological signals (EEG, EDA, BVP) with subject-specific personalisation features. Implementing Graph Neural Networks (GNNs) and transfer learning.",
        tech: [
            "PyTorch",
            "GNNs",
            "EEG/EDA/BVP",
            "Transfer Learning",
            "Uncertainty Modelling",
            "Affective Computing",
        ],
    },
    {
        title: "Conversational Image Recognition Chatbot",
        subtitle: "A Multimodal AI Approach",
        date: "Jan 2025 - May 2025",
        supervisor: "Supervisor: Dr. J. Selvin Paul Peter",
        description:
            "Built a multimodal conversational AI integrating real-time image recognition, OCR, NLP, speech-to-text, and text-to-speech using Gemini 2.0 Flash and Azure Cognitive Services. Designed scalable cloud architecture.",
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
    },
    {
        title: "Automated Lecture Transcription & Summarisation",
        subtitle: "AI-Powered Education Tool",
        date: "Jul 2024 - Oct 2024",
        supervisor: "Supervisor: Dr. J. Selvin Paul Peter",
        description:
            "Built an automated lecture processing pipeline using OpenAI Whisper for transcription and Google-T5 for summarisation with real-time multilingual translation via Google Translate API.",
        tech: [
            "OpenAI Whisper",
            "T5 Summarisation",
            "Google Translate API",
            "Python",
            "NLP",
            "Neural Machine Translation",
        ],
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
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
