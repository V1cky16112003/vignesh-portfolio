import { useEffect, useState } from "react";
import "./styles/Loading.css";

const Loading = ({ onComplete }: { onComplete: () => void }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onComplete();
        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!visible) return null;

    return (
        <div className="loading-screen">
            <div className="loading-text">Vignesh Ram</div>
            <div className="loading-bar-container">
                <div className="loading-bar" />
            </div>
        </div>
    );
};

export default Loading;
