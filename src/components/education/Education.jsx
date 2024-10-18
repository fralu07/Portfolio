import React from 'react';
import {
    ABOUT_TEXT,
    EDUCATION_BSC_TEXT,
    EDUCATION_RTV_TEXT,
    EXPERIENCE_HRN_TEXT,
    EXPERIENCE_NOW_TEXT, EXPERIENCE_RTV_TEXT
} from "../../constants/constants.jsx";
import {motion} from "framer-motion";


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

function Edu_Card(props) {
    return <div className="flex flex-col lg:flex-row flex-1 max-lg:max-w-xl w-full">

        <div className="flex justify-center w-full lg:w-7/12 pr-4 lg:pr-8">
            <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-start">
                <motion.p className=" content-center text-start text-base lg:pl-10"
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


const Education = () => {
    return (
        <div className="max-w-[1366px] p-2 mx-auto flex lg:items-center min-h-screen justify-center overflow-y-auto">
            <div className="flex flex-row gap-4 h-full py-8 lg:py-0 ">
                <motion.div className="flex flex-col h-full gap-8 lg:gap-40 py-8 lg:py-0">
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