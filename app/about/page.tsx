'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="container" style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '40px 20px'
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '40px' }}>Men haqimda</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
                    <div>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8 }}>
                            Salom! Mening ismim Zafar. Men 20 yoshdaman va O‘zbekistonning Xorazm viloyati, Bog‘ot tumanida yashayman.
                            Dasturlash va veb dizayn mening hayotimdagi eng katta qiziqishlarimdan biridir.
                        </p>
                        <br />
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8 }}>
                            Men doimo yangi texnologiyalarni o'rganishga va raqamli dunyoda innovatsion echimlarni yaratishga intilaman.
                            Mening maqsadim — foydalanuvchilar uchun nafaqat chiroyli, balki maksimal darajada qulay va funksional interfeyslarni barpo etishdir.
                        </p>
                    </div>

                    <div className="glass" style={{ padding: '30px', borderRadius: '20px' }}>
                        <h3 style={{ marginBottom: '20px' }}>Shaxsiy ma'lumotlar</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li><strong>Yoshi:</strong> 20</li>
                            <li><strong>Manzil:</strong> Xorazm viloyati, Bog‘ot tumani</li>
                            <li><strong>Soha:</strong> Dasturlash va Dizayn</li>
                            <li><strong>Email:</strong> zafar@example.uz</li>
                            <li><strong>Telegram:</strong> @secureXXX</li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: '80px' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '30px' }}>Kelajakdagi maqsadlarim</h3>
                    <p style={{ fontSize: '1.1rem', opacity: 0.7, lineHeight: '1.6' }}>
                        Men kelajakda O'zbekistonning eng yaxshi dasturchilaridan biri bo'lishni va xalqaro miqyosdagi yirik loyihalarda ishtirok etishni maqsad qilganman.
                        Texnologiyalar yordamida insonlar hayotini osonlashtirish — mening asosiy motivatsiyamdir.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
