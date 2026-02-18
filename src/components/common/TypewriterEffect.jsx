
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        const typeSpeed = isDeleting ? 50 : 150;

        if (!isDeleting && text === currentWord) {
            // Pause at end of word
            const timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1500);
            return () => clearTimeout(timeout);
        } else if (isDeleting && text === "") {
            // End of delete, move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timer = setTimeout(() => {
            setText(prev => {
                if (isDeleting) {
                    return currentWord.substring(0, prev.length - 1);
                } else {
                    return currentWord.substring(0, prev.length + 1);
                }
            });
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, currentWordIndex, words]);

    return (
        <span className={className}>
            {text}
            <Cursor className={cursorClassName} />
        </span>
    );
};

const Cursor = ({ className }) => {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className={`inline-block h-[1em] w-[2px] bg-black align-middle ml-1 ${className}`}
        />
    );
};

export default TypewriterEffect;
