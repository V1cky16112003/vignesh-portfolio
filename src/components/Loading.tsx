import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./styles/Loading.css";

const Loading = ({ onComplete }: { onComplete: () => void }) => {
    const [count, setCount] = useState(0);
    const [exiting, setExiting] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const duration = 2000;
        const start = Date.now();

        const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 2);
            setCount(Math.floor(eased * 100));

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                setTimeout(() => {
                    setExiting(true);
                    setTimeout(() => {
                        onComplete();
                        setTimeout(() => setDone(true), 100);
                    }, 500);
                }, 250);
            }
        };

        requestAnimationFrame(tick);
    }, [onComplete]);

    if (done) return null;

    return (
        <motion.div
            className="loading-screen"
            animate={exiting ? { opacity: 0, y: -16 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
        >
            <motion.div
                className="loading-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                Vignesh Ram
            </motion.div>
            <div className="loading-bar-container">
                <div
                    className="loading-bar"
                    style={{ width: `${count}%`, transition: "width 0.06s linear" }}
                />
            </div>
            <motion.div
                className="loading-counter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                transition={{ delay: 0.3, duration: 0.4 }}
            >
                {count}%
            </motion.div>
        </motion.div>
    );
};

export default Loading;
