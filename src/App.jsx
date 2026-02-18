import AppleNavbar from './components/AppleNavbar'
import AppleHero from './components/AppleHero'
import BentoProjects from './components/BentoProjects'
import AppleSkills from './components/AppleSkills'
import './index.css'

function App() {
    return (
        <div className="min-h-screen bg-white">
            <AppleNavbar />
            <AppleHero />
            <BentoProjects />
            <AppleSkills />

            <footer className="bg-black text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 pb-12 border-b border-white/10">
                        <div>
                            <h3 className="text-xs font-medium tracking-[0.2em] uppercase mb-4 text-white/60">
                                Chuthamat Buaban
                            </h3>
                            <p className="text-sm font-light text-white/80 max-w-md">
                                Frontend Developer specializing in React and
                                modern web technologies.
                            </p>
                        </div>
                        <div className="flex gap-8">
                            <a
                                href="https://github.com/phraewchuthamat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-medium tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/chuthamatdev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-medium tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="mailto:chuthamat@example.com"
                                className="text-xs font-medium tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-white/40 font-light">
                            © 2026 Chuthamat Buaban. All rights reserved.
                        </p>
                        <p className="text-xs text-white/40 font-light tracking-wider">
                            Designed & Developed with precision
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
