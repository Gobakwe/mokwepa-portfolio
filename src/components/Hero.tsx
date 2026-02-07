'use client';

import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

const Hero = () => {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Normalize values -1 to 1
        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;

        mouseX.set(x);
        mouseY.set(y);
    };

    // Smooth out the movement
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Transform values for the video container
    const transform = useMotionTemplate`perspective(1000px) rotateX(${springY.get() * 5 * -1}deg) rotateY(${springX.get() * 5}deg)`;

    return (
        <section
            ref={ref}
            className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center perspective-1000"
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{
                        transform: transform,
                    }}
                    className="w-[110%] h-[110%] -translate-x-[5%] -translate-y-[5%] absolute inset-0"
                >
                    {/* Fallback background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black" />

                    {/* Video Showreel */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                    >
                        <source src="/placeholder-video.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
                </motion.div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter mb-6 mix-blend-difference"
                >
                    MOKWEPA
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto"
                >
                    Digital Designer & Developer
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm"
            >
                Scroll to explore
            </motion.div>
        </section>
    );
};

export default Hero;
