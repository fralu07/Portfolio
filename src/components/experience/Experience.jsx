import React, {useRef} from 'react';
import {motion, useScroll, useSpring} from "framer-motion";
import {EXPERIENCE_HRN_TEXT, EXPERIENCE_NOW_TEXT, EXPERIENCE_RTV_TEXT} from "../../constants/constants.jsx";

const sliding = {
    initialPicture: {
        y: 200,
        opacity: 0
    },
    initialText: {
        y: 200,
        opacity: 0
    },
    initialTitle: {
        y: -200,
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

function ExpCard(props) {
    return <div className="flex flex-col lg:flex-row flex-1 max-lg:max-w-xl w-full">

        <div className="flex justify-center w-full lg:w-7/12 ">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start">
                <motion.p className=" content-center text-start text-sky-500"
                          variants={sliding}
                          initial="initialText"
                          viewport={{once: true, amount: 0.4}}
                          whileInView="animateText"
                > {props.year}
                </motion.p>
                <motion.p className=" content-center text-star  lg:pl-10"
                          variants={sliding}
                          initial="initialText"
                          viewport={{once: true, amount: 0.4}}
                          whileInView="animateText"
                > {props.text}</motion.p>

            </div>
        </div>
        <motion.div className="flex justify-center  lg:w-5/12 py-4 content-center items-center"
                    variants={sliding}
                    initial="initialPicture"
                    whileInView="animatePicture"
                    viewport={{once: true, amount: 0.5}}>
            <img className=" lg:rounded-2xl rounded-md object-cover w-full h-96 content-center" src={props.image}
                 alt=""></img>
        </motion.div>
    </div>;
}

const Experience = () => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const scaleY = useSpring(scrollYProgress);

    return (
        <div
            ref={ref}
            className="max-w-[1366px] mx-auto flex lg:items-center justify-center min-h-screen">
            <div className="flex flex-col">
                <motion.div className="desktop flex justify-start w-full min-h-[20vh] py-12 px-4 lg:px-6"
                            variants={sliding}
                            initial="initialTitle"
                            whileInView="animateTitle">
                    <h2 className="text-5xl font-bold">Meine Berufserfahrung</h2>
                </motion.div>
                <div className="mobile flex justify-start w-full lg:min-h-[20vh] py-12 px-4 lg:px-6">
                    <h2 className="text-3xl font-bold">Meine Berufserfahrung</h2>
                </div>
                <div className="flex flex-row gap-4 h-full py-4 lg:px-6 px-4 lg:py-0 ">
                    <div className="flex items-center pt-8">
                        <motion.div
                            className="lg:w-4 bg-sky-500 h-full origin-top-right"
                            style={{scaleY}}
                        ></motion.div>
                    </div>
                    <motion.div className="flex flex-col flex-1 gap-4 items-center">
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
        </div>
    );
};

export default Experience;
