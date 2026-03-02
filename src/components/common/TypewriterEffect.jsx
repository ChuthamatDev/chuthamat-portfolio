import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = words[currentWordIndex]
        const isWordComplete = text === currentWord
        const isWordEmpty = text === ''

        const delay = !isDeleting && isWordComplete ? 1500 : isDeleting ? 50 : 150

        const timer = setTimeout(() => {
            if (!isDeleting && isWordComplete) {
                setIsDeleting(true)
                return
            }

            if (isDeleting && isWordEmpty) {
                setIsDeleting(false)
                setCurrentWordIndex((prev) => (prev + 1) % words.length)
                return
            }

            setText((prev) =>
                isDeleting
                    ? currentWord.substring(0, prev.length - 1)
                    : currentWord.substring(0, prev.length + 1)
            )
        }, delay)

        return () => clearTimeout(timer)
    }, [text, isDeleting, currentWordIndex, words])

    return (
        <span className={className}>
            {text}
            <Cursor className={cursorClassName} />
        </span>
    )
}

const Cursor = ({ className }) => {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
            }}
            className={`inline-block h-[1em] w-[2px] bg-black align-middle ml-1 ${className}`}
        />
    )
}

export default TypewriterEffect
