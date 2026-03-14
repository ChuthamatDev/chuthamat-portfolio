import { motion } from 'motion/react'
import { useEffect, useState, useCallback } from 'react'

const AppleNavbar = () => {
    const [scrolled, setScrolled] = useState(false)

    // Using `requestAnimationFrame` ensures we only process scroll events at the native refresh rate (usually 60-120fps)
    // This is an extremely performant alternative to standard debouncing.
    useEffect(() => {
        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50)
                    ticking = false
                })
                ticking = true
            }
        }
        
        // Use passive listener to tell the browser this event won't cancel scroll, allowing native thread scrolling
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = ['Projects', 'Skills', 'Contact']

    // Intercepts typical anchor link jumps, calculating a specific pixel offset
    // so the header doesn't overlap the top of sections (smooth continuous transitions without refresh)
    const handleSmoothScroll = useCallback((e, targetId) => {
        e.preventDefault()
        if (targetId === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }
        
        const element = document.getElementById(targetId)
        if (element) {
            const navHeight = 80 // offset the navbar
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.scrollY - navHeight

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }, [])

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
                    <a 
                        href="#" 
                        onClick={(e) => handleSmoothScroll(e, '#')} 
                        className="group cursor-pointer"
                    >
                        <span className="text-sm font-medium tracking-[0.15em] uppercase text-white">
                            Chuthamat
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-12">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                                className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-500 hover:text-white transition-colors duration-300 cursor-pointer"
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
