import { useContent } from "../content";
import "./styles/Projects.css";

const Projects = () => {
    const { projects } = useContent();

    return (
        <section className="section projects" id="work" aria-labelledby="work-title">
            <h2 className="section-title" id="work-title">
                Projects
            </h2>
            {projects.map((project) => (
                <article
                    className={project.featured ? "project project-featured" : "project"}
                    key={project.title}
                >
                    <div className="project-meta">
                        {project.kind.map((part, i) => (
                            <p key={part} className={i === 0 ? "project-kind" : undefined}>
                                {part}
                            </p>
                        ))}
                        <p>{project.date}</p>
                    </div>
                    <div className="project-body">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-description">
                            {project.description.map((para) => (
                                <p key={para}>{para}</p>
                            ))}
                        </div>
                        <p className="project-tech">
                            <span className="visually-hidden">Built with: </span>
                            {project.tech.join(", ")}
                        </p>
                        {project.link && (
                            <a
                                className="project-link"
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source code on GitHub
                                <span className="visually-hidden"> for {project.title}</span>
                            </a>
                        )}
                    </div>
                </article>
            ))}
        </section>
    );
};

export default Projects;
