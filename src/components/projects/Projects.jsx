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

function ProjectSection({imageSrc, imageAlt, text, textMotionVariants, imageMotionVariants, reverse, initText, initPic}) {
    return (
        <div className={`flex flex-col lg:flex-row justify-center gap-4 ${reverse ? 'lg:flex-row-reverse' : ''} px-2`}>
            <motion.div className="max-w-xl lg:w-1/2" variants={imageMotionVariants} initial={initPic}
                        whileInView="animatePicture">
                <div className="flex item-center justify-center">
                    <img className="rounded-2xl" src={imageSrc} alt={imageAlt}></img>
                </div>
            </motion.div>
            <div className="w-full lg:w-1/2 pl-2">
                <div className="flex justify-center content-center lg:justify-start">
                    <motion.p className="max-w-xl" variants={textMotionVariants} initial={initText}
                              whileInView="animateText">
                        {text}
                    </motion.p>
                </div>
            </div>
        </div>
    );
}


const Projects = () => {
    return (
        <div className="max-w-[1366px] mx-auto flex items-center justify-center h-screen">
            <div className="flex flex-col gap-20">
                <ProjectSection
                    imageSrc="./medinspect.jpg"
                    imageAlt="Medinspect"
                    text={PROJECTS_MEDINSPECT_TEXT}
                    textMotionVariants={sliding}
                    imageMotionVariants={sliding}
                    initText="initialText"
                    initPic="initialPicture"
                />
                <ProjectSection
                    imageSrc="/womo_client.png"
                    imageAlt="Womo Client"
                    text={PROJECTS_WOMO_TEXT}
                    textMotionVariants={sliding}
                    imageMotionVariants={sliding}
                    initText="initialText2"
                    initPic="initialPicture2"
                    reverse={true} // Für das umgekehrte Layout
                />
            </div>
        </div>
)
    ;
};

export default Projects;