'use client';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [1, 2, 3, 4]; // Placeholder

    return (
        <section id="projects" className="py-24 px-4 bg-zinc-950 text-white">
            <div className="container mx-auto max-w-7xl">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-sm font-light tracking-widest uppercase text-zinc-500">02 / Selected Works</h2>
                    <div className="hidden md:block w-px h-10 bg-zinc-800"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] bg-zinc-900 overflow-hidden relative mb-6">
                                <div className="absolute inset-0 bg-zinc-800 transition-transform duration-700 group-hover:scale-105" />
                                {/* Image placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-display text-4xl group-hover:text-white transition-colors duration-500">
                                    Project {project}
                                </div>
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-zinc-300 transition-colors">Project Name</h3>
                            <p className="text-zinc-500 text-sm">Design / Development</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
