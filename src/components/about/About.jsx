import {motion} from "framer-motion";
import "./about.scss";
import {ABOUT_TEXT} from "../../constants/constants.jsx";
import {FaLinkedin} from "react-icons/fa";

const About = () => {

    return (
        <div className="flex flex-wrap gap-4 h-full content-center items-center justify-center ">

                <img className="flex-1 max-w-xl rounded-xl" src="./segeln.jpeg" alt=""></img>
                <div className="max-w-lg text-wrap text-center sm:text-justify">{ABOUT_TEXT}</div>

        </div>
    );
};

export default About;