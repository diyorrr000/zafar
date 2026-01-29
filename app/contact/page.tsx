'use client';

import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Habaringiz yuborildi! (Demo)');
    };

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
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '60px', textAlign: 'center' }}>Aloqa</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Ma'lumotlarim</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div className="glass" style={{ padding: '12px', borderRadius: '12px' }}><Mail size={24} /></div>
                                <div>
                                    <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>Email</p>
                                    <p>zafar@example.uz</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div className="glass" style={{ padding: '12px', borderRadius: '12px' }}><Phone size={24} /></div>
                                <div>
                                    <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>Telefon</p>
                                    <p>+998 90 123 45 67</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div className="glass" style={{ padding: '12px', borderRadius: '12px' }}><MapPin size={24} /></div>
                                <div>
                                    <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>Manzil</p>
                                    <p>Xorazm, Bog'ot</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="glass" style={{ padding: '40px', borderRadius: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Ismingiz</label>
                            <input type="text" required className="glass" style={{ padding: '12px', borderRadius: '10px', color: 'inherit', border: '1px solid var(--border)', background: 'transparent' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Email manzilingiz</label>
                            <input type="email" required className="glass" style={{ padding: '12px', borderRadius: '10px', color: 'inherit', border: '1px solid var(--border)', background: 'transparent' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.9rem', opacity: 0.8 }}>Xabaringiz</label>
                            <textarea rows={5} required className="glass" style={{ padding: '12px', borderRadius: '10px', color: 'inherit', border: '1px solid var(--border)', background: 'transparent', resize: 'none' }}></textarea>
                        </div>
                        <button type="submit" style={{
                            marginTop: '10px',
                            padding: '15px',
                            borderRadius: '10px',
                            border: 'none',
                            background: 'var(--foreground)',
                            color: 'var(--background)',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px'
                        }}>
                            Habar yuborish <Send size={18} />
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
