import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const AppleNavbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = ['Projects', 'Skills', 'Contact']

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-zinc-950/80 backdrop-blur-2xl border-b border-zinc-800'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    <a href="#" className="group">
                        <span className="text-sm font-medium tracking-[0.15em] uppercase text-white">
                            Chuthamat
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-12">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-500 hover:text-white transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="/resume/resume_chuthamat_buaban.pdf"
                            download
                            className="text-[10px] font-semibold tracking-[0.15em] uppercase bg-white text-zinc-900 rounded-full px-6 py-2.5 hover:bg-zinc-200 transition-colors duration-300"
                        >
                            Resume
                        </a>
                    </div>

                    <button className="md:hidden text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-300">
                        Menu
                    </button>
                </div>
            </div>
        </motion.nav>
    )
}

export default AppleNavbar
