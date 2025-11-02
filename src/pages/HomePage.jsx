import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from "react-helmet";
import PageAnimator from '../components/PageAnimator';

const openWhatsAppChat = () => {
    const phoneNumber = "94701207991";
    const message = "Hello, I would like to hire you for a project.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
};

const words = ["Web Developer", "UI/UX Designer", "App Developer", "Software Developer"];

function HomePage() {
    const [dynamicText, setDynamicText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const type = () => {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                setDynamicText(currentWord.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex(prev => (prev + 1) % words.length);
                }
            } else {
                setDynamicText(currentWord.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
                if (charIndex + 1 === currentWord.length) {
                    setIsDeleting(true);
                }
            }
        };

        const typingTimeout = setTimeout(
            type,
            isDeleting && charIndex === words[wordIndex].length ? 2000 : 150
        );
        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, wordIndex]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <PageAnimator>
            <Helmet>
                <title>Hathisa Thissara | Software Developer & Designer</title>
                <meta
                    name="description"
                    content="Hi, I'm Hathisa Thissara – a creative software developer and designer. Explore my portfolio, projects, coding skills, and achievements."
                />
            </Helmet>

            <section
                className="vh-100 d-flex align-items-center justify-content-center text-white text-center position-relative"
                id="home"
                style={{
                    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)',
                    overflow: 'hidden'
                }}
            >
                {/* Animated background elements */}
                <div
                    className="position-absolute w-100 h-100"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 188, 212, 0.15) 0%, transparent 50%)`,
                        transition: 'background 0.3s ease',
                        pointerEvents: 'none'
                    }}
                />

                {/* Floating geometric shapes */}
                <div className="position-absolute w-100 h-100" style={{ pointerEvents: 'none' }}>
                    <div
                        className="position-absolute rounded-circle"
                        style={{
                            width: '300px',
                            height: '300px',
                            background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.1), rgba(103, 58, 183, 0.1))',
                            top: '10%',
                            left: '5%',
                            animation: 'float 6s ease-in-out infinite',
                            filter: 'blur(40px)'
                        }}
                    />
                    <div
                        className="position-absolute rounded-circle"
                        style={{
                            width: '400px',
                            height: '400px',
                            background: 'linear-gradient(135deg, rgba(103, 58, 183, 0.1), rgba(0, 188, 212, 0.1))',
                            bottom: '10%',
                            right: '5%',
                            animation: 'float 8s ease-in-out infinite',
                            animationDelay: '2s',
                            filter: 'blur(40px)'
                        }}
                    />
                </div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    {/* Greeting text with fade-in */}
                    <div style={{ animation: 'fadeInUp 1s ease' }}>
                        <h2 className="fw-light mb-2 fs-3" style={{
                            opacity: 0.9,
                            letterSpacing: '2px'
                        }}>
                            Hi, I'm
                        </h2>
                    </div>

                    {/* Name with enhanced glow effect */}
                    <div style={{ animation: 'fadeInUp 1s ease 0.2s both' }}>
                        <h1
                            className="display-3 fw-bold mb-3"
                            style={{
                                background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '0 0 80px rgba(0, 188, 212, 0.5)',
                                letterSpacing: '3px'
                            }}
                        >
                            Hathisa Thissara
                        </h1>
                    </div>

                    {/* Dynamic typing text */}
                    <div style={{ animation: 'fadeInUp 1s ease 0.4s both' }}>
                        <h2 className="fw-bold fs-2 mb-4" style={{ minHeight: '60px' }}>
                            I'm a{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #00bcd4, #0097a7)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    position: 'relative'
                                }}
                            >
                                {dynamicText}
                                <span style={{
                                    borderLeft: '3px solid #00bcd4',
                                    animation: 'blink 0.7s infinite',
                                    marginLeft: '2px'
                                }} />
                            </span>
                        </h2>
                    </div>

                    {/* Social icons with stagger animation */}
                    <div
                        className="d-flex justify-content-center gap-4 fs-3 my-4"
                        style={{ animation: 'fadeInUp 1s ease 0.6s both' }}
                    >
                        {[
                            { icon: faGithub, url: 'https://github.com/hathisathissara', label: 'GitHub', delay: '0s' },
                            { icon: faLinkedin, url: 'https://www.linkedin.com/in/hathisa-thissara', label: 'LinkedIn', delay: '0.1s' },
                            { icon: faEnvelope, url: 'mailto:hatheesha6504@gmail.com', label: 'Email', delay: '0.2s' }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.url}
                                className="text-white position-relative"
                                aria-label={social.label}
                                style={{
                                    width: '55px',
                                    height: '55px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '2px solid rgba(0, 188, 212, 0.3)',
                                    transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                                    animation: `fadeInUp 1s ease ${social.delay} both`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.15)';
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #00bcd4, #673ab7)';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 188, 212, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <FontAwesomeIcon icon={social.icon} />
                            </a>
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div
                        className="d-grid gap-3 d-md-flex justify-content-center"
                        style={{ animation: 'fadeInUp 1s ease 0.8s both' }}
                    >
                        <button
                            className="btn px-5 py-3 position-relative overflow-hidden"
                            onClick={openWhatsAppChat}
                            style={{
                                background: 'transparent',
                                border: '2px solid #00bcd4',
                                color: '#00bcd4',
                                borderRadius: '50px',
                                fontWeight: '600',
                                letterSpacing: '1px',
                                transition: 'all 0.4s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#00bcd4';
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 188, 212, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = '#00bcd4';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            Hire Me
                        </button>
                        <a
                            href="/hathisa_thissara_2025.pdf"
                            download
                            className="btn px-5 py-3"
                            style={{
                                background: 'linear-gradient(135deg, #00bcd4, #0097a7)',
                                border: 'none',
                                color: '#fff',
                                borderRadius: '50px',
                                fontWeight: '600',
                                letterSpacing: '1px',
                                boxShadow: '0 4px 15px rgba(0, 188, 212, 0.3)',
                                transition: 'all 0.4s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 188, 212, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 188, 212, 0.3)';
                            }}
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div
                    className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
                    style={{
                        animation: 'bounce 2s infinite',
                        opacity: 0.7
                    }}
                >
                    <FontAwesomeIcon icon={faChevronDown} className="fs-4" />
                </div>
            </section>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }

                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
                    40% { transform: translateY(-10px) translateX(-50%); }
                    60% { transform: translateY(-5px) translateX(-50%); }
                }
            `}</style>
        </PageAnimator>
    );
}

export default HomePage;