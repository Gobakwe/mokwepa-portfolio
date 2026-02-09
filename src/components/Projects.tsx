'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';

const Projects = () => {
    const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

    const themes = Array.from(new Set(projects.map(p => p.theme)));

    const filteredProjects = selectedTheme
        ? projects.filter(p => p.theme === selectedTheme)
        : projects;

    return (
        <section id="projects" className="py-24 px-4 bg-zinc-950 text-white min-h-screen">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-sm font-light tracking-widest uppercase text-zinc-500 mb-8">02 / Projects</h2>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        <button
                            onClick={() => setSelectedTheme(null)}
                            className={`px-4 py-2 rounded-full text-sm border transition-all ${selectedTheme === null
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600'
                                }`}
                        >
                            All
                        </button>
                        {themes.map(theme => (
                            <button
                                key={theme}
                                onClick={() => setSelectedTheme(theme)}
                                className={`px-4 py-2 rounded-full text-sm border transition-all ${selectedTheme === theme
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600'
                                    }`}
                            >
                                {theme}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="group block bg-zinc-900 border border-zinc-800 hover:border-zinc-600 overflow-hidden relative"
                            >
                                <Link href={`/projects/${project.id}`} className="flex flex-col h-full">
                                    <div className="aspect-video bg-zinc-800 relative hidden md:block">
                                        {/* Placeholder for project image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-xs uppercase tracking-widest">
                                            {project.id} Preview
                                        </div>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="text-xs text-zinc-500 mb-4 uppercase tracking-wider">{project.theme}</div>
                                            <h3 className="text-2xl font-display font-medium mb-4 group-hover:text-zinc-300 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-6">
                                                {project.problem}
                                            </p>
                                        </div>
                                        <div className="flex items-center text-sm font-medium text-white group-hover:underline decoration-zinc-500 underline-offset-4">
                                            Details <span className="ml-2">→</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
