import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

const Parallax = (props) => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const {
        xSailing_out_end,
        xSailing_out_beginn,
        ySailing_out_end,
        ySailing_out_beginn,
        xSun_out_start,
        xSun_out_end,
        sunset_start,
        sunset_end,
        picture,
        textColor
    } = props.p;

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
    const xSailing = useTransform(scrollYProgress, [1, 0], [xSailing_out_end, xSailing_out_beginn]);
    const ySailing = useTransform(scrollYProgress, [1, 0], [ySailing_out_end, ySailing_out_beginn]);
    const yBg = useTransform(scrollYProgress, [ 0, 1], ["-50%", "30%"]);
    const xSun = useTransform(scrollYProgress, [0, 0.5], [xSun_out_start, xSun_out_end]);
    const brightness = useTransform(scrollYProgress, [0, 1], [sunset_start, sunset_end]);

    const springY = useSpring({
        from: 0,
        to: 100,
        loop: true,
        duration: 2, // Dauer der Schwingung (langsamer/schneller)
        repeatType: 'mirror' // Macht die Bewegung hin und her
    });


    return (
        <div ref={ref} className="w-full h-screen overflow-hidden relative grid place-items-center">
            {/*<motion.div*/}
            {/*    className="absolute inset-0 bg-black z-50 pointer-events-none"*/}
            {/*    style={{*/}
            {/*        opacity: brightness // Helligkeit wird basierend auf dem Scroll-Fortschritt angepasst*/}
            {/*    }}*/}
            {/*></motion.div>*/}
            {/* Hauptüberschrift */}
            <motion.h1 className={`font-Bold ${textColor} text-5xl md:text-7xl lg:text-9xl relative z-50`}
                       style={{y: yText}}>
                {props.p.title}
            </motion.h1>

            Hintergrundbild
            <motion.div className="absolute inset-0 z-0"
                        style={{
                            y: yBg,
                            backgroundImage: `url(/${picture})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}></motion.div>
            {/*/!* Meer *!/*/}
            {/*<motion.div className="absolute inset-0 z-10"*/}
            {/*            style={{*/}
            {/*                backgroundImage: `url(/background_para.png)`,*/}
            {/*                backgroundPosition: "top",*/}
            {/*                backgroundSize: "cover",*/}
            {/*            }}*/}
            {/*></motion.div>*/}

            {/*/!* Sonne *!/*/}
            {/*<motion.div className="absolute inset-0 z-0"*/}
            {/*            style={{*/}
            {/*                y: xSun,*/}
            {/*                x: xSun,*/}
            {/*                backgroundImage: `url(/sun.png)`,*/}
            {/*                backgroundPosition: "center",*/}
            {/*                backgroundSize: "cover",*/}
            {/*            }}></motion.div>*/}

            {/*/!* Nova Schiff *!/*/}
            {/*<motion.div*/}
            {/*    style={{*/}
            {/*        y: springY, // Y-Schwingbewegung*/}
            {/*        left: "10%", // Zentriert horizontal*/}
            {/*        transform: "translateX(-50%)", // Zentriert horizontal*/}
            {/*        backgroundImage: `url(/b_nova_ship.png)`,*/}
            {/*        backgroundPosition: "left",*/}
            {/*        backgroundSize: "contain",*/}
            {/*        backgroundRepeat: "no-repeat",*/}
            {/*        height: "40vh", // Feste Höhe hinzugefügt*/}
            {/*        width: "100%",  // Breite relativ zum Container*/}
            {/*    }}*/}
            {/*    className="absolute inset-0 z-30 w-[70vw] md:w-[50vw] lg:w-[30vw] h-auto top-[65vh] md:top-[65vh]" // Tailwind-Klassen für responsive Größen*/}
            {/*    animate={{*/}
            {/*        y: [0, 5, 0, -5, 0] // Keyframes für die Schwingbewegung*/}
            {/*    }}*/}
            {/*    transition={{*/}
            {/*        duration: 2, // Geschwindigkeit der Schwingbewegung*/}
            {/*        repeat: Infinity, // Endloswiederholung*/}
            {/*        ease: "easeInOut" // Glatter Übergang*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <div className="bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(/b_nova_ship.png)`}}/>*/}
            {/*</motion.div>*/}

            {/*/!* Segelboot *!/*/}
            {/*<motion.div*/}
            {/*    style={{*/}
            {/*        x: xSailing,*/}
            {/*        y: ySailing,*/}
            {/*        backgroundImage: `url(/sailingboat_final.png)`,*/}
            {/*        backgroundPosition: "left",*/}
            {/*        backgroundSize: "contain",*/}
            {/*        backgroundRepeat: "no-repeat",*/}
            {/*        height: "20vh", // Feste Höhe hinzugefügt*/}
            {/*        width: "100%",  // Breite relativ zum Container*/}
            {/*    }}*/}
            {/*    className="absolute inset-0 z-40 w-[50vw] md:w-[30vw] lg:w-[20vw] h-auto top-[70vh] md:top-[70vh] left-[10vw] scale-[0.5]" // Tailwind-Klassen für responsive Größen*/}
            {/*>*/}
            {/*</motion.div>*/}
        </div>
    );
};

export default Parallax;
