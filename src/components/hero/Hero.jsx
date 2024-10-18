import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
    scrollButton: {
        opacity: 0,
        y: -5,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const Hero = () => {
    return (
        <div className="overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132] min-h-screen px-4">
            <div className="flex flex-col lg:flex-row justify-center h-screen items-center px-20 pt-24 lg:pt-0">
                <div className="flex w-full lg:w-5/12 justify-center md:pb-20 lg:pb-0">
                    <motion.div
                        className="flex flex-col justify-center items-center lg:items-start lg:gap-10 gap-4 text-center lg:text-start"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.h1
                            className="md:text-5xl text-lg text-purple-800 font-bold lg:font-normal tracking-[10px]"
                            variants={textVariants}
                        >
                            FRANCESCO LUCIA
                        </motion.h1>
                        <motion.h2
                            className="md:text-3xl text-xl text-white tracking-[5px]"
                            variants={textVariants}
                        >
                            <span className="text-sm md:text-xl">Bewerbung als </span>
                            <br />
                            Fullstack Engineer
                        </motion.h2>
                        <motion.div className="flex flex-row gap-5 pt-8" variants={textVariants}>
                            <motion.button
                                className="px-5 py-4 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light"
                                variants={textVariants}
                            >
                                Download CV
                            </motion.button>
                            <motion.button
                                className="px-5 py-4 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light"
                                variants={textVariants}
                            >
                                Contact Me
                            </motion.button>
                        </motion.div>
                        <motion.img
                            className="w-0 lg:w-[50px]"
                            variants={textVariants}
                            animate="scrollButton"
                            src="./scroll.png"
                            alt=""
                        />
                    </motion.div>
                </div>
                {/* Bildsektion */}
                <div
                    className="lg:w-7/12 w-full h-full bg-contain bg-no-repeat bg-bottom flex items-end"
                    style={{ backgroundImage: `url(/me.png)` }}
                />
            </div>
        </div>
    );
};

export default Hero;
