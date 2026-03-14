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
        <section id="github" className="py-20 md:py-32 px-4 md:px-6 bg-zinc-950 border-t border-zinc-800/80">
            <div className="max-w-7xl mx-auto">
                {/* Section Headings */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 md:mb-16"
                >
                    <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-zinc-500 mb-4 block">
                        Command Center
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white flex items-center gap-4">
                        <Github className="w-8 h-8 md:w-10 md:h-10 text-zinc-400" />
                        Developer Profile
                    </h2>
                </motion.div>

                {/* Top Bar (Header) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col lg:flex-row items-center justify-between bg-zinc-900/50 rounded-3xl p-6 md:p-8 lg:px-12 border border-zinc-800/80 shadow-sm mb-8 gap-6 lg:gap-8"
                >
                    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 lg:gap-8 w-full lg:w-auto">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-1 ring-zinc-700 flex-shrink-0">
                            <img
                                src="/image/profile.png"
                                alt="ChuthamatDev Profile"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://github.com/ChuthamatDev.png' // Fallback to GitHub avatar
                                }}
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                                Chuthamat Buaban
                            </h3>
                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-zinc-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-zinc-500" />
                                    <span className="font-light tracking-wide">Ubon Ratchathani</span>
                                </div>
                                <div className="hidden sm:flex items-center gap-2">
                                    <Coffee className="w-4 h-4 text-zinc-500" />
                                    <span className="font-light tracking-wide">Code & Coffee</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-8 border-t lg:border-t-0 border-zinc-800/80 pt-6 lg:pt-0 w-full lg:w-auto justify-center lg:justify-end">
                        <div className="flex gap-8 text-center shrink-0">
                            <div>
                                <div className="text-2xl font-light text-white mb-1">16</div>
                                <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-500">Repos</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <LinkIcon className="w-5 h-5 text-emerald-500 mb-2" />
                                <a
                                    href="https://dinq.me/chuthamat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-400 hover:text-white transition-colors"
                                >
                                    Website
                                </a>
                            </div>
                        </div>
                        
                        <a
                            href="https://github.com/ChuthamatDev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex justify-center items-center px-6 py-3.5 bg-white text-zinc-900 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase hover:bg-zinc-200 transition-colors shadow-sm whitespace-nowrap"
                        >
                            View GitHub
                        </a>
                    </div>
                </motion.div>

                {/* Middle Section (The Graph) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-zinc-900/50 border border-zinc-800/80 rounded-3xl p-6 md:p-10 shadow-sm mb-12 overflow-hidden"
                >
                    <h4 className="text-lg font-light text-white mb-8 flex items-center justify-center lg:justify-start gap-3">
                        <Star className="w-4 h-4 text-emerald-500" /> Contributions Map
                    </h4>
                    <div className="overflow-x-auto pb-2 custom-scrollbar flex justify-center lg:justify-start">
                        <div className="min-w-[700px] flex justify-center w-full">
                            <img
                                src="https://ghchart.rshah.org/ChuthamatDev"
                                alt="ChuthamatDev's Github chart"
                                className="max-w-full opacity-90 sepia-[.2] hue-rotate-[-10deg] saturate-150"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Section (The Repos) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h4 className="text-lg font-light text-white mb-6 flex items-center gap-3 px-2">
                        <BookOpen className="w-4 h-4 text-emerald-500" /> Key Repositories
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {pinnedRepos.map((repo, idx) => (
                            <motion.a
                                key={repo.name}
                                href={`https://github.com/ChuthamatDev/${repo.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * idx }}
                                className="group flex flex-col p-6 bg-zinc-900/50 border border-zinc-800/80 rounded-3xl hover:border-zinc-700 hover:bg-zinc-800/50 transition-all h-full"
                            >
                                <div className="flex items-center gap-2.5 text-emerald-400 font-medium text-sm group-hover:text-emerald-300 transition-colors mb-4 line-clamp-1 break-all">
                                    <BookOpen className="w-4 h-4 flex-shrink-0" />
                                    <span className="truncate">{repo.name}</span>
                                </div>
                                <p className="text-sm font-light text-zinc-400 mb-8 flex-grow line-clamp-3 leading-relaxed">
                                    {repo.description}
                                </p>
                                <div className="flex justify-between items-center text-xs text-zinc-500 font-medium mt-auto pt-5 border-t border-zinc-800/80">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="w-2.5 h-2.5 rounded-full ring-2 ring-zinc-900"
                                            style={{ backgroundColor: repo.languageColor }}
                                        />
                                        <span className="tracking-wide">{repo.language}</span>
                                    </div>
                                    <div className="flex gap-4">
                                        {repo.stars > 0 && (
                                            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                                                <Star className="w-3.5 h-3.5" /> {repo.stars}
                                            </div>
                                        )}
                                        {repo.forks > 0 && (
                                            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                                                <GitFork className="w-3.5 h-3.5" /> {repo.forks}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default GithubProfile
