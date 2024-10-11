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
            <div className="flex justify-center w-full lg:w-1/2 pr-8">
                <div className="flex justify-center lg:justify-start">
                    <motion.p className="max-w-xl content-center text-start"
                              variants={sliding}
                              initial="initialText"
                              viewport={{once: true, amount: 0.4}}
                              whileInView="animateText"
                    > {props.text}</motion.p>
                </div>
            </div>
            <motion.div className="w-full lg:w-1/2"
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

    return (
        <div className="max-w-[1366px] mx-auto flex items-center justify-center">
            <motion.div className="flex flex-col pt-20 gap-20">
                <ExpCard text={EXPERIENCE_NOW_TEXT} image="./me03.png"/>
                <ExpCard text={EXPERIENCE_HRN_TEXT} image="./me_hrn.jpeg"/>
                <ExpCard text={EXPERIENCE_RTV_TEXT} image="./me_tv.jpeg"/>
            </motion.div>


        </div>
    );
};

export default Experience;
