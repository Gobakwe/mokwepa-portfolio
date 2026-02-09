'use client';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 bg-black text-white min-h-[50vh] flex flex-col justify-center border-t border-zinc-900">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm font-light tracking-widest uppercase text-zinc-500 mb-8">05 / Contact</h2>
                    <h3 className="text-6xl md:text-8xl font-display font-bold mb-12 hover:text-zinc-400 transition-colors cursor-default">
                        Get in Touch
                    </h3>

                    <div className="flex flex-col gap-8 items-center">
                        <a href="mailto:hello@mokwepa.com" className="text-2xl md:text-3xl text-white hover:text-zinc-400 transition-colors border-b border-white hover:border-zinc-400 pb-2">
                            hello@mokwepa.com
                        </a>

                        <div className="flex gap-8 text-zinc-500 mt-8">
                            <a href="#" className="hover:text-white transition-colors text-lg uppercase tracking-widest">LinkedIn</a>
                            <a href="#" className="hover:text-white transition-colors text-lg uppercase tracking-widest">Twitter</a>
                            <a href="#" className="hover:text-white transition-colors text-lg uppercase tracking-widest">Instagram</a>
                        </div>
                    </div>

                    <p className="mt-24 text-xs text-zinc-800 uppercase tracking-widest">
                        © {new Date().getFullYear()} Mokwepa. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
