import React from 'react';
import {motion, useReducedMotion} from "framer-motion";
import {PROJECTS_MEDINSPECT_TEXT, PROJECTS_WOMO_TEXT} from "../../constants/constants.jsx";


const sliding = {
    initialPicture: {
        x: -50,
        opacity: 0
    },
    initialPicture2: {
        x: 50,
        opacity: 0
    },
    initialText: {
        x: 50,
        opacity: 0
    },
    initialText2: {
        x: -50,
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
    // Verwende mediaQuery, um zu überprüfen, ob die Auflösung unter "md" liegt
    const isMdOrLarger = window.matchMedia("(min-width: 768px)").matches;

// Alternativ kannst du auch die bevorzugten Einstellungen des Nutzers für reduzierte Bewegung abfragen
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className={`flex flex-col lg:flex-row flex-1 justify-center gap-4 lg:pl-2 px-4 lg:px-0`}>
                <motion.div className="max-w-xl lg:w-1/2" variants={imageMotionVariants} initial="initialPicture"
                            whileInView="animatePicture">
                    <div className="flex item-center justify-center">
                        <img className="rounded-2xl" src={imageSrc} alt={imageAlt}></img>
                    </div>
                </motion.div>
            <div className="flex items-center w-full lg:w-1/2 lg:pl-8">
                <div className="flex justify-center content-center lg:justify-start">
                        <motion.p className="max-w-xl" variants={textMotionVariants} initial="initialText"
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
        <div className="max-w-[1366px] mx-auto flex items-center justify-center overflow-hidden">
            <div className="flex flex-col gap-4 py-8 ">
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