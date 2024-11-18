import RadialProgress from "../RadialProgress/radialProgress.jsx";
import {motion} from "framer-motion";
import React from "react";

// Funktion zur Erstellung eines wiederverwendbaren Skill-Elements
const SkillCard = ({
                       title,
                       subTitle,
                       experienceYears,
                       level,
                       progress,
                       textBoxHeight,
                       circleColors,
                       variants,
                       initial,
                       animate,
                       paddingTop,
                       reverse
                   }) => {
    return (
        <div>
            {!reverse ? (
                <motion.div className={`flex flex-row text-xl ${paddingTop} `}
                            variants={variants}
                            initial={initial} whileInView={animate}
                            viewport={{once: true}}
                >
                    <div className={`md:w-80 h-${textBoxHeight} content-center md:content-start  md:pt-20  md:text-xl ${reverse ? '' : 'text-end'}`}>
                        <div className="font-bold">{subTitle}</div>
                        <div>Berufserfahrung: <br/><span className="font-bold">{experienceYears}</span></div>
                        <div>Level: <span className="font-bold"><br/>{level}</span></div>
                    </div>
                    <div className="">
                        <RadialProgress size={50} radius={35} progress={progress} text={title} color={circleColors}/>
                    </div>
                </motion.div>
            ) : (
                <motion.div className={`flex flex-row text-xl ${paddingTop} `}
                            variants={variants}
                            initial={initial} whileInView={animate}
                            viewport={{once: true}}
                >
                    <div className="">
                        <RadialProgress size={50} radius={35} progress={progress} text={title} color={circleColors}/>
                    </div>
                    <div className={`md:w-80 h-${textBoxHeight} content-center md:content-start md:pt-20  md:text-xl ${reverse ? '' : 'text-end'}`}>
                        <div className="font-bold">{subTitle}</div>
                        <div>Berufserfahrung: <br/><span className="font-bold">{experienceYears}</span></div>
                        <div>Level: <span className="font-bold"><br/>{level}</span></div>
                    </div>

                </motion.div>)}
        </div>
    )
        ;
};

const Skills = () => {
    const textBoxHeight = '64';
    const circleColors = 'text-yellow-500';

    const sliding = {
        initialCard: {
            y: 50,
            opacity: 0
        },
        initialCard1: {
            y: 60,
            opacity: 0
        },
        animateCard: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2,
            }
        },
        initialTitle: {
            y: -200,
            opacity: 0
        },
        animateTitle: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2,

            }
        }
    };

    return (
        <div className="max-w-[1366px] mx-auto flex flex-col items-center content-center justify-center py-4 gap-9 md:gap-0">
            <div className="flex flex-col w-full items-center">
                <motion.div className="desktop flex justify-start w-full min-h-[20vh] py-12 px-4 lg:px-6"
                            variants={sliding}
                            initial="initialTitle"
                            whileInView="animateTitle">
                    <h2 className="text-5xl font-bold">Meine Skills</h2>
                </motion.div>
                <div className="mobile flex justify-start w-full min-h-[20vh] py-12 px-4 lg:px-6">
                    <h2 className="text-3xl font-bold">Meine Skills</h2>
                </div>
                <div className="flex xl:flex-row flex-col gap-9 w-full lg:ml-[66%] max-lg:items-center px-4">
                    <SkillCard
                        title="Java"
                        subTitle="Java"
                        experienceYears="3 Jahre"
                        level="Erweiterte Kenntnisse"
                        progress={60}
                        textBoxHeight={textBoxHeight}
                        circleColors={circleColors}
                        variants={sliding}
                        initial="initialCard"
                        animate="animateCard"
                        paddingTop=""
                        reverse={false}/>
                </div>
                <div className="flex xl:flex-row flex-col gap-9 w-full lg:ml-[33%] max-lg:items-center px-4">
                    <SkillCard
                        className=""
                        title="Javascript"
                        subTitle="Javascript"
                        experienceYears="3 Jahre"
                        level="Erweiterte Kenntnisse"
                        progress={50}
                        textBoxHeight={textBoxHeight}
                        circleColors={circleColors}
                        variants={sliding}
                        initial="initialCard1"
                        animate="animateCard"
                        paddingTop=""
                    reverse={true}
                />
            </div>
            <div className="flex xl:flex-row flex-col gap-9 w-full lg:ml-[66%] max-lg:items-center px-4">
                <SkillCard
                    title="Mobile"
                    subTitle="Kotlin / Swift"
                    experienceYears="1 Jahr"
                    level="Grundlegende Kenntnisse"
                    progress={35}
                    textBoxHeight={textBoxHeight}
                    circleColors={circleColors}
                    variants={sliding}
                    initial="initialCard"
                    animate="animateCard"
                    paddingTop=""
                    reverse={false}
                />
            </div>
            <div className="flex xl:flex-row flex-col gap-9 w-full lg:ml-[33%] max-lg:items-center px-4">
                <SkillCard
                    title="Framework"
                    subTitle="Spring Boot / React"
                    experienceYears="3 Jahre"
                    level="Erweiterte Kenntnisse"
                    progress={60}
                    textBoxHeight={textBoxHeight}
                    circleColors={circleColors}
                    variants={sliding}
                    initial="initialCard"
                    animate="animateCard"
                    paddingTop=""
                    reverse={true}
                />
            </div>
            <div className="flex xl:flex-row flex-col gap-9 w-full lg:ml-[66%] max-lg:items-center px-4">
                <SkillCard
                    title="DevOps"
                    subTitle="Docker / Kubernetes / CI-CD"
                    experienceYears="1 Jahr"
                    level="Grundlegende Kenntnisse"
                    progress={30}
                    textBoxHeight={textBoxHeight}
                    circleColors={circleColors}
                    variants={sliding}
                    initial="initialCard"
                    animate="animateCard"
                    paddingTop=""
                    reverse={false}
                />

            </div>
            <div className="flex xl:flex-row flex-col gap-9 w-full lg:ml-[33%] max-lg:items-center px-4">
                <SkillCard
                    title="Python"
                    subTitle="Python"
                    experienceYears="2 Jahre"
                    level="Grundlegende Kenntnisse"
                    progress={35}
                    textBoxHeight={textBoxHeight}
                    circleColors={circleColors}
                    variants={sliding}
                    initial="initialCard"
                    animate="animateCard"
                    paddingTop=""
                    reverse={true}
                />
            </div>
        </div>
        </div>
    );
};

export default Skills;
