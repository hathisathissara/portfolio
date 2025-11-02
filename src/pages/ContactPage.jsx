import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPaperPlane, faMapMarkerAlt, faShareAlt, faMap, faEnvelope, faPhone
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGithub, faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import PageAnimator from '../components/PageAnimator';

const openWhatsAppChat = () => {
    const phoneNumber = "94701207991";
    const message = "Hello, I would like to hire you for a project.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
};

function ContactPage() {
    const [focusedField, setFocusedField] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState('');

    const socialLinks = [
        { icon: faFacebookF, url: 'https://www.facebook.com/hathisa.thissara', title: 'Facebook', color: '#1877f2' },
        { icon: faTwitter, url: 'https://x.com/HathisaThissara', title: 'Twitter', color: '#1da1f2' },
        { icon: faInstagram, url: 'https://www.instagram.com/hathisa.thissara', title: 'Instagram', color: '#e4405f' },
        { icon: faLinkedinIn, url: 'https://www.linkedin.com/in/hathisa-thissara', title: 'LinkedIn', color: '#0077b5' },
        { icon: faGithub, url: 'https://github.com/hathisathissara', title: 'GitHub', color: '#333' },
        { icon: faWhatsapp, url: '#', title: 'Whatsapp', color: '#25d366', onClick: openWhatsAppChat }
    ];

    const contactDetails = [
        {
            icon: faEnvelope,
            label: 'Email',
            value: 'hatheesha6504@gmail.com',
            link: 'mailto:hatheesha6504@gmail.com',
            color: '#00bcd4'
        },
        {
            icon: faPhone,
            label: 'Phone',
            value: '+94 70 120 7991',
            link: 'tel:+94701207991',
            color: '#673ab7'
        },
        {
            icon: faMapMarkerAlt,
            label: 'Location',
            value: 'Haldummulla, Sri Lanka',
            link: '#',
            color: '#00bcd4'
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        // Form will be handled by Formspree
        setTimeout(() => {
            setFormStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1000);
    };

    return (
        <PageAnimator>
            <section
                id="contact"
                className="py-5 position-relative"
                style={{
                    paddingTop: '120px',
                    paddingBottom: '100px',
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)',
                    overflow: 'hidden'
                }}
            >
                {/* Animated background orbs */}
                <div className="position-absolute w-100 h-100" style={{ pointerEvents: 'none', top: 0, left: 0 }}>
                    <div
                        className="position-absolute rounded-circle"
                        style={{
                            width: '500px',
                            height: '500px',
                            background: 'radial-gradient(circle, rgba(0, 188, 212, 0.15), transparent)',
                            top: '-15%',
                            left: '-10%',
                            animation: 'float 10s ease-in-out infinite',
                            filter: 'blur(80px)'
                        }}
                    />
                    <div
                        className="position-absolute rounded-circle"
                        style={{
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(103, 58, 183, 0.15), transparent)',
                            bottom: '-10%',
                            right: '-10%',
                            animation: 'float 12s ease-in-out infinite',
                            animationDelay: '3s',
                            filter: 'blur(80px)'
                        }}
                    />
                </div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    {/* Section header */}
                    <div className="text-center mb-5" style={{ animation: 'fadeInUp 1s ease' }}>
                        <h2
                            className="fw-bold mb-3"
                            style={{
                                fontSize: '3.5rem',
                                letterSpacing: '2px'
                            }}
                        >
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                Get In Touch
                            </span>
                        </h2>
                        <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.15rem' }}>
                            Have a project in mind? Let's work together!
                        </p>
                        <div
                            className="mx-auto"
                            style={{
                                width: '100px',
                                height: '4px',
                                background: 'linear-gradient(90deg, transparent, #00bcd4, transparent)',
                                borderRadius: '2px'
                            }}
                        />
                    </div>

                    <div className="row g-5 align-items-stretch">
                        {/* Contact form */}
                        <div className="col-lg-7" style={{ animation: 'fadeInUp 1s ease 0.2s both' }}>
                            <div
                                className="h-100 p-5 position-relative overflow-hidden"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '2rem',
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                {/* Decorative elements */}
                                <div
                                    className="position-absolute"
                                    style={{
                                        top: '-60px',
                                        right: '-60px',
                                        width: '250px',
                                        height: '250px',
                                        background: 'radial-gradient(circle, rgba(0, 188, 212, 0.15), transparent)',
                                        filter: 'blur(50px)',
                                        pointerEvents: 'none'
                                    }}
                                />

                                <h3
                                    className="mb-4"
                                    style={{
                                        color: '#00bcd4',
                                        fontSize: '2rem',
                                        fontWeight: '700'
                                    }}
                                >
                                    Send Me a Message
                                </h3>

                                <form action="https://formspree.io/f/xyzzzwkg" method="POST" onSubmit={handleSubmit}>
                                    {['name', 'email'].map((field, i) => (
                                        <div className="mb-4" key={field}>
                                            <label
                                                className="form-label fw-bold mb-2 d-flex align-items-center gap-2"
                                                style={{
                                                    color: focusedField === field ? '#00bcd4' : 'rgba(255, 255, 255, 0.8)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    fontSize: '0.85rem',
                                                    transition: 'color 0.3s ease'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: '25px',
                                                        height: '25px',
                                                        borderRadius: '6px',
                                                        background: focusedField === field
                                                            ? 'linear-gradient(135deg, #00bcd4, #673ab7)'
                                                            : 'rgba(255, 255, 255, 0.1)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '0.7rem',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {i + 1}
                                                </div>
                                                Your {field.charAt(0).toUpperCase() + field.slice(1)}
                                            </label>
                                            <div className="position-relative">
                                                <input
                                                    type={field === 'email' ? 'email' : 'text'}
                                                    className="form-control"
                                                    name={field}
                                                    value={formData[field]}
                                                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                                                    placeholder={field === 'email' ? 'john@example.com' : 'John Doe'}
                                                    required
                                                    onFocus={() => setFocusedField(field)}
                                                    onBlur={() => setFocusedField(null)}
                                                    style={{
                                                        background: 'rgba(255, 255, 255, 0.05)',
                                                        border: `2px solid ${focusedField === field ? '#00bcd4' : 'rgba(255, 255, 255, 0.1)'}`,
                                                        borderRadius: '1rem',
                                                        padding: '1.1rem 1.3rem',
                                                        color: '#fff',
                                                        fontSize: '1rem',
                                                        transition: 'all 0.3s ease',
                                                        transform: focusedField === field ? 'translateY(-2px)' : 'translateY(0)',
                                                        boxShadow: focusedField === field ? '0 10px 30px rgba(0, 188, 212, 0.2)' : 'none'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}

                                    <div className="mb-4">
                                        <label
                                            className="form-label fw-bold mb-2 d-flex align-items-center gap-2"
                                            style={{
                                                color: focusedField === 'message' ? '#00bcd4' : 'rgba(255, 255, 255, 0.8)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                fontSize: '0.85rem',
                                                transition: 'color 0.3s ease'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '25px',
                                                    height: '25px',
                                                    borderRadius: '6px',
                                                    background: focusedField === 'message'
                                                        ? 'linear-gradient(135deg, #00bcd4, #673ab7)'
                                                        : 'rgba(255, 255, 255, 0.1)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '0.7rem',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                3
                                            </div>
                                            Your Message
                                        </label>
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows="6"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tell me about your project..."
                                            required
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: `2px solid ${focusedField === 'message' ? '#00bcd4' : 'rgba(255, 255, 255, 0.1)'}`,
                                                borderRadius: '1rem',
                                                padding: '1.1rem 1.3rem',
                                                color: '#fff',
                                                fontSize: '1rem',
                                                resize: 'none',
                                                transition: 'all 0.3s ease',
                                                transform: focusedField === 'message' ? 'translateY(-2px)' : 'translateY(0)',
                                                boxShadow: focusedField === 'message' ? '0 10px 30px rgba(0, 188, 212, 0.2)' : 'none'
                                            }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn w-100 py-3 position-relative overflow-hidden"
                                        disabled={formStatus === 'sending'}
                                        style={{
                                            background: formStatus === 'success'
                                                ? 'linear-gradient(135deg, #28a745, #20c997)'
                                                : 'linear-gradient(135deg, #00bcd4, #0097a7)',
                                            border: 'none',
                                            color: '#fff',
                                            borderRadius: '1rem',
                                            fontWeight: '600',
                                            letterSpacing: '1px',
                                            textTransform: 'uppercase',
                                            fontSize: '1rem',
                                            boxShadow: '0 10px 30px rgba(0, 188, 212, 0.3)',
                                            transition: 'all 0.4s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (formStatus !== 'success') {
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 188, 212, 0.5)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 188, 212, 0.3)';
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faPaperPlane}
                                            className="me-2"
                                            style={{
                                                transform: formStatus === 'sending' ? 'translateX(100px)' : 'translateX(0)',
                                                transition: 'transform 0.4s ease'
                                            }}
                                        />
                                        {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? '✓ Message Sent!' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact info sidebar */}
                        <div className="col-lg-5" style={{ animation: 'fadeInUp 1s ease 0.4s both' }}>
                            <div className="h-100 d-flex flex-column gap-4">
                                {/* Contact Details Cards */}
                                {contactDetails.map((detail, i) => (
                                    <a
                                        key={i}
                                        href={detail.link}
                                        className="p-4 text-decoration-none"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            backdropFilter: 'blur(20px)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '1.5rem',
                                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                                            transition: 'all 0.4s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.5rem'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateX(10px)';
                                            e.currentTarget.style.borderColor = detail.color + '80';
                                            e.currentTarget.style.boxShadow = `0 15px 40px ${detail.color}30`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateX(0)';
                                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                                        }}
                                    >
                                        <div
                                            className="d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '70px',
                                                height: '70px',
                                                borderRadius: '18px',
                                                background: `linear-gradient(135deg, ${detail.color}20, ${detail.color}10)`,
                                                border: `2px solid ${detail.color}40`,
                                                flexShrink: 0
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={detail.icon}
                                                style={{
                                                    fontSize: '1.8rem',
                                                    color: detail.color
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <h6
                                                className="mb-1"
                                                style={{
                                                    color: detail.color,
                                                    fontSize: '0.85rem',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                }}
                                            >
                                                {detail.label}
                                            </h6>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    color: '#fff',
                                                    fontSize: '1rem',
                                                    fontWeight: '500'
                                                }}
                                            >
                                                {detail.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}

                                {/* Social Links */}
                                <div
                                    className="p-4"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '1.5rem',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                                    }}
                                >
                                    <h5
                                        className="mb-3 d-flex align-items-center gap-2"
                                        style={{ color: '#00bcd4', fontWeight: '700' }}
                                    >
                                        <FontAwesomeIcon icon={faShareAlt} />
                                        Connect With Me
                                    </h5>
                                    <div className="d-flex flex-wrap gap-3">
                                        {socialLinks.map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.url}
                                                onClick={social.onClick}
                                                target={social.url !== '#' ? '_blank' : undefined}
                                                rel="noopener noreferrer"
                                                title={social.title}
                                                style={{
                                                    width: '55px',
                                                    height: '55px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: '14px',
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                                    color: '#fff',
                                                    fontSize: '1.3rem',
                                                    transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                                                    cursor: 'pointer'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.background = social.color;
                                                    e.currentTarget.style.transform = 'translateY(-8px) rotate(10deg)';
                                                    e.currentTarget.style.boxShadow = `0 12px 30px ${social.color}60`;
                                                    e.currentTarget.style.borderColor = social.color;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                                    e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                                }}
                                            >
                                                <FontAwesomeIcon icon={social.icon} />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Map */}
                                <div
                                    className="p-4"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '1.5rem',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                                    }}
                                >
                                    <h5
                                        className="mb-3 d-flex align-items-center gap-2"
                                        style={{ color: '#00bcd4', fontWeight: '700' }}
                                    >
                                        <FontAwesomeIcon icon={faMap} />
                                        Find Me Here
                                    </h5>
                                    <div
                                        className="ratio ratio-16x9 overflow-hidden"
                                        style={{ borderRadius: '1rem' }}
                                    >
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253615.95638971086!2d80.94754455!3d6.67794805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae472d9ecd9cb17%3A0x8007686a10b2d246!2sHaldummulla!5e0!3m2!1sen!2slk!4v1753160971868!5m2!1sen!2slk"
                                            style={{
                                                border: '2px solid rgba(0, 188, 212, 0.3)',
                                                borderRadius: '1rem'
                                            }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Google Map of Haldummlulla, Sri Lanka"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-20px); }
                    }

                    .form-control::placeholder {
                        color: rgba(255, 255, 255, 0.4);
                    }

                    .form-control:focus {
                        outline: none;
                    }
                `}</style>
            </section>
        </PageAnimator>
    );
}

export default ContactPage;