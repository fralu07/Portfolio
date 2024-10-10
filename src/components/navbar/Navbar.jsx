import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar.jsx";

const Navbar = () => {
    return (
        <div className="h-[100px] ">
            <Sidebar />
            <div className="max-w-[1366px] mx-auto flex items-center justify-between h-full">
                <motion.span
                    className="font-bold"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    FraLu dev
                </motion.span>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/francesco-lucia-189a72223/" target="_blank" rel="noreferrer">
                        <img src="/linkedIn.png" alt="" className="h-[18px] w-[18px] object-cover" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
