// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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

        const typingTimeout = setTimeout(type, isDeleting && charIndex === words[wordIndex].length ? 2000 : 150);
        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, wordIndex]);


    return (
        <PageAnimator>
        <section className="vh-100 d-flex align-items-center justify-content-center text-white text-center position-relative"
            id="home"
            style={{ backgroundImage: "url('https://img.freepik.com/free-vector/black-background-with-focus-spot-light_1017-27230.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <h2 className="fw-light mb-2 fs-3 animated-text">Hi, I'm</h2>
                <h1 className="display-3 fw-bold text-info mb-3" style={{ textShadow: '0 0 30px #0dcaf0' }}>Hathisa Thissara</h1>
                <h2 className="fw-bold fs-2">
                    I'm a <span className="text-primary-emphasis">{dynamicText}</span>
                </h2>
                <div className="d-flex justify-content-center gap-4 fs-3 my-4">
                    <a href="https://github.com/hathisathissara" className="text-white social-icon">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/hathisa-thissara" className="text-white social-icon">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:hatheesha6504@gmail.com" className="text-white social-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
                <div className="d-grid gap-3 d-md-flex justify-content-center">
                    <button className="btn btn-outline-info px-4" onClick={openWhatsAppChat}>Hire Me</button>
                    <a href="/hathisa_thissara_2025.pdf" download className="btn btn-primary px-4">Download CV</a>
                </div>
            </div>
        </section>
        </PageAnimator>
    );
}

export default HomePage;