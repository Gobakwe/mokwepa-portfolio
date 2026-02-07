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
                    <h2 className="text-sm font-light tracking-widest uppercase text-zinc-500 mb-8">01 / About</h2>
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-3xl md:text-4xl font-display leading-tight">
                            [About content will be inserted here]
                        </p>
                        <p className="text-zinc-400 mt-6 text-xl">
                            Waiting for content from PDF...
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
