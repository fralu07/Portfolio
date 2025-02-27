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
    initialTitle: {
        y: -100,
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


function ProjectSection({
                            imageSrc,
                            imageAlt,
                            text,
                            textMotionVariants,
                            imageMotionVariants,
                            reverse,
                            initText,
                            initPic
                        }) {
    // Verwende mediaQuery, um zu überprüfen, ob die Auflösung unter "md" liegt
    const isMdOrLarger = window.matchMedia("(min-width: 768px)").matches;

// Alternativ kannst du auch die bevorzugten Einstellungen des Nutzers für reduzierte Bewegung abfragen
    const shouldReduceMotion = useReducedMotion();


    return <div
        className="flex flex-col lg:flex-row px-4 lg:px-6 max-lg:max-w-xl justify-center items-center">
        <motion.div
            className="desktop w-full lg:w-1/2 py-4"
            variants={imageMotionVariants}
            initial="initialPicture"
            whileInView="animatePicture">
            <div className="flex item-center justify-center">
                <img className="lg:rounded-2xl rounded-xl"
                     src={imageSrc} alt={imageAlt}></img>
            </div>
        </motion.div>
        <div className="mobile flex lg:w-5/12 pt-10 pb-4 lg:pb-0 justify-center">
            <img className=" lg:rounded-2xl rounded-md object-cover lg:w-80 lg:h-72 xl:w-96 xl:h-82 content-center"
                 src={imageSrc} alt=""></img>
        </div>

        <p className="mobile content-center text-start ">
            {text}
        </p>
        <div className="flex justify-center w-full lg:w-7/12 pr-4 lg:pr-8">
            <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-start pb-10">
                <motion.p className="desktop content-center text-start text-base lg:pl-6"
                          variants={textMotionVariants}
                          initial="initialText"
                          whileInView="animateText">
                    {text}
                </motion.p>
            </div>
        </div>

    </div>
}


const Projects = () => {

    return (
        <div className="max-w-[1366px] mx-auto flex lg:items-center justify-center min-h-screen">
            <div className="flex flex-col">
                <motion.div className="desktop flex justify-start w-full min-h-[20vh] py-12 px-4 lg:px-6"
                            variants={sliding}
                            initial="initialTitle"
                            whileInView="animateTitle">
                    <h2 className="text-5xl font-bold">Meine Projekte</h2>
                </motion.div>
                <div className="mobile flex justify-start w-full py-4 px-4 lg:px-6">
                    <h2 className="text-3xl font-bold">Meine Projekte</h2>
                </div>
                <div className="flex flex-row h-full py-4 lg:py-0">
                    <motion.div className="flex flex-col h-full gap-4">

                        <ProjectSection
                            imageSrc="./glasfaserausbau.avif"
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
                    </motion.div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Projects;