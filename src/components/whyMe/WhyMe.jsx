import {motion, useScroll, useTransform} from "framer-motion";
import React, {useRef} from "react";
import explosionSvg from './explosion.svg';
import {WHY_ME_TEXT} from "../../constants/constants.jsx";

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
            }
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

    return (
        <div className="h-full" ref={containerRef}>
            {/* Scrollable Content */}
            <div className="mobile flex flex-col w-full justify-center items-center">
                <div className="flex justify-center px-4  py-2">
                    <p className="max-w-xl text-white text-lg">
                        {WHY_ME_TEXT}
                    </p>
                </div>
                <div
                    className="flex w-full justify-center"
                >
                    <img src="/superNovaShip.png" alt="Explosion" className="h-full p-12"/>
                </div>
            </div>
            <div className="desktop w-full relative bg-fixed"
                 style={{
                     backgroundImage: `url(/see.jpg)`,
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                     height: "100%",
                     width: "100vw"
                 }}
            >

                {/* Sticky Section */}
                <div
                    className="desktop sticky top-[20%] flex flex-col items-center justify-center gap-20 bg-transparent z-20 ">
                    {/* Text */}
                    <div className=" w-full">
                        {/* Text in der Mitte des restlichen Bildschirms */}
                        <div className="flex justify-start sm:justify-center">
                            <motion.p className="max-w-xl text-black md:font-bold text-base text-center"
                                      variants={sliding}
                                      initial="initialText"
                                      whileInView="animateText">
                                {WHY_ME_TEXT}
                            </motion.p>
                        </div>
                    </div>
                    {/* Animation */}
                    <div className="flex flex-col items-center justify-centerw-1/3 gap-8">
                        {/*SuperNova-Schiff*/}
                        <div className="relative flex w-full justify-center">
                            {/* Explosion SVG */}
                            <div className="absolute flex z-30">
                                <motion.div
                                    initial={{opacity: 0, scale: 0}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5}}
                                    style={{
                                        y: 120,
                                        x: -50,
                                        opacity: opacityExplosion
                                    }}
                                >
                                    <img src={explosionSvg} alt="Explosion" className="w-96 h-auto"/>
                                </motion.div>
                            </div>
                            {/* Nova-Schiff */}
                            <motion.div
                                ref={boatRef}
                                style={{
                                    backgroundImage: `url(/b_nova_ship.png)`,
                                    backgroundPosition: "left",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    opacity: opacityShip
                                }}
                                animate={{
                                    y: [0, 5, 0, -5, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-96 h-96 z-10"
                            />
                            {/* Segelboot */}
                            <motion.div
                                style={{
                                    x: xSailing,
                                    y: ySailing,
                                    backgroundImage: `url(/sailingboat_final.png)`,
                                    backgroundPosition: "center",
                                    backgroundSize: "auto 100%",
                                    backgroundRepeat: "no-repeat",
                                    opacity: opacityShip,
                                }}

                                className="absolute w-[50vw] md:w-[30vw] lg:w-[20vw] h-48 z-20"
                            />
                            {/*SuperNova-Schiff*/}
                            <motion.div
                                className="absolute sm:w-[40vw] h-96 z-20"
                                style={{
                                    backgroundImage: `url(/superNovaShip.png)`,
                                    backgroundPosition: "center",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    opacity: opacitySuperShip
                                }}
                                animate={{
                                    y: [0, 5, 0, -5, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyMe;
