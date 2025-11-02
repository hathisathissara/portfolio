import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCode } from '@fortawesome/free-solid-svg-icons';

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
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          background: scrolled
            ? 'rgba(10, 14, 39, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : 'none',
          transition: 'all 0.4s ease',
          padding: scrolled ? '0.8rem 0' : '1.2rem 0',
          boxShadow: scrolled
            ? '0 10px 30px rgba(0, 0, 0, 0.3)'
            : 'none',
          zIndex: 1000
        }}
      >
        <div className="container">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center"
            style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center me-2"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
                boxShadow: '0 5px 15px rgba(0, 188, 212, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(360deg) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
              }}
            >
              <FontAwesomeIcon icon={faCode} style={{ color: '#fff' }} />
            </div>
            <span
              style={{
                background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '1px'
              }}
            >
              Hathisa Thissara
            </span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(0, 188, 212, 0.1)',
              borderRadius: '12px',
              padding: '0.5rem 0.8rem',
              transition: 'all 0.3s ease'
            }}
          >
            <FontAwesomeIcon
              icon={mobileMenuOpen ? faTimes : faBars}
              style={{
                color: '#00bcd4',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease'
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto align-items-center">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={index} className="nav-item mx-2">
                    <Link
                      to={link.path}
                      className="nav-link position-relative"
                      style={{
                        color: isActive ? '#00bcd4' : '#fff',
                        fontWeight: '600',
                        letterSpacing: '1px',
                        padding: '0.5rem 1rem',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = '#00bcd4';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.color = '#fff';
                      }}
                    >
                      {link.name}
                      {isActive && (
                        <div
                          className="position-absolute start-50 translate-middle-x"
                          style={{
                            bottom: '0',
                            width: '60%',
                            height: '2px',
                            background: 'linear-gradient(90deg, transparent, #00bcd4, transparent)',
                            animation: 'slideIn 0.3s ease'
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}

              {/* CTA Button */}
              <li className="nav-item ms-3">
                <Link
                  to="/contact"
                  className="btn"
                  style={{
                    background: 'linear-gradient(135deg, #00bcd4, #0097a7)',
                    border: 'none',
                    color: '#fff',
                    borderRadius: '50px',
                    padding: '0.6rem 1.5rem',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    boxShadow: '0 5px 15px rgba(0, 188, 212, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 188, 212, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 188, 212, 0.3)';
                  }}
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'rgba(10, 14, 39, 0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'all' : 'none',
          transition: 'opacity 0.4s ease'
        }}
      >
        <ul
          className="list-unstyled text-center"
          style={{
            transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'transform 0.4s ease'
          }}
        >
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <li
                key={index}
                className="mb-4"
                style={{
                  animation: mobileMenuOpen
                    ? `fadeInUp 0.5s ease ${index * 0.1}s both`
                    : 'none'
                }}
              >
                <Link
                  to={link.path}
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: isActive ? '#00bcd4' : '#fff',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00bcd4';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive ? '#00bcd4' : '#fff';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {link.name}
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: '3px',
                        background: 'linear-gradient(90deg, transparent, #00bcd4, transparent)'
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
          <li
            className="mt-5"
            style={{
              animation: mobileMenuOpen
                ? `fadeInUp 0.5s ease ${navLinks.length * 0.1}s both`
                : 'none'
            }}
          >
            <Link
              to="/contact"
              className="btn"
              style={{
                background: 'linear-gradient(135deg, #00bcd4, #0097a7)',
                border: 'none',
                color: '#fff',
                borderRadius: '50px',
                padding: '1rem 3rem',
                fontWeight: '600',
                letterSpacing: '1px',
                fontSize: '1.2rem',
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(0, 188, 212, 0.4)',
                transition: 'all 0.3s ease'
              }}
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </div>

      <style>{`
                @keyframes slideIn {
                    from {
                        transform: translateX(-50%) scaleX(0);
                    }
                    to {
                        transform: translateX(-50%) scaleX(1);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
    </>
  );
}

export default Navbar;