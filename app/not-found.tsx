'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="container" style={{
            height: '70vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ fontSize: '10rem', fontWeight: '900', margin: 0 }}
            >
                404
            </motion.h1>
            <p style={{ fontSize: '1.5rem', opacity: 0.6, marginBottom: '40px' }}>
                Kechirasiz, sahifa topilmadi.
            </p>
            <Link href="/" className="glass" style={{
                padding: '15px 40px',
                borderRadius: '30px',
                fontWeight: 'bold',
                fontSize: '1rem'
            }}>
                Bosh sahifaga qaytish
            </Link>
        </div>
    );
}
