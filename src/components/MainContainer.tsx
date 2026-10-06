import { useEffect, useState } from "react";
import { type Content, ContentContext, defaultContent, withDefaults } from "../content";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import CustomSections from "./CustomSections";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const MainContainer = () => {
    // Hold the page until saved content arrives so edited text never flashes over the defaults.
    const [content, setContent] = useState<Content | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3000);
        fetch("/api/content", { signal: controller.signal })
            .then((res) => (res.ok ? res.json() : null))
            .then((saved) => setContent(saved ? withDefaults(saved) : defaultContent))
            .catch(() => setContent(defaultContent))
            .finally(() => clearTimeout(timeout));
        return () => controller.abort();
    }, []);

    if (!content) return null;

    return (
        <ContentContext.Provider value={content}>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <Navbar />
            <main id="main" className="page">
                <Landing />
                <About />
                <Projects />
                <Skills />
                <CustomSections />
                <Career />
                <Contact />
            </main>
        </ContentContext.Provider>
    );
};

export default MainContainer;
