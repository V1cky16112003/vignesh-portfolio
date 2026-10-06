import { toTel, useContent } from "../content";
import "./styles/Contact.css";

const Contact = () => {
    const { contact } = useContent();

    return (
        <>
            <section className="section" id="contact" aria-labelledby="contact-title">
                <h2 className="section-title" id="contact-title">
                    Contact
                </h2>
                <div>
                    <p className="contact-lead">{contact.lead}</p>
                    <p className="contact-email">
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </p>

                    <dl className="contact-details">
                        <div>
                            <dt>Phone</dt>
                            <dd>
                                <a href={toTel(contact.phone)}>{contact.phone}</a>
                            </dd>
                        </div>
                        <div>
                            <dt>Location</dt>
                            <dd>{contact.location}</dd>
                        </div>
                        <div>
                            <dt>Elsewhere</dt>
                            <dd>
                                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                                ,{" "}
                                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </dd>
                        </div>
                        {contact.certifications.length > 0 && (
                            <div>
                                <dt>Certifications</dt>
                                {contact.certifications.map((cert) => (
                                    <dd key={cert}>{cert}</dd>
                                ))}
                            </div>
                        )}
                        {contact.publications.length > 0 && (
                            <div>
                                <dt>Publication</dt>
                                {contact.publications.map((pub) => (
                                    <dd key={pub.title}>
                                        <a href={pub.url} target="_blank" rel="noopener noreferrer">
                                            {pub.title}
                                        </a>
                                        , {pub.year}
                                    </dd>
                                ))}
                            </div>
                        )}
                    </dl>
                </div>
            </section>
            <footer className="footer">
                <p>
                    Vignesh Ram Sivakumar, 2026. Designed and built by{" "}
                    <a className="footer-quiet" href="/admin">
                        me.
                    </a>
                </p>
            </footer>
        </>
    );
};

export default Contact;
