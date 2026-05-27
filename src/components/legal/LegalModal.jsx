import {useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";

const LegalModal = ({isOpen, onClose, children}) => {
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handler);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handler);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center overflow-y-auto py-10 px-4"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] border border-white/10 rounded-2xl max-w-[900px] w-full relative my-auto shadow-2xl"
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: 20, opacity: 0}}
                        transition={{duration: 0.25}}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-white/60 hover:text-white text-3xl leading-none w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors z-10"
                            aria-label="Schließen"
                        >
                            ×
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LegalModal;
