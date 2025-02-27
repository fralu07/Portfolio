import RadialProgress from "../RadialProgress/radialProgress.jsx";
import {motion} from "framer-motion";
import React from "react";

// Funktion zur Erstellung eines wiederverwendbaren Skill-Elements
const SkillCard = ({
                       title1,
                       title2,
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
                >
                    <div className={`md:w-80 h-${textBoxHeight} content-center md:content-start  md:pt-20  md:text-xl ${reverse ? '' : 'text-end'}`}>
                        <div className="font-bold">{subTitle}</div>
                        <div>Berufserfahrung: <br/><span className="font-bold">{experienceYears}</span></div>
                        <div>Level: <span className="font-bold"><br/>{level}</span></div>
                    </div>
                    <div className="">
                        <RadialProgress size={50} radius={35} progress={progress} text1={title1} text2={title2} color={circleColors} variant={variants} animate={animate}/>
                    </div>
                </motion.div>
            ) : (
                <motion.div className={`flex flex-row text-xl ${paddingTop} `}
                            variants={variants}
                            initial={initial} whileInView={animate}
                >
                    <div className="">
                        <RadialProgress size={50} radius={35} progress={progress} text1={title1} text2={title2} color={circleColors}/>
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
            y: -100,
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
                        title1="IT-Strategie &"
                        title2="Digitalisierung"
                        subTitle="IT-Strategie & Digitalisierung"
                        experienceYears="13+ Jahre"
                        level="Experte"
                        progress={100}
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
                        title1="Netzwerktechnik &"
                        title2="Telekommunikation"
                        subTitle="Netzwerktechnik & Telekommunikation"
                        experienceYears="13+ Jahre"
                        level="Experte"
                        progress={100}
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
                    title1="IT-Infrastruktur &"
                    title2="Rechenzentren"
                    subTitle="IT-Infrastruktur & Rechenzentren"
                    experienceYears="13+ Jahr3"
                    level="Experte"
                    progress={100}
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
                    title1="Cybersecurity &"
                    title2="Datenschutz"
                    subTitle="Cybersecurity & Datenschutz"
                    experienceYears="13+ Jahre"
                    level="Forgeschritten"
                    progress={75}
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
                    title1="Führung &"
                    title2="Projektmanagement"
                    subTitle="Führung & Projektmanagement"
                    experienceYears="13+ Jahre"
                    level="Experte"
                    progress={100}
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
                    title1="Cloud &"
                    title2="Automatisierung"
                    subTitle="Cloud & Automatisierung"
                    experienceYears="4 Jahre"
                    level="Erweiterte Kenntnisse"
                    progress={59}
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
