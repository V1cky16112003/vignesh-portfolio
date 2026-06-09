import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./styles/Navbar.css";
import HoverLinks from "./HoverLinks";

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const prevScrollY = useRef(0);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY > prevScrollY.current && currentY > 120) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            prevScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            className="header"
            style={{
                transform: hidden
                    ? "translate(-50%, -110%)"
                    : "translate(-50%, 0)",
                transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
        >
            <ul>
                <li onClick={() => scrollToSection("about")}>
                    <HoverLinks text="ABOUT" />
                </li>
                <li onClick={() => scrollToSection("career")}>
                    <HoverLinks text="CAREER" />
                </li>
                <li onClick={() => scrollToSection("projects")}>
                    <HoverLinks text="PROJECTS" />
                </li>
                <li onClick={() => scrollToSection("contact")}>
                    <HoverLinks text="CONTACT" />
                </li>
            </ul>
            <motion.div
                className="nav-progress"
                style={{ scaleX: scrollYProgress }}
            />
        </nav>
    );
};

export default Navbar;
