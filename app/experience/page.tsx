'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        company: 'Tech Solutions Inc.',
        role: 'Senior Full-Stack Developer',
        period: '2022 - Hozirgi vaqt',
        description: 'Yirik korporativ tizimlarni loyihalash va ishlab chiqish. Microservices arxitekturasi bilan ishlash.'
    },
    {
        company: 'Creative Studio',
        role: 'Lead UI/UX Designer',
        period: '2021 - 2022',
        description: 'Foydalanuvchi interfeyslarini dizayn qilish va brending strategiyalarini ishlab chiqish.'
    },
    {
        company: 'Web Startups',
        role: 'Frontend Developer',
        period: '2019 - 2021',
        description: 'React va Vue yordamida interaktiv veb ilovalar yaratish.'
    }
];

export default function Experience() {
    return (
        <div className="container" style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px 20px'
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '60px' }}>Tajriba</h2>

                <div style={{ position: 'relative', paddingLeft: '30px', borderLeft: '2px solid var(--border)' }}>
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            style={{ marginBottom: '60px', position: 'relative' }}
                        >
                            <div style={{
                                position: 'absolute',
                                left: '-41px',
                                top: '0',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                background: 'var(--foreground)',
                                border: '4px solid var(--background)'
                            }} />
                            <span style={{ fontSize: '0.9rem', opacity: 0.6 }}>{exp.period}</span>
                            <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{exp.role}</h3>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'var(--accent)' }}>{exp.company}</h4>
                            <p style={{ opacity: 0.7, lineHeight: '1.6' }}>{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
