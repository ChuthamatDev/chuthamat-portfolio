import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Smart Building Energy Monitor',
        category: 'IoT & AI Platform',
        year: '2024',
        tags: ['React', 'Node.js', 'IoT', 'AI'],
        image: '/image/imageWebApp.png',
        link: 'https://github.com/Toppuwittaya/Fontend-energy',
    },
    {
        id: 2,
        title: 'SSK Ubon Microtech',
        category: 'Enterprise System',
        year: '2024',
        tags: ['React', 'Management'],
        image: '/image/ssk.png',
        link: 'https://ssk.ubonmicrotech.com/login',
    },
    {
        id: 3,
        title: 'Task Board',
        category: 'Productivity Tool',
        year: '2024',
        tags: ['React', 'Kanban'],
        image: '/image/kanban.png',
        link: 'https://task-board-react-ivory.vercel.app/login',
    },
    {
        id: 4,
        title: 'Todo List',
        category: 'Web Application',
        year: '2024',
        tags: ['React'],
        image: '/image/todolist.png',
        link: 'https://todo-list-react-liart-three.vercel.app',
    },
];

const BentoProjects = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header - Luxury Minimal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 block">
                        Selected Work
                    </span>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-gray-900">
                        Projects
                    </h2>
                </motion.div>

                {/* Luxury Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Featured Project - Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-8 lg:row-span-2"
                    >
                        <a
                            href={projects[0].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block relative h-full min-h-[600px] bg-gray-100 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={projects[0].image}
                                    alt={projects[0].title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between">
                                {/* Top - Category & Year */}
                                <div className="flex justify-between items-start">
                                    <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/80">
                                        {projects[0].category}
                                    </span>
                                    <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/80">
                                        {projects[0].year}
                                    </span>
                                </div>

                                {/* Bottom - Title & Arrow */}
                                <div>
                                    <h3 className="text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight">
                                        {projects[0].title}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2">
                                            {projects[0].tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs font-medium tracking-wider uppercase text-white/70 border border-white/30 px-3 py-1"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                                            <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </motion.div>

                    {/* Secondary Projects */}
                    {projects.slice(1).map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-4"
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block relative h-full min-h-[290px] bg-gray-100 overflow-hidden"
                            >
                                {/* Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    {/* Top */}
                                    <div className="flex justify-between items-start">
                                        <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/80">
                                            {project.category}
                                        </span>
                                        <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/80">
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* Bottom */}
                                    <div>
                                        <h3 className="text-2xl font-light text-white mb-3 tracking-tight">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-2 flex-wrap">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs font-medium tracking-wider uppercase text-white/70 border border-white/30 px-2 py-0.5"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="w-10 h-10 border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300 flex-shrink-0 ml-2">
                                                <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoProjects;
