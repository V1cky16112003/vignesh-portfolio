import { useContent } from "../content";
import "./styles/About.css";

const Skills = () => {
    const { skills } = useContent();

    return (
        <section className="section" id="skills" aria-labelledby="skills-title">
            <h2 className="section-title" id="skills-title">
                Skills
            </h2>
            <dl className="skills">
                {skills.map((s) => (
                    <div key={s.area}>
                        <dt>{s.area}</dt>
                        <dd>{s.items}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
};

export default Skills;
