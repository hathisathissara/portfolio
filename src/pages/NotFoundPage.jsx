// src/pages/NotFoundPage.jsx
import React from "react";
import { Link } from 'react-router-dom'; // <-- <Link> component එක import කරන්න

function NotFoundPage() {
    return (
        // Component එකට අදාළව body styles apply කරන්න wrapper div එකක් දාමු
        <div className="not-found-body"> 
            <div className="error-box">
                {/* SVG code එක அப்படியே තියන්න පුළුවන් */}
                <svg className="astronaut" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="white">
                    <path d="M32 2a8 8 0 0 0-8 8v2h16V10a8 8 0 0 0-8-8zM22 12v4H10a2 2 0 0 0 0 4h12v4a10 10 0 1 0 20 0v-4h12a2 2 0 0 0 0-4H42v-4H22zm10 8a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm-14 18h28a2 2 0 0 1 2 2v4H16v-4a2 2 0 0 1 2-2zm-4 10h36v4a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4v-4z" />
                    <circle cx="10" cy="54" r="2" />
                    <circle cx="54" cy="54" r="2" />
                </svg>

                <div className="error-code">404</div>
                <div className="error-text">Sorry! This page doesn't exist in the galaxy 🌌</div>
                {/* <a> tag එක වෙනුවට <Link> එක පාවිච්චි කරනවා. මේකෙන් page reload වෙන්නේ නෑ. */}
                <Link to="/" className="btn btn-home">Back to Home</Link>
            </div>
        </div>
    );
}
export default NotFoundPage;