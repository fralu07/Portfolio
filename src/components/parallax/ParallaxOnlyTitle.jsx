import "./Parallax.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

const ParallaxOnlyTitle = (props) => {

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
        sunset_end
    } = props.p;

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
    const xSailing = useTransform(scrollYProgress, [1, 0], [xSailing_out_end, xSailing_out_beginn]);
    const ySailing = useTransform(scrollYProgress, [1, 0], [ySailing_out_end, ySailing_out_beginn]);
    const yBg = useTransform(scrollYProgress, [ 0, 1], ["-30%", "0%"]);
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

            {/* Hauptüberschrift */}
            <motion.h1 className="text-white font-Bold text-black text-5xl md:text-7xl lg:text-9xl relative h-500"
                       >
                {props.p.title}
            </motion.h1>
        </div>
    );
};

export default ParallaxOnlyTitle;
