'use client';
import { motion } from 'framer-motion';

const toolCategories = [
    {
        name: "Electrical / Electronics",
        items: [
            "ESP32 / Arduino / STM32",
            "Raspberry Pi / Jetson Nano",
            "Sensors: LiDAR (TFmini), IR, IMU, Biomedical (EEG/EMG)",
            "Actuation: Servos, DC Motors, Relays",
            "Circuit Design: 555 Timers, Op-Amps, Logic Gates"
        ]
    },
    {
        name: "Mechanical",
        items: [
            "SolidWorks / Fusion 360",
            "DFMA-driven decisions",
            "Mechanisms (Linkages, Mounts)",
            "3D Printing (PLA/PETG)",
            "Prototyping & Fabrication"
        ]
    },
    {
        name: "Control & Automation",
        items: [
            "PID Tuning & Performance Evaluation",
            "Fuzzy Logic Control (Mamdani)",
            "Supervisory Control Logic",
            "MATLAB / Simulink Modeling",
            "Signal Processing for Control (Health Index, Filtering)"
        ]
    },
    {
        name: "Software & Data",
        items: [
            "Python (Data Pipelines, Feature Extraction)",
            "OpenCV / Deep Learning (OCR, Vision)",
            "Web: React, Next.js, Tailwind, Framer Motion",
            "Backend: Flask, FastAPI, REST APIs",
            "Integration: Embedded-to-Cloud (MQTT/HTTP)"
        ]
    }
];

const Tools = () => {
    return (
        <section id="tools" className="py-24 px-4 bg-zinc-950 text-white border-t border-zinc-900">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-light tracking-widest uppercase text-zinc-500 mb-8">04 / Tools & Stack</h2>
                    <p className="text-zinc-400 text-lg max-w-3xl">
                        We leverage a diverse stack across hardware, software, and mechanical domains to build complete systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {toolCategories.map((category, idx) => (
                        <div key={idx} className="bg-zinc-900/30 p-8 border border-zinc-900/50 hover:border-zinc-800 transition-colors">
                            <h3 className="text-lg font-bold text-white mb-6 min-h-[3rem] items-end flex">{category.name}</h3>
                            <ul className="space-y-3">
                                {category.items.map((item, i) => (
                                    <li key={i} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors cursor-default">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
