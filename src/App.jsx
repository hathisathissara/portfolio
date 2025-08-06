import React from 'react';
// BrowserRouter එක Router විදියට නම් කරන්න, useLocation hook එක import කරන්න
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// AnimatePresence import කරන්න
import { AnimatePresence } from 'framer-motion'; 

// Components and Pages
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Routes ටික handle කරන්න වෙනම function component එකක් හදමු
function AnimatedRoutes() {
  const location = useLocation();

  return (
    // AnimatePresence වලින් Routes wrap කරන්න. මේක අනිවාර්යයි.
    <AnimatePresence mode="wait">
      {/* URL එක වෙනස් වෙන හැම පාරම re-render වෙන්න key එකක් දෙනවා */}
      <Routes location={location} key={location.pathname}>
        {/* Main layout with Navbar and Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        
        {/* Route for 404 Page (no layout) */}
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  return (
    <Router>
      <AnimatedRoutes /> {/* අපේ අලුත් component එක මෙතන call කරනවා */}
    </Router>
  );
}

export default App;