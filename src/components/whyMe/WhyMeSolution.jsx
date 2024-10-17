import React from 'react';
import {ABOUT_TEXT, WhatMatters} from "../../constants/constants.jsx";
import {motion} from "framer-motion";


const sliding = {
    initialText: {
        y: 500,
        opacity: 0
    },
    animateText: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,

        }
    }
}


const WhyMeSolution = () => {
    return (
        <div className="max-w-[1366px] mx-auto flex items-center h-screen">
                <div className="w-full pl-8">
                    <div className="flex justify-center ">
                        <motion.p className="max-w-xl text-center" variants={sliding}
                                  initial="initialText" whileInView="animateText"> {WhatMatters}</motion.p>

                    </div>
                </div>

        </div>
)
    ;
};

export default WhyMeSolution;