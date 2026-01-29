'use client';

import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, BarChart } from 'lucide-react';

const services = [
    {
        title: 'Veb Dasturlash',
        description: 'Zamonaviy va tezkor veb-saytlar yaratish. Frontend va Backend tizimlarini to\'liq ishlab chiqish.',
        icon: <Code size={40} />
    },
    {
        title: 'UI/UX Dizayn',
        description: 'Foydalanuvchilarga qulay va chiroyli interfeyslar dizayni. Foydalanuvchi tajribasini tahlil qilish.',
        icon: <Layout size={40} />
    },
    {
        title: 'Mobil Ilovalar',
        description: 'iOS va Android qurilmalari uchun sifatli mobil ilovalar ishlab chiqish.',
        icon: <Smartphone size={40} />
    },
    {
        title: 'SEO va Marketing',
        description: 'Saytingizni qidiruv tizimlarida yuqori o\'rinlarga ko\'tarish va brendingizni rivojlantirish.',
        icon: <BarChart size={40} />
    }
];

export default function Services() {
    return (
        <div className="container" style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 20px'
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '60px', textAlign: 'center' }}>Xizmatlar</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '30px'
                }}>
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="glass"
                            style={{
                                padding: '40px',
                                borderRadius: '25px',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '20px'
                            }}
                        >
                            <div style={{ color: 'var(--foreground)', opacity: 0.8 }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{service.title}</h3>
                            <p style={{ opacity: 0.7, lineHeight: '1.6' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
