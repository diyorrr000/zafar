'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BlogArticleClient({ post }: { post: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Link
                href="/blog"
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '40px',
                    opacity: 0.6
                }}
            >
                <ArrowLeft size={20} /> Orqaga
            </Link>

            <span style={{ fontSize: '0.9rem', opacity: 0.5 }}>{post.date}</span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '20px 0' }}>{post.title}</h1>

            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8, whiteSpace: 'pre-line' }}>
                {post.content}
            </div>
        </motion.div>
    );
}
