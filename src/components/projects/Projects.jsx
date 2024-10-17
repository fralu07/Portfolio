import React from 'react';
import {motion} from "framer-motion";
import {
    ABOUT_TEXT,
    EDUCATION_BSC_TEXT,
    EDUCATION_RTV_TEXT,
    PROJECTS_MEDINSPECT_TEXT,
    PROJECTS_WOMO_TEXT
} from "../../constants/constants.jsx";


const sliding = {
    initialPicture: {
        x: -500,
        opacity: 0
    },
    initialPicture2: {
        x: 500,
        opacity: 0
    },
    initialText: {
        x: 500,
        opacity: 0
    },
    initialText2: {
        x: -500,
        opacity: 0
    },
    animatePicture: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,

        }
    },
    animateText: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,

        }
    }
}


const Projects = () => {
    return (
        <div className="max-w-[1366px] mx-auto flex items-center h-[140vh]">
            <div className="flex flex-col gap-20">
                <div className="flex flex-row">
                    <motion.div className="w-full lg:w-1/2" variants={sliding}
                                initial="initialPicture" whileInView="animatePicture">
                        <div className="flex item-center justify-center">
                            <img className="rounded-2xl" src="./medinspect.jpg" alt=""></img>
                        </div>
                    </motion.div>
                    <div className="w-full lg:w-1/2 pl-8">
                        <div className="flex justify-center content-center lg:justify-start">
                            <motion.p className="max-w-xl" variants={sliding}
                                      initial="initialText"
                                      whileInView="animateText"> {PROJECTS_MEDINSPECT_TEXT}</motion.p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap pt-32">
                        <div className="w-full lg:w-1/2 pl-8">
                            <div className="flex justify-center lg:justify-start">
                                <motion.p className="max-w-xl content-center text-start" variants={sliding}
                                          initial="initialText2"
                                          whileInView="animateText"> {PROJECTS_WOMO_TEXT}</motion.p>
                            </div>
                        </div>
                        <motion.div className="w-full lg:w-1/2" variants={sliding}
                                    initial="initialPicture2" whileInView="animatePicture">
                            <div className="flex item-center justify-center">
                                <img className="rounded-2xl" src="/womo_client.png" alt=""></img>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/*<div className="flex flex-row justify-between">*/}
            {/*    <motion.div className="flex flex-col border-2 border-gray-800 rounded-2xl lg:w-5/12"*/}
            {/*                variants={sliding}*/}
            {/*                initial="initialCard1" whileInView="animateCard1">*/}
            {/*        <Edu_Card picture="/medinspect.jpg" text={PROJECTS_MEDINSPECT_TEXT}/>*/}
            {/*    </motion.div>*/}
            {/*    <motion.div className="flex flex-col border-2 border-gray-800 rounded-2xl lg:w-5/12"*/}
            {/*                variants={sliding}*/}
            {/*                initial="initialCard2" whileInView="animateCard2">*/}
            {/*        <Edu_Card picture="/womo_client.png" text={PROJECTS_WOMO_TEXT}/>*/}
            {/*    </motion.div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Projects;