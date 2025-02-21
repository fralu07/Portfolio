import {motion} from "framer-motion";

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
        opacity: 0.5,
        y: 5,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const Hero = () => {
    return (
        <div className="overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132] min-h-screen px-4">
            <div className="flex flex-col lg:flex-row justify-center items-center h-screen px-20 pt-24 lg:pt-0">
                <div className="flex w-full lg:w-5/12 justify-center md:pb-20 lg:pb-0">
                    <motion.div
                        className="flex flex-col justify-center items-center lg:items-start lg:gap-10 gap-4 text-center lg:text-start"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.h1
                            className="md:text-5xl text-lg text-sky-500 font-bold lg:font-normal tracking-[10px]"
                            variants={textVariants}
                        >
                            FRANCESCO LUCIA
                        </motion.h1>
                        <motion.h2
                            className="md:text-3xl text-xl text-white tracking-[5px]"
                            variants={textVariants}
                        >
                            <span className="text-sm md:text-xl">Bewerbung als </span>
                            <br/>
                            Fullstack Engineer
                        </motion.h2>
                        <div className="flex flex-col gap-10 items-center">
                            <motion.div className="flex flex-row gap-5 pt-8" variants={textVariants}>
                                <motion.button
                                    className="px-5 py-4 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light"
                                    variants={textVariants}
                                    onClick={() => {
                                        const link = document.createElement("a");
                                        window.open("/CV_FrancescoLucia.pdf", "_blank");
                                    }}
                                >
                                    Download CV
                                </motion.button>
                                <motion.button
                                    className="px-5 py-4 border border-white rounded-lg bg-transparent text-white cursor-pointer font-light"
                                    variants={textVariants}
                                    onClick={() => {
                                        window.location.href = "mailto:info@francescolucia.de?subject=Deine Bewerbung bei Swiss&body=Hallo Francesco, ...";
                                    }}
                                >
                                    Contact Me
                                </motion.button>
                            </motion.div>
                            <a href={`#Intro`} key="Intro">
                                <motion.img
                                    className="desktop w-[70px]"
                                    variants={textVariants}
                                    animate="scrollButton"
                                    src="./scroll.png"
                                    alt=""
                                />
                            </a>
                        </div>
                    </motion.div>
                </div>
                {/* Bildsektion */}
                <div className="flex h-96 lg:h-screen lg:w-7/12 w-full lg:items-end  ">
                    <div
                        className="w-full h-[90%] bg-contain bg-no-repeat bg-bottom flex"
                        style={{
                            backgroundImage: `url(/me.png)`,
                            backgroundPosition: "bottom",

                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
