'use client';

import { motion } from 'framer-motion';

const educations = [
    {
        institution: 'Toshkent Axborot Texnologiyalari Universiteti',
        degree: 'Kompyuter Engineering (Bakalavr)',
        period: '2022 - Hozirgi vaqt',
        description: 'Tizimli dasturlash, algoritmlar va ma\'lumotlar tuzilmasi bo\'yicha chuqur bilimlar.'
    },
    {
        institution: 'IT-Academy',
        degree: 'Full-Stack Web Development Bootcamp',
        period: '2021',
        description: 'Zamonaviy veb texnologiyalar (MERN stack) bo\'yicha intensiv amaliy kurs.'
    }
];

export default function Education() {
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
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '60px' }}>Ta’lim</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    {educations.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{ padding: '30px', borderRadius: '20px' }}
                        >
                            <span style={{ fontSize: '0.9rem', opacity: 0.6 }}>{edu.period}</span>
                            <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{edu.degree}</h3>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>{edu.institution}</h4>
                            <p style={{ opacity: 0.7, lineHeight: '1.6' }}>{edu.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
