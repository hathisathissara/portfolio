import React, { useState, useEffect } from 'react';

function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setFadeOut(true);
                        setTimeout(() => setLoading(false), 600);
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    if (!loading) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                opacity: fadeOut ? 0 : 1,
                transition: 'opacity 0.6s ease',
                overflow: 'hidden'
            }}
        >
            {/* Animated background */}
            <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0 }}>
                {/* Floating orbs */}
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(0, 188, 212, 0.2), transparent)',
                        top: '20%',
                        left: '10%',
                        animation: 'float 6s ease-in-out infinite',
                        filter: 'blur(80px)'
                    }}
                />
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: '350px',
                        height: '350px',
                        background: 'radial-gradient(circle, rgba(103, 58, 183, 0.2), transparent)',
                        bottom: '20%',
                        right: '10%',
                        animation: 'float 8s ease-in-out infinite',
                        animationDelay: '2s',
                        filter: 'blur(80px)'
                    }}
                />
            </div>

            {/* Loading content */}
            <div className="text-center position-relative" style={{ zIndex: 2 }}>
                {/* Animated logo/icon */}
                <div
                    className="mb-4 position-relative"
                    style={{
                        width: '150px',
                        height: '150px',
                        margin: '0 auto'
                    }}
                >
                    {/* Outer rotating ring */}
                    <div
                        className="position-absolute"
                        style={{
                            inset: 0,
                            borderRadius: '50%',
                            border: '3px solid transparent',
                            borderTopColor: '#00bcd4',
                            borderRightColor: '#673ab7',
                            animation: 'rotate 2s linear infinite'
                        }}
                    />

                    {/* Middle rotating ring */}
                    <div
                        className="position-absolute"
                        style={{
                            inset: '15px',
                            borderRadius: '50%',
                            border: '3px solid transparent',
                            borderTopColor: '#673ab7',
                            borderLeftColor: '#00bcd4',
                            animation: 'rotateReverse 1.5s linear infinite'
                        }}
                    />

                    {/* Inner pulse circle */}
                    <div
                        className="position-absolute"
                        style={{
                            inset: '30px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
                            animation: 'pulse 1.5s ease-in-out infinite',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 40px rgba(0, 188, 212, 0.6)'
                        }}
                    >
                        {/* Code brackets */}
                        <span
                            style={{
                                fontSize: '3rem',
                                fontWeight: '800',
                                color: '#fff',
                                fontFamily: 'monospace'
                            }}
                        >
                            &lt;/&gt;
                        </span>
                    </div>
                </div>

                {/* Brand name */}
                <h2
                    className="mb-4"
                    style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '2px',
                        animation: 'fadeInUp 1s ease'
                    }}
                >
                    Hathisa Thissara
                </h2>

                {/* Progress bar */}
                <div
                    className="mx-auto mb-3"
                    style={{
                        width: '300px',
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        position: 'relative'
                    }}
                >
                    {/* Progress fill */}
                    <div
                        style={{
                            width: `${progress}%`,
                            height: '100%',
                            background: 'linear-gradient(90deg, #00bcd4, #673ab7)',
                            borderRadius: '10px',
                            transition: 'width 0.3s ease',
                            boxShadow: '0 0 20px rgba(0, 188, 212, 0.8)'
                        }}
                    />

                    {/* Shimmer effect */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                            animation: 'shimmer 2s infinite'
                        }}
                    />
                </div>

                {/* Progress percentage */}
                <p
                    style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: '#00bcd4',
                        marginBottom: '1rem',
                        fontFamily: 'monospace'
                    }}
                >
                    {Math.round(progress)}%
                </p>

                {/* Loading text */}
                <p
                    style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.95rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontWeight: '600'
                    }}
                >
                    Loading Experience
                    <span style={{ animation: 'dots 1.5s infinite' }}>...</span>
                </p>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="position-absolute"
                        style={{
                            width: `${Math.random() * 6 + 3}px`,
                            height: `${Math.random() * 6 + 3}px`,
                            background: i % 2 === 0 ? '#00bcd4' : '#673ab7',
                            borderRadius: '50%',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0.6,
                            animation: `floatParticle ${3 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                            boxShadow: `0 0 10px ${i % 2 === 0 ? '#00bcd4' : '#673ab7'}`
                        }}
                    />
                ))}
            </div>

            <style>{`
                @keyframes rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes rotateReverse {
                    0% { transform: rotate(360deg); }
                    100% { transform: rotate(0deg); }
                }

                @keyframes pulse {
                    0%, 100% { 
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% { 
                        transform: scale(1.05);
                        opacity: 0.8;
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-30px); }
                }

                @keyframes floatParticle {
                    0%, 100% { 
                        transform: translate(0, 0) scale(1); 
                        opacity: 0.6;
                    }
                    33% { 
                        transform: translate(20px, -20px) scale(1.2); 
                        opacity: 1;
                    }
                    66% { 
                        transform: translate(-20px, 20px) scale(0.8); 
                        opacity: 0.4;
                    }
                }

                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }

                @keyframes dots {
                    0%, 20% { content: '.'; }
                    40% { content: '..'; }
                    60%, 100% { content: '...'; }
                }
            `}</style>
        </div>
    );
}

export default Preloader;