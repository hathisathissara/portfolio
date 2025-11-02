import React, { useState } from 'react';
import profileImage from '../assets/Profile.jpg';
import PageAnimator from '../components/PageAnimator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCode, faMobileAlt, faLaptopCode, faGraduationCap} from '@fortawesome/free-solid-svg-icons';

function AboutPage() {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { icon: faPencilRuler, title: 'UI/UX', desc: 'Designing engaging web/app interfaces', color: '#ff6b6b', delay: '0s' },
    { icon: faCode, title: 'Web Development', desc: 'Building responsive websites', color: '#4ecdc4', delay: '0.1s' },
    { icon: faMobileAlt, title: 'App Development', desc: 'Android & iOS cross-platform apps', color: '#45b7d1', delay: '0.2s' },
    { icon: faLaptopCode, title: 'Software Development', desc: 'Custom software solutions', color: '#f7b731', delay: '0.3s' }
  ];

  const experiences = [
    { year: '2024 - 2025', title: 'National Diploma in ICT', delay: '0s' },
    { year: '2023', title: 'Certificate in English', delay: '0.1s' }
  ];

  return (
    <PageAnimator>
      <section
        className="py-5 text-white text-center position-relative"
        id="about"
        style={{
          paddingTop: '80px',
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
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(0, 188, 212, 0.15), transparent)',
              top: '-10%',
              right: '-10%',
              animation: 'float 8s ease-in-out infinite',
              filter: 'blur(60px)'
            }}
          />
          <div
            className="position-absolute rounded-circle"
            style={{
              width: '350px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(103, 58, 183, 0.15), transparent)',
              bottom: '10%',
              left: '-5%',
              animation: 'float 10s ease-in-out infinite',
              animationDelay: '2s',
              filter: 'blur(60px)'
            }}
          />
        </div>

        <div className="container position-relative" style={{ paddingTop: '80px', zIndex: 2 }}>
          {/* Profile Image with enhanced effects */}
          <div className="row justify-content-center mb-5">
            <div className="col-6 col-md-3">
              <div
                className="position-relative d-inline-block"
                style={{ animation: 'fadeInUp 1s ease' }}
              >
                {/* Animated ring */}
                <div
                  className="position-absolute"
                  style={{
                    inset: '-8px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #00bcd4, #673ab7, #00bcd4)',
                    backgroundSize: '300% 300%',
                    animation: 'gradientRotate 3s ease infinite',
                    padding: '4px',
                    zIndex: 0
                  }}
                />

                {/* Outer glow */}
                <div
                  className="position-absolute"
                  style={{
                    inset: '-15px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 188, 212, 0.3), transparent)',
                    filter: 'blur(20px)',
                    animation: 'pulse 2s ease-in-out infinite',
                    zIndex: -1
                  }}
                />

                <img
                  src={profileImage}
                  className="img-fluid position-relative"
                  alt="Profile"
                  style={{
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '4px solid #0a0e27',
                    boxShadow: '0 15px 50px rgba(0, 188, 212, 0.3)',
                    transition: 'transform 0.4s ease',
                    zIndex: 1
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </div>
          </div>

          {/* Name and title */}
          <div style={{ animation: 'fadeInUp 1s ease 0.2s both' }}>
            <h1
              className="display-5 fw-bold mb-3"
              style={{
                background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '2px'
              }}
            >
              Hathisa Thissara
            </h1>
          </div>

          <div style={{ animation: 'fadeInUp 1s ease 0.4s both' }}>
            <p className="lead px-md-5 mb-5" style={{
              opacity: 0.9,
              maxWidth: '700px',
              margin: '0 auto 3rem',
              lineHeight: '1.8'
            }}>
              Passionate Web Developer skilled in modern web technologies and dedicated to crafting responsive, intuitive user experiences.
            </p>
          </div>

          {/* Tab buttons with enhanced design */}
          <div
            className="btn-group mb-5"
            role="group"
            style={{ animation: 'fadeInUp 1s ease 0.6s both' }}
          >
            {['skills', 'experience'].map((tab) => (
              <button
                key={tab}
                className="btn px-5 py-3"
                onClick={() => setActiveTab(tab)}
                style={{
                  background: activeTab === tab
                    ? 'linear-gradient(135deg, #00bcd4, #0097a7)'
                    : 'rgba(255, 255, 255, 0.05)',
                  border: activeTab === tab
                    ? 'none'
                    : '2px solid rgba(0, 188, 212, 0.3)',
                  color: '#fff',
                  borderRadius: activeTab === tab ? '50px' : '50px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'capitalize',
                  transition: 'all 0.4s ease',
                  boxShadow: activeTab === tab
                    ? '0 8px 25px rgba(0, 188, 212, 0.4)'
                    : 'none',
                  transform: activeTab === tab ? 'translateY(-2px)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab) {
                    e.currentTarget.style.background = 'rgba(0, 188, 212, 0.1)';
                    e.currentTarget.style.borderColor = '#00bcd4';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(0, 188, 212, 0.3)';
                  }
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Skills Tab - Card Grid */}
          {activeTab === 'skills' && (
            <div className="row justify-content-center g-4" style={{ maxWidth: '900px', margin: '0 auto' }}>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="col-md-6"
                  style={{ animation: `fadeInUp 0.6s ease ${skill.delay} both` }}
                >
                  <div
                    className="p-4 h-100 position-relative overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '1.5rem',
                      transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.borderColor = `${skill.color}80`;
                      e.currentTarget.style.boxShadow = `0 15px 40px ${skill.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Icon with gradient background */}
                    <div
                      className="d-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${skill.color}40, ${skill.color}20)`,
                        margin: '0 auto'
                      }}
                    >
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className="fs-2"
                        style={{ color: skill.color }}
                      />
                    </div>

                    <h5 className="fw-bold mb-2" style={{ color: skill.color }}>
                      {skill.title}
                    </h5>
                    <p className="mb-0" style={{ opacity: 0.8, fontSize: '0.95rem' }}>
                      {skill.desc}
                    </p>

                    {/* Decorative corner accent */}
                    <div
                      className="position-absolute"
                      style={{
                        top: 0,
                        right: 0,
                        width: '60px',
                        height: '60px',
                        background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                        borderRadius: '0 1.5rem 0 100%'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Experience Tab - Timeline Style */}
          {activeTab === 'experience' && (
            <div className="mx-auto" style={{ maxWidth: '700px' }}>
              <div className="position-relative">
                {/* Timeline line */}
                <div
                  className="position-absolute start-50 translate-middle-x"
                  style={{
                    width: '2px',
                    height: '100%',
                    background: 'linear-gradient(180deg, #00bcd4, #673ab7)',
                    top: 0
                  }}
                />

                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="row mb-4 position-relative"
                    style={{ animation: `fadeInUp 0.6s ease ${exp.delay} both` }}
                  >
                    <div className="col-12">
                      <div
                        className="p-4 position-relative"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '1.5rem',
                          marginLeft: index % 2 === 0 ? '0' : 'auto',
                          marginRight: index % 2 === 0 ? 'auto' : '0',
                          maxWidth: '90%',
                          transition: 'all 0.4s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateX(' + (index % 2 === 0 ? '10px' : '-10px') + ')';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                          e.currentTarget.style.borderColor = 'rgba(0, 188, 212, 0.5)';
                          e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 188, 212, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateX(0)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {/* Timeline dot */}
                        <div
                          className="position-absolute top-50 start-50 translate-middle"
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
                            border: '3px solid #0a0e27',
                            boxShadow: '0 0 20px rgba(0, 188, 212, 0.6)',
                            left: '50%',
                            zIndex: 2
                          }}
                        />

                        <div className="text-start">
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="me-2 fs-4"
                            style={{ color: '#00bcd4' }}
                          />
                          <span
                            className="fw-bold fs-5"
                            style={{
                              background: 'linear-gradient(135deg, #00bcd4, #0097a7)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            {exp.year}
                          </span>
                          <p className="mb-0 mt-2" style={{ opacity: 0.9 }}>
                            {exp.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes gradientRotate {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.1); opacity: 0.5; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>
    </PageAnimator>
  );
}

export default AboutPage;