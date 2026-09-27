import "./styles/About.css";

const outcomes = [
    { figure: "50,000", text: "ArXiv papers indexed by my LangGraph research agent" },
    { figure: "0.80", text: "RAGAS faithfulness bar that CI enforces before any merge" },
    { figure: "0.17pp", text: "gap between my reproduction and a published 71.28% result, which I showed was leakage" },
    { figure: "10", text: "MCP tools served from a stateless, authenticated Vercel deployment" },
];

const skills = [
    {
        area: "AI and ML",
        items: "Python, PyTorch, TensorFlow, graph neural networks, Transformers, LangGraph, RAG, NLP, computer vision, multimodal models, OWASP LLM Top 10",
    },
    {
        area: "Backend and deployment",
        items: "FastAPI, Model Context Protocol (FastMCP, Starlette), PostgreSQL with pgvector, MySQL, SQL, Docker, CI/CD with GitHub Actions, MLflow, Vercel serverless, Azure Cognitive Services",
    },
];

const About = () => {
    return (
        <section className="section" id="about" aria-labelledby="about-title">
            <h2 className="section-title" id="about-title">
                About
            </h2>
            <div className="about-body">
                <p className="prose">
                    I'm an MSc Data Science student at King's College London (71.7% in semester
                    one, on track for a Distinction) who builds agentic systems end to end. That
                    covers a production LangGraph RAG agent over 50,000 ArXiv papers with a
                    Critic-driven retry loop and a CI-gated RAGAS quality bar, and an MCP server
                    that lets Claude Desktop and Claude Web drive an app directly.
                </p>
                <p className="prose">
                    My final-year project audits a published IEEE TAFFC 2025 emotion-recognition
                    benchmark and shows its headline number is an evaluation-leakage artefact,
                    backed by statistically validated honest baselines. At a stealth startup I
                    designed the authorization policy layer for an AI agent security runtime,
                    mapping the OWASP Agentic and LLM Top 10 onto a Cedar-ready decision matrix.
                </p>

                <h3 className="about-subtitle">Results I can point to</h3>
                <ul className="outcomes">
                    {outcomes.map((o) => (
                        <li key={o.figure}>
                            <span className="outcome-figure">{o.figure}</span>
                            <span>{o.text}</span>
                        </li>
                    ))}
                </ul>

                <h3 className="about-subtitle">Tools I use</h3>
                <dl className="skills">
                    {skills.map((s) => (
                        <div key={s.area}>
                            <dt>{s.area}</dt>
                            <dd>{s.items}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default About;
