import {motion, useReducedMotion} from "framer-motion";
import "./about.scss";
import {ABOUT_TEXT} from "../../constants/constants.jsx";
import {FaLinkedin} from "react-icons/fa";
import {useEffect, useState} from "react";

const sliding = {
    initialPicture: {
        x: -500,
        opacity: 0
    },
    initialText: {
        x: 500,
        opacity: 0
    },
    animatePicture: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,

        }
    },
    animateText: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,

        }
    }
}

const About = () => {
    const shouldReduceMotion = useReducedMotion();
    const [isMdOrLarger, setIsLgOrLarger] = useState(true);

    // Verwende useEffect, um die Bildschirmgröße zu überwachen
    useEffect(() => {
        const handleResize = () => {
            setIsLgOrLarger(window.innerWidth >= 1024);
        };

        handleResize(); // Initiale Überprüfung der Bildschirmgröße
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="max-w-[1366px] mx-auto flex items-center w-full min-h-screen justify-center">
            <div className="flex flex-col lg:flex-row lg:px-6 max-lg:max-w-xl justify-center items-center gap-4">

                {!shouldReduceMotion && isMdOrLarger ? (
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={sliding}
                        initial="initialPicture"
                        whileInView="animatePicture"
                    >
                        <div className="flex item-center justify-center px-4 lg:px-0">
                            <img className="lg:rounded-2xl rounded-xl" src="./segeln.jpeg" alt=""></img>
                        </div>
                    </motion.div>
                ) : (
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="flex item-center justify-center">
                            <img className="lg:rounded-2xl rounded-md" src="./segeln.jpeg" alt=""></img>
                        </div>
                    </div>
                )}

                <div className="w-full lg:w-1/2 px-4 content-center">
                    <div className="flex justify-center lg:justify-start">
                        {!shouldReduceMotion && isMdOrLarger ? (
                            <motion.p
                                className=""
                                variants={sliding}
                                initial="initialText"
                                whileInView="animateText"
                            >
                                {ABOUT_TEXT}
                            </motion.p>
                        ) : (
                            <p className="">{ABOUT_TEXT}</p>
                        )}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;