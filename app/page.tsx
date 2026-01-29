'use client';

import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="container" style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            minHeight: '70vh'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span style={{
                    fontSize: '1rem',
                    letterSpacing: '5px',
                    opacity: 0.6,
                    textTransform: 'uppercase'
                }}>
                    Xush kelibsiz
                </span>
                <h1 style={{
                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                    fontWeight: '900',
                    margin: '20px 0',
                    lineHeight: '1.1',
                    letterSpacing: '-2px'
                }}>
                    KOD VA DIZAYN <br />
                    <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--foreground)' }}>
                        DUNYOSIGA MARHAMAT
                    </span>
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    opacity: 0.8,
                    lineHeight: '1.6'
                }}>
                    Zafar — Senior Full-Stack Developer va Creative UI/UX Designer.
                    O'zbekistonda innovatsion raqamli tajribalar yaratadi.
                </p>

                <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass"
                        style={{
                            padding: '15px 40px',
                            borderRadius: '30px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            color: 'var(--foreground)'
                        }}
                    >
                        Loyihalarni ko'rish
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '15px 40px',
                            borderRadius: '30px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            background: 'var(--foreground)',
                            color: 'var(--background)',
                            border: 'none'
                        }}
                    >
                        Men bilan bog'lanish
                    </motion.button>
                </div>
            </motion.div>

            {/* Hero Stats */}
            <div style={{
                marginTop: '100px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '40px',
                width: '100%'
            }}>
                {[
                    { label: 'Tajriba', value: '4+ Yil' },
                    { label: 'Loyihalar', value: '50+' },
                    { label: 'Mijozlar', value: '40+' },
                    { label: 'Yutuqlar', value: '10+' }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{stat.value}</h3>
                        <p style={{ opacity: 0.6 }}>{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
