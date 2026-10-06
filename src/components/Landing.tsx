import { CV_URL, useContent } from "../content";
import "./styles/Landing.css";

const Landing = () => {
    const { landing, contact } = useContent();

    return (
        <section className="landing" id="top" aria-labelledby="landing-title">
            <h1 id="landing-title" className="landing-title">
                {landing.headline.map((line, i) => (
                    <span className="landing-line" key={line} style={{ animationDelay: `${i * 120}ms` }}>
                        {line}
                    </span>
                ))}
            </h1>

            <div className="landing-meta">
                <p className="landing-intro">{landing.intro}</p>
                <p className="landing-status">
                    <span className="status-dot" aria-hidden="true" />
                    {landing.status}
                </p>
                <div className="landing-actions">
                    <a
                        className="button button-primary"
                        href={CV_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download CV
                    </a>
                    <a className="button" href={`mailto:${contact.email}`}>
                        Email me
                    </a>
                </div>
                <p className="landing-social">
                    <a href={contact.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a
                        href={contact.linkedin}
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
