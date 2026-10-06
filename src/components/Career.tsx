import { useContent } from "../content";
import "./styles/Career.css";

const Career = () => {
    const { career } = useContent();

    return (
        <section className="section" id="experience" aria-labelledby="experience-title">
            <h2 className="section-title" id="experience-title">
                Experience and education
            </h2>
            <ol className="timeline">
                {career.map((item) => (
                    <li className="timeline-item" key={`${item.year}-${item.role}`}>
                        <p className="timeline-year">{item.year}</p>
                        <div>
                            <h3 className="timeline-role">{item.role}</h3>
                            <p className="timeline-company">{item.company}</p>
                            <p className="timeline-description">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default Career;
