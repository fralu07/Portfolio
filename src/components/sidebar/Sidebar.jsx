import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton.jsx";
import Links from "./links/Links.jsx";
import {useState} from "react";
import {motion} from "framer-motion";

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const variant = {
        open: {
            clipPath:"circle(2400px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath:"circle(30px at 50px 50px)",
            transition: {
                delay:0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variant}>
                <Links setOpen={setOpen} />
            </motion.div>
            <ToggleButton className="" setOpen={setOpen}/>

        </motion.div>
    );
};

export default Sidebar;