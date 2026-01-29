'use client';

export default function Footer() {
    return (
        <footer style={{
            padding: '60px 20px',
            textAlign: 'center',
            borderTop: '1px solid var(--border)',
            marginTop: '100px',
            fontSize: '0.9rem',
            opacity: 0.6
        }}>
            <p>&copy; {new Date().getFullYear()} Zafar. Barcha huquqlar himoyalangan.</p>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <a href="https://t.me/secureXXX" target="_blank" rel="noopener noreferrer">Telegram</a>
                <a href="https://instagram.com/Zafarvcd" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://github.com/diyorrr000" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </footer>
    );
}
