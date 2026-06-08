import { useEffect, useRef } from "react";
import "./styles/Career.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const careerData = [
    {
        year: "NOW",
        role: "ML Research Engineer (MSc Dissertation)",
        company: "King's College London",
        description:
            "Designing DAMS-GCT (Dynamic Adaptive Multi-Scale Graph-Convolutional Transformer) for 7-class emotion recognition, fusing EEG, EDA, and BVP signals from SEED-VII across 20 subjects. Trained on KCL's HPC cluster using NVIDIA A100 GPUs. Implemented Monte Carlo Dropout for calibrated uncertainty quantification.",
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
        role: "AI Intern — Clustering & Deep Learning",
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
];

const Career = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".career-timeline", {
                scrollTrigger: {
                    trigger: ".career-section",
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: 1,
                },
                maxHeight: "100%",
                ease: "none",
            });

            gsap.from(".career-info-box", {
                scrollTrigger: {
                    trigger: ".career-section",
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: 1,
                },
                opacity: 0,
                y: 40,
                stagger: 0.3,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="career-section" id="career" ref={sectionRef}>
            <h2>
                <span>My career & experience</span>
            </h2>
            <div
                className="career-info section-container career-container"
            >
                <div className="career-timeline">
                    <div className="career-dot" />
                </div>
                {careerData.map((item, index) => (
                    <div className="career-info-box" key={index}>
                        <div className="career-info-in">
                            <div>
                                <h4>{item.role}</h4>
                                <h5>{item.company}</h5>
                            </div>
                            <h3>{item.year}</h3>
                        </div>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Career;
