import { useEffect, useRef } from "react";
import "./styles/Career.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const careerData = [
    {
        year: "NOW",
        role: "MSc Data Science",
        company: "King's College London",
        description:
            "Focus on AI, Analytics, and Data Engineering. Building expertise in Generative AI, Multimodal Systems, and advanced machine learning techniques.",
    },
    {
        year: "2024",
        role: "AI Intern",
        company: "4i Apps Solutions",
        description:
            "Conducted advanced clustering techniques and designed deep learning models for pattern recognition. Managed datasets over 1 GB and achieved a 5% improvement in model accuracy through hyperparameter tuning.",
    },
    {
        year: "2023",
        role: "Data Science Intern",
        company: "4i Apps Solutions",
        description:
            "Developed machine learning algorithms and analysed data using Python libraries. Created predictive models and completed data preprocessing and feature engineering, resulting in a 30% improvement in model accuracy.",
    },
    {
        year: "2021",
        role: "B.Tech Computer Science",
        company: "SRM Institute of Science & Technology",
        description:
            "Computer Science and Engineering with GPA 8.73/10. Built a strong foundation in algorithms, data structures, and software engineering.",
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
