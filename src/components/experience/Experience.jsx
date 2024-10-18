import React, {useRef} from 'react';
import {motion, useScroll, useSpring} from "framer-motion";
import {EXPERIENCE_HRN_TEXT, EXPERIENCE_NOW_TEXT, EXPERIENCE_RTV_TEXT} from "../../constants/constants.jsx";

const sliding = {
    initialPicture: {
        y: 0,
        opacity: 1
    },
    initialText: {
        y: 0,
        opacity: 1
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

function ExpCard(props) {
    return <div className="flex flex-col lg:flex-row flex-1 max-lg:max-w-xl w-full">

        <div className="flex justify-center w-full lg:w-7/12 pr-4 lg:pr-8">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start">
                <motion.p className=" content-center text-start text-sky-500"
                          variants={sliding}
                          initial="initialText"
                          viewport={{once: true, amount: 0.4}}
                          whileInView="animateText"
                > {props.year}
                </motion.p>
                <motion.p className=" content-center text-start text-sm lg:pl-10"
                          variants={sliding}
                          initial="initialText"
                          viewport={{once: true, amount: 0.4}}
                          whileInView="animateText"
                > {props.text}</motion.p>

            </div>
        </div>
        <motion.div className="flex justify-center  lg:w-5/12 pr-4 lg:pr-0 pb-4 lg:pb-0 content-center items-center"
                    variants={sliding}
                    initial="initialPicture"
                    whileInView="animatePicture"
                    viewport={{once: true, amount: 0.5}}>
            <img className=" lg:rounded-2xl rounded-md object-cover lg:w-80 lg:h-72 xl:w-96 xl:h-82 content-center" src={props.image} alt=""></img>
        </motion.div>
    </div>;
}

const Experience = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const scaleY = useSpring(scrollYProgress);

    return (
        <div
            ref={ref}
            className="max-w-[1366px] h-screen mx-auto flex flex-col "
        >
            <div className="flex flex-row gap-4 h-full py-8 lg:py-0 ">
                <div className="flex items-center pt-8">
                    <motion.div
                        className="lg:w-4 bg-sky-500 h-full origin-top-right"
                        style={{scaleY}}
                    ></motion.div>
                </div>
                <motion.div className="flex flex-col flex-1 gap-4 xl:gap-2 items-center">
                    <ExpCard
                        text={EXPERIENCE_NOW_TEXT}
                        year={"2020 - heute"}
                        image="./me03.png"
                    />
                    <ExpCard
                        text={EXPERIENCE_HRN_TEXT}
                        year={"2006 - 2019"}
                        image="./me_hrn.jpeg"
                    />
                    <ExpCard
                        text={EXPERIENCE_RTV_TEXT}
                        year={"1998 - 2006"}
                        image="./me_tv.jpeg"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
