import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCode } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="navbar navbar-expand-lg fixed-top"
        style={{
          background: scrolled ? 'rgba(3, 7, 18, 0.7)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
          padding: scrolled ? '0.8rem 0' : '1.5rem 0',
          transition: 'all 0.3s ease',
          zIndex: 1000
        }}
      >
        <div className="container">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center"
            style={{ textDecoration: 'none' }}
          >
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="d-flex align-items-center justify-content-center me-2"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)',
                boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)',
              }}
            >
              <FontAwesomeIcon icon={faCode} style={{ color: '#fff', fontSize: '1.2rem' }} />
            </motion.div>
            <span
              className="fw-bold fs-4"
              style={{
                background: 'linear-gradient(to right, #f8fafc, #94a3b8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.5px'
              }}
            >
              Hathisa Thissara
            </span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="navbar-toggler border-0 d-lg-none"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ padding: 0 }}
          >
            <motion.div 
              whileTap={{ scale: 0.9 }}
              className="d-flex align-items-center justify-content-center"
              style={{
                width: '45px', height: '45px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <FontAwesomeIcon
                icon={mobileMenuOpen ? faTimes : faBars}
                style={{ color: '#f8fafc', fontSize: '1.2rem' }}
              />
            </motion.div>
          </button>

          {/* Desktop Navigation */}
          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav ms-auto align-items-center gap-3">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={index} className="nav-item">
                    <Link
                      to={link.path}
                      className="nav-link position-relative"
                      style={{
                        color: isActive ? '#f8fafc' : '#94a3b8',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        padding: '0.5rem 1rem',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="position-absolute bottom-0 start-50 translate-middle-x"
                          style={{
                            width: '20px',
                            height: '3px',
                            borderRadius: '3px',
                            background: '#38bdf8',
                            boxShadow: '0 0 10px #38bdf8'
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}

              {/* CTA Button */}
              <li className="nav-item ms-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="btn rounded-pill fw-bold px-4 py-2"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#f8fafc',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #38bdf8, #8b5cf6)';
                        e.currentTarget.style.border = '1px solid transparent';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)';
                    }}
                  >
                    Hire Me
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="d-lg-none"
            style={{
              position: 'fixed',
              top: '80px', // Below navbar
              left: '5%',
              width: '90%',
              background: 'rgba(3, 7, 18, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              zIndex: 999,
              padding: '2rem'
            }}
          >
            <ul className="list-unstyled text-center m-0 d-flex flex-column gap-4">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                  >
                    <Link
                      to={link.path}
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: isActive ? '#38bdf8' : '#94a3b8',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-2"
              >
                <Link
                  to="/contact"
                  className="btn w-100 rounded-pill py-3 fw-bold"
                  style={{
                    background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)',
                    color: '#fff',
                    border: 'none'
                  }}
                >
                  Hire Me
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;