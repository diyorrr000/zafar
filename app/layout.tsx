import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MotionBackground from '../components/MotionBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Zafar | Professional Portfolio',
    description: 'Zafarning professional portfoliosi. Dasturlash va veb dizayn.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="uz">
            <body className={inter.className} style={{ position: 'relative', minHeight: '100vh' }}>
                <MotionBackground />
                <Navbar />
                <main style={{ paddingTop: '120px', minHeight: '80vh' }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
