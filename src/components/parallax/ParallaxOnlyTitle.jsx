import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

const ParallaxOnlyTitle = (props) => {

    const ref = useRef();


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
