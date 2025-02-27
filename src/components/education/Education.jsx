import React from 'react';
import {EDUCATION_BSC_TEXT, EDUCATION_RTV_TEXT} from "../../constants/constants.jsx";
import {motion} from "framer-motion";


const sliding = {
    initialPicture: {
        x: 500,
        opacity: 0
    },
    initialText: {
        x: -500,
        opacity: 0
    },
    initialTitle: {
        y: -100,
        opacity: 0
    },
    animatePicture: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,

        }
    },
    animateText: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,

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

function Edu_Card(props) {
    return <div className="flex flex-col lg:flex-row flex-1 max-lg:max-w-xl w-full px-4 lg:px-0">
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
        <div className="mobile flex justify-center">
            <img className=" lg:rounded-2xl rounded-md object-cover lg:w-80 lg:h-72 xl:w-96 xl:h-82 content-center"
                 src={props.image} alt=""></img>
        </div>
    </div>;
}


const Education = () => {
    return (
        <div className="max-w-[1366px] mx-auto flex lg:items-center justify-center min-h-screen">
            <div className="flex flex-col">
                <motion.div className="desktop flex justify-start w-full min-h-[20vh] py-12 px-4 lg:px-6"
                            variants={sliding}
                            initial="initialTitle"
                            whileInView="animateTitle">
                    <h2 className="text-5xl font-bold">Meine Ausbildung</h2>
                </motion.div>
                <div className="mobile flex justify-start w-full min-h-[20vh] py-12 px-4 lg:px-6">
                    <h2 className="text-3xl font-bold">Meine Ausbildung</h2>
                </div>
            <div className="flex flex-row h-full py-4 lg:py-0">
                <motion.div className="flex flex-col h-full gap-4 lg:py-0">
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
        </div>
    );
};

export default Education;