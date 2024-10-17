import React from 'react';
import {motion} from "framer-motion";
import {ABOUT_TEXT, INTRO_TEXT} from "../../constants/constants.jsx";

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

const Intro = () => {
    return (
        <div className="max-w-[1366px] mx-auto flex justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="w-full pb-8 lg:w-1/2">
                    <div className="flex justify-center text-center ">
                        <motion.p className="max-w-xl" variants={sliding}
                                  initial="initialText" whileInView="animateText"> {INTRO_TEXT}</motion.p>

                    </div>
                </div>
                <motion.div className="w-full lg:w-1/2" variants={sliding}
                            initial="initialPicture" whileInView="animatePicture">
                    <div className="flex item-center justify-center">
                        <img className="rounded-2xl" src="./intro_ship.webp" alt=""></img>
                    </div>
                </motion.div>

            </div>

        </div>
    );
};

export default Intro;