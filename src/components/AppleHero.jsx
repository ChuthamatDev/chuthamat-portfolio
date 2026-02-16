import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AppleHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-white">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

            <div className="relative max-w-5xl mx-auto text-center z-10">
                {/* Minimalist Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block mb-8"
                >
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500">
                        Portfolio 2024
                    </span>
                </motion.div>

                {/* Main Heading - Luxury Typography */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 mb-8 leading-[0.95]"
                >
                    Engineering
                    <br />
                    <span className="font-extralight italic">meets</span>
                    <br />
                    <span className="font-medium">Design</span>
                </motion.h1>

                {/* Subtitle - Refined */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed font-light"
                >
                    Chuthamat Buaban — Electrical Engineer turned Frontend Developer,
                    <br className="hidden sm:block" />
                    crafting digital experiences with precision and elegance.
                </motion.p>

                {/* Minimal CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-900 transition-all duration-300"
                    >
                        VIEW WORK
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="/resume/CV_chuthamat_buaban.pdf"
                        download
                        className="inline-flex items-center gap-3 border border-gray-300 text-gray-900 px-8 py-4 text-sm font-medium tracking-wide hover:border-gray-900 transition-all duration-300"
                    >
                        DOWNLOAD CV
                    </a>
                </motion.div>

                {/* Minimal Divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-24 mb-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                />

                {/* Stats - Luxury Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
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
    );
};

export default AppleHero;
