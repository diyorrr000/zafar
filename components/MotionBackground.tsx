'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MotionBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const animatedX = useSpring(mouseX, springConfig);
    const animatedY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const moveX = (clientX - window.innerWidth / 2) / 20;
            const moveY = (clientY - window.innerHeight / 2) / 20;
            mouseX.set(moveX);
            mouseY.set(moveY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="motion-bg-container" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            background: 'black'
        }}>
            <motion.div
                className="bg-layer"
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '120%',
                    height: '120%',
                    backgroundImage: 'url(/images/orqa_fon.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    x: animatedX,
                    y: animatedY,
                    filter: 'brightness(0.5) contrast(1.2) grayscale(0.5)',
                    scale: 1.1
                }}
            />

            {/* Overlay for depth */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.8) 100%)',
                pointerEvents: 'none'
            }} />

            {/* Cinematic particles (simulated with CSS shadows or small elements) */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.3,
                    backgroundImage: 'radial-gradient(white 1px, transparent 0)',
                    backgroundSize: '100px 100px',
                    x: useSpring(useMotionValue(0), springConfig),
                    y: useSpring(useMotionValue(0), springConfig)
                }}
                animate={{
                    x: [0, 10, -10, 0],
                    y: [0, -10, 10, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
}
