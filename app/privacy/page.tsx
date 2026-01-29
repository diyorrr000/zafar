'use client';

import { motion } from 'framer-motion';

export default function Privacy() {
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
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '40px' }}>Maxfiylik siyosati</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', opacity: 0.8, lineHeight: '1.8' }}>
                    <section>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>1. Ma'lumotlarni yig'ish</h3>
                        <p>Biz faqatgina siz tomonidan aloqa formasi orqali ixtiyoriy ravishda yuborilgan ma'lumotlarni (ism, email) yig'amiz.</p>
                    </section>

                    <section>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>2. Ma'lumotlardan foydalanish</h3>
                        <p>Yig'ilgan ma'lumotlar faqatgina sizning murojaatingizga javob berish va siz bilan aloqa o'rnatish uchun ishlatiladi.</p>
                    </section>

                    <section>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>3. Xavfsizlik</h3>
                        <p>Biz sizning shaxsiy ma'lumotlaringiz xavfsizligini ta'minlash uchun barcha zarur choralarni ko'ramiz va ularni uchinchi shaxslarga bermaymiz.</p>
                    </section>

                    <p style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.5 }}>Oxirgi yangilanish: 2024 yil 29 yanvar</p>
                </div>
            </motion.div>
        </div>
    );
}
