import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        { icon: faGithub, url: 'https://github.com/hathisathissara', title: 'GitHub' },
        { icon: faLinkedinIn, url: 'https://www.linkedin.com/in/hathisa-thissara', title: 'LinkedIn' },
        { icon: faTwitter, url: 'https://x.com/HathisaThissara', title: 'Twitter' },
        { icon: faInstagram, url: 'https://www.instagram.com/hathisa.thissara', title: 'Instagram' },
        { icon: faFacebookF, url: 'https://www.facebook.com/hathisa.thissara', title: 'Facebook' }
    ];

    const contactInfo = [
        { icon: faEnvelope, text: 'hatheesha6504@gmail.com', link: 'mailto:hatheesha6504@gmail.com' },
        { icon: faPhone, text: '+94 70 120 7991', link: 'tel:+94701207991' },
        { icon: faMapMarkerAlt, text: 'Haldummulla, Sri Lanka', link: '#' }
    ];

    return (
        <footer
            className="position-relative text-white pt-5 pb-3"
            style={{
                background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden'
            }}
        >
            {/* Background decorations */}
            <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, pointerEvents: 'none' }}>
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(0, 188, 212, 0.1), transparent)',
                        bottom: '-10%',
                        left: '-10%',
                        filter: 'blur(60px)'
                    }}
                />
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: '350px',
                        height: '350px',
                        background: 'radial-gradient(circle, rgba(103, 58, 183, 0.1), transparent)',
                        top: '-10%',
                        right: '-10%',
                        filter: 'blur(60px)'
                    }}
                />
            </div>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row g-4 mb-4">
                    {/* About Section */}
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-center mb-3">
                            <div
                                className="d-flex align-items-center justify-content-center me-2"
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
                                    boxShadow: '0 5px 15px rgba(0, 188, 212, 0.4)'
                                }}
                            >
                                <FontAwesomeIcon icon={faCode} style={{ fontSize: '1.5rem' }} />
                            </div>
                            <h4
                                className="mb-0"
                                style={{
                                    background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontWeight: '800',
                                    fontSize: '1.5rem'
                                }}
                            >
                                Hathisa Thissara
                            </h4>
                        </div>
                        <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.8' }}>
                            Passionate web developer crafting beautiful digital experiences with modern technologies.
                        </p>

                        {/* Social Icons */}
                        <div className="d-flex gap-2 mt-4">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={social.title}
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '12px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: '#fff',
                                        fontSize: '1.2rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #00bcd4, #673ab7)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 188, 212, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <FontAwesomeIcon icon={social.icon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h5
                            className="mb-4"
                            style={{
                                color: '#00bcd4',
                                fontWeight: '700',
                                letterSpacing: '1px',
                                fontSize: '1.1rem'
                            }}
                        >
                            Quick Links
                        </h5>
                        <ul className="list-unstyled">
                            {quickLinks.map((link, i) => (
                                <li key={i} className="mb-2">
                                    <Link
                                        to={link.path}
                                        style={{
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            display: 'inline-block'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#00bcd4';
                                            e.currentTarget.style.paddingLeft = '10px';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                                            e.currentTarget.style.paddingLeft = '0';
                                        }}
                                    >
                                        → {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-lg-3 col-md-6">
                        <h5
                            className="mb-4"
                            style={{
                                color: '#00bcd4',
                                fontWeight: '700',
                                letterSpacing: '1px',
                                fontSize: '1.1rem'
                            }}
                        >
                            Services
                        </h5>
                        <ul className="list-unstyled">
                            {['Web Development', 'UI/UX Design', 'App Development', 'Software Solutions'].map((service, i) => (
                                <li
                                    key={i}
                                    className="mb-2"
                                    style={{
                                        color: 'rgba(255, 255, 255, 0.7)'
                                    }}
                                >
                                    ✦ {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <h5
                            className="mb-4"
                            style={{
                                color: '#00bcd4',
                                fontWeight: '700',
                                letterSpacing: '1px',
                                fontSize: '1.1rem'
                            }}
                        >
                            Get In Touch
                        </h5>
                        <ul className="list-unstyled">
                            {contactInfo.map((contact, i) => (
                                <li key={i} className="mb-3">
                                    <a
                                        href={contact.link}
                                        style={{
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#00bcd4';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                                        }}
                                    >
                                        <div
                                            className="d-flex align-items-center justify-content-center me-2"
                                            style={{
                                                width: '35px',
                                                height: '35px',
                                                borderRadius: '8px',
                                                background: 'rgba(0, 188, 212, 0.1)',
                                                flexShrink: 0
                                            }}
                                        >
                                            <FontAwesomeIcon icon={contact.icon} />
                                        </div>
                                        <span style={{ fontSize: '0.9rem' }}>{contact.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div
                    className="my-4"
                    style={{
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(0, 188, 212, 0.5), transparent)'
                    }}
                />

                {/* Bottom Bar */}
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <p
                        className="mb-0"
                        style={{
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontSize: '0.9rem'
                        }}
                    >
                        © {currentYear} Hathisa Thissara. Made with{' '}
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{
                                color: '#ff6b6b',
                                animation: 'heartbeat 1.5s ease-in-out infinite'
                            }}
                        />{' '}
                        in Sri Lanka
                    </p>

                    {/* Scroll to top button */}
                    <button
                        onClick={scrollToTop}
                        style={{
                            width: '45px',
                            height: '45px',
                            borderRadius: '12px',
                            background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
                            border: 'none',
                            color: '#fff',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 5px 15px rgba(0, 188, 212, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 188, 212, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 188, 212, 0.3)';
                        }}
                        aria-label="Scroll to top"
                    >
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes heartbeat {
                    0%, 100% { transform: scale(1); }
                    25% { transform: scale(1.2); }
                    50% { transform: scale(1); }
                }
            `}</style>
        </footer>
    );
}

export default Footer;