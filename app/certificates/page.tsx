'use client';

import { motion } from 'framer-motion';

const certificates = [
    {
        title: 'Google Data Analytics Professional Certificate',
        issuer: 'Google',
        date: '2023',
        link: '#'
    },
    {
        title: 'Meta Front-End Developer Professional Certificate',
        issuer: 'Meta',
        date: '2022',
        link: '#'
    },
    {
        title: 'Advanced React Patterns',
        issuer: 'Frontend Masters',
        date: '2022',
        link: '#'
    }
];

export default function Certificates() {
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
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '60px' }}>Sertifikatlar</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="glass"
                            style={{ padding: '30px', borderRadius: '20px' }}
                        >
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>{cert.title}</h3>
                            <p style={{ opacity: 0.6, marginBottom: '20px' }}>{cert.issuer} • {cert.date}</p>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{
                                color: 'var(--foreground)',
                                fontWeight: 'bold',
                                fontSize: '0.9rem',
                                textDecoration: 'underline'
                            }}>
                                Sertifikatni ko'rish
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
