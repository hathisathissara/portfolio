import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setLoading(false);
                    }, 800); // give time for 100% to render briefly
                    return 100;
                }
                return prev + Math.random() * 20;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        background: '#030712',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        overflow: 'hidden'
                    }}
                >
                    {/* Abstract Dark Aurora Background */}
                    <div className="position-absolute w-100 h-100" style={{ pointerEvents: 'none', top: 0, left: 0, zIndex: 0 }}>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="position-absolute"
                            style={{
                                width: '600px', height: '600px',
                                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 60%)',
                                top: '-20%', right: '-10%', filter: 'blur(60px)'
                            }}
                        />
                        <motion.div
                            animate={{ scale: [1, 1.5, 1], x: [0, 50, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="position-absolute"
                            style={{
                                width: '500px', height: '500px',
                                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
                                bottom: '-10%', left: '-10%', filter: 'blur(60px)'
                            }}
                        />
                    </div>

                    {/* Loading content */}
                    <div className="text-center position-relative d-flex flex-column align-items-center" style={{ zIndex: 2 }}>
                        {/* Glowing Hexagon/Orb */}
                        <motion.div
                            className="mb-5 position-relative d-flex align-items-center justify-content-center"
                            style={{ width: '120px', height: '120px' }}
                        >
                            {/* Outer Rings */}
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="position-absolute rounded-circle"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ 
                                        scale: [0.8, 1.5, 2],
                                        opacity: [0, 0.5, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.6,
                                        ease: "easeOut"
                                    }}
                                    style={{
                                        inset: 0,
                                        border: `2px solid ${i % 2 === 0 ? '#38bdf8' : '#8b5cf6'}`,
                                        boxShadow: `0 0 20px ${i % 2 === 0 ? '#38bdf8' : '#8b5cf6'}50`
                                    }}
                                />
                            ))}

                            {/* Core Logo Container */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="position-absolute rounded-circle"
                                style={{
                                    inset: '10px',
                                    background: 'conic-gradient(from 0deg, #38bdf8, #8b5cf6, #ec4899, #38bdf8)',
                                    padding: '4px',
                                    filter: 'blur(4px)',
                                    opacity: 0.8
                                }}
                            />

                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="position-relative rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                    inset: '14px',
                                    width: '92px',
                                    height: '92px',
                                    background: '#030712',
                                    border: '2px solid rgba(255,255,255,0.1)',
                                    zIndex: 2
                                }}
                            >
                                <FontAwesomeIcon icon={faCode} style={{ fontSize: '2rem', color: '#f8fafc' }} />
                            </motion.div>
                        </motion.div>

                        {/* Progress Container */}
                        <div style={{ width: '250px' }}>
                            <div className="d-flex justify-content-between mb-2">
                                <motion.span 
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                    className="small fw-bold text-uppercase" 
                                    style={{ color: '#94a3b8', letterSpacing: '2px' }}
                                >
                                    System Initializing
                                </motion.span>
                                <motion.span 
                                    className="small fw-bold" 
                                    style={{ color: '#38bdf8' }}
                                >
                                    {Math.min(100, Math.round(progress))}%
                                </motion.span>
                            </div>
                            
                            {/* Bar */}
                            <div
                                style={{
                                    width: '100%',
                                    height: '4px',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '4px',
                                    overflow: 'hidden'
                                }}
                            >
                                <motion.div
                                    style={{
                                        height: '100%',
                                        background: 'linear-gradient(90deg, #38bdf8, #8b5cf6)',
                                        boxShadow: '0 0 10px #38bdf8'
                                    }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min(100, progress)}%` }}
                                    transition={{ ease: "easeOut", duration: 0.2 }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Preloader;