import { useEffect, useState } from "react";
import "./styles/Navbar.css";
import HoverLinks from "./HoverLinks";

const Navbar = () => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Only show navbar when near the top of the page
            setHidden(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className="header"
            style={{
                transform: hidden ? "translate(-50%, -100%)" : "translate(-50%, 0)",
                transition: "transform 0.4s ease-in-out",
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
        </nav>
    );
};

export default Navbar;
