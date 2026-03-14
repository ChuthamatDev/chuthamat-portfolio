import { motion } from 'motion/react'
import { Rocket, Layers, Key, Code, ShieldCheck, Globe, PlayCircle, Star } from 'lucide-react'

const FeaturedKanban = () => {
    return (
        <section id="featured-project" className="py-20 md:py-32 px-4 md:px-6 bg-zinc-950/50 border-t border-zinc-800/80">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 md:mb-16 text-center md:text-left"
                >
                    <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-zinc-500 mb-4 flex items-center justify-center md:justify-start gap-2">
                        <Star className="w-4 h-4 text-emerald-500" /> Featured Project
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white/90">
                        Kanban Task Board
                    </h2>
                    <p className="mt-6 text-sm md:text-base text-zinc-400 max-w-3xl font-light leading-relaxed mx-auto md:mx-0">
                        แอปพลิเคชันจัดการงานสไตล์ Jira สร้างด้วย React และ TypeScript
                        ออกแบบมาเพื่อแสดงสถาปัตยกรรม Frontend ที่ทันสมัย การจัดการ State ที่ซับซ้อน และการ Drag-and-Drop ที่มีประสิทธิภาพสูง
                    </p>
                </motion.div>

                {/* Hero Image/Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-sm mb-16 md:mb-20 group"
                >
                    <div className="aspect-[16/9] w-full relative">
                        <video
                            src="/Recording_taskboard.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <a
                                href="https://task-board-react-ivory.vercel.app/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-full font-medium text-xs tracking-[0.1em] uppercase hover:bg-zinc-200 transition-colors shadow-sm"
                            >
                                <PlayCircle className="w-4 h-4 text-zinc-700" />
                                Try Live Demo
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column - Details */}
                    <div className="space-y-12 md:space-y-16">
                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl md:text-2xl font-light text-white/90 mb-6 border-b border-zinc-800/80 pb-4 flex items-center gap-3">
                                <Layers className="w-5 h-5 text-zinc-500" /> Tech Stack
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                <div>
                                    <h4 className="text-[10px] font-semibold text-zinc-500 mb-3 uppercase tracking-wider">Frontend</h4>
                                    <ul className="text-zinc-400 space-y-2 text-sm font-light">
                                        <li>• React 19 + Vite</li>
                                        <li>• TypeScript 5</li>
                                        <li>• Tailwind CSS 4</li>
                                        <li>• @dnd-kit (Drag & Drop)</li>
                                        <li>• Framer Motion</li>
                                        <li>• React Router v6 & Axios</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-semibold text-zinc-500 mb-3 uppercase tracking-wider">Backend</h4>
                                    <ul className="text-zinc-400 space-y-2 text-sm font-light">
                                        <li>• Node.js + Express</li>
                                        <li>• PostgreSQL</li>
                                        <li>• Prisma ORM</li>
                                        <li>• JWT Authentication</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl md:text-2xl font-light text-white/90 mb-6 border-b border-zinc-800/80 pb-4 flex items-center gap-3">
                                <Key className="w-5 h-5 text-zinc-500" /> Key Features
                            </h3>
                            <ul className="space-y-4 text-zinc-400 font-light text-sm leading-relaxed">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-2 flex-shrink-0" />
                                    <span><strong className="text-zinc-300 font-normal">Dynamic Columns:</strong> สร้าง แก้ไข และลบคอลัมน์ได้ พร้อมฟังก์ชันเลือกสีประจำคอลัมน์</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-2 flex-shrink-0" />
                                    <span><strong className="text-zinc-300 font-normal">Drag & Drop:</strong> ลาก Task ข้ามคอลัมน์ได้อย่างอิสระ พร้อม Animation ที่ลื่นไหล</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-2 flex-shrink-0" />
                                    <span><strong className="text-zinc-300 font-normal">Search & Filters:</strong> ค้นหางาน และกรองตาม Priority (Low, Medium, High)</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-2 flex-shrink-0" />
                                    <span><strong className="text-zinc-300 font-normal">Theme & i18n:</strong> รองรับ Dark/Light Mode และสลับภาษาได้ 2 ภาษา (EN/TH)</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-2 flex-shrink-0" />
                                    <span><strong className="text-zinc-300 font-normal">Security:</strong> ระบบ JWT Authentication เต็มรูปแบบ (Login/Register/Protect Route)</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right Column - Deep Dive */}
                    <div className="space-y-12 md:space-y-16">
                        {/* Tech Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl md:text-2xl font-light text-white/90 mb-6 border-b border-zinc-800/80 pb-4 flex items-center gap-3">
                                <Code className="w-5 h-5 text-zinc-500" /> Highlights
                            </h3>
                            <div className="bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-zinc-800 text-zinc-400 font-light text-sm leading-relaxed space-y-4 shadow-sm">
                                <p>
                                    <strong className="text-zinc-300 font-normal">Centralized State:</strong> ใช้ Context API แบบแยกส่วนเพื่อความชัดเจน เช่น TaskContext, ColumnContext, AuthContext, ThemeContext และ LanguageContext
                                </p>
                                <p>
                                    <strong className="text-zinc-300 font-normal">Custom Hooks:</strong> แยก Logic ออกจาก UI อย่างหมดจดด้วย <code className="text-emerald-400/80 text-xs">useBoardDrag</code>, <code className="text-emerald-400/80 text-xs">useTaskModal</code> และ <code className="text-emerald-400/80 text-xs">useAuth</code>
                                </p>
                                <p>
                                    <strong className="text-zinc-300 font-normal">Performance:</strong> ลด Unnecessary Re-renders ด้วยการประยุกต์ใช้ <code className="text-emerald-400/80 text-xs">React.memo</code> และ <code className="text-emerald-400/80 text-xs">useCallback</code> อย่างเป็นระบบ
                                </p>
                                <p>
                                    <strong className="text-zinc-300 font-normal">API Handling:</strong> ใช้ Axios Interceptors เพื่อจัดการ Token Refresh ให้ผู้ใช้โดยอัตโนมัติแบบราบรื่น
                                </p>
                            </div>
                        </motion.div>

                        {/* E2E Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl md:text-2xl font-light text-white/90 mb-6 border-b border-zinc-800/80 pb-4 flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-zinc-500" /> E2E Testing
                            </h3>
                            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
                                <div className="bg-emerald-950/20 p-5 rounded-xl border border-emerald-900/30 text-center shadow-sm">
                                    <div className="text-3xl font-light text-emerald-400 mb-1">11</div>
                                    <div className="text-[10px] md:text-xs font-semibold uppercase text-emerald-500/70 tracking-wider">Auth Tests</div>
                                    <div className="text-xs text-emerald-600/70 mt-1.5 font-light">Register, Login, Routing</div>
                                </div>
                                <div className="bg-blue-950/20 p-5 rounded-xl border border-blue-900/30 text-center shadow-sm">
                                    <div className="text-3xl font-light text-blue-400 mb-1">5</div>
                                    <div className="text-[10px] md:text-xs font-semibold uppercase text-blue-500/70 tracking-wider">Kanban Tests</div>
                                    <div className="text-xs text-blue-600/70 mt-1.5 font-light">CRUD, Drag & Drop</div>
                                </div>
                            </div>
                            <p className="text-zinc-400 font-light text-sm leading-relaxed">
                                ทดสอบครอบคลุมถึง 16 Test Cases ด้วย Playwright เน้นตรวจสอบความถูกต้องของการแสดงผล และการทำงานของการ Drag & Drop
                                โดยบันทึกวิดีโอระดับ Full HD ไว้ตรวจสอบสำหรับแต่ละ Test Run อัตโนมัติ
                            </p>
                        </motion.div>

                        {/* Deployment */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/50 text-white p-6 md:p-8 rounded-2xl border border-zinc-800/80 shadow-sm"
                        >
                            <h3 className="text-lg font-light mb-5 flex items-center gap-3">
                                <Globe className="w-5 h-5 text-zinc-500" /> Infrastructure
                            </h3>
                            <div className="space-y-3 font-light text-sm text-zinc-400">
                                <div className="flex justify-between items-center border-b border-zinc-800/50 pb-3">
                                    <span>Frontend</span>
                                    <span className="bg-white text-zinc-900 px-2.5 py-0.5 rounded text-[10px] font-medium tracking-wide">Vercel</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-zinc-800/50 pb-3">
                                    <span>Backend API</span>
                                    <span className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-2.5 py-0.5 rounded text-[10px] font-medium tracking-wide">Render</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Database</span>
                                    <span className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-2.5 py-0.5 rounded text-[10px] font-medium tracking-wide">PostgreSQL</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedKanban
