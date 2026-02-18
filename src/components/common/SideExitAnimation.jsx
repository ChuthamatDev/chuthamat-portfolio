
import { motion } from "motion/react";

const SideExitAnimation = ({
    children,
    delay = 0,
    className = "",
    direction = "right",
    distance = 50
}) => {
    // logic: if direction is right, we start from left (-x) and expand right
    const xStart = direction === "right" ? -distance : distance;

    return (
        <motion.div
            variants={{
                hidden: {
                    width: 0,
                    opacity: 0,
                    x: xStart,
                },
                visible: {
                    width: "auto",
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: delay
                    }
                },
                exit: {
                    width: 0,
                    opacity: 0,
                    transition: { duration: 0.2 }
                }
            }}
            className={`relative z-10 ${className}`}
            style={{ overflow: "hidden" }} // Important for the slide-out effect
        >
            <div className="whitespace-nowrap">
                {children}
            </div>
        </motion.div>
    );
};

export default SideExitAnimation;
