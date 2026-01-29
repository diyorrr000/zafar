'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetailClient({ project }: { project: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
        >
            <Link
                href="/projects"
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '40px',
                    opacity: 0.6
                }}
            >
                <ArrowLeft size={20} /> Orqaga qaytish
            </Link>

            <div style={{
                height: '400px',
                borderRadius: '30px',
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: '40px'
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
                <div>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>{project.title}</h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8 }}>
                        {project.fullDescription}
                    </p>
                </div>

                <div className="glass" style={{ padding: '30px', borderRadius: '20px', alignSelf: 'start' }}>
                    <h3 style={{ marginBottom: '20px' }}>Ishlatilgan texnologiyalar</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="glass" style={{ padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem' }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <a href={project.liveUrl} className="glass" style={{
                            padding: '12px',
                            borderRadius: '10px',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            background: 'var(--foreground)',
                            color: 'var(--background)'
                        }}>
                            Jonli demo <ExternalLink size={18} />
                        </a>
                        <a href={project.repoUrl} className="glass" style={{
                            padding: '12px',
                            borderRadius: '10px',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px'
                        }}>
                            GitHub kod <Github size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
