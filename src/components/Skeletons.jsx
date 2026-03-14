import { motion } from 'motion/react'

const Shimmer = () => (
    <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-zinc-800/10 to-transparent"
        animate={{ translateX: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
    />
)

export const HeroSkeleton = () => (
    <section className="relative min-h-screen flex items-stretch bg-zinc-950 overflow-hidden">
        {/* Left */}
        <div className="relative z-10 flex flex-col justify-between w-full lg:w-1/2 px-8 md:px-16 py-24 md:py-32 border-b lg:border-b-0 border-zinc-800/60">
            <div className="w-32 h-4 bg-zinc-900 rounded-full overflow-hidden relative"><Shimmer /></div>
            <div className="my-auto py-12 space-y-4">
                <div className="w-3/4 h-16 sm:h-20 bg-zinc-900 rounded-2xl overflow-hidden relative"><Shimmer /></div>
                <div className="w-1/2 h-16 sm:h-20 bg-zinc-900 rounded-2xl overflow-hidden relative"><Shimmer /></div>
                <div className="w-48 h-6 bg-zinc-900 rounded-full mt-8 overflow-hidden relative"><Shimmer /></div>
                <div className="w-full max-w-sm h-24 bg-zinc-900 rounded-2xl mt-8 overflow-hidden relative"><Shimmer /></div>
                <div className="flex gap-8 mt-10">
                    <div className="w-16 h-12 bg-zinc-900 rounded-xl overflow-hidden relative"><Shimmer /></div>
                    <div className="w-16 h-12 bg-zinc-900 rounded-xl overflow-hidden relative"><Shimmer /></div>
                    <div className="w-16 h-12 bg-zinc-900 rounded-xl overflow-hidden relative"><Shimmer /></div>
                </div>
            </div>
            <div className="w-40 h-4 bg-zinc-900 rounded-full overflow-hidden relative"><Shimmer /></div>
        </div>
        {/* Right */}
        <div className="relative z-10 hidden lg:flex flex-col w-1/2 px-10 xl:px-16 py-24">
            <div className="flex items-center justify-between mb-8 pb-5 border-b border-zinc-800/70">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 overflow-hidden relative"><Shimmer /></div>
                    <div className="space-y-2">
                        <div className="w-32 h-4 bg-zinc-900 rounded-full overflow-hidden relative"><Shimmer /></div>
                        <div className="w-24 h-3 bg-zinc-900 rounded-full overflow-hidden relative"><Shimmer /></div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-end gap-4 overflow-hidden w-full">
                <div className="self-end w-2/3 h-16 bg-zinc-900 rounded-2xl rounded-br-sm overflow-hidden relative"><Shimmer /></div>
                <div className="self-start w-1/2 h-12 bg-zinc-900 rounded-2xl rounded-bl-sm overflow-hidden relative"><Shimmer /></div>
                <div className="self-end w-3/4 h-20 bg-zinc-900 rounded-2xl rounded-br-sm overflow-hidden relative"><Shimmer /></div>
                <div className="self-start w-2/3 h-16 bg-zinc-900 rounded-2xl rounded-bl-sm overflow-hidden relative"><Shimmer /></div>
            </div>
            <div className="mt-6 pt-5 border-t border-zinc-800/70">
                <div className="w-full h-12 bg-zinc-900 rounded-xl overflow-hidden relative"><Shimmer /></div>
            </div>
        </div>
    </section>
)

export const GithubSkeleton = () => (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto space-y-6">
            <div className="mb-12">
                <div className="w-32 h-3 bg-zinc-900 rounded-full mb-4 overflow-hidden relative"><Shimmer /></div>
                <div className="w-64 h-10 bg-zinc-900 rounded-xl overflow-hidden relative"><Shimmer /></div>
            </div>
            <div className="w-full h-24 bg-zinc-900 rounded-2xl overflow-hidden relative"><Shimmer /></div>
            <div className="w-full h-[500px] bg-zinc-900 rounded-2xl overflow-hidden relative"><Shimmer /></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-40 bg-zinc-900 rounded-2xl overflow-hidden relative"><Shimmer /></div>
                ))}
            </div>
        </div>
    </section>
)

export const KanbanSkeleton = () => (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
            <div className="mb-12">
                <div className="w-32 h-3 bg-zinc-900 rounded-full mb-4 overflow-hidden relative"><Shimmer /></div>
                <div className="w-64 h-10 bg-zinc-900 rounded-xl overflow-hidden relative"><Shimmer /></div>
            </div>
            <div className="w-full h-[600px] bg-zinc-900 rounded-3xl overflow-hidden relative"><Shimmer /></div>
        </div>
    </section>
)

export const BentoSkeleton = () => (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
            <div className="mb-12">
                <div className="w-32 h-3 bg-zinc-900 rounded-full mb-4 overflow-hidden relative"><Shimmer /></div>
                <div className="w-64 h-10 bg-zinc-900 rounded-xl overflow-hidden relative"><Shimmer /></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                <div className="lg:col-span-8 lg:row-span-2 h-[600px] bg-zinc-900 rounded-3xl overflow-hidden relative"><Shimmer /></div>
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="lg:col-span-4 h-[290px] bg-zinc-900 rounded-3xl overflow-hidden relative"><Shimmer /></div>
                ))}
            </div>
        </div>
    </section>
)

export const SkillsSkeleton = () => (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
            <div className="mb-12">
                <div className="w-32 h-3 bg-zinc-900 rounded-full mb-4 overflow-hidden relative"><Shimmer /></div>
                <div className="w-64 h-10 bg-zinc-900 rounded-xl overflow-hidden relative"><Shimmer /></div>
            </div>
            <div className="w-full h-64 bg-zinc-900 rounded-3xl overflow-hidden relative"><Shimmer /></div>
            <div className="mt-12 w-full h-64 bg-zinc-900 rounded-3xl overflow-hidden relative"><Shimmer /></div>
        </div>
    </section>
)
