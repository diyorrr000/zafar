'use client';

import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';

const projects = [
    {
        title: 'E-Commerce Platforma',
        description: 'Zamonaviy onlayn do\'kon tizimi. To\'liq funksional savat, to\'lov tizimi va admin panelga ega.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
        slug: 'e-commerce-platforma',
        tags: ['Next.js', 'PostgreSQL', 'Stripe']
    },
    {
        title: 'Smart Home App',
        description: 'Aqlli uy qurilmalarni boshqarish uchun mobil ilova. Real vaqt rejimida ma\'lumotlar almashinuvi.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000',
        slug: 'smart-home-app',
        tags: ['React Native', 'Firebase', 'IoT']
    },
    {
        title: 'AI Image Generator',
        description: 'Sun\'iy intellekt yordamida matndan rasm generatsiya qiluvchi veb ilova.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
        slug: 'ai-image-generator',
        tags: ['Python', 'React', 'OpenAI API']
    },
    {
        title: 'Crypto Portfolio Tracker',
        description: 'Kriptovalyutalar kursini kuzatish va foydalanuvchi portfelini analiz qilish tizimi.',
        image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000',
        slug: 'crypto-tracker',
        tags: ['Vue.js', 'CoinGecko API', 'Chart.js']
    }
];

export default function Projects() {
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
                <div style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>Loyihalar</h2>
                    <p style={{ opacity: 0.6, maxWidth: '600px' }}>
                        Mening so'nggi yaratgan ishlarim va innovatsion loyihalarim to'plami.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '30px'
                }}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
