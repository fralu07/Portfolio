import {motion} from "framer-motion";
import "./about.scss";
import {ABOUT_TEXT} from "../../constants/constants.jsx";
import {FaLinkedin} from "react-icons/fa";

const sliding = {
    initialPicture: {
        x: -500,
        opacity: 0
    },
    initialText: {
        x: 500,
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
    }
}

const About = () => {

    return (
        <div className="max-w-[1366px] mx-auto flex items-center h-screen">
            <div className="flex flex-wrap">
                <motion.div className="w-full lg:w-1/2" variants={sliding}
                                initial="initialPicture" whileInView="animatePicture">
                    <div className="flex item-center justify-center">
                        <img className="rounded-2xl" src="./segeln.jpeg" alt=""></img>
                    </div>
                </motion.div>
                <div className="w-full lg:w-1/2 pl-8">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p className="max-w-xl" variants={sliding}
                           initial="initialText" whileInView="animateText"> {ABOUT_TEXT}</motion.p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;