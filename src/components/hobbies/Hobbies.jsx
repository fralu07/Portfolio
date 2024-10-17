import React from 'react';
import {motion} from "framer-motion";
import {
    HOBBIES_CODING_TEXT,
    HOBBIES_CROSSFIT_TEXT,
    HOBBIES_SAILING_TEXT
} from "../../constants/constants.jsx";


const sliding = {
    initialCard1: {
        x: -100,
        opacity: 0
    },
    initialCard2: {
        x: -300,
        opacity: 0
    },
    initialCard3: {
        y: 500,
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
    },
    animateCard3: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,

        }
    },
}

function Edu_Card(props) {
    return <>
        <motion.div className="w-full h-96">
            <img className="rounded-t-2xl w-full h-full object-cover" src={props.picture} alt=""/>
        </motion.div>
        <div className="w-full pt-8">
            <div className="flex justify-center lg:justify-start p-2">
                <motion.p className="max-w-xl text-gray-300">{props.text}</motion.p>

            </div>
        </div>
    </>;
}

const Hobbies = () => {
    return (
        <div className="max-w-[1366px] mx-auto flex items-center h-[140vh]">
            <div className="flex flex-col md:gap-20 max-md:gap-4">
                <div className="flex flex-row justify-between">
                    <motion.div className="border-2 border-gray-800 rounded-2xl lg:w-5/12"
                                variants={sliding}
                                initial="initialCard1" whileInView="animateCard1">
                        <Edu_Card picture="/crossFit.jpeg" text={HOBBIES_CROSSFIT_TEXT}/>
                    </motion.div>
                    <motion.div className=" border-2 border-gray-800 rounded-2xl lg:w-5/12"
                                variants={sliding}
                                initial="initialCard2" whileInView="animateCard2">
                        <Edu_Card picture="/segeln_boot.png" text={HOBBIES_SAILING_TEXT}/>
                    </motion.div>
                </div>
                <div className="flex w-full justify-center">
                    <motion.div className="border-2 border-gray-800 rounded-2xl lg:w-5/12"
                                variants={sliding}
                                initial="initialCard3" whileInView="animateCard3">
                        <Edu_Card picture="/coding.png" text={HOBBIES_CODING_TEXT}/>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;