import { useEffect, useRef } from "react";
import "./styles/Projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        title: "Conversational Image Recognition Chatbot",
        subtitle: "A Multimodal AI Approach",
        date: "August 2024",
        supervisor: "Research & Implementation supervised by Dr J Selvin Paul Peter",
        description:
            "Authored a multimodal AI chatbot integrating image recognition, speech-to-text, text-to-speech, and NLP using Gemini 2.0 Flash and Azure Cognitive Services. Integrated multi-vendor Cloud APIs (OpenAI, Gemini, Groq, Whisper, Mistral) through Ollama. Built a responsive frontend using React, Vite, and GSAP, with a FastAPI backend.",
        tech: [
            "Gemini 2.0 Flash",
            "Azure Cognitive Services",
            "React",
            "Vite",
            "GSAP",
            "FastAPI",
            "OpenAI",
            "Whisper",
            "NLP",
        ],
    },
    {
        title: "Automated Lecture Transcription & Summarization",
        subtitle: "AI-Powered Education Tool",
        date: "July 2024",
        supervisor: null,
        description:
            "Built an automated system using OpenAI Whisper for speech recognition and Claude 3.5 Sonnet for intelligent summarization. Implemented T5 Summarization Model and Google Translate API for multilingual support.",
        tech: [
            "OpenAI Whisper",
            "Claude 3.5 Sonnet",
            "T5 Model",
            "Google Translate API",
            "Deep Learning",
            "NLP",
            "Python",
            "Speech Recognition",
        ],
    },
    {
        title: "Survey on Speech Recognition & Summarization",
        subtitle: "Comprehensive Research Paper",
        date: "2024",
        supervisor: null,
        description:
            "Conducted a comprehensive survey of advanced techniques in speech recognition, transcription, and summarization with a focus on multilingual and real-time applications in education.",
        tech: [
            "Speech Recognition",
            "NLP",
            "Deep Learning",
            "Multilingual NMT",
            "Research",
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
