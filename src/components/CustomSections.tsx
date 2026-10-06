import { useContent } from "../content";
import "./styles/About.css";

// Sections added from /admin, laid out like About: title in the margin, prose alongside.
const CustomSections = () => {
    const { sections } = useContent();

    return (
        <>
            {sections.map((section) => (
                <section
                    className="section"
                    id={section.id}
                    key={section.id}
                    aria-labelledby={`${section.id}-title`}
                >
                    <h2 className="section-title" id={`${section.id}-title`}>
                        {section.title}
                    </h2>
                    <div>
                        {section.paragraphs.map((para) => (
                            <p className="prose" key={para}>
                                {para}
                            </p>
                        ))}
                    </div>
                </section>
            ))}
        </>
    );
};

export default CustomSections;
