import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Loading from "./Loading";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Projects from "./Projects";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = () => {
    const [isDesktopView, setIsDesktopView] = useState<boolean>(
        window.innerWidth > 1024
    );
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const resizeHandler = () => {
            setIsDesktopView(window.innerWidth > 1024);
        };
        resizeHandler();
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [isDesktopView]);

    const handleLoadComplete = useCallback(() => {
        setLoaded(true);
        document.body.style.overflow = "auto";
    }, []);

    return (
        <div className="container-main">
            {!loaded && <Loading onComplete={handleLoadComplete} />}
            <Cursor />
            <Navbar />
            <SocialIcons />
            <div
                style={{
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                }}
            >
                <div className="container-main">
                    <Landing />
                    <About />
                    <WhatIDo />
                    <Career />
                    <Projects />
                    {isDesktopView && (
                        <Suspense fallback={<div>Loading....</div>}>
                            <TechStack />
                        </Suspense>
                    )}
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
