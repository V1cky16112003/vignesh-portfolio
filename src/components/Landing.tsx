import "./styles/Landing.css";

const headline = ["I build AI agents,", "then check whether", "their evaluations hold up."];

const Landing = () => {
    return (
        <section className="landing" id="top" aria-labelledby="landing-title">
            <h1 id="landing-title" className="landing-title">
                {headline.map((line, i) => (
                    <span className="landing-line" key={line} style={{ animationDelay: `${i * 120}ms` }}>
                        {line}
                    </span>
                ))}
            </h1>

            <div className="landing-meta">
                <p className="landing-intro">
                    I'm Vignesh Ram Sivakumar, an AI engineer in London finishing an MSc in Data
                    Science at King's College London. I work on agentic RAG, MCP servers and ML
                    evaluation.
                </p>
                <p className="landing-status">
                    <span className="status-dot" aria-hidden="true" />
                    London, UK. Available for full-time roles now.
                </p>
                <div className="landing-actions">
                    <a
                        className="button button-primary"
                        href="/Vignesh_Ram_Sivakumar_CV_LaTeX.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download CV
                    </a>
                    <a className="button" href="mailto:vigneshsiva9889@gmail.com">
                        Email me
                    </a>
                </div>
                <p className="landing-social">
                    <a href="https://github.com/V1cky16112003" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vignesh-ram-sivakumar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Landing;
