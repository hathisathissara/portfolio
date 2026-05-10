import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from "react-helmet";
import PageAnimator from '../components/PageAnimator';
import { motion } from 'framer-motion';

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <PageAnimator>
            <Helmet>
                <title>Hathisa Thissara | Software Developer & Designer</title>
                <meta name="description" content="Hi, I'm Hathisa Thissara – a creative software developer and designer." />
            </Helmet>

            <section
                className="vh-100 d-flex align-items-center justify-content-center text-white text-center position-relative"
                id="home"
                style={{ backgroundColor: '#030712', overflow: 'hidden' }}
            >
                {/* Advanced Aurora Background Elements */}
                <div className="position-absolute w-100 h-100" style={{ pointerEvents: 'none', zIndex: 0 }}>
                    {/* Interactive Mouse Glow */}
                    <motion.div
                        className="position-absolute rounded-circle"
                        animate={{
                            x: mousePosition.x - 400,
                            y: mousePosition.y - 400,
                        }}
                        transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
                        style={{
                            width: '800px',
                            height: '800px',
                            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 60%)',
                            filter: 'blur(40px)',
                        }}
                    />
                    
                    {/* Floating Orbs */}
                    <motion.div
                        className="position-absolute rounded-circle"
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 30, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: '50vw',
                            height: '50vw',
                            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
                            top: '-20%',
                            left: '-10%',
                            filter: 'blur(80px)'
                        }}
                    />
                    <motion.div
                        className="position-absolute rounded-circle"
                        animate={{
                            y: [0, 50, 0],
                            x: [0, -40, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        style={{
                            width: '45vw',
                            height: '45vw',
                            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
                            bottom: '-10%',
                            right: '-5%',
                            filter: 'blur(80px)'
                        }}
                    />
                </div>

                {/* Grid Overlay for Texture */}
                <div 
                    className="position-absolute w-100 h-100" 
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                        zIndex: 0,
                        opacity: 0.4
                    }}
                />

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="d-flex flex-column align-items-center"
                    >
                        {/* Greeting */}
                        <motion.div variants={itemVariants} className="mb-3">
                            <span className="px-4 py-2 rounded-pill text-uppercase fw-bold" style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#38bdf8',
                                letterSpacing: '2px',
                                fontSize: '0.85rem'
                            }}>
                                Welcome to my world
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1 
                            variants={itemVariants}
                            className="display-2 fw-bolder mb-2"
                            style={{
                                background: 'linear-gradient(to right, #fff, #94a3b8)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-1px'
                            }}
                        >
                            Hathisa Thissara
                        </motion.h1>

                        {/* Dynamic Text */}
                        <motion.div variants={itemVariants} className="mb-5" style={{ minHeight: '60px' }}>
                            <h2 className="fs-3 fw-light text-secondary">
                                I build digital experiences as a{' '}
                                <span 
                                    className="fw-bold position-relative"
                                    style={{
                                        color: '#38bdf8',
                                        textShadow: '0 0 20px rgba(56, 189, 248, 0.4)'
                                    }}
                                >
                                    {dynamicText}
                                    <motion.span
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        style={{
                                            borderRight: '3px solid #38bdf8',
                                            marginLeft: '2px'
                                        }}
                                    />
                                </span>
                            </h2>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={itemVariants} className="d-flex justify-content-center gap-4 mb-5">
                            {[
                                { icon: faGithub, url: 'https://github.com/hathisathissara', color: '#fff' },
                                { icon: faLinkedin, url: 'https://www.linkedin.com/in/hathisa-thissara', color: '#0077b5' },
                                { icon: faEnvelope, url: 'mailto:hatheesha6504@gmail.com', color: '#ea4335' }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.url}
                                    className="text-white position-relative"
                                    whileHover={{ y: -8, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '16px',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        fontSize: '1.5rem',
                                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.border = `1px solid ${social.color}50`;
                                        e.currentTarget.style.boxShadow = `0 10px 30px -10px ${social.color}80`;
                                        e.currentTarget.style.color = social.color;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
                                        e.currentTarget.style.color = '#fff';
                                    }}
                                >
                                    <FontAwesomeIcon icon={social.icon} />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Buttons */}
                        <motion.div variants={itemVariants} className="d-flex gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn px-5 py-3 rounded-pill fw-bold"
                                onClick={openWhatsAppChat}
                                style={{
                                    background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)',
                                    color: '#fff',
                                    border: 'none',
                                    boxShadow: '0 10px 30px -10px rgba(139, 92, 246, 0.8)',
                                    letterSpacing: '1px'
                                }}
                            >
                                Let's Talk
                            </motion.button>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/hathisa_thissara_2026.pdf"
                                download
                                className="btn px-5 py-3 rounded-pill fw-bold"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    color: '#fff',
                                    letterSpacing: '1px'
                                }}
                            >
                                Download CV
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Down Indicator */}
                <motion.div
                    className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-secondary"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <FontAwesomeIcon icon={faChevronDown} className="fs-5" />
                </motion.div>
            </section>
        </PageAnimator>
    );
}

export default HomePage;