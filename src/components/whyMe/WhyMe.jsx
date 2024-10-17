import {motion, useScroll, useTransform} from "framer-motion";
import React, {useRef, useEffect, useState} from "react";
import explosionSvg from './explosion.svg';
import {
    WHY_ME_TEXT
} from "../../constants/constants.jsx";  // Der Pfad zu deiner SVG-Datei

const WhyMe = () => {
    // Referenz für die Scrollposition
    const containerRef = useRef(null);
    const boatRef = useRef(null);  // Referenz für das Segelboot
    const {scrollYProgress} = useScroll({target: containerRef, offset: ["start end", "end start"]});

    // Transformations für das Scrollen
    const xMove = useTransform(scrollYProgress, [0, 1], [0, 150]); // Bewegt Element A um 150px nach rechts beim Scrollen
    const xSailing = useTransform(scrollYProgress, [1, 0], ["-80%", "80%"]);
    const ySailing = useTransform(scrollYProgress, [1, 0], ["50%", "100%"]);

    // Opacity für Explosion und Nova-Schiff
    const opacityExplosion = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 0]); // Explosion erscheint bei 50% und verschwindet bei 100%
    const opacityShip = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]); // Nova-Schiff wird gleichzeitig ausgeblendet
    const opacitySuperShip = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]); // Nova-Schiff wird gleichzeitig ausgeblendet

    // Zustand, um das aktuelle Bild zu speichern
    const [isOriginalImage, setIsOriginalImage] = useState(true);

    // Bildwechsel basierend auf der Opacity
    useEffect(() => {
        const unsubscribe = opacityShip.onChange((latestOpacity) => {
            // Wechsel zum neuen Bild, wenn die Opacity abnimmt
            if (latestOpacity <= 0.1) {
                setIsOriginalImage(false); // Wechsle zum neuen Bild
            }
        });

        return () => unsubscribe();
    }, [opacityShip]);


    const sliding = {

        initialText: {
            y: 500,
            opacity: 0
        },
        initialText2: {
            y: 400,
            opacity: 0
        },

        animateText: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,

            }
        }
    }


    return (
        <div className="h-full  " ref={containerRef}>
            {/* Scrollable Content */}
            <div className="h-[150vh] w-full relative  ">
                {/* Sticky Section */}
                <div
                    className="sticky top-[40%] flex flex-row items-center justify-center gap-20 md:h-[40vh]  z-20 ">
                    <div className="w-full lg:w-1/2 ">
                        <div className="flex justify-center content-center">
                            <motion.p className="max-w-xl" variants={sliding}
                                      initial="initialText"
                                      whileInView="animateText"> {WHY_ME_TEXT}</motion.p>
                        </div>
                    </div>
                    <div className="relative flex w-1/2 bg-white justify-center">
                        {/* Explosion SVG */}
                        <div className="absolute flex z-30">
                            <motion.div
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.5}}
                                style={{
                                    x: 0,
                                    y: 100, // Positioniert die Explosion links vom Segelboot
                                    opacity: opacityExplosion // Opacity-Steuerung der Explosion
                                }}
                            >
                                <img src={explosionSvg} alt="Explosion" className=" w-96 h-auto"/>
                            </motion.div>
                        </div>
                        {/* Nova-Schiff */}
                        <motion.div
                            ref={boatRef}  // Referenz zum Segelboot für Größenmessung
                            style={{
                                backgroundImage: `url(/b_nova_ship.png)`, // Dynamische Änderung des Bildes
                                backgroundPosition: "left",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                opacity: opacityShip // Opacity-Steuerung des Nova-Schiffs
                            }}
                            animate={{
                                y: [0, 5, 0, -5, 0] // Keyframes für die Schwingbewegung
                            }}
                            transition={{
                                duration: 2, // Geschwindigkeit der Schwingbewegung
                                repeat: Infinity, // Endloswiederholung
                                ease: "easeInOut" // Glatter Übergang
                            }}
                            className="w-96 h-96 z-10" // Tailwind-Klassen für responsive Größen
                        />
                        {/* (Segelboot) */}
                        <motion.div
                            style={{
                                x: xSailing,
                                y: ySailing,
                                backgroundImage: `url(/sailingboat_final.png)`,
                                backgroundPosition: "left",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                opacity: opacityShip // Auch das Segelboot wird gleichzeitig ausgeblendet
                            }}
                            className="absolute w-[50vw] md:w-[30vw] lg:w-[20vw] h-48 scale-[0.5] z-20" // Tailwind-Klassen für responsive Größen
                        />
                        <motion.div
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1.2}}
                            transition={{duration: 0.5}}
                            className="absolute md:w-[30vw] lg:w-[20vw] h-96 z-20"
                            style={{
                                backgroundImage: `url(/superNovaShip.png)`, // Dynamische Änderung des Bildes
                                backgroundPosition: "left",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                opacity: opacitySuperShip // Opacity-Steuerung des Nova-Schiffs
                            }}
                        >
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyMe;
