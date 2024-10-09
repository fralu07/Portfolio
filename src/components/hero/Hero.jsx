import {motion} from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,

        }
    },
    scrollButton: {
        opacity: 0,
        y: -5,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}
const sliderVariants = {
    initial: {
        x: 0,
        opacity: 0
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
        }
    }
}

const Hero = () => {
    return (
        <div
            className="flex flex-wrap  w-full overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
            {/*<div className="flex flex-row">*/}
                <div className="max-w-[1366px] h-full mx-auto">
                    <motion.div className="h-screen flex flex-col justify-center gap-10" variants={textVariants}
                                initial="initial" animate="animate">
                        <motion.h2 className="text-[30px] text-purple-800 tracking-[10px]"
                                   variants={textVariants}>FRANCESCO LUCIA
                        </motion.h2>
                        <motion.h1 className="text-[60px] text-white tracking-[5px]" variants={textVariants}>Full Stack
                            Engineer
                        </motion.h1>
                        <motion.div className="flex flex-row gap-5" variants={textVariants}>
                            <motion.button
                                className="px-5 py-4 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light"
                                variants={textVariants}>
                                Download CV
                            </motion.button>
                            <motion.button
                                className="px-5 py-4 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light"
                                variants={textVariants}>
                                Contact Me
                            </motion.button>
                        </motion.div>
                        <motion.img className="w-[50px]" variants={textVariants} animate="scrollButton"
                                    src="./scroll.png" alt=""/>
                    </motion.div>
                </div>
                {/*<motion.div className="absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] w-1/2 font-bold" variants={sliderVariants} initial="initial" animate="animate">*/}
                {/*    Java Javascript Kotlin Spring React*/}
                {/*</motion.div>*/}
                <motion.img className="h-screen " src="/me.png" alt=""/>
            {/*</div>*/}
        </div>
    );
};

export default Hero;
