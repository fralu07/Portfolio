import {motion, useScroll, useTransform} from "framer-motion";
import React, {useRef} from "react";
import explosionSvg from './explosion.svg';
import {EDUCATION_BSC_TEXT, EDUCATION_RTV_TEXT, WhatMatters, WHY_ME_TEXT} from "../../constants/constants.jsx";

const WhyMe = () => {

    const containerRef = useRef(null);
    const boatRef = useRef(null);
    const {scrollYProgress} = useScroll({target: containerRef, offset: ["start end", "end start"]});

    const xSailing = useTransform(scrollYProgress, [0.35, 0], ["-10%", "80%"]);
    const ySailing = useTransform(scrollYProgress, [1, 0], ["50%", "100%"]);

    const opacityExplosion = useTransform(scrollYProgress, [0.3, 0.4, 0.45], [0, 1, 0]);
    const opacityShip = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
    const opacitySuperShip = useTransform(scrollYProgress, [0.4, 0.45, 0.8], [0, 1, 0]);


    const sliding = {
        initialText: {
            y: 500,
            opacity: 0
        },
        animateText: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2,

            }
        }
    }

    function Edu_Card(props) {
        return <div className="flex flex-col lg:flex-row flex-1 max-lg:max-w-xl w-full">
            <div className="flex justify-center w-full lg:w-7/12 pr-4 lg:pr-8">
                <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-start">
                    <motion.p className="desktop content-center text-start text-base lg:pl-6"
                              variants={sliding}
                              initial="initialText"
                              whileInView="animateText"
                    > {props.text}</motion.p>
                    <p className="mobile content-center text-start ">
                        {props.text}
                    </p>
                </div>
            </div>
            <motion.div className="desktop flex lg:w-5/12 pr-4 py-4 justify-center content-center items-center"
                        variants={sliding}
                        initial="initialPicture"
                        whileInView="animatePicture">
                <img className=" lg:rounded-2xl rounded-md object-cover w-full h-96 content-center"
                     src={props.image} alt=""></img>
            </motion.div>
            <div className="mobile flex lg:w-5/12 lg:pr-0 pb-4 lg:pb-0 justify-center">
                <img className=" lg:rounded-2xl rounded-md object-cover lg:w-80 lg:h-72 xl:w-96 xl:h-82 content-center"
                     src={props.image} alt=""></img>
            </div>
        </div>;
    }


    return (
        <div className="max-w-[1366px] min-h-screen mx-auto flex items-center overflow-hidden">
            <div className="flex flex-col">
                <motion.div className="desktop flex justify-start w-full min-h-[20vh] py-12 px-4 lg:px-6"
                            variants={sliding}
                            initial="initialTitle"
                            whileInView="animateTitle">
                    <h2 className="text-5xl font-bold">Warum mich?</h2>
                </motion.div>
                <div className="mobile flex justify-start w-full min-h-[20vh] py-12 px-4 lg:px-6">
                    <h2 className="text-3xl font-bold">Warum mich?</h2>
                </div>
                <div className="flex flex-row h-full py-4 lg:py-0">
                    <motion.div className="flex flex-col h-full gap-4 lg:py-0">
                        <Edu_Card
                            text={WHY_ME_TEXT}
                            image="./me_computer.jpeg"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
};

export default WhyMe;
