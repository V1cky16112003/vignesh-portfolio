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
                    MSc Data Science student at King’s College London specialising in Generative AI, Multimodal Systems, and Affective Computing. Experienced in end-to-end AI development from uncertainty-aware deep learning and physiological signal processing to cloud inference and frontend integration. Driven by building AI that performs reliably in real-world, high-noise environments.
                </p>
            </div>
        </section>
    );
};

export default About;
