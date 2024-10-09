import "./Parallax.scss";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";


const Parallax = (props) => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]

    });

    const { xSailing_out_end, xSailing_out_beginn, ySailing_out_end, ySailing_out_beginn, xSun_out_start, xSun_out_end } = props.p;

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
    const xSailing = useTransform(scrollYProgress, [1,0], [xSailing_out_end, xSailing_out_beginn]);
    const ySailing = useTransform(scrollYProgress, [1,0], [ySailing_out_end, ySailing_out_beginn]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const xSun = useTransform(scrollYProgress, [0, 1], [xSun_out_start, xSun_out_end]);




    return (
        <div ref={ref} className="w-full h-screen overflow-hidden relative grid place-items-center">
            <motion.h1 className="font-Bold text-black text-7xl md:text-9xl relative z-50" style={{y: yText}}>
                {props.p.title === "about" ? "About me" : "Education"}
            </motion.h1>
            <motion.div className="absolute inset-0 z-0"
                        style={{
                            y: yBg,
                            backgroundImage: `url(/himmel.jpg)`,
                            backgroundPosition: "top",
                            backgroundSize: "cover"
                            // background: type === "about"
                            //     ? "linear-gradient(180deg, #A89393, #FDFFEB)"
                            //         : "linear-gradient(180deg, #A89393, #FDFFEB)"
                        }}></motion.div>
            <motion.div className="mountains"></motion.div>
            <motion.div className="absolute inset-0 z-100"
                        style={{
                            y: xSun,
                            x: xSun,
                            backgroundImage: `url(/sun.png)`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}></motion.div>
            <motion.div className="absolute inset-0 z-20"
                        style={{
                            backgroundImage: `url(/background_para.png)`,
                            backgroundPosition: "bottom",
                            backgroundSize: "cover",
                        }}>
            </motion.div>
            <motion.div className="w-96 top-96 -bottom-96 start-0 absolute z-30"
                        style={{
                            x: xSailing,
                            y: ySailing,// backgroundImage: `url(${type === "about" ? "./planets.png" : "./sun.png"})`
                            backgroundImage: `url(/sailingboat_final.png)`,
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat"
                        }}>

            </motion.div>
        </div>
    );
};

export default Parallax;