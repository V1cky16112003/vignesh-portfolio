import "./styles/Contact.css";

const Contact = () => {
    return (
        <>
            <section className="section" id="contact" aria-labelledby="contact-title">
                <h2 className="section-title" id="contact-title">
                    Contact
                </h2>
                <div>
                    <p className="contact-lead">
                        I'm in London and available for full-time AI engineering roles now. Email is
                        the fastest way to reach me.
                    </p>
                    <p className="contact-email">
                        <a href="mailto:vigneshsiva9889@gmail.com">vigneshsiva9889@gmail.com</a>
                    </p>

                    <dl className="contact-details">
                        <div>
                            <dt>Phone</dt>
                            <dd>
                                <a href="tel:+447818460941">+44 07818460941</a>
                            </dd>
                        </div>
                        <div>
                            <dt>Location</dt>
                            <dd>London, UK</dd>
                        </div>
                        <div>
                            <dt>Elsewhere</dt>
                            <dd>
                                <a href="https://github.com/V1cky16112003" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                                ,{" "}
                                <a
                                    href="https://www.linkedin.com/in/vignesh-ram-sivakumar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt>Certifications</dt>
                            <dd>Model Context Protocol: Advanced Topics, Anthropic, 2026</dd>
                            <dd>AI Fluency Framework &amp; Foundations, Anthropic, 2026</dd>
                        </div>
                        <div>
                            <dt>Publication</dt>
                            <dd>
                                <a href="https://doi.org/10.1063/5.0331220" target="_blank" rel="noopener noreferrer">
                                    Survey on Speech Recognition, Transcription &amp; Summarisation
                                    Techniques
                                </a>
                                , 2024
                            </dd>
                        </div>
                    </dl>
                </div>
            </section>
            <footer className="footer">
                <p>Vignesh Ram Sivakumar, 2026. Designed and built by me.</p>
            </footer>
        </>
    );
};

export default Contact;
