import Marquee from "react-fast-marquee";

const techItems = [
    "Python",
    "SQL",
    "C/C++",
    "Java",
    "TensorFlow",
    "Scikit-Learn",
    "NLP",
    "Computer Vision",
    "Generative AI",
    "LLMs",
    "Apache Spark",
    "Hadoop",
    "Tableau",
    "Matplotlib",
    "Seaborn",
    "D3.js",
    "FastAPI",
    "React.js",
    "Oracle Cloud",
    "MySQL",
    "Bloomberg Terminal",
    "ServiceNow",
];

const TechStack = () => {
    return (
        <section className="techstack">
            <h2>My Techstack</h2>
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    width: "100%",
                    transform: "translateY(-50%)",
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
                    {techItems.slice(11).map((item, i) => (
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
                    {[...techItems].reverse().map((item, i) => (
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
