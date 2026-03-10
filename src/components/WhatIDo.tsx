import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".whatido-card", {
                scrollTrigger: {
                    trigger: ".whatido-section",
                    start: "top 70%",
                    end: "top 30%",
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
        <section className="whatido-section" ref={sectionRef}>
            <h2>
                <span>WHAT I DO</span>
            </h2>
            <div className="whatido-container">
                <div className="whatido-card">
                    <h3>AI & ML</h3>
                    <h4>Intelligent Systems</h4>
                    <p>
                        Building end-to-end AI applications from model development to
                        deployment. From multimodal chatbots to deep learning pipelines, I
                        create intelligent systems that solve real-world problems.
                    </p>
                    <h5>Skillset & tools</h5>
                    <div className="whatido-skills">
                        <span>Python</span>
                        <span>TensorFlow</span>
                        <span>Scikit-Learn</span>
                        <span>NLP</span>
                        <span>Computer Vision</span>
                        <span>LLMs</span>
                        <span>Generative AI</span>
                        <span>OpenAI</span>
                        <span>Gemini</span>
                        <span>FastAPI</span>
                    </div>
                </div>
                <div className="whatido-card">
                    <h3>Data</h3>
                    <h4>Engineering & Analytics</h4>
                    <p>
                        Designing robust data pipelines and analytics systems. From
                        large-scale data processing to interactive visualizations, I turn raw
                        data into actionable insights.
                    </p>
                    <h5>Skillset & tools</h5>
                    <div className="whatido-skills">
                        <span>SQL</span>
                        <span>Apache Spark</span>
                        <span>Hadoop</span>
                        <span>Tableau</span>
                        <span>Matplotlib</span>
                        <span>Seaborn</span>
                        <span>D3.js</span>
                        <span>Oracle Cloud</span>
                        <span>MySQL</span>
                        <span>React.js</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;
