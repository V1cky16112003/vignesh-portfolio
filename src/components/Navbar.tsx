import { useState } from "react";
import { CV_URL } from "../content";
import "./styles/Navbar.css";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light";

const Navbar = () => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    const toggleTheme = () => {
        const next: Theme = theme === "dark" ? "light" : "dark";
        if (next === "dark") document.documentElement.dataset.theme = "dark";
        else delete document.documentElement.dataset.theme;
        try {
            localStorage.setItem("theme", next);
        } catch {
            // Storage can be blocked; the toggle still works for this visit.
        }
        setTheme(next);
    };

    return (
        <header className="header">
            <div className="header-inner page">
                <a className="header-name" href="#top">
                    Vignesh Ram Sivakumar
                </a>
                <nav aria-label="Main">
                    <ul className="header-links">
                        <li>
                            <a href="#work">Work</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <a href={CV_URL} target="_blank" rel="noopener noreferrer">
                                CV
                            </a>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="theme-toggle"
                                onClick={toggleTheme}
                            >
                                {theme === "dark" ? "Light mode" : "Dark mode"}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
