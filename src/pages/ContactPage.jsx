// src/pages/ContactPage.jsx
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPaperPlane, faMapMarkerAlt, faShareAlt, faMap
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
    return (
        <PageAnimator>
            <section id="contact" className="py-5 bg-dark" style={{ paddingTop: '100px' }}>
                <div className="container">
                    <div className="text-center mb-5 fade-in">
                        <h2 className="display-5 fw-bold text-white">Let's Get In Touch</h2>
                        <p className="lead text-muted">Fill out the form or connect with me on social platforms</p>
                    </div>
                    <div className="row g-4 align-items-stretch">
                        {/* Contact Form */}
                        <div className="col-lg-6 fade-in">
                            <div className="bg-light text-dark rounded-4 p-4 shadow-sm h-100">
                                <form action="https://formspree.io/f/xyzzzwkg" method="POST">
                                    <div className="mb-3">
                                        <label className="form-label">Your Name</label>
                                        <input type="text" className="form-control" name="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Your Email</label>
                                        <input type="email" className="form-control" name="email" placeholder="john@example.com" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Message</label>
                                        <textarea className="form-control" name="message" rows="4" placeholder="Write something..." required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Info Panel */}
                        <div className="col-lg-6 fade-in">
                            <div className="contact-info h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <h4 className="mb-3 text-white"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />Location</h4>
                                    <p>Haldummulla, Uva Province, Sri Lanka</p>

                                    <h4 className="mt-4 mb-3 text-white"><FontAwesomeIcon icon={faShareAlt} className="me-2" />Socials</h4>
                                    <div className="social-icons d-flex gap-3"> {/* <-- මෙතන gap-3 එකතු කරන්න */}
                                        <a href="https://www.facebook.com/hathisa.thissara" target="_blank" rel="noopener noreferrer" title="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                                        <a href="https://x.com/HathisaThissara" target="_blank" rel="noopener noreferrer" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                                        <a href="https://www.instagram.com/hathisa.thissara" target="_blank" rel="noopener noreferrer" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                                        <a href="https://www.linkedin.com/in/hathisa-thissara" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                        <a href="https://github.com/hathisathissara" target="_blank" rel="noopener noreferrer" title="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#" onClick={openWhatsAppChat} title="Whatsapp" style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faWhatsapp} /></a>
                                    </div>
                                </div>

                                {/* Google Map */}
                                <div className="mt-4">
                                    <h4 className="mb-3 text-white"><FontAwesomeIcon icon={faMap} className="me-2" />Find Me on Map</h4>
                                    <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253615.95638971086!2d80.94754455!3d6.67794805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae472d9ecd9cb17%3A0x8007686a10b2d246!2sHaldummulla!5e0!3m2!1sen!2slk!4v1753160971868!5m2!1sen!2slk"
                                            className="map-frame"
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Google Map of Haldummlulla, Sri Lanka">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageAnimator>
    );
}
export default ContactPage;