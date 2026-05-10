import React, { useState } from "react";
import PageAnimator from '../components/PageAnimator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import Recipeimage from '../assets/Recipe.png';
import News from '../assets/News.png';
import Library from '../assets/Library.png';
import Gift from '../assets/Gift.png';
import Music from '../assets/Music.png';

function WorkPage() {
    const [filterCategory, setFilterCategory] = useState('all');

    const projects = [
        {
            title: 'Music Track Selling store',
            description: 'A full-stack e-commerce platform with a unique sci-fi theme, built from the ground up with PHP and Bootstrap.',
            image: Music,
            link: 'https://github.com/hathisathissara/sci_music_store',
            color: '#38bdf8',
            tags: ['PHP', 'MySQL', 'Bootstrap'],
            category: 'web'
        },
        {
            title: 'Library Management System',
            description: 'A robust system to digitize and automate library operations with real-time tracking.',
            image: Library,
            link: 'https://github.com/hathisathissara/library-management',
            color: '#8b5cf6',
            tags: ['PHP', 'MySQL', 'JavaScript'],
            category: 'web'
        },
        {
            title: 'Gift E-commerce Website',
            description: 'A curated gift-finding web application designed to simplify the shopping experience.',
            image: Gift,
            link: 'https://github.com/hathisathissara/library-management',
            color: '#ec4899',
            tags: ['PHP', 'MySQL', 'jQuery'],
            category: 'web'
        },
        {
            title: 'Coding App',
            description: 'Developed a feature-rich coding environment for beginner programmers.',
            image: 'https://images.unsplash.com/photo-1554260570-47e791ab2fc7?w=500&auto=format&fit=crop&q=60',
            link: '#',
            color: '#f59e0b',
            tags: ['IDE', 'Education'],
            category: 'app'
        },
        {
            title: 'Tech App',
            description: 'A robust mobile application empowering users with cutting-edge technology tools.',
            image: 'https://plus.unsplash.com/premium_photo-1683262038148-2ac280407276?w=500&auto=format&fit=crop&q=60',
            link: 'https://github.com/hathisathissara/store-ios-app',
            color: '#0ea5e9',
            tags: ['iOS', 'Android'],
            category: 'app'
        },
        {
            title: 'School Management System',
            description: 'Streamlined school operations with an intuitive, all-in-one digital platform.',
            image: 'https://media.istockphoto.com/id/1340516763/photo/empty-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=jbYGCEpqm8nTe-qwaydKnKU0zxQ1nYVMBsj2P0Sqez0=',
            link: 'https://github.com/hathisathissara/School-Management-System',
            color: '#10b981',
            tags: ['Management', 'Admin'],
            category: 'software'
        },
        {
            title: 'Machine Learning Model',
            description: 'Designed a predictive analytics model leveraging AI for smarter decision-making.',
            image: 'https://media.istockphoto.com/id/2084953049/photo/neural-network-nodes-deep-learning-artificial-intelligence-machine-learning-model.webp?a=1&b=1&s=612x612&w=0&k=20&c=kySkpXxwGqj4vuZi3UkHtDioMVvUgXDDvGzrkgonU9Q=',
            link: 'https://github.com/hathisathissara/track-hand',
            color: '#6366f1',
            tags: ['AI', 'Python', 'TensorFlow'],
            category: 'ai'
        },
        {
            title: 'Data Visualization Tool',
            description: 'Built a dynamic tool to visualize complex datasets with clarity and precision.',
            image: 'https://media.istockphoto.com/id/1342186559/photo/a-business-man-using-a-computer-to-manage-documents-online-document-communication-database.webp?a=1&b=1&s=612x612&w=0&k=20&c=XQFDCEeEbTZpWLHoL6p_dkRYATnL4E5mxJyZObip5tQ=',
            link: '#',
            color: '#14b8a6',
            tags: ['D3.js', 'Charts'],
            category: 'web'
        },
        {
            title: 'Recipe Finder',
            description: 'RecipeFinder is a dynamic and intuitive web application to find recipes by ingredients.',
            image: Recipeimage,
            link: 'https://github.com/hathisathissara/recipe-finder-app',
            color: '#f43f5e',
            tags: ['React JS', 'REST API'],
            category: 'web'
        },
        {
            title: 'News App',
            description: 'A responsive, single-page news application built with React that fetches real-time headlines.',
            image: News,
            link: 'https://github.com/hathisathissara/my-news-app',
            color: '#8b5cf6',
            tags: ['React JS', 'REST API'],
            category: 'web'
        },
    ];

    const categories = [
        { id: 'all', name: 'All', icon: faRocket },
        { id: 'web', name: 'Web', icon: faCode },
        { id: 'app', name: 'Mobile', icon: faRocket },
        { id: 'software', name: 'Software', icon: faCode },
        { id: 'ai', name: 'AI/ML', icon: faRocket }
    ];

    const filteredProjects = filterCategory === 'all'
        ? projects
        : projects.filter(p => p.category === filterCategory);

    return (
        <PageAnimator>
            <section
                className="text-center position-relative"
                id="services"
                style={{
                    paddingTop: '120px',
                    paddingBottom: '100px',
                    minHeight: '100vh',
                    backgroundColor: '#030712',
                    overflow: 'hidden'
                }}
            >
                {/* Abstract Dark Aurora Background */}
                <div className="position-absolute w-100 h-100" style={{ pointerEvents: 'none', top: 0, left: 0, zIndex: 0 }}>
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="position-absolute"
                        style={{
                            width: '70vw', height: '70vw',
                            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 50%)',
                            top: '-20%', left: '-20%', filter: 'blur(80px)'
                        }}
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="position-absolute"
                        style={{
                            width: '60vw', height: '60vw',
                            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 50%)',
                            bottom: '-10%', right: '-10%', filter: 'blur(80px)'
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
                    {/* Header */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-5"
                    >
                        <h2 className="display-4 fw-bolder mb-3" style={{ color: '#f8fafc', letterSpacing: '-1px' }}>
                            Creative <span style={{ color: '#38bdf8' }}>Portfolio</span>
                        </h2>
                        <p className="text-secondary lead">Explore my latest projects and creations</p>
                    </motion.div>

                    {/* Filter Navigation */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="d-flex flex-wrap justify-content-center gap-2 mb-5"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilterCategory(cat.id)}
                                className="btn position-relative fw-bold rounded-pill text-uppercase"
                                style={{
                                    padding: '0.6rem 1.5rem',
                                    fontSize: '0.85rem',
                                    color: filterCategory === cat.id ? '#fff' : '#94a3b8',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    zIndex: 1,
                                    overflow: 'hidden'
                                }}
                            >
                                {filterCategory === cat.id && (
                                    <motion.div
                                        layoutId="filterTab"
                                        className="position-absolute top-0 start-0 w-100 h-100"
                                        style={{ background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)', zIndex: -1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <FontAwesomeIcon icon={cat.icon} className="me-2" />
                                {cat.name}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid using AnimatePresence and layout for smooth filtering */}
                    <motion.div layout className="row justify-content-center g-4">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={project.title}
                                    className="col-md-6 col-lg-4"
                                >
                                    <motion.div
                                        whileHover="hover"
                                        className="h-100 rounded-4 position-relative overflow-hidden text-start d-flex flex-column"
                                        style={{
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            backdropFilter: 'blur(12px)',
                                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                                        }}
                                    >
                                        <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                                            <motion.img
                                                variants={{
                                                    hover: { scale: 1.1 }
                                                }}
                                                transition={{ duration: 0.6 }}
                                                src={project.image}
                                                alt={project.title}
                                                className="w-100 h-100 object-fit-cover"
                                            />
                                            {/* Hover Overlay */}
                                            <motion.div 
                                                variants={{
                                                    hover: { opacity: 1 }
                                                }}
                                                initial={{ opacity: 0 }}
                                                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                                style={{ background: 'rgba(3, 7, 18, 0.7)', backdropFilter: 'blur(4px)' }}
                                            >
                                                <a 
                                                    href={project.link} 
                                                    target={project.link !== '#' ? '_blank' : undefined}
                                                    rel="noreferrer"
                                                    className="btn rounded-pill fw-bold"
                                                    style={{ 
                                                        background: project.color, 
                                                        color: '#fff', 
                                                        border: 'none',
                                                        boxShadow: `0 10px 20px ${project.color}60`
                                                    }}
                                                >
                                                    {project.link === '#' ? 'Coming Soon' : 'View Project'}
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
                                                </a>
                                            </motion.div>
                                        </div>

                                        <div className="p-4 flex-grow-1 d-flex flex-column">
                                            <h5 className="fw-bold mb-2 text-light">{project.title}</h5>
                                            <p className="text-secondary small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                                                {project.description}
                                            </p>
                                            <div className="d-flex flex-wrap gap-2 mt-auto">
                                                {project.tags.map(tag => (
                                                    <span 
                                                        key={tag} 
                                                        className="badge rounded-pill"
                                                        style={{ 
                                                            background: `${project.color}20`, 
                                                            color: project.color,
                                                            border: `1px solid ${project.color}40`,
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-5">
                            <p className="text-secondary lead">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </PageAnimator>
    );
}

export default WorkPage;