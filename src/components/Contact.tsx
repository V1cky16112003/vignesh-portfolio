import { motion } from "framer-motion";
import "./styles/Contact.css";
import HoverLinks from "./HoverLinks";

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div
                className="section-container contact-container"
                style={{ margin: "auto" }}
            >
                {/* Availability badge */}
                <motion.div
                    className="contact-availability"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="availability-dot" />
                    Available for Full-Time roles immediately
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Contact
                </motion.h3>

                <motion.div
                    className="contact-flex"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.65, delay: 0.2 }}
                >
                    <div className="contact-box">
                        <h4>Email</h4>
                        <p>
                            <a href="mailto:vigneshsiva9889@gmail.com">
                                <HoverLinks text="vigneshsiva9889@gmail.com" cursor />
                            </a>
                        </p>
                        <h4>Phone</h4>
                        <p>+44 07818460941</p>
                    </div>
                    <div className="contact-box">
                        <h4>Education</h4>
                        <p>MSc Data Science — King's College London</p>
                        <p>B.Tech CSE — SRM Institute (GPA: 8.73/10)</p>
                    </div>
                    <div className="contact-box">
                        <h4>Social</h4>
                        <a
                            className="contact-social"
                            href="https://github.com/V1cky16112003"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <HoverLinks text="Github" cursor />
                        </a>
                        <a
                            className="contact-social"
                            href="https://www.linkedin.com/in/vignesh-ram-sivakumar"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <HoverLinks text="LinkedIn" cursor />
                        </a>

                        <div className="contact-certifications">
                            <h4>Certifications</h4>
                            <div className="cert-item">
                                Model Context Protocol: Advanced Topics{" "}
                                <span>— Anthropic, 2026</span>
                            </div>
                            <div className="cert-item">
                                AI Fluency Framework &amp; Foundations{" "}
                                <span>— Anthropic, 2026</span>
                            </div>
                        </div>

                        <div className="contact-certifications">
                            <h4>Publications</h4>
                            <div className="cert-item">
                                <a
                                    href="https://doi.org/10.1063/5.0331220"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Survey on Speech Recognition, Transcription &amp;
                                    Summarisation Techniques
                                </a>{" "}
                                <span>— 2024</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    style={{ marginTop: "80px", textAlign: "center" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Designed and Developed by{" "}
                        <span style={{ color: "var(--accentColor)" }}>
                            Vignesh Ram Sivakumar
                        </span>
                    </h2>
                    <h5
                        style={{
                            fontSize: "20px",
                            fontWeight: 500,
                            opacity: 0.5,
                            textAlign: "center",
                        }}
                    >
                        2026
                    </h5>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
