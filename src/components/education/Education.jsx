import React from 'react';
import {ABOUT_TEXT, EDUCATION_BSC_TEXT, EDUCATION_RTV_TEXT} from "../../constants/constants.jsx";
import {motion} from "framer-motion";

const sliding = {
    initialCard1: {
        x: -100,
        opacity: 0
    },
    initialCard2: {
        x: -300,
        opacity: 0
    },
    animateCard1: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,

        }
    },
    animateCard2: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,

        }
    }
}

function Edu_Card(props) {
    return (
        <div className="flex flex-col lg:max-w-lg">
            <motion.div className="lg:w-full lg:content-start content-center lg:h-96 h-72">
                <img className="lg:rounded-t-2xl lg:rounded-b-none rounded-xl object-cover h-full w-full lg:h-96 lg:w-full" src={props.picture} alt="" />
            </motion.div>
            <div className="w-full flex-1 overflow-y-auto lg:pt-2 lg:px-2">
                <div className="flex justify-center md:justify-start py-2">
                    <motion.p className="px-2 lg:px-0 text-base md:text-md lg:text-lg">{props.text}</motion.p>
                </div>
            </div>
        </div>
    );
}


const Education = () => {
    return (
        <div className="max-w-[1366px] p-2 mx-auto flex lg:items-center h-screen justify-center overflow-y-auto">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-32 lg:py-8">
                <motion.div className="flex flex-col border-2 border-gray-800 rounded-2xl lg:w-6/12"
                            variants={sliding}
                            initial="initialCard1" whileInView="animateCard1">
                    <Edu_Card picture="/FHNW.jpg" text={EDUCATION_BSC_TEXT}/>
                </motion.div>
                <motion.div className="flex flex-col border-2 border-gray-800 rounded-2xl lg:w-6/12"
                            variants={sliding}
                            initial="initialCard2" whileInView="animateCard2">
                    <Edu_Card picture="/tv.jpg" text={EDUCATION_RTV_TEXT}/>
                </motion.div>
            </div>
        </div>
    );
};

export default Education;