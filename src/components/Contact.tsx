'use client';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 bg-black text-white min-h-[50vh] flex flex-col justify-center">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 hover:text-zinc-400 transition-colors cursor-default">
                        Get in Touch
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-zinc-500">
                        <a href="mailto:hello@mokwepa.com" className="hover:text-white transition-colors text-lg">hello@mokwepa.com</a>
                        <span className="hidden md:block">•</span>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-white transition-colors">Twitter</a>
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        </div>
                    </div>

                    <p className="mt-20 text-xs text-zinc-800">
                        © {new Date().getFullYear()} Mokwepa. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
