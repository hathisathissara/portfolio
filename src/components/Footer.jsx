import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import {
    faCode,
    faHeart,
    faArrowUp,
    faEnvelope,
    faPhone,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faLinkedinIn,
    faTwitter,
    faInstagram,
    faFacebookF
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Work', path: '/work' },
        { name: 'Contact', path: '/contact' }
    ];

    const socialLinks = [
        { icon: faGithub, url: 'https://github.com/hathisathissara', title: 'GitHub', color: '#f8fafc' },
        { icon: faLinkedinIn, url: 'https://www.linkedin.com/in/hathisa-thissara', title: 'LinkedIn', color: '#0ea5e9' },
        { icon: faTwitter, url: 'https://x.com/HathisaThissara', title: 'Twitter', color: '#38bdf8' },
        { icon: faInstagram, url: 'https://www.instagram.com/hathisa.thissara', title: 'Instagram', color: '#ec4899' },
        { icon: faFacebookF, url: 'https://www.facebook.com/hathisa.thissara', title: 'Facebook', color: '#3b82f6' }
    ];

    const contactInfo = [
        { icon: faEnvelope, text: 'hatheesha6504@gmail.com', link: 'mailto:hatheesha6504@gmail.com' },
        { icon: faPhone, text: '+94 70 120 7991', link: 'tel:+94701207991' },
        { icon: faMapMarkerAlt, text: 'Haldummulla, Sri Lanka', link: '#' }
    ];

    return (
        <footer
            className="position-relative text-white pt-5 pb-3 mt-auto"
            style={{
                backgroundColor: '#030712',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                overflow: 'hidden'
            }}
        >
            {/* Background decorations */}
            <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, pointerEvents: 'none', zIndex: 0 }}>
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.03), transparent 60%)',
                        bottom: '-20%',
                        left: '-10%',
                        filter: 'blur(60px)'
                    }}
                />
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.03), transparent 60%)',
                        top: '-20%',
                        right: '-10%',
                        filter: 'blur(60px)'
                    }}
                />
            </div>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row g-5 mb-5 mt-2">
                    {/* Brand Section */}
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-center mb-4">
                            <div
                                className="d-flex align-items-center justify-content-center me-3 rounded-3"
                                style={{
                                    width: '45px',
                                    height: '45px',
                                    background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)',
                                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)'
                                }}
                            >
                                <FontAwesomeIcon icon={faCode} style={{ fontSize: '1.2rem', color: '#fff' }} />
                            </div>
                            <h4
                                className="mb-0 fw-bold"
                                style={{
                                    background: 'linear-gradient(to right, #f8fafc, #94a3b8)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    letterSpacing: '-0.5px'
                                }}
                            >
                                Hathisa Thissara
                            </h4>
                        </div>
                        <p className="text-secondary small mb-4" style={{ lineHeight: '1.8', maxWidth: '300px' }}>
                            Passionate web developer crafting beautiful, scalable digital experiences with modern technologies.
                        </p>

                        {/* Social Icons */}
                        <div className="d-flex gap-3">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={social.title}
                                    className="d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: '#f8fafc',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = social.color;
                                        e.currentTarget.style.borderColor = social.color;
                                        e.currentTarget.style.boxShadow = `0 5px 15px ${social.color}40`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = '#f8fafc';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <FontAwesomeIcon icon={social.icon} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '1px' }}>
                            Quick Links
                        </h6>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={link.path}
                                        className="text-secondary text-decoration-none small"
                                        style={{ transition: 'color 0.3s ease' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#38bdf8';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = '#6c757d'; // secondary color
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '1px' }}>
                            Services
                        </h6>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            {['Web Development', 'UI/UX Design', 'App Development', 'Software Solutions'].map((service, i) => (
                                <li key={i} className="text-secondary small d-flex align-items-center gap-2">
                                    <span style={{ color: '#8b5cf6', fontSize: '0.6rem' }}>●</span> {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '1px' }}>
                            Get In Touch
                        </h6>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            {contactInfo.map((contact, i) => (
                                <li key={i}>
                                    <a
                                        href={contact.link}
                                        className="text-secondary text-decoration-none small d-flex align-items-center gap-3"
                                        style={{ transition: 'color 0.3s ease' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}
                                    >
                                        <div
                                            className="d-flex align-items-center justify-content-center rounded-circle"
                                            style={{
                                                width: '32px', height: '32px',
                                                background: 'rgba(255,255,255,0.05)',
                                                color: '#38bdf8'
                                            }}
                                        >
                                            <FontAwesomeIcon icon={contact.icon} style={{ fontSize: '0.8rem' }} />
                                        </div>
                                        <span>{contact.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div
                    style={{
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                        margin: '2rem 0'
                    }}
                />

                {/* Bottom Bar */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <p className="text-secondary small mb-0">
                        © {currentYear} Hathisa Thissara. Made with{' '}
                        <motion.span 
                            animate={{ scale: [1, 1.2, 1] }} 
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            style={{ display: 'inline-block', color: '#ec4899', margin: '0 4px' }}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                        </motion.span>{' '}
                        in Sri Lanka
                    </p>

                    {/* Scroll to top */}
                    <motion.button
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="d-flex align-items-center justify-content-center rounded-3 border-0"
                        style={{
                            width: '40px', height: '40px',
                            background: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(10px)',
                            color: '#fff',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowUp} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;