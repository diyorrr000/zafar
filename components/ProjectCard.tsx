'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    slug: string;
    tags: string[];
}

export default function ProjectCard({ title, description, image, slug, tags }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass"
            style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <div style={{
                height: '200px',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} />
            <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{title}</h3>
                <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                    {description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {tags.map((tag) => (
                        <span key={tag} style={{
                            fontSize: '0.7rem',
                            padding: '4px 10px',
                            borderRadius: '20px',
                            border: '1px solid var(--border)',
                            opacity: 0.6
                        }}>{tag}</span>
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <Link href={`/projects/${slug}`} style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Batafsil</Link>
                    <div style={{ display: 'flex', gap: '10px', marginLeft: 'auto' }}>
                        <ExternalLink size={18} style={{ opacity: 0.6 }} />
                        <Github size={18} style={{ opacity: 0.6 }} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
