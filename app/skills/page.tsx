'use client';

import { motion } from 'framer-motion';

const skills = [
    { name: 'Veb Dasturlash', level: 95 },
    { name: 'UI/UX Dizayn', level: 90 },
    { name: 'Mobil Ilovalar', level: 85 },
    { name: 'Backend Tizimlar', level: 88 },
    { name: 'Ma\'lumotlar Bazasi', level: 80 },
    { name: 'DevOps', level: 75 },
];

export default function Skills() {
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
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '40px' }}>Qobiliyatlar</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {skills.map((skill, i) => (
                        <div key={i} className="glass" style={{ padding: '20px', borderRadius: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div style={{ height: '5px', background: 'var(--border)', borderRadius: '5px', overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    style={{ height: '100%', background: 'var(--foreground)' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
