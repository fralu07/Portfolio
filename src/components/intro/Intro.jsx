import React, {useEffect, useState} from 'react';
import {motion, useReducedMotion} from "framer-motion";
import {INTRO_TEXT} from "../../constants/constants.jsx";

const sliding = {
    initialPicture: {
        x: -500,
        opacity: 0,
    },
    initialText: {
        x: 500,
        opacity: 0,
    },
    animatePicture: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
    animateText: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
};

const Intro = () => {
    const shouldReduceMotion = useReducedMotion();
    const [isMdOrLarger, setIsMdOrLarger] = useState(true);

    // Verwende useEffect, um die Bildschirmgröße zu überwachen
    useEffect(() => {
        const handleResize = () => {
            setIsMdOrLarger(window.innerWidth >= 768);
        };

        handleResize(); // Initiale Überprüfung der Bildschirmgröße
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="max-w-[1366px] mx-auto flex justify-center items-center min-h-screen overflow-hidden overflow-y-auto py-8 px-4 lg:px-0 max-lg:max-w-xl w-full">
            <div className="flex flex-col justify-center items-center">

                <div className="w-full pb-8 lg:w-1/2">
                    <div className="flex justify-center text-center">
                        {!shouldReduceMotion && isMdOrLarger ? (
                            <motion.p className="max-w-xl"
                                      variants={sliding}
                                      initial="initialText"
                                      whileInView="animateText">
                                {INTRO_TEXT}
                            </motion.p>
                        ) : (
                            <p className="max-w-xl">{INTRO_TEXT}</p>
                        )}
                    </div>
                </div>
                {!shouldReduceMotion && isMdOrLarger ? (
                    <motion.div className="w-full lg:w-1/2"
                                variants={sliding}
                                initial="initialPicture"
                                whileInView="animatePicture">
                        <div className="flex item-center justify-center">
                            <img className="rounded-2xl" src="./intro_ship.webp" alt="" />
                        </div>
                    </motion.div>
                ) : (
                    <div className="w-full lg:w-1/2">
                        <div className="flex item-center justify-center">
                            <img className="rounded-2xl" src="./intro_ship.webp" alt="" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Intro;
