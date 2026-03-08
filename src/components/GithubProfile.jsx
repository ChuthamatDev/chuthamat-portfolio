import { motion } from 'motion/react'
import { Github, MapPin, Coffee, Star, GitFork, ExternalLink, BookOpen, Link as LinkIcon } from 'lucide-react'

const GithubProfile = () => {
    const pinnedRepos = [
        {
            name: 'task-board-react',
            description: 'Kanban board frontend built with React, TypeScript, and Tailwind CSS.',
            language: 'TypeScript',
            languageColor: '#3178c6',
            stars: 12,
            forks: 3,
        },
        {
            name: 'task-board-api',
            description: 'Backend for Kanban board using Node.js, Express, and PostgreSQL.',
            language: 'TypeScript',
            languageColor: '#3178c6',
            stars: 8,
            forks: 2,
        },
        {
            name: 'Todo-List-React',
            description: 'A comprehensive generic ToDo list application.',
            language: 'JavaScript',
            languageColor: '#f1e05a',
            stars: 5,
            forks: 1,
        },
        {
            name: 'javascript-amazon-project',
            description: 'Amazon clone built with JavaScript, HTML, and CSS.',
            language: 'JavaScript',
            languageColor: '#f1e05a',
            stars: 4,
            forks: 0,
        },
    ]

    return (
        <section id="github" className="py-20 md:py-32 px-4 md:px-6 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 md:mb-16"
                >
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4 block">
                        Developer Profile
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-zinc-900 flex items-center gap-4">
                        <Github className="w-8 h-8 md:w-10 md:h-10 text-zinc-800" />
                        GitHub
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
                    {/* Profile Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-4 lg:sticky lg:top-24"
                    >
                        <div className="bg-zinc-50/50 rounded-2xl p-6 md:p-8 border border-zinc-200/80 shadow-sm">
                            <div className="aspect-square w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 ring-1 ring-zinc-900/5 bg-white mx-auto lg:mx-0">
                                <img
                                    src="/image/profile.png"
                                    alt="ChuthamatDev Profile"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = 'https://github.com/ChuthamatDev.png' // Fallback to GitHub avatar
                                    }}
                                />
                            </div>
                            <h3 className="text-xl md:text-2xl font-medium text-zinc-900 mb-3 text-center lg:text-left">
                                Chuthamat Buaban
                            </h3>

                            <div className="space-y-3 mt-6 border-t border-zinc-200/60 pt-6">
                                <div className="flex items-center gap-3 text-zinc-600">
                                    <Coffee className="w-4 h-4 text-zinc-400" />
                                    <span className="text-sm font-light">"I like code and coffee."</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-600">
                                    <MapPin className="w-4 h-4 text-zinc-400" />
                                    <span className="text-sm font-light">Ubon Ratchathani, Thailand</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-600">
                                    <LinkIcon className="w-4 h-4 text-zinc-400" />
                                    <a
                                        href="https://dinq.me/chuthamat"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-light hover:text-indigo-600 transition-colors"
                                    >
                                        dinq.me/chuthamat
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-600">
                                    <BookOpen className="w-4 h-4 text-zinc-400" />
                                    <span className="text-sm font-light"><strong>16</strong> Repositories</span>
                                </div>
                            </div>

                            <a
                                href="https://github.com/ChuthamatDev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 w-full flex justify-center items-center py-2.5 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm"
                            >
                                View GitHub Profile
                            </a>
                        </div>
                    </motion.div>

                    {/* Pinned Repos */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-8 flex flex-col"
                    >
                        <h4 className="text-lg font-medium text-zinc-900 mb-6 flex items-center gap-2">
                            <Star className="w-5 h-5 text-amber-400" /> Pinned Projects
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {pinnedRepos.map((repo, idx) => (
                                <motion.a
                                    key={repo.name}
                                    href={`https://github.com/ChuthamatDev/${repo.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.05 * idx }}
                                    className="group flex flex-col p-6 bg-white border border-zinc-200/80 rounded-2xl hover:border-zinc-300 hover:shadow-sm transition-all"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-2 text-indigo-600 font-medium text-sm group-hover:text-indigo-700 transition-colors">
                                            <BookOpen className="w-4 h-4" />
                                            <span>{repo.name}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm font-light text-zinc-600 mb-6 flex-grow line-clamp-2 leading-relaxed">
                                        {repo.description}
                                    </p>
                                    <div className="flex items-center gap-5 text-xs text-zinc-500 font-medium">
                                        <div className="flex items-center gap-1.5">
                                            <span
                                                className="w-2.5 h-2.5 rounded-full"
                                                style={{ backgroundColor: repo.languageColor }}
                                            />
                                            {repo.language}
                                        </div>
                                        {repo.stars > 0 && (
                                            <div className="flex items-center gap-1 hover:text-zinc-700 transition-colors">
                                                <Star className="w-3.5 h-3.5" /> {repo.stars}
                                            </div>
                                        )}
                                        {repo.forks > 0 && (
                                            <div className="flex items-center gap-1 hover:text-zinc-700 transition-colors">
                                                <GitFork className="w-3.5 h-3.5" /> {repo.forks}
                                            </div>
                                        )}
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Contributions Graph */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-4 bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-sm overflow-hidden"
                        >
                            <h4 className="text-lg font-medium text-zinc-900 mb-6 flex items-center gap-2">
                                <Github className="w-5 h-5 text-zinc-700" /> Contributions Map
                            </h4>
                            <div className="overflow-x-auto pb-2 custom-scrollbar -mx-2 px-2">
                                <div className="min-w-[700px] flex justify-center">
                                    <img
                                        src="https://ghchart.rshah.org/ChuthamatDev"
                                        alt="ChuthamatDev's Github chart"
                                        className="max-w-full opacity-90 sepia-[.2] hue-rotate-[-10deg] saturate-150"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default GithubProfile
