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
        <section className="about-section" ref={sectionRef}>
            <div className="about-me">
                <h3>About Me</h3>
                <p>
                    MSc Data Science student at King's College London, focused on building
                    and applying Generative AI and Multimodal Systems. Experienced in
                    developing end-to-end AI applications from system architecture and
                    cloud-based inference to frontend integration. Driven by the
                    intersection of high-performance engineering and intuitive
                    human-computer interaction.
                </p>
            </div>
        </section>
    );
};

export default About;
