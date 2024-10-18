import React from 'react';
import {motion} from "framer-motion";
import {
    EXPERIENCE_HRN_TEXT,
    EXPERIENCE_NOW_TEXT, EXPERIENCE_RTV_TEXT,
    HOBBIES_CODING_TEXT,
    HOBBIES_CROSSFIT_TEXT,
    HOBBIES_SAILING_TEXT
} from "../../constants/constants.jsx";

//
// const sliding = {
//     initialCard1: {
//         x: -100,
//         opacity: 0
//     },
//     initialCard2: {
//         x: -300,
//         opacity: 0
//     },
//     initialCard3: {
//         y: 500,
//         opacity: 0
//     },
//     animateCard1: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             duration: 1,
//             staggerChildren: 0.2,
//
//         }
//     },
//     animateCard2: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             duration: 1,
//             staggerChildren: 0.2,
//
//         }
//     },
//     animateCard3: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             duration: 1,
//             staggerChildren: 0.2,
//
//         }
//     },
// }



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
                <motion.p className=" content-center text-start text-base lg:pl-10"
                          variants={sliding}
                          initial="initialText"
                          viewport={{once: true, amount: 0.4}}
                          whileInView="animateText"
                > {props.text}</motion.p>
        </div>
        <motion.div className="flex justify-center  lg:w-5/12 pr-4 lg:pr-0 pb-4 lg:pb-0 content-center items-center"
                    variants={sliding}
                    initial="initialPicture"
                    whileInView="animatePicture"
                    viewport={{once: true, amount: 0.5}}>
            <img className=" lg:rounded-2xl object-cover h-72 w-72 lg:w-80 lg:h-72 xl:w-96 xl:h-82 content-center" src={props.image} alt=""></img>
        </motion.div>
    </div>;
}

const Hobbies = () => {
    return (
        <div className="max-w-[1366px] h-screen mx-auto flex flex-col">
            <div className="flex flex-row gap-4 h-full ">
                <motion.div className="flex flex-col flex-1 gap-4 xl:gap-2 items-center">
                    <ExpCard
                        text={HOBBIES_CROSSFIT_TEXT}
                        year={"2020 - heute"}
                        image="./crossFit.jpeg"
                    />
                    <ExpCard
                        text={HOBBIES_SAILING_TEXT}
                        year={"2006 - 2019"}
                        image="./segeln_boot.png"
                    />
                    <ExpCard
                        text={HOBBIES_CODING_TEXT}
                        year={"1998 - 2006"}
                        image="/coding.png"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hobbies;