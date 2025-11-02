import React from 'react';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion'; 

// Components and Pages
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
// import ServicePage from './pages/ServicePage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';


function AnimatedRoutes() {
  const location = useLocation();

  return (
    
    <AnimatePresence mode="wait">
      
      <Routes location={location} key={location.pathname}>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="services" element={<ServicePage />} /> */}
          <Route path="work" element={<WorkPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;