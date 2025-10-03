// src/pages/AboutPage.jsx
import React, { useState } from 'react';
import profileImage from '../assets/Profile.jpg';
import PageAnimator from '../components/PageAnimator'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCode, faMobileAlt, faLaptopCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


function AboutPage() {
  const [activeTab, setActiveTab] = useState('skills'); // 'skills' or 'experience'

  return (
    <PageAnimator>
    <section className="py-5 bg-dark text-white text-center" id="about" style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: '80px' }}> {/* Add padding to avoid navbar overlap */}
        <div className="row justify-content-center mb-4">
          <div className="col-6 col-md-3">
            <img src={profileImage} className="rounded-circle img-fluid border border-3 border-info shadow" alt="Profile" style={{ aspectRatio: '1 / 1', objectFit: 'cover' }} />
          </div>
        </div>

        <h1 className="display-5 fw-bold">Hathisa Thissara</h1>
        <p className="lead px-md-5">
          Passionate Web Developer skilled in modern web technologies and dedicated to crafting responsive, intuitive user experiences.
        </p>

        <div className="btn-group mb-4" role="group">
          <button
            className={`btn ${activeTab === 'skills' ? 'btn-info' : 'btn-outline-info'}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`btn ${activeTab === 'experience' ? 'btn-info' : 'btn-outline-info'}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
        </div>

        {/* Conditional Rendering for Skills */}
        {activeTab === 'skills' && (
          <div className="card bg-secondary text-white border-0 mx-auto" style={{ maxWidth: '700px' }}>
            <div className="card-body text-start">
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-secondary text-white"><FontAwesomeIcon icon={faPencilRuler} className="me-2 text-warning" /> <strong>UI/UX:</strong> Designing engaging web/app interfaces</li>
                <li className="list-group-item bg-secondary text-white"><FontAwesomeIcon icon={faCode} className="me-2 text-warning" /> <strong>Web Development:</strong> Building responsive websites</li>
                <li className="list-group-item bg-secondary text-white"><FontAwesomeIcon icon={faMobileAlt} className="me-2 text-warning" /> <strong>App Development:</strong> Android & iOS cross-platform apps</li>
                <li className="list-group-item bg-secondary text-white"><FontAwesomeIcon icon={faLaptopCode} className="me-2 text-warning" /> <strong>Software Development:</strong> Custom software solutions</li>
              </ul>
            </div>
          </div>
        )}

        {/* Conditional Rendering for Experience */}
        {activeTab === 'experience' && (
          <div className="card bg-secondary text-white border-0 mx-auto mt-3" style={{ maxWidth: '700px' }}>
            <div className="card-body text-start">
              <ul className="list-group list-group-flush">
                 <li className="list-group-item bg-secondary text-white"><FontAwesomeIcon icon={faGraduationCap} className="me-2 text-warning" /><strong>2024 - 2025:</strong> National Diploma in ICT</li>
                 <li className="list-group-item bg-secondary text-white"><FontAwesomeIcon icon={faGraduationCap} className="me-2 text-warning" /><strong>2023 :</strong> Certificate in English</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
    </PageAnimator>
  );
}

export default AboutPage;