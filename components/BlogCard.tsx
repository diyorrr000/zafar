'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
}

export default function BlogCard({ title, excerpt, date, slug }: BlogCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="glass"
            style={{
                borderRadius: '20px',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
            }}
        >
            <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>{date}</span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{title}</h3>
            <p style={{ opacity: 0.7, fontSize: '0.95rem', lineHeight: '1.6' }}>
                {excerpt}
            </p>
            <Link href={`/blog/${slug}`} style={{ fontWeight: 'bold', fontSize: '0.9rem', marginTop: '10px' }}>
                O'qish →
            </Link>
        </motion.div>
    );
}
