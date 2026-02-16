import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Frontend',
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express.js', 'MySQL', 'PostgreSQL'],
    },
    {
        title: 'Tools',
        skills: ['Playwright', 'Git', 'Figma', 'Jira'],
    },
    {
        title: 'Other',
        skills: ['Python', 'IoT', 'VHDL'],
    },
];

const AppleSkills = () => {
    return (
        <section id="skills" className="py-32 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 block">
                        Expertise
                    </span>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-gray-900">
                        Skills
                    </h2>
                </motion.div>

                {/* Skills Grid - Minimal Luxury */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white p-8 hover:bg-gray-50 transition-colors duration-300"
                        >
                            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-900 mb-6 border-b border-gray-200 pb-4">
                                {category.title}
                            </h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="text-sm font-light text-gray-600 tracking-wide"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills - Minimal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-20 bg-black text-white p-12 lg:p-16"
                >
                    <h3 className="text-xs font-medium tracking-[0.2em] uppercase mb-8 border-b border-white/20 pb-4">
                        Soft Skills
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Problem Solving',
                            'Team Collaboration',
                            'Self-Learning',
                            'Technical Documentation',
                            'Communication',
                            'Adaptability',
                        ].map((skill, idx) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-sm font-light tracking-wide"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AppleSkills;
