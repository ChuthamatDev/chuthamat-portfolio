import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState, useRef } from 'react'
import { ArrowRight, MapPin, Zap } from 'lucide-react'

// ─── Chat script ───────────────────────────────────────────────
const CHAT_SCRIPT = [
    { id: 1, from: 'them', text: 'Hey — who are you?' },
    {
        id: 2,
        from: 'me',
        text: "I'm Chuthamat. I build React interfaces that feel as good as they look.",
    },
    { id: 3, from: 'them', text: 'What kind of engineer exactly?' },
    {
        id: 4,
        from: 'me',
        text: 'A Design Engineer — I care about the gap between "works" and "delights".',
    },
    { id: 5, from: 'them', text: "What's your background?" },
    {
        id: 6,
        from: 'me',
        text: 'Electrical Engineering → Frontend Dev. Precision from hardware, craft from UI.',
    },
    { id: 7, from: 'them', text: 'What do you ship?' },
    {
        id: 8,
        from: 'me',
        text: 'Enterprise systems, IoT dashboards, Kanban apps — TypeScript, Tailwind, Framer Motion.',
    },
    { id: 9, from: 'them', text: 'Are you available?' },
    {
        id: 10,
        from: 'me',
        text: "Yes. Let's build something worth scrolling for. 👇",
        cta: true,
    },
]

