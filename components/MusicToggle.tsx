'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicToggle() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = new Audio('/music/orqa_fon_muz.mp3');
        audio.loop = true;
        audio.volume = 0; // Start at 0 for fade-in
        audioRef.current = audio;

        const handleFirstInteraction = () => {
            if (audioRef.current && !isPlaying) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                    fadeIn();
                }).catch(err => console.log("Autoplay blocked:", err));
                window.removeEventListener('click', handleFirstInteraction);
            }
        };

        window.addEventListener('click', handleFirstInteraction);

        return () => {
            audio.pause();
            window.removeEventListener('click', handleFirstInteraction);
        };
    }, []);

    const fadeIn = () => {
        if (!audioRef.current) return;
        let vol = 0;
        const interval = setInterval(() => {
            if (vol < 0.1) {
                vol += 0.01;
                if (audioRef.current) audioRef.current.volume = vol;
            } else {
                clearInterval(interval);
            }
        }, 200);
    };

    const toggleMusic = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <button
            onClick={toggleMusic}
            className="music-toggle glass"
            aria-label="Musiqani yoqish/o'chirish"
            style={{
                padding: '10px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                width: '44px',
                height: '44px',
                marginLeft: '10px'
            }}
        >
            {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
    );
}
