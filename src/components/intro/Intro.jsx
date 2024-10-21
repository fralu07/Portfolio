import React, {useEffect, useState} from 'react';
import {motion, useReducedMotion} from "framer-motion";
import {INTRO_TEXT} from "../../constants/constants.jsx";

const sliding = {
    initialPicture: {
        x: 500,
        opacity: 0,
    },
    initialText: {
        x: -500,
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
    return (
        <div className="max-w-[1366px] mx-auto flex items-center w-full min-h-screen justify-center">
            <div className="flex flex-col lg:flex-row px-4 lg:px-6 max-lg:max-w-xl justify-center items-center gap-4 ">

                <div className="w-full pb-8 lg:w-1/2">
                    <div className="flex justify-center text-center ">
                        <motion.p className="desktop max-w-xl"
                                  variants={sliding}
                                  initial="initialText"
                                  whileInView="animateText">
                            {INTRO_TEXT}
                        </motion.p>
                        <p className="mobile max-w-xl">
                            {INTRO_TEXT}
                        </p>
                    </div>

                </div>
                <motion.div className="desktop w-full lg:w-1/2"
                            variants={sliding}
                            initial="initialPicture"
                            whileInView="animatePicture">
                    <div className="flex item-center justify-center">
                        <img className="rounded-2xl" src="./intro_ship.webp" alt=""/>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Intro;
