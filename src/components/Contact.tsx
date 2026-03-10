import "./styles/Contact.css";
import HoverLinks from "./HoverLinks";

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="section-container contact-container" style={{ margin: "auto" }}>
                <h3>Contact</h3>
                <div className="contact-flex">
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
                        >
                            <HoverLinks text="Github" cursor />
                        </a>
                        <a
                            className="contact-social"
                            href="https://www.linkedin.com/in/vignesh-ram-sivakumar"
                            target="_blank"
                        >
                            <HoverLinks text="LinkedIn" cursor />
                        </a>

                        <div className="contact-certifications">
                            <h4>Certifications</h4>
                            <div className="cert-item">
                                Oracle Certified Foundations Associate{" "}
                                <span>— April 2024</span>
                            </div>
                            <div className="cert-item">
                                AWS Academy ML Foundations <span>— April 2023</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "80px", textAlign: "center" }}>
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
                        2025
                    </h5>
                </div>
            </div>
        </section>
    );
};

export default Contact;
