'use client';

import { motion } from 'framer-motion';

const techStack = [
    { name: 'Next.js', category: 'Framework' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Fowler', category: 'Architecture' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Framer Motion', category: 'Animation' },
];

export default function Tech() {
    return (
        <div className="container" style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '40px 20px'
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '40px' }}>Texnologiyalar</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="glass"
                            style={{
                                padding: '30px',
                                borderRadius: '15px',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            }}
                        >
                            <h3 style={{ fontSize: '1.2rem' }}>{tech.name}</h3>
                            <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>{tech.category}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
