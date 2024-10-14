import React, {useRef} from 'react';
import {useScroll, useSpring, motion, useTransform, inView} from "framer-motion";
import {ABOUT_TEXT, EXPERIENCE_HRN_TEXT, EXPERIENCE_NOW_TEXT, EXPERIENCE_RTV_TEXT} from "../../constants/constants.jsx";

const sliding = {
    initialPicture: {
        y: 300,
        opacity: 0
    },
    initialText: {
        y: 350,
        opacity: 0
    },
    animatePicture: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 1.2,

        }
    },
    animateText: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.4,
            staggerChildren: 3.2,

        }
    }
}

const draw = {
    hidden: {pathLength: 0, opacity: 0},
    visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {delay, type: "spring", duration: 1.5, bounce: 0},
                opacity: {delay, duration: 0.01}
            }
        };
    }
};

function ExpCard(props) {
    return <div className="flex flex-wrap">
        <div className="flex justify-center w-full lg:w-7/12 pr-8">
            <div className="flex justify-center lg:justify-start">
                <motion.p className="max-w-xl content-center text-start text-sky-500"
                          variants={sliding}
                          initial="initialText"
                          viewport={{once: true, amount: 0.4}}
                          whileInView="animateText"
                > {props.year}
                </motion.p>
                <motion.p className="max-w-xl content-center text-start pl-10"
                          variants={sliding}
                          initial="initialText"
                          viewport={{once: true, amount: 0.4}}
                          whileInView="animateText"
                > {props.text}</motion.p>

            </div>
        </div>
        <motion.div className="w-full lg:w-5/12"
                    variants={sliding}
                    initial="initialPicture"
                    whileInView="animatePicture"
                    viewport={{once: true, amount: 0.5}}>
            <div className="flex item-center justify-center h-96">
            <img className="rounded-2xl  w-full h-full object-cover" src={props.image} alt=""></img>
            </div>
        </motion.div>
    </div>;
}

const Experience = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll( {
        target: ref,
        offset: ["start end", "end start"]
    })
    const scaleY = useSpring(scrollYProgress)

    return (
        <div ref={ref} className="max-w-[1366px] mx-auto flex items-center justify-center">
            <div className="flex flex-row gap-20">
                <div className="flex flex-col gap-20">
                    <div className=""></div>
                    <motion.div className="h-[120vh] w-4 bg-sky-500 origin-top-right"
                                style={{scaleY}}
                    ></motion.div>
                </div>
                <motion.div className="flex flex-col pt-20 gap-20">
                    <ExpCard text={EXPERIENCE_NOW_TEXT} year={"2020 - heute"} image="./me03.png"/>
                    <ExpCard text={EXPERIENCE_HRN_TEXT} year={"2006 - 2019"} image="./me_hrn.jpeg"/>
                    <ExpCard text={EXPERIENCE_RTV_TEXT} year={"1998 - 2006"} image="./me_tv.jpeg"/>
                </motion.div>
            </div>


        </div>
    );
};

export default Experience;
