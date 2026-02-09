'use client';
import { motion } from 'framer-motion';

const roles = [
    {
        title: "Project Lead / Systems Integrator",
        description: "Coordinates scope, requirements, interfaces, and timeline. Ensures subsystem integration and end-to-end validation."
    },
    {
        title: "Control & Automation Lead",
        description: "Designs controllers (PID/fuzzy/supervisory logic), simulations, and stability testing. Defines control metrics and tuning procedure."
    },
    {
        title: "Signal Processing & Data Lead",
        description: "Owns preprocessing pipelines, feature extraction, and robustness analysis. Defines evaluation protocols."
    },
    {
        title: "Embedded & Hardware Lead",
        description: "Implements sensing/actuation electronics, power architecture, and firmware logic. Handles reliability testing and hardware safety."
    },
    {
        title: "Mechanical & Prototyping Lead",
        description: "CAD design, mechanism integration, mounting, tolerances, and manufacturability. Prototype build planning."
    },
    {
        title: "AI / Vision Lead",
        description: "Owns vision pipelines (ROI detection, OCR training/inference), error analysis. Builds dataset strategy and model evaluation."
    },
    {
        title: "Software & Dashboard Lead",
        description: "Builds APIs, UIs, dashboards, data storage/traceability layers. Ensures product usability and monitoring."
    },
    {
        title: "Documentation & Quality Lead",
        description: "Maintains reports, versioning, formatting, and evidence pack completeness. Ensures consistent portfolio-quality outputs."
    }
];

const operatingModel = [
    "Research-first workflow: Problem → Prototype → Evaluate → Iterate → Document",
    "Weekly cadence: short standups + a weekly evidence update",
    "Validation mindset: every project includes at least one measurable metric and one failure case",
    "Standardization: shared templates for reports, figures, naming conventions, and project pages"
];

const Team = () => {
    return (
        <section id="team" className="py-24 px-4 bg-black text-white">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-light tracking-widest uppercase text-zinc-500 mb-8">03 / Team</h2>
                    <h3 className="text-3xl md:text-5xl font-display font-medium mb-6">Structure & Operations</h3>
                    <p className="text-zinc-400 text-lg max-w-3xl">
                        Mokwepa continues to operate as an academic–entrepreneurship group with 7 members. We organize work using roles that mirror real engineering teams, while allowing members to rotate and grow.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-white border-b border-zinc-800 pb-4">Roles</h4>
                        <div className="space-y-8">
                            {roles.map((role, idx) => (
                                <div key={idx} className="group">
                                    <h5 className="text-lg font-medium text-zinc-200 mb-2 group-hover:text-white transition-colors">{role.title}</h5>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{role.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-white border-b border-zinc-800 pb-4">Operating Model</h4>
                        <ul className="space-y-6">
                            {operatingModel.map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-zinc-500 mr-4 mt-1">0{idx + 1}</span>
                                    <span className="text-zinc-300 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
