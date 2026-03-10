import { useEffect, useRef } from "react";
import "./styles/Landing.css";
import gsap from "gsap";

const Landing = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });

            tl.to(".greeting", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            })
                .to(
                    ".landing-name",
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.4"
                )
                .to(
                    ".subtitle",
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.4"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="landing-section" ref={sectionRef}>
            <div className="landing-bg">
                {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="particle" />
                ))}
                <div className="landing-orb landing-orb-1" />
                <div className="landing-orb landing-orb-2" />
            </div>

            <div className="landing-content">
                <p className="greeting" style={{ opacity: 0, transform: "translateY(20px)" }}>
                    Hello! I'm
                </p>
                <h1 className="landing-name" style={{ opacity: 0, transform: "translateY(30px)" }}>
                    VIGNESH RAM
                    <br />
                    SIVAKUMAR
                </h1>
                <p className="subtitle" style={{ opacity: 0, transform: "translateY(20px)" }}>
                    A <span>Data Science</span> & <span>AI</span> Engineer
                </p>
            </div>

            <div className="landing-scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    );
};

export default Landing;
