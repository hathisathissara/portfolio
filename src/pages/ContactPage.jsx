import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPaperPlane, faMapMarkerAlt, faShareAlt, faMap, faEnvelope, faPhone
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGithub, faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { useForm, ValidationError } from "@formspree/react";
import PageAnimator from '../components/PageAnimator';
import { motion } from 'framer-motion';

const openWhatsAppChat = () => {
    const phoneNumber = "94701207991";
    const message = "Hello, I would like to hire you for a project.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
};

function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [focusedField, setFocusedField] = useState(null);
    const [state, handleSubmit] = useForm("xyzzzwkg");

    const socialLinks = [
        { icon: faFacebookF, url: 'https://www.facebook.com/hathisa.thissara', title: 'Facebook', color: '#1877f2' },
        { icon: faTwitter, url: 'https://x.com/HathisaThissara', title: 'Twitter', color: '#1da1f2' },
        { icon: faInstagram, url: 'https://www.instagram.com/hathisa.thissara', title: 'Instagram', color: '#e4405f' },
        { icon: faLinkedinIn, url: 'https://www.linkedin.com/in/hathisa-thissara', title: 'LinkedIn', color: '#0077b5' },
        { icon: faGithub, url: 'https://github.com/hathisathissara', title: 'GitHub', color: '#f8fafc' },
        { icon: faWhatsapp, url: '#', title: 'Whatsapp', color: '#25d366', onClick: openWhatsAppChat }
    ];

    const contactDetails = [
        {
            icon: faEnvelope,
            label: 'Email',
            value: 'hatheesha6504@gmail.com',
            link: 'mailto:hatheesha6504@gmail.com',
            color: '#38bdf8'
        },
        {
            icon: faPhone,
            label: 'Phone',
            value: '+94 70 120 7991',
            link: 'tel:+94701207991',
            color: '#8b5cf6'
        },
        {
            icon: faMapMarkerAlt,
            label: 'Location',
            value: 'Haldummulla, Sri Lanka',
            link: '#',
            color: '#ec4899'
        }
    ];

    return (
        <PageAnimator>
            <section
                id="contact"
                className="py-5 position-relative"
                style={{
                    paddingTop: '120px',
                    paddingBottom: '100px',
                    minHeight: '100vh',
                    backgroundColor: '#030712',
                    overflow: 'hidden'
                }}
            >
                {/* Abstract Dark Aurora Background */}
                <div className="position-absolute w-100 h-100" style={{ pointerEvents: 'none', top: 0, left: 0, zIndex: 0 }}>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="position-absolute"
                        style={{
                            width: '800px', height: '800px',
                            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
                            top: '-20%', right: '-20%', filter: 'blur(80px)'
                        }}
                    />
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], x: [0, 100, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                        className="position-absolute"
                        style={{
                            width: '700px', height: '700px',
                            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 60%)',
                            bottom: '-10%', left: '-20%', filter: 'blur(80px)'
                        }}
                    />
                </div>

                <div 
                    className="position-absolute w-100 h-100" 
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        zIndex: 0,
                    }}
                />

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="text-center mb-5">
                        <motion.h2 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="display-4 fw-bolder mb-3"
                            style={{
                                background: 'linear-gradient(to right, #e2e8f0, #94a3b8)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-1px'
                            }}
                        >
                            Let's Connect
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="lead text-secondary"
                        >
                            Have a project in mind? I'd love to hear about it.
                        </motion.p>
                    </div>

                    <div className="row g-5">
                        {/* Contact Form */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="col-lg-7"
                        >
                            <div className="p-4 p-md-5 rounded-5" style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(16px)',
                                boxShadow: '0 20px 40px -20px rgba(0,0,0,0.5)'
                            }}>
                                <h3 className="mb-4 text-light fw-bold">Send a Message</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        {['name', 'email'].map((field) => (
                                            <div className="col-md-6" key={field}>
                                                <label className="form-label text-secondary text-capitalize small fw-bold mb-2">
                                                    Your {field}
                                                </label>
                                                <input
                                                    type={field === 'email' ? 'email' : 'text'}
                                                    name={field}
                                                    value={formData[field]}
                                                    onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                                                    required
                                                    onFocus={() => setFocusedField(field)}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="form-control"
                                                    style={{
                                                        background: 'rgba(0,0,0,0.2)',
                                                        border: `1px solid ${focusedField === field ? '#38bdf8' : 'rgba(255,255,255,0.1)'}`,
                                                        color: '#f8fafc',
                                                        padding: '0.8rem 1.2rem',
                                                        borderRadius: '0.8rem',
                                                        transition: 'all 0.3s ease',
                                                        boxShadow: focusedField === field ? '0 0 0 4px rgba(56, 189, 248, 0.1)' : 'none'
                                                    }}
                                                />
                                                <ValidationError prefix={field} field={field} errors={state.errors} />
                                            </div>
                                        ))}
                                        <div className="col-12">
                                            <label className="form-label text-secondary small fw-bold mb-2">Message</label>
                                            <textarea
                                                name="message"
                                                rows="5"
                                                value={formData.message}
                                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                                required
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={() => setFocusedField(null)}
                                                className="form-control"
                                                style={{
                                                    background: 'rgba(0,0,0,0.2)',
                                                    border: `1px solid ${focusedField === 'message' ? '#38bdf8' : 'rgba(255,255,255,0.1)'}`,
                                                    color: '#f8fafc',
                                                    padding: '1rem 1.2rem',
                                                    borderRadius: '0.8rem',
                                                    resize: 'none',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: focusedField === 'message' ? '0 0 0 4px rgba(56, 189, 248, 0.1)' : 'none'
                                                }}
                                            />
                                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                                        </div>
                                    </div>

                                    {state.succeeded && (
                                        <div className="alert mt-4 mb-0 border-0" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                                            ✓ Message sent successfully! I'll get back to you soon.
                                        </div>
                                    )}

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={state.submitting}
                                        className="btn w-100 mt-4 py-3 rounded-pill fw-bold"
                                        style={{
                                            background: state.succeeded ? '#10b981' : 'linear-gradient(135deg, #38bdf8, #8b5cf6)',
                                            color: '#fff',
                                            border: 'none',
                                            boxShadow: '0 10px 20px -10px rgba(139, 92, 246, 0.5)'
                                        }}
                                    >
                                        {state.submitting ? 'Sending...' : state.succeeded ? 'Sent!' : 'Send Message'}
                                        {!state.submitting && !state.succeeded && <FontAwesomeIcon icon={faPaperPlane} className="ms-2" />}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info Sidebar */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="col-lg-5"
                        >
                            <div className="d-flex flex-column gap-4 h-100">
                                {/* Details Cards */}
                                {contactDetails.map((detail, i) => (
                                    <motion.a
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        key={i}
                                        href={detail.link}
                                        className="p-4 rounded-4 text-decoration-none d-flex align-items-center gap-4"
                                        style={{
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            backdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        <div 
                                            className="d-flex justify-content-center align-items-center rounded-circle flex-shrink-0"
                                            style={{
                                                width: '50px', height: '50px',
                                                background: `${detail.color}20`,
                                                color: detail.color,
                                                border: `1px solid ${detail.color}40`
                                            }}
                                        >
                                            <FontAwesomeIcon icon={detail.icon} className="fs-5" />
                                        </div>
                                        <div>
                                            <p className="text-secondary small fw-bold mb-1 text-uppercase">{detail.label}</p>
                                            <h6 className="text-light mb-0">{detail.value}</h6>
                                        </div>
                                    </motion.a>
                                ))}

                                {/* Socials Grid */}
                                <div className="p-4 rounded-4 mt-auto" style={{
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    <p className="text-secondary small fw-bold mb-3 text-uppercase">Connect with me</p>
                                    <div className="d-flex flex-wrap gap-3">
                                        {socialLinks.map((social, i) => (
                                            <motion.a
                                                whileHover={{ scale: 1.15, y: -5 }}
                                                key={i}
                                                href={social.url}
                                                onClick={social.onClick}
                                                target={social.url !== '#' ? '_blank' : undefined}
                                                rel="noreferrer"
                                                className="d-flex justify-content-center align-items-center rounded-3"
                                                style={{
                                                    width: '45px', height: '45px',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    color: '#f8fafc',
                                                    border: '1px solid rgba(255,255,255,0.1)'
                                                }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.background = social.color;
                                                    e.currentTarget.style.borderColor = social.color;
                                                    e.currentTarget.style.boxShadow = `0 5px 15px ${social.color}60`;
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                }}
                                            >
                                                <FontAwesomeIcon icon={social.icon} className="fs-5" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </PageAnimator>
    );
}

export default ContactPage;