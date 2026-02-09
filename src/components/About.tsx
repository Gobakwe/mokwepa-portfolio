'use client';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-4 bg-black text-zinc-100">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm font-light tracking-widest uppercase text-zinc-500 mb-8">01 / Who We Are</h2>
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-3xl md:text-4xl font-display leading-tight mb-8">
                            Mokwepa is a 7-member academic–entrepreneurship group working at the intersection of mechatronics, automation & control, signal processing, and intelligent perception.
                        </p>
                        <p className="text-zinc-400 text-xl mb-12">
                            We develop prototypes, run experiments/simulations, and translate results into deployable solutions.
                        </p>

                        <h3 className="text-2xl text-white font-display mb-6">Research Themes</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-400">
                            <div className="border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
                                <h4 className="text-white font-bold mb-2">Control Systems & Autonomy</h4>
                                <p className="text-sm">Design, tuning, and validation of controllers for stability, performance, and robustness.</p>
                            </div>
                            <div className="border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
                                <h4 className="text-white font-bold mb-2">Signal Processing & Sensing</h4>
                                <p className="text-sm">Cleaning and extracting information from real signals (biomedical, industrial, and visual).</p>
                            </div>
                            <div className="border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
                                <h4 className="text-white font-bold mb-2">Intelligent Perception (Vision/OCR)</h4>
                                <p className="text-sm">Computer vision pipelines and learning models for identification, localization, and extraction.</p>
                            </div>
                            <div className="border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
                                <h4 className="text-white font-bold mb-2">Industrial Digitalization</h4>
                                <p className="text-sm">Dashboards and monitoring tools for operations, maintenance, and performance management.</p>
                            </div>
                            <div className="border border-zinc-800 p-6 hover:border-zinc-600 transition-colors md:col-span-2">
                                <h4 className="text-white font-bold mb-2">Cross-Disciplinary Engineering</h4>
                                <p className="text-sm">Mechatronic system design, integrating electronics, mechanical and software.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
