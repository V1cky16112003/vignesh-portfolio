import Marquee from "react-fast-marquee";

const techItems = [
    "Python",
    "SQL",
    "C/C++",
    "Java",
    "PyTorch",
    "TensorFlow",
    "Scikit-Learn",
    "GNNs",
    "LLMs",
    "Generative AI",
    "NLP",
    "Computer Vision",
    "Affective Computing",
    "EEG/EDA/BVP",
    "Multimodal Fusion",
    "Uncertainty Modelling",
    "Transfer Learning",
    "Oracle Cloud",
    "Azure",
    "FastAPI",
    "MySQL",
    "React.js",
    "Tableau",
    "Matplotlib",
    "Seaborn",
    "D3.js",
    "Apache Spark",
    "Hadoop",
    "Docker",
    "Bloomberg Terminal",
    "ServiceNow",
];

const TechStack = () => {
    return (
        <section
            style={{
                width: "100%",
                position: "relative",
                overflow: "clip",
                padding: "100px 0",
                margin: "50px auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "50px",
            }}
        >
            <h2
                style={{
                    fontSize: "80px",
                    textAlign: "center",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    margin: 0,
                }}
            >
                My Techstack
            </h2>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                <Marquee speed={40} gradient={false} direction="left">
                    {techItems.slice(0, 11).map((item, i) => (
                        <span
                            key={i}
                            style={{
                                display: "inline-block",
                                padding: "12px 30px",
                                margin: "0 10px",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "30px",
                                fontSize: "18px",
                                fontWeight: 400,
                                color: "#ccc",
                                letterSpacing: "1px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </Marquee>
                <Marquee speed={30} gradient={false} direction="right">
                    {techItems.slice(11, 21).map((item, i) => (
                        <span
                            key={i}
                            style={{
                                display: "inline-block",
                                padding: "12px 30px",
                                margin: "0 10px",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "30px",
                                fontSize: "18px",
                                fontWeight: 400,
                                color: "#ccc",
                                letterSpacing: "1px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </Marquee>
                <Marquee speed={35} gradient={false} direction="left">
                    {techItems.slice(21).map((item, i) => (
                        <span
                            key={i}
                            style={{
                                display: "inline-block",
                                padding: "12px 30px",
                                margin: "0 10px",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "30px",
                                fontSize: "18px",
                                fontWeight: 400,
                                color: "#ccc",
                                letterSpacing: "1px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default TechStack;
