import AppleNavbar from './components/AppleNavbar'
// import AppleHero from './components/AppleHero'
import SplitIntroHeros from './components/SplitIntroHero'
import GithubProfile from './components/GithubProfile'
import FeaturedKanban from './components/FeaturedKanban'
import BentoProjects from './components/BentoProjects'
import AppleSkills from './components/AppleSkills'
import './index.css'

function App() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-emerald-500/30 selection:text-emerald-200">
            <AppleNavbar />
            {/* <AppleHero /> */}
            <SplitIntroHeros />
            <GithubProfile />
            <FeaturedKanban />
            <BentoProjects />
            <AppleSkills />

            <footer className="bg-zinc-950 text-white py-16 px-6 border-t border-zinc-800/80">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 pb-12 border-b border-zinc-800/80">
                        <div>
                            <h3 className="text-xs font-medium tracking-[0.2em] uppercase mb-4 text-zinc-500">
                                Chuthamat Buaban
                            </h3>
                            <p className="text-sm font-light text-zinc-400 max-w-md">
                                Frontend Developer specializing in React and
                                modern web technologies.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 sm:gap-8">
                            <a
                                href="https://github.com/phraewchuthamat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-500 hover:text-white transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/chuthamatdev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-500 hover:text-white transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="mailto:chuthamat@example.com"
                                className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-500 hover:text-white transition-colors"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[10px] text-zinc-600 font-light uppercase tracking-wider">
                            © 2026 Chuthamat Buaban. All rights reserved.
                        </p>
                        <p className="text-[10px] text-zinc-600 font-light tracking-wider uppercase">
                            Designed & Developed with precision
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