// ─── Typing indicator ──────────────────────────────────────────
const TypingDots = ({ typingFor }) => {
    const isMe = typingFor === 'me'
    return (
        <div
            className={`flex items-center gap-1 px-4 py-3 rounded-2xl w-fit ${isMe ? 'bg-white rounded-br-sm' : 'bg-zinc-800 rounded-bl-sm'
                }`}
        >
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${isMe ? 'bg-zinc-400' : 'bg-zinc-400'}`}
                    animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                    transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        delay: i * 0.18,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    )
}

// ─── Single chat bubble ────────────────────────────────────────
const ChatBubble = ({ msg }) => {
    const isMe = msg.from === 'me'
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`flex w-full ${isMe ? 'justify-end' : 'justify-start'}`}
        >
            <div
                className={`
                    max-w-[50%] px-4 py-2.5 text-sm leading-relaxed font-light tracking-wide
                    ${isMe
                        ? 'bg-white text-zinc-900 rounded-2xl rounded-br-sm font-normal'
                        : 'bg-zinc-800 text-zinc-200 rounded-2xl rounded-bl-sm'
                    }
                    ${msg.cta ? 'border border-white/20' : ''}
                `}
            >
                {msg.text}
            </div>
        </motion.div>
    )
}

// ─── Main component ────────────────────────────────────────────
const SplitIntroHero = () => {
    const [visibleMessages, setVisibleMessages] = useState([])
    const [showTyping, setShowTyping] = useState(false)
    const [typingFor, setTypingFor] = useState(null) // 'them' | 'me'
    const [started, setStarted] = useState(false)
    const chatEndRef = useRef(null)

    // Auto-scroll chat to bottom smoothly without scrolling the entire page section
    useEffect(() => {
        if (chatEndRef.current) {
            const container = chatEndRef.current.parentElement
            container.scrollTo({
                top: container.scrollHeight,
                behavior: 'smooth'
            })
        }
    }, [visibleMessages, showTyping])

    // Sequence engine: fires messages one-by-one with typing delays
    useEffect(() => {
        if (!started) return

        let cancelled = false
        let idx = visibleMessages.length

        if (idx >= CHAT_SCRIPT.length) return

        const next = CHAT_SCRIPT[idx]

        // Typing delay: "them" = shorter, "me" = longer (more to say)
        const typingDuration = next.from === 'me'
            ? 900 + next.text.length * 12
            : 600 + next.text.length * 8

        // Gap before typing appears
        const preDelay = idx === 0 ? 800 : 400

        const t1 = setTimeout(() => {
            if (cancelled) return
            setShowTyping(true)
            setTypingFor(next.from)

            const t2 = setTimeout(() => {
                if (cancelled) return
                setShowTyping(false)
                setTypingFor(null)
                setVisibleMessages((prev) => [...prev, next])
            }, typingDuration)

            return () => clearTimeout(t2)
        }, preDelay)

        return () => {
            cancelled = true
            clearTimeout(t1)
        }
    }, [visibleMessages, started])

    const stats = [
        { value: '5', label: 'Projects' },
        { value: '15+', label: 'Tech' },
        { value: '1Y+', label: 'Exp' },
    ]

    return (
        <section className="relative min-h-screen flex items-stretch bg-zinc-950 overflow-hidden">

            {/* Subtle grid texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

            {/* Vertical divider glow */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-zinc-700/60 to-transparent hidden lg:block pointer-events-none" />

            {/* ── LEFT PANEL ── */}
            <div className="relative z-10 flex flex-col justify-between w-full lg:w-1/2 px-8 md:px-16 py-24 md:py-32 border-b lg:border-b-0 border-zinc-800/60">

                {/* Top: eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3"
                >
                    <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-zinc-500">
                        Portfolio 2026
                    </span>
                    <span className="w-8 h-px bg-zinc-700" />
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-600">
                        Frontend Dev
                    </span>
                </motion.div>

                {/* Middle: name block */}
                <div className="my-auto py-12">

                    {/* Name */}
                    <div className="overflow-hidden mb-2">
                        <motion.h1
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[0.95]"
                        >
                            Chuthamat
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-extralight italic tracking-tight text-zinc-400 leading-[0.95]"
                        >
                            Buaban
                        </motion.h1>
                    </div>

                    {/* Role badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2.5 mb-8"
                    >
                        {/* Pulse dot */}
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-xs font-medium tracking-[0.18em] uppercase text-zinc-400">
                            Design Engineer · Available
                        </span>
                    </motion.div>

                    {/* Bio line */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm font-light text-zinc-500 leading-relaxed max-w-sm mb-10"
                    >
                        Electrical Engineer turned Frontend Developer.
                        <br />
                        I craft interfaces with engineering precision
                        <br />
                        and designer sensibility.
                    </motion.p>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
                        className="flex gap-8 mb-10 pb-10 border-b border-zinc-800/80"
                    >
                        {stats.map((s) => (
                            <div key={s.label}>
                                <div className="text-2xl font-light text-white tracking-tight">{s.value}</div>
                                <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-600 mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-4"
                    >
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault()
                                const el = document.getElementById('projects')
                                if (el) {
                                    window.scrollTo({
                                        top: el.offsetTop - 80,
                                        behavior: 'smooth'
                                    })
                                }
                            }}
                            className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-full text-xs font-semibold tracking-[0.15em] uppercase hover:bg-zinc-100 transition-colors duration-300"
                        >
                            View Work
                            <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href="/resume/resume_chuthamat_buaban.pdf"
                            download
                            className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-500 hover:text-white transition-colors duration-300"
                        >
                            Download CV
                        </a>
                    </motion.div>
                </div>

                {/* Bottom: location */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="flex items-center gap-2 text-zinc-600"
                >
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs font-light tracking-wide">Ubon Ratchathani, Thailand</span>
                </motion.div>
            </div>

            {/* ── RIGHT PANEL: Chat ── */}
            <div className="relative z-10 hidden lg:flex flex-col w-1/2 px-10 xl:px-16 py-24">

                {/* Chat header bar */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center justify-between mb-8 pb-5 border-b border-zinc-800/70"
                >
                    <div className="flex items-center gap-3">
                        {/* Avatar image */}
                        <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center overflow-hidden shrink-0">
                            <img
                                src="/image/hers.png"
                                alt="Chuthamat"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-md font-medium text-zinc-300 tracking-wide">Chuthamat Buaban</p>
                            <p className="text-[12px] text-zinc-600 tracking-wide">Design Engineer</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Zap className="w-3 h-3 text-emerald-500" />
                        <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-emerald-600">Online</span>
                    </div>
                </motion.div>

                {/* Messages area */}
                <div className="flex-1 flex flex-col justify-end overflow-hidden">
                    <div className="flex flex-col gap-2.5 overflow-y-auto pr-1 max-h-[60vh]"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        <AnimatePresence>
                            {visibleMessages.map((msg) => (
                                <ChatBubble key={msg.id} msg={msg} />
                            ))}
                        </AnimatePresence>

                        {/* Typing indicator */}
                        <AnimatePresence mode="popLayout">
                            {showTyping && (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                                    className={`flex w-full ${typingFor === 'me' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <TypingDots typingFor={typingFor} />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div ref={chatEndRef} />
                    </div>
                </div>

                {/* Start chat prompt OR "restart" after done */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mt-6 pt-5 border-t border-zinc-800/70"
                >
                    {!started ? (
                        <button
                            onClick={() => setStarted(true)}
                            className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors duration-200 group"
                        >
                            <span className="text-xs text-zinc-500 tracking-wide">Say hello...</span>
                            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                Start ↵
                            </span>
                        </button>
                    ) : visibleMessages.length === CHAT_SCRIPT.length ? (
                        <div className="flex items-center justify-between">
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault()
                                    const el = document.getElementById('projects')
                                    if (el) {
                                        window.scrollTo({
                                            top: el.offsetTop - 80,
                                            behavior: 'smooth'
                                        })
                                    }
                                }}
                                className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-white hover:text-zinc-300 transition-colors"
                            >
                                See my work <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                            <button
                                onClick={() => {
                                    setVisibleMessages([])
                                    setShowTyping(false)
                                    setStarted(false)
                                }}
                                className="text-[10px] font-medium tracking-[0.15em] uppercase text-zinc-600 hover:text-zinc-400 transition-colors"
                            >
                                Replay
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                            <motion.span
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                            />
                            <span className="text-xs text-zinc-500 tracking-wide">Conversation in progress...</span>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Mobile: show bio only (chat hidden on small screens) */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="lg:hidden absolute bottom-6 left-0 right-0 flex justify-center"
            >
                <a
                    href="#projects"
                    onClick={(e) => {
                        e.preventDefault()
                        const el = document.getElementById('projects')
                        if (el) {
                            window.scrollTo({
                                top: el.offsetTop - 80,
                                behavior: 'smooth'
                            })
                        }
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 border border-zinc-700 rounded-full text-xs font-medium tracking-[0.12em] uppercase text-zinc-300 hover:bg-zinc-700 transition-colors"
                >
                    View work <ArrowRight className="w-3 h-3" />
                </a>
            </motion.div>
        </section>
    )
}

export default SplitIntroHero
