import { useContent } from "../content";
import "./styles/About.css";

const About = () => {
    const { about } = useContent();

    return (
        <section className="section" id="about" aria-labelledby="about-title">
            <h2 className="section-title" id="about-title">
                About
            </h2>
            <div className="about-body">
                {about.paragraphs.map((para) => (
                    <p className="prose" key={para}>
                        {para}
                    </p>
                ))}

                <h3 className="about-subtitle">Results I can point to</h3>
                <ul className="outcomes">
                    {about.outcomes.map((o) => (
                        <li key={o.figure}>
                            <span className="outcome-figure">{o.figure}</span>
                            <span>{o.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default About;
