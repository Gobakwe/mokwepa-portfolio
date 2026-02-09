import { projects } from '@/data/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }: Props) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-24 pb-24 px-4">
            <div className="container mx-auto max-w-4xl">
                <Link href="/#projects" className="text-sm text-zinc-500 hover:text-white transition-colors mb-8 inline-block">
                    ← Back to Projects
                </Link>

                <header className="mb-16">
                    <div className="text-sm text-zinc-400 mb-4 uppercase tracking-widest">{project.theme}</div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">{project.title}</h1>
                    <div className="h-px w-full bg-zinc-800" />
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="col-span-2 space-y-12">
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-zinc-200">Problem</h2>
                            <p className="text-zinc-400 leading-relaxed text-lg">
                                {project.problem}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 text-zinc-200">Solution</h2>
                            <p className="text-zinc-400 leading-relaxed">
                                {project.solution}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 text-zinc-200">Methodology</h2>
                            <ul className="list-disc list-inside space-y-2 text-zinc-400">
                                {project.method.map((item, idx) => (
                                    <li key={idx} className="leading-relaxed">{item}</li>
                                ))}
                            </ul>
                        </section>

                        {project.results && (
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-zinc-200">Results</h2>
                                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                                    {project.results.map((item, idx) => (
                                        <li key={idx} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    <div className="col-span-1">
                        <div className="sticky top-24 border border-zinc-800 p-6 rounded-none bg-zinc-900/50">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Tools Used</h3>
                            <p className="text-zinc-300 leading-relaxed">
                                {project.tools}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
