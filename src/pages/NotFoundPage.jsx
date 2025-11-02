import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Generate random stars
        const generatedStars = Array.from({ length: 50 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 3
        }));
        setStars(generatedStars);

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20 - 10,
                y: (e.clientY / window.innerHeight) * 20 - 10
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="position-relative d-flex align-items-center justify-content-center"
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)',
                overflow: 'hidden',
                fontFamily: "'Poppins', sans-serif"
            }}
        >
            {/* Animated background */}
            <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0 }}>
                {/* Stars */}
                {stars.map((star, i) => (
                    <div
                        key={i}
                        className="position-absolute rounded-circle"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            background: '#fff',
                            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                            animation: `twinkle ${2 + star.delay}s ease-in-out infinite`,
                            animationDelay: `${star.delay}s`
                        }}
                    />
                ))}

                {/* Floating orbs */}
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(0, 188, 212, 0.2), transparent)',
                        top: '10%',
                        left: '10%',
                        animation: 'float 8s ease-in-out infinite',
                        filter: 'blur(60px)'
                    }}
                />
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: '350px',
                        height: '350px',
                        background: 'radial-gradient(circle, rgba(103, 58, 183, 0.2), transparent)',
                        bottom: '10%',
                        right: '10%',
                        animation: 'float 10s ease-in-out infinite',
                        animationDelay: '2s',
                        filter: 'blur(60px)'
                    }}
                />
            </div>

            {/* Content */}
            <div
                className="text-center position-relative p-5"
                style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '3rem',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
                    maxWidth: '600px',
                    zIndex: 1,
                    animation: 'fadeInUp 1s ease'
                }}
            >
                {/* Astronaut SVG */}
                <div
                    className="mb-4"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: 'transform 0.3s ease'
                    }}
                >
                    <svg
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                        style={{
                            filter: 'drop-shadow(0 15px 30px rgba(0, 188, 212, 0.4))',
                            animation: 'float 4s ease-in-out infinite'
                        }}
                    >
                        {/* Helmet */}
                        <circle cx="100" cy="80" r="45" fill="rgba(255, 255, 255, 0.1)" stroke="#00bcd4" strokeWidth="3" />
                        <ellipse cx="100" cy="80" rx="30" ry="25" fill="rgba(0, 188, 212, 0.3)" />

                        {/* Body */}
                        <rect x="70" y="115" width="60" height="50" rx="10" fill="rgba(255, 255, 255, 0.1)" stroke="#673ab7" strokeWidth="3" />

                        {/* Arms */}
                        <rect x="40" y="120" width="30" height="15" rx="7" fill="rgba(255, 255, 255, 0.1)" stroke="#00bcd4" strokeWidth="2" />
                        <rect x="130" y="120" width="30" height="15" rx="7" fill="rgba(255, 255, 255, 0.1)" stroke="#00bcd4" strokeWidth="2" />

                        {/* Legs */}
                        <rect x="75" y="165" width="20" height="25" rx="5" fill="rgba(255, 255, 255, 0.1)" stroke="#673ab7" strokeWidth="2" />
                        <rect x="105" y="165" width="20" height="25" rx="5" fill="rgba(255, 255, 255, 0.1)" stroke="#673ab7" strokeWidth="2" />

                        {/* Details */}
                        <circle cx="95" cy="140" r="3" fill="#00bcd4" />
                        <circle cx="105" cy="140" r="3" fill="#00bcd4" />
                        <line x1="75" y1="145" x2="125" y2="145" stroke="#673ab7" strokeWidth="2" />
                    </svg>
                </div>

                {/* 404 Text */}
                <h1
                    className="mb-3"
                    style={{
                        fontSize: '8rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '5px',
                        lineHeight: '1',
                        textShadow: '0 0 80px rgba(0, 188, 212, 0.3)',
                        animation: 'glow 2s ease-in-out infinite alternate'
                    }}
                >
                    404
                </h1>

                {/* Error message */}
                <h2
                    className="mb-3"
                    style={{
                        fontSize: '1.8rem',
                        fontWeight: '600',
                        color: '#fff',
                        opacity: 0.9
                    }}
                >
                    Lost in Space
                </h2>

                <p
                    className="mb-4"
                    style={{
                        fontSize: '1.1rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: '1.6',
                        maxWidth: '400px',
                        margin: '0 auto 2rem'
                    }}
                >
                    Oops! The page you're looking for has drifted into the cosmic void. Let's get you back home.
                </p>

                {/* Navigation buttons */}
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link
                        to="/"
                        className="btn px-4 py-3"
                        style={{
                            background: 'linear-gradient(135deg, #00bcd4, #0097a7)',
                            border: 'none',
                            color: '#fff',
                            borderRadius: '50px',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            boxShadow: '0 10px 30px rgba(0, 188, 212, 0.4)',
                            transition: 'all 0.4s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 188, 212, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 188, 212, 0.4)';
                        }}
                    >
                        🚀 Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="btn px-4 py-3"
                        style={{
                            background: 'transparent',
                            border: '2px solid rgba(0, 188, 212, 0.5)',
                            color: '#00bcd4',
                            borderRadius: '50px',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            fontSize: '0.95rem',
                            transition: 'all 0.4s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(0, 188, 212, 0.1)';
                            e.currentTarget.style.borderColor = '#00bcd4';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.borderColor = 'rgba(0, 188, 212, 0.5)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        ← Go Back
                    </button>
                </div>

                {/* Decorative elements */}
                <div
                    className="position-absolute"
                    style={{
                        top: '20px',
                        right: '20px',
                        width: '100px',
                        height: '100px',
                        background: 'radial-gradient(circle, rgba(0, 188, 212, 0.2), transparent)',
                        borderRadius: '50%',
                        filter: 'blur(30px)',
                        pointerEvents: 'none'
                    }}
                />
                <div
                    className="position-absolute"
                    style={{
                        bottom: '20px',
                        left: '20px',
                        width: '80px',
                        height: '80px',
                        background: 'radial-gradient(circle, rgba(103, 58, 183, 0.2), transparent)',
                        borderRadius: '50%',
                        filter: 'blur(30px)',
                        pointerEvents: 'none'
                    }}
                />
            </div>

            {/* Floating particles */}
            {[...Array(10)].map((_, i) => (
                <div
                    key={`particle-${i}`}
                    className="position-absolute"
                    style={{
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                        background: '#00bcd4',
                        borderRadius: '50%',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: 0.6,
                        animation: `floatRandom ${5 + Math.random() * 5}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 3}s`
                    }}
                />
            ))}

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes floatRandom {
                    0%, 100% { 
                        transform: translate(0, 0); 
                        opacity: 0.3;
                    }
                    50% { 
                        transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px); 
                        opacity: 0.8;
                    }
                }

                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }

                @keyframes glow {
                    from {
                        filter: drop-shadow(0 0 20px rgba(0, 188, 212, 0.5));
                    }
                    to {
                        filter: drop-shadow(0 0 40px rgba(103, 58, 183, 0.8));
                    }
                }
            `}</style>
        </div>
    );
}

export default NotFoundPage;