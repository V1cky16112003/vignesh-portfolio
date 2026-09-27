import "./styles/Career.css";

const careerData = [
    {
        year: "2026",
        role: "AI Security Researcher / Policy Architect",
        company: "Guard AI (stealth startup)",
        description:
            "Designed and stress-tested the authorization policy layer of a runtime security system mediating every action an autonomous AI agent proposes. Authored a Cedar-ready policy specification mapping the full OWASP Agentic & LLM Top 10 onto an action×resource decision matrix, and architected a core information-flow model — structural provenance tracking, two-axis authorization, and a bounded declassification lattice — validated against real production incidents including EchoLeak (CVE-2025-32711) and MCP Tool Poisoning.",
    },
    {
        year: "2025",
        role: "MSc in Data Science",
        company: "King's College London",
        description:
            "Expected Distinction — Semester 1 average: 71.7% (Distinction in 3 subjects). Key modules: Neural Networks & Deep Learning, Data Mining, Big Data Technologies, Statistics. Dissertation supervised by Dr. Helen Yannakoudakis.",
    },
    {
        year: "2024",
        role: "AI Intern, Clustering & Deep Learning",
        company: "4i Apps Solutions",
        description:
            "Built a K-Means segmentation pipeline on ~3–4 GB of purchase data for customer behavioural analysis. Trained and evaluated TensorFlow/Keras deep learning models for image classification and NLP tasks.",
    },
    {
        year: "2023",
        role: "Data Science Intern",
        company: "4i Apps Solutions",
        description:
            "Built an end-to-end classification pipeline — data cleaning with Pandas/NumPy, EDA, and model development with Scikit-Learn. Produced Matplotlib and Seaborn dashboards for client business reporting.",
    },
    {
        year: "2021",
        role: "B.Tech Computer Science & Engineering",
        company: "SRM Institute of Science & Technology",
        description:
            "First Class with Distinction — GPA 8.73/10. Built a strong foundation in algorithms, data structures, and software engineering across a 4-year programme.",
    },
];

const Career = () => {
    return (
        <section className="section" id="experience" aria-labelledby="experience-title">
            <h2 className="section-title" id="experience-title">
                Experience and education
            </h2>
            <ol className="timeline">
                {careerData.map((item) => (
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
