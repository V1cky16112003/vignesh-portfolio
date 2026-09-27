import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Projects from "./Projects";

const MainContainer = () => {
    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <Navbar />
            <main id="main" className="page">
                <Landing />
                <About />
                <Projects />
                <Career />
                <Contact />
            </main>
        </>
    );
};

export default MainContainer;
