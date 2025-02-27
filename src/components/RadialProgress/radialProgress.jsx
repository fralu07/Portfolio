import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const RadialProgress = ({ size, radius, progress, text1, text2, color }) => {
    const controls = useAnimation();
    const width = `w-${size}`;
    const height = `h-${size}`;
    const circumference = Number((2 * Math.PI * radius).toFixed(1));

    useEffect(() => {
        controls.start({ progress: progress });
    }, [progress, controls]);

    return (
        <div className={`relative ${width} ${height}`}>
            <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Hintergrundkreis */}
                <circle
                    className="text-gray-200 stroke-current"
                    strokeWidth="3"
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="transparent"
                />

                {/* Fortschrittskreis (animiert mit whileInView) */}
                <motion.circle
                    className={`${color} stroke-current`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="transparent"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }} // Startwert
                    animate={controls}
                    whileInView={{
                        strokeDashoffset: [circumference, circumference - (circumference * progress) / 100],
                    }} // Animiert von 0 auf progress
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                    viewport={{amount: 0.5 }} // Trigger nur einmal, wenn 50% sichtbar
                />

                {/* Text */}
                <motion.text
                    x="50"
                    y="50"
                    fontSize="7"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="lightgray"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ amount: 0.5 }}
                >
                    <tspan x="50" dy="-0.6em">{text1}</tspan>
                    <tspan x="50" dy="1.2em">{text2}</tspan>
                </motion.text>
            </svg>
        </div>
    );
};

export default RadialProgress;
