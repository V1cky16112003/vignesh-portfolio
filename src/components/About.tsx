import { useEffect, useRef } from "react";
import "./styles/About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-me h3", {
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                },
                opacity: 0,
                y: 30,
            });

            gsap.from(".about-me p", {
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top 70%",
                    end: "top 40%",
                    scrub: 1,
                },
                opacity: 0,
                y: 50,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="about-section" id="about" ref={sectionRef}>
            <div className="about-me">
                <h3>About Me</h3>
                <p>
                    MSc Data Science student at King’s College London (71.7% Sem 1, Distinction trajectory) building DAMS-GCT — an uncertainty-aware GNN-Transformer for multimodal emotion recognition trained on NVIDIA A100 GPUs. Work spans vision, speech, and physiological signal AI, with hands-on PyTorch, uncertainty quantification, and end-to-end ML from research prototype to containerised REST API deployment. Available for full-time AI/ML Engineer roles in London from August 2026.
                </p>
            </div>
        </section>
    );
};

export default About;
