import {motion} from "framer-motion";

const ToggleButton = ({setOpen}) => {
    return (
        <button onClick={() => setOpen((prev) => !prev)}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round"
                             variants={{
                                 closed: {d: "M 2 4.5 L 20 4.5"}, open: {d: "M 3 16.5 L 17 4.5"},
                             }}/>
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round"
                             variants={{
                                 closed: {d: "M 2 18.346 L 20 18.346"}, open: {d: "M 3 4.5 L 17 16.5"},
                             }}/>
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" d="M 2 11.423 L 20 11.423"
                             variants={{
                                 closed: { opacity: 1 }, open: { opacity: 0 },
                             }}/>
            </svg>
        </button>
    );
};

export default ToggleButton;