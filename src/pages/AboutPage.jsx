import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from '../assets/Profile.jpg';
import PageAnimator from '../components/PageAnimator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCode, faMobileAlt, faLaptopCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function AboutPage() {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { icon: faPencilRuler, title: 'UI/UX', desc: 'Designing engaging web/app interfaces', color: '#ec4899' },
    { icon: faCode, title: 'Web Development', desc: 'Building responsive websites', color: '#0ea5e9' },
    { icon: faMobileAlt, title: 'App Development', desc: 'Android & iOS cross-platform apps', color: '#8b5cf6' },
    { icon: faLaptopCode, title: 'Software Development', desc: 'Custom software solutions', color: '#f59e0b' }
  ];

  const experiences = [
    { year: '2024 - 2025', title: 'National Diploma in ICT' },
    { year: '2025', title: 'Server-Side Web Programming' },
    { year: '2023', title: 'Certificate in English' },
    { year: '2023', title: 'Front-End Web Development' },
    { year: '2023', title: 'Web Design For Beginners' },
    { year: '2023', title: 'Python For Beginners' },
    { year: '2023', title: 'Introduction TO Cybersecurity' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageAnimator>
      <section
        className="py-5 text-white position-relative"
        id="about"
        style={{
          paddingTop: '100px',
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
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="position-absolute"
            style={{
              width: '600px', height: '600px',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
              top: '-10%', right: '-10%', filter: 'blur(60px)'
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], x: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="position-absolute"
            style={{
              width: '500px', height: '500px',
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 60%)',
              bottom: '10%', left: '-5%', filter: 'blur(60px)'
            }}
          />
        </div>

        {/* Grid Overlay for Texture */}
        <div 
            className="position-absolute w-100 h-100" 
            style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: 0,
            }}
        />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          
          <div className="row align-items-center mb-5">
            {/* Profile Image Column */}
            <div className="col-12 col-lg-5 text-center mb-5 mb-lg-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="position-relative d-inline-block"
              >
                {/* Animated glowing ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="position-absolute"
                  style={{
                    inset: '-8px',
                    borderRadius: '50%',
                    background: 'conic-gradient(from 0deg, #38bdf8, #8b5cf6, #ec4899, #38bdf8)',
                    padding: '4px',
                    zIndex: 0,
                    filter: 'blur(8px)',
                    opacity: 0.7
                  }}
                />
                
                {/* Image itself */}
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src={profileImage}
                  className="position-relative"
                  alt="Profile"
                  style={{
                    width: '280px',
                    height: '280px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '4px solid #030712',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    zIndex: 1
                  }}
                />
              </motion.div>
            </div>

            {/* Bio Column */}
            <div className="col-12 col-lg-7 text-center text-lg-start">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="display-4 fw-bolder mb-3"
                style={{
                  background: 'linear-gradient(to right, #e2e8f0, #94a3b8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-1px'
                }}
              >
                Hathisa Thissara
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="lead mb-4 text-secondary" 
                style={{ lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}
              >
                Passionate <strong className="text-light">Web Developer</strong> skilled in modern web technologies. I am dedicated to crafting responsive, intuitive user experiences with clean, efficient code.
              </motion.p>

              {/* Segmented Control for Tabs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="d-flex p-1 rounded-pill mb-4 mx-auto mx-lg-0"
                style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    backdropFilter: 'blur(10px)',
                    width: 'fit-content',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {['skills', 'experience'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="btn border-0 text-capitalize fw-bold rounded-pill position-relative"
                    style={{
                      padding: '0.6rem 2rem',
                      color: activeTab === tab ? '#fff' : '#94a3b8',
                      transition: 'color 0.3s ease',
                      zIndex: 1
                    }}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="position-absolute top-0 start-0 w-100 h-100 rounded-pill"
                        style={{ background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)', zIndex: -1 }}
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {tab}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="mt-5 pt-3">
            <AnimatePresence mode="wait">
              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -20 }}
                  className="row justify-content-center g-4"
                >
                  {skills.map((skill, index) => (
                    <motion.div key={index} variants={itemVariants} className="col-md-6 col-lg-3">
                      <motion.div
                        whileHover={{ y: -10 }}
                        className="p-4 h-100 rounded-4 position-relative overflow-hidden group"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <div 
                          className="d-flex align-items-center justify-content-center mb-4 rounded-3"
                          style={{
                            width: '60px', height: '60px',
                            background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                            border: `1px solid ${skill.color}40`
                          }}
                        >
                          <FontAwesomeIcon icon={skill.icon} className="fs-3" style={{ color: skill.color }} />
                        </div>
                        <h5 className="fw-bold text-light mb-2">{skill.title}</h5>
                        <p className="text-secondary small mb-0">{skill.desc}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'experience' && (
                <motion.div
                  key="experience"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -20 }}
                  className="mx-auto" style={{ maxWidth: '800px' }}
                >
                  <div className="position-relative ps-4 ps-md-0">
                    {/* Timeline Line */}
                    <div className="position-absolute h-100 d-md-none" style={{
                      width: '2px', background: 'linear-gradient(to bottom, #38bdf8, #8b5cf6, transparent)', left: '0', top: 0
                    }} />
                    <div className="position-absolute h-100 start-50 translate-middle-x d-none d-md-block" style={{
                      width: '2px', background: 'linear-gradient(to bottom, #38bdf8, #8b5cf6, transparent)', top: 0
                    }} />

                    {experiences.map((exp, index) => (
                      <motion.div key={index} variants={itemVariants} className={`row mb-4 ${index % 2 === 0 ? 'flex-md-row-reverse' : ''}`}>
                        <div className="col-12 col-md-6 position-relative">
                           {/* Mobile connector line */}
                           <div className="position-absolute d-md-none" style={{
                              width: '20px', height: '2px', background: '#38bdf8', left: '-20px', top: '24px'
                           }} />
                           
                           {/* Desktop dot */}
                           <div className="position-absolute d-none d-md-block rounded-circle" style={{
                              width: '12px', height: '12px', background: '#38bdf8', 
                              top: '20px',
                              ...(index % 2 === 0 ? { left: '-6px' } : { right: '-6px' }),
                              boxShadow: '0 0 10px #38bdf8'
                           }} />

                           <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 rounded-4"
                            style={{
                              background: 'rgba(255,255,255,0.03)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              backdropFilter: 'blur(10px)',
                              marginLeft: index % 2 !== 0 ? 'auto' : '1.5rem', 
                              marginRight: index % 2 === 0 ? 'auto' : '1.5rem'
                            }}
                          >
                            <div className="d-flex align-items-center mb-2">
                                <FontAwesomeIcon icon={faGraduationCap} className="me-2" style={{ color: '#8b5cf6' }} />
                                <span className="fw-bold" style={{ color: '#38bdf8' }}>{exp.year}</span>
                            </div>
                            <h6 className="text-light mb-0">{exp.title}</h6>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </PageAnimator>
  );
}

export default AboutPage;