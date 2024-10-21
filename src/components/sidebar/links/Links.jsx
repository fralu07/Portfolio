import {motion} from "framer-motion";

const Links = ({ setOpen }) => {

    const variants = {
        open: {
            transition:{
                staggerChildren: 0.1,
            }
        },
        closed: {
            transition:{
                staggerChildren: 0.1,
                staggerDirection: -1,
            }
        }
    }
    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y:50,
            opacity: 0,
        }
    }
    const handleClick = () => {
        // Sidebar schließen
        setOpen(false);
    };


    const items = [
        "Startseite",
        "Über mich",
        "Ausbildung",
        "Berufserfahrung",
        "Projekte",
        "Hobbys",
        "Skills",
        "Warum mich"
    ]
    return (
        <motion.div className="links" variants={variants}>
            {
                items.map((item) => (
                    <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}} onClick={handleClick}>
                        {item}
                    </motion.a>
                ))
            }
        </motion.div>
    );
};

export default Links;