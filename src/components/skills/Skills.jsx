import RadialProgress from "../RadialProgress/radialProgress.jsx";
import {motion} from "framer-motion";

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
                    <div className={`md:w-80 h-${textBoxHeight} content-center md:content-start  md:pt-20 text-base md:text-xl ${reverse ? '' : 'text-end'}`}>
                        <div className="font-bold">{subTitle}</div>
                        <div>Berufserfahrung: <br/><span className="font-bold">{experienceYears} Jahre</span></div>
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
                    <div className={`md:w-80 h-${textBoxHeight} content-center md:content-start md:pt-20 text-base md:text-xl ${reverse ? '' : 'text-end'}`}>
                        <div className="font-bold">{subTitle}</div>
                        <div>Berufserfahrung: <br/><span className="font-bold">{experienceYears} Jahre</span></div>
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
            y: 500,
            opacity: 0
        },
        initialCard1: {
            y: 600,
            opacity: 0
        },
        animateCard: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2,
            }
        }
    };

    return (
        <div className="flex flex-col font-helvetica px-6 max-w-own overflow-hidden items-center gap-9 md:gap-0">
            <div className="flex xl:flex-row flex-col justify-center gap-9 ">
                <SkillCard
                    title="Java"
                    subTitle="Java"
                    experienceYears={3}
                    level="Erweiterte Kenntnisse"
                    progress={60}
                    textBoxHeight={textBoxHeight}
                    circleColors={circleColors}
                    variants={sliding}
                    initial="initialCard"
                    animate="animateCard"
                    paddingTop=""
                    reverse={false}/>
                <SkillCard
                    title="Javascript"
                    subTitle="Javascript"
                    experienceYears={3}
                    level="Erweiterte Kenntnisse"
                    progress={50}
                    textBoxHeight={textBoxHeight}
                    circleColors={circleColors}
                    variants={sliding}
                    initial="initialCard1"
                    animate="animateCard"
                    paddingTop="xl:pt-[300px]"
                    reverse={true}
                />
            </div>

            <div className="flex xl:flex-row flex-col justify-center gap-9 ">
                <SkillCard
                    title="Mobile"
                    subTitle="Kotlin / Swift"
                    experienceYears={1}
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
                <SkillCard
                    title="Framework"
                    subTitle="Spring Boot / React"
                    experienceYears={3}
                    level="Erweiterte Kenntnisse"
                    progress={60}
                    textBoxHeight={textBoxHeight}
                    circleColors={circleColors}
                    variants={sliding}
                    initial="initialCard"
                    animate="animateCard"
                    paddingTop="xl:pt-[300px]"
                    reverse={true}
                />
            </div>

            <div className="flex xl:flex-row flex-col justify-center gap-9 ">
                <SkillCard
                    title="DevOps"
                    subTitle="Docker / Kubernetes / CI-CD"
                    experienceYears={2}
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
                <SkillCard
                    title="Python"
                    subTitle="Python"
                    experienceYears={2}
                    level="Grundlegende Kenntnisse"
                    progress={35}
                    textBoxHeight={textBoxHeight}
                    circleColors={circleColors}
                    variants={sliding}
                    initial="initialCard"
                    animate="animateCard"
                    paddingTop="xl:pt-[300px]"
                    reverse={true}
                />
            </div>
        </div>
    );
};

export default Skills;
