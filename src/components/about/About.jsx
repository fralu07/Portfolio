import {motion, useReducedMotion} from "framer-motion";
import "./about.scss";
import {ABOUT_TEXT} from "../../constants/constants.jsx";
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
    initialTitle: {
        y: -100,
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
    },
    animateTitle: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,

        }
    }
}

const About = () => {

    return (
        <div className="max-w-[1366px] mx-auto flex items-center w-full min-h-screen justify-center">
            <div className="flex flex-col">
                <motion.div className="desktop flex justify-start w-full min-h-[20vh] py-12 px-4 lg:px-6"
                            variants={sliding}
                            initial="initialTitle"
                            whileInView="animateTitle">
                    <h2 className="text-5xl font-bold">Über Francesco</h2>
                </motion.div>
                <div className="mobile flex justify-start w-full min-h-[20vh] py-12 px-4 lg:px-6">
                    <h2 className="text-3xl font-bold">Über Francesco</h2>
                </div>
                <div
                    className="flex flex-col lg:flex-row px-4 lg:px-6 max-lg:max-w-xl justify-center items-center gap-8 ">
                    <motion.div
                        className="desktop w-full lg:w-1/2"
                        variants={sliding}
                        initial="initialPicture"
                        whileInView="animatePicture"
                    >
                        <div className="flex item-center justify-center">
                            <img className="lg:rounded-2xl rounded-xl" src="./segeln.jpeg" alt=""></img>
                        </div>
                    </motion.div>
                    <div className="mobile w-full">
                        <div className="flex item-center justify-center">
                            <img className="lg:rounded-2xl rounded-md" src="./segeln.jpeg" alt=""></img>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 content-center">
                        <div className="flex justify-center lg:justify-start">
                            <motion.p
                                className="desktop"
                                variants={sliding}
                                initial="initialText"
                                whileInView="animateText"
                            >
                                {ABOUT_TEXT}
                            </motion.p>
                            <p className="mobile">{ABOUT_TEXT}</p>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;