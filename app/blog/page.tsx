'use client';

import { motion } from 'framer-motion';
import BlogCard from '../../components/BlogCard';

const posts = [
    {
        title: '2024-yilda Veb Dasturlash Tendentsiyalari',
        excerpt: 'Sun\'iy intellekt, Server Components va zamonaviy UI trendlari haqida batafsil.',
        date: '20 Yanvar, 2024',
        slug: 'veb-dasturlash-tendentsiyalari-2024'
    },
    {
        title: 'Nega TypeScript o\'rganish muhim?',
        excerpt: 'Katta loyihalarda xatolarni kamaytirish va kod sifatini oshirish yo\'llari.',
        date: '15 Yanvar, 2024',
        slug: 'typescript-muhimligi'
    },
    {
        title: 'UI Dizaynda Minimalizm San\'ati',
        excerpt: 'Foydalanuvchi interfeyslarini sodda va tushunarli qilishning 5 ta oltin qoidasi.',
        date: '10 Yanvar, 2024',
        slug: 'ui-minimalizm-sanati'
    }
];

export default function Blog() {
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
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '60px' }}>Blog</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {posts.map((post, i) => (
                        <BlogCard key={i} {...post} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
