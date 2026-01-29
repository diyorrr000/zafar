'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MusicToggle from './MusicToggle';

const navLinks = [
    { name: 'Bosh sahifa', href: '/' },
    { name: 'Men haqimda', href: '/about' },
    { name: 'Qobiliyatlar', href: '/skills' },
    { name: 'Loyihalar', href: '/projects' },
    { name: 'Tajriba', href: '/experience' },
    { name: 'Blog', href: '/blog' },
    { name: 'Aloqa', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '1200px',
            padding: '15px 30px',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 1000,
            transition: 'all 0.3s ease'
        }}>
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>
                ZAFAR
            </Link>

            {/* Desktop Menu */}
            <div className="desktop-menu" style={{ display: 'none', gap: '20px', alignItems: 'center' }}>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} style={{ fontSize: '0.9rem', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}>
                        {link.name}
                    </Link>
                ))}
                <ThemeToggle />
                <MusicToggle />
            </div>

            {/* Mobile Toggle */}
            <div className="mobile-toggle" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ThemeToggle />
                <MusicToggle />
                <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="glass" style={{
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    width: '100%',
                    padding: '20px',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    alignItems: 'center'
                }}>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}

            <style jsx>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle > button { display: none !important; }
        }
      `}</style>
        </nav>
    );
}
