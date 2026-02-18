import { motion } from "motion/react"
import { ArrowRight } from 'lucide-react'
import TypewriterEffect from './common/TypewriterEffect'
import SideExitAnimation from './common/SideExitAnimation'

const AppleHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

            <div className="relative max-w-5xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block mb-8"
                >
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500">
                        Portfolio 2026
                    </span>
                </motion.div>

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 1 },
                        visible: {
                            opacity: 1,
                            transition: {
                                delay: 0.5,
                                staggerChildren: 0.08,
                            },
                        },
                    }}
                    className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 mb-8 leading-[0.95]"
                >
                    {Array.from("Engineering").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                    <br />
                    <span className="font-extralight italic">
                        {Array.from("meets").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                    <br />
                    <motion.span
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="font-medium inline-block min-w-[4ch] text-left"
                    >
                        <TypewriterEffect
                            words={["Design", "Innovation", "Future", "Scale"]}
                            cursorClassName="bg-gray-900 h-10 sm:h-14 lg:h-20 mb-2 lg:mb-4 align-middle"
                        />
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-lg text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed font-light"
                >
                    Chuthamat Buaban — Electrical Engineer turned Frontend
                    Developer,
                    <br className="hidden sm:block" />
                    crafting digital experiences with precision and elegance.
                </motion.p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="relative inline-flex items-center p-1.5 bg-white border border-gray-200 rounded-full shadow-2xl overflow-hidden">

                        {/* Primary Button (View Work) */}
                        <motion.a
                            href="#projects"
                            layout
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeOut",
                                        delay: 0.2
                                    }
                                }
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative z-20 flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-medium text-sm tracking-wide shadow-lg"
                        >
                            VIEW WORK
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </motion.a>

                        {/* Secondary Button (Download Resume) - Slides out */}
                        <SideExitAnimation
                            delay={0.8}
                            direction="right"
                            className="flex items-center"
                        >
                            <a
                                href="/resume/resume_chuthamat.pdf"
                                download
                                className="relative z-10 flex items-center pr-8 pl-6 text-sm font-medium text-zinc-500 whitespace-nowrap hover:text-black transition-colors duration-300"
                            >
                                DOWNLOAD RESUME
                            </a>
                        </SideExitAnimation>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mt-24 mb-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="grid grid-cols-3 gap-12 max-w-2xl mx-auto"
                >
                    {[
                        { value: '5', label: 'Projects' },
                        { value: '15+', label: 'Technologies' },
                        { value: '1Y+', label: 'Experience' },
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-4xl font-light text-gray-900 mb-2 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-xs font-medium tracking-[0.15em] uppercase text-gray-500">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default AppleHero
