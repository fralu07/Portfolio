import React from 'react';
import {EDUCATION_BSC_TEXT, EDUCATION_RTV_TEXT} from "../../constants/constants.jsx";
import {motion} from "framer-motion";


const sliding = {
    initialPicture: {
        y: 200,
        opacity: 0
    },
    initialText: {
        y: 200,
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

function Edu_Card(props) {
    return <div className="flex flex-col lg:flex-row flex-1 max-lg:max-w-xl w-full">
        <div className="flex justify-center w-full lg:w-7/12 pr-4 lg:pr-8">
            <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-start">
                <motion.p className="desktop content-center text-start text-base lg:pl-10"
                          variants={sliding}
                          initial="initialText"
                          viewport={{once: true, amount: 0.4}}
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
                    whileInView="animatePicture"
                    viewport={{once: true, amount: 0.5}}>
            <img className=" lg:rounded-2xl rounded-md object-cover w-full h-96 content-center"
                 src={props.image} alt=""></img>
        </motion.div>
        <div className="mobile flex lg:w-5/12 lg:pr-0 pb-4 lg:pb-0 justify-center">
            <img className=" lg:rounded-2xl rounded-md object-cover lg:w-80 lg:h-72 xl:w-96 xl:h-82 content-center"
                 src={props.image} alt=""></img>
        </div>
    </div>;
}


const Education = () => {
    return (
        <div className="max-w-[1366px] px-4 mx-auto flex lg:items-center justify-center">
            <div className="flex flex-row gap-4 h-full py-4 lg:py-0 ">
                <motion.div className="flex flex-col h-full gap-4 lg:gap-8 lg:py-0">
                    <Edu_Card
                        text={EDUCATION_BSC_TEXT}
                        image="./FHNW.jpg"
                    />
                    <Edu_Card
                        text={EDUCATION_RTV_TEXT}
                        image="./tv.jpg"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Education;