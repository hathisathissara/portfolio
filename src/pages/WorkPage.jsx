import React, { useState } from "react";
import PageAnimator from '../components/PageAnimator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';

function WorkPage() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [filterCategory, setFilterCategory] = useState('all');

    const projects = [
        {
            title: 'Web Development',
            description: 'Crafted a responsive, modern website with seamless navigation for diverse audiences.',
            image: 'https://images.unsplash.com/photo-1569322977266-acff659212fd?w=500&auto=format&fit=crop&q=60',
            link: 'http://store.musichub.unaux.com',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#667eea',
            tags: ['React', 'Responsive', 'Modern'],
            category: 'web'
        },
        {
            title: 'Coding App',
            description: 'Developed a feature-rich coding environment for beginner programmers.',
            image: 'https://images.unsplash.com/photo-1554260570-47e791ab2fc7?w=500&auto=format&fit=crop&q=60',
            link: '#',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: '#f5576c',
            tags: ['IDE', 'Education', 'Interactive'],
            category: 'app'
        },
        {
            title: 'Tech App',
            description: 'A robust mobile application empowering users with cutting-edge technology tools.',
            image: 'https://plus.unsplash.com/premium_photo-1683262038148-2ac280407276?w=500&auto=format&fit=crop&q=60',
            link: 'https://github.com/hathisathissara/store-ios-app',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            color: '#00f2fe',
            tags: ['iOS', 'Android', 'Mobile'],
            category: 'app'
        },
        {
            title: 'School Management System',
            description: 'Streamlined school operations with an intuitive, all-in-one digital platform.',
            image: 'https://media.istockphoto.com/id/1340516763/photo/empty-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=jbYGCEpqm8nTe-qwaydKnKU0zxQ1nYVMBsj2P0Sqez0=',
            link: 'https://github.com/hathisathissara/School-Management-System',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            color: '#fa709a',
            tags: ['Management', 'Database', 'Admin'],
            category: 'software'
        },
        {
            title: 'Machine Learning Model',
            description: 'Designed a predictive analytics model leveraging AI for smarter decision-making.',
            image: 'https://media.istockphoto.com/id/2084953049/photo/neural-network-nodes-deep-learning-artificial-intelligence-machine-learning-model.webp?a=1&b=1&s=612x612&w=0&k=20&c=kySkpXxwGqj4vuZi3UkHtDioMVvUgXDDvGzrkgonU9Q=',
            link: 'https://github.com/hathisathissara/track-hand',
            gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            color: '#30cfd0',
            tags: ['AI', 'Python', 'TensorFlow'],
            category: 'ai'
        },
        {
            title: 'Data Visualization Tool',
            description: 'Built a dynamic tool to visualize complex datasets with clarity and precision.',
            image: 'https://media.istockphoto.com/id/1342186559/photo/a-business-man-using-a-computer-to-manage-documents-online-document-communication-database.webp?a=1&b=1&s=612x612&w=0&k=20&c=XQFDCEeEbTZpWLHoL6p_dkRYATnL4E5mxJyZObip5tQ=',
            link: '#',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            color: '#a8edea',
            tags: ['D3.js', 'Charts', 'Analytics'],
            category: 'web'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Projects', icon: faRocket },
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
                    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)',
                    overflow: 'hidden'
                }}
            >
                {/* Animated background particles */}
                <div className="position-absolute w-100 h-100" style={{ pointerEvents: 'none', top: 0, left: 0 }}>
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="position-absolute rounded-circle"
                            style={{
                                width: `${300 + i * 50}px`,
                                height: `${300 + i * 50}px`,
                                background: `radial-gradient(circle, rgba(${i % 2 === 0 ? '0, 188, 212' : '103, 58, 183'}, 0.1), transparent)`,
                                top: `${20 + i * 30}%`,
                                left: `${10 + i * 30}%`,
                                animation: `float ${8 + i * 2}s ease-in-out infinite`,
                                animationDelay: `${i}s`,
                                filter: 'blur(60px)'
                            }}
                        />
                    ))}
                </div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    {/* Section header */}
                    <div style={{ animation: 'fadeInUp 1s ease', marginBottom: '3rem' }}>
                        <h2
                            className="mb-3"
                            style={{
                                fontSize: '3.5rem',
                                fontWeight: '800',
                                letterSpacing: '2px'
                            }}
                        >
                            <span className="text-light">My Creative </span>
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                Portfolio
                            </span>
                        </h2>
                        <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            Explore my latest projects and creative work
                        </p>
                        <div
                            className="mx-auto"
                            style={{
                                width: '100px',
                                height: '4px',
                                background: 'linear-gradient(90deg, transparent, #00bcd4, transparent)',
                                borderRadius: '2px'
                            }}
                        />
                    </div>

                    {/* Category Filter */}
                    <div
                        className="d-flex flex-wrap justify-content-center gap-3 mb-5"
                        style={{ animation: 'fadeInUp 1s ease 0.2s both' }}
                    >
                        {categories.map((cat, i) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilterCategory(cat.id)}
                                className="btn"
                                style={{
                                    background: filterCategory === cat.id
                                        ? 'linear-gradient(135deg, #00bcd4, #673ab7)'
                                        : 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: filterCategory === cat.id
                                        ? 'none'
                                        : '2px solid rgba(255, 255, 255, 0.1)',
                                    color: '#fff',
                                    borderRadius: '50px',
                                    padding: '0.8rem 2rem',
                                    fontWeight: '600',
                                    letterSpacing: '1px',
                                    fontSize: '0.95rem',
                                    transition: 'all 0.3s ease',
                                    boxShadow: filterCategory === cat.id
                                        ? '0 8px 25px rgba(0, 188, 212, 0.4)'
                                        : 'none',
                                    transform: filterCategory === cat.id ? 'translateY(-2px)' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    if (filterCategory !== cat.id) {
                                        e.currentTarget.style.background = 'rgba(0, 188, 212, 0.1)';
                                        e.currentTarget.style.borderColor = '#00bcd4';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (filterCategory !== cat.id) {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }
                                }}
                            >
                                <FontAwesomeIcon icon={cat.icon} className="me-2" />
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Projects grid */}
                    <div className="row justify-content-center g-4">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="col-md-6 col-lg-4"
                                style={{
                                    animation: `fadeInUp 0.6s ease ${index * 0.1}s both`
                                }}
                            >
                                <div
                                    className="h-100 position-relative overflow-hidden"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '2rem',
                                        transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                                        cursor: 'pointer',
                                        transform: hoveredCard === index ? 'translateY(-15px)' : 'translateY(0)',
                                        boxShadow: hoveredCard === index
                                            ? `0 20px 60px ${project.color}50`
                                            : 'none'
                                    }}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    {/* Image container with overlay */}
                                    <div
                                        className="position-relative overflow-hidden"
                                        style={{
                                            height: '240px',
                                            borderRadius: '2rem 2rem 0 0'
                                        }}
                                    >
                                        <img
                                            src={project.image}
                                            className="w-100 h-100"
                                            alt={project.title}
                                            style={{
                                                objectFit: 'cover',
                                                transition: 'transform 0.6s ease',
                                                transform: hoveredCard === index ? 'scale(1.2)' : 'scale(1)'
                                            }}
                                        />

                                        {/* Gradient overlay */}
                                        <div
                                            className="position-absolute w-100 h-100 top-0 start-0"
                                            style={{
                                                background: hoveredCard === index
                                                    ? `${project.gradient}, rgba(0, 0, 0, 0.4)`
                                                    : 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
                                                mixBlendMode: hoveredCard === index ? 'normal' : 'normal',
                                                opacity: hoveredCard === index ? 0.8 : 1,
                                                transition: 'all 0.4s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            {/* View Project Icon */}
                                            <div
                                                style={{
                                                    opacity: hoveredCard === index ? 1 : 0,
                                                    transform: hoveredCard === index ? 'scale(1)' : 'scale(0.5)',
                                                    transition: 'all 0.4s ease'
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faExternalLinkAlt}
                                                    style={{
                                                        fontSize: '3rem',
                                                        color: '#fff',
                                                        filter: 'drop-shadow(0 5px 15px rgba(0, 0, 0, 0.5))'
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Status badge */}
                                        <div
                                            className="position-absolute top-0 end-0 m-3"
                                            style={{
                                                padding: '0.5rem 1rem',
                                                borderRadius: '50px',
                                                background: project.link === '#'
                                                    ? 'rgba(255, 193, 7, 0.9)'
                                                    : 'rgba(40, 167, 69, 0.9)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                                fontSize: '0.75rem',
                                                fontWeight: '700',
                                                color: '#fff',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}
                                        >
                                            {project.link === '#' ? 'Coming Soon' : 'Live'}
                                        </div>
                                    </div>

                                    {/* Card content */}
                                    <div className="p-4">
                                        <h5
                                            className="fw-bold mb-3"
                                            style={{
                                                color: hoveredCard === index ? project.color : '#fff',
                                                transition: 'color 0.3s ease',
                                                fontSize: '1.4rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}
                                        >
                                            {project.title}
                                        </h5>

                                        <p
                                            className="mb-3"
                                            style={{
                                                opacity: 0.85,
                                                fontSize: '0.95rem',
                                                lineHeight: '1.6',
                                                minHeight: '3em'
                                            }}
                                        >
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="d-flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    style={{
                                                        padding: '0.4rem 0.9rem',
                                                        borderRadius: '20px',
                                                        background: hoveredCard === index
                                                            ? `${project.color}25`
                                                            : 'rgba(255, 255, 255, 0.08)',
                                                        border: `1px solid ${hoveredCard === index ? project.color + '50' : 'transparent'}`,
                                                        fontSize: '0.75rem',
                                                        fontWeight: '600',
                                                        color: hoveredCard === index ? project.color : 'rgba(255, 255, 255, 0.8)',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <a
                                            href={project.link}
                                            target={project.link !== '#' ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                                            style={{
                                                background: hoveredCard === index
                                                    ? project.gradient
                                                    : 'rgba(255, 255, 255, 0.05)',
                                                border: hoveredCard === index
                                                    ? 'none'
                                                    : '2px solid rgba(255, 255, 255, 0.15)',
                                                color: '#fff',
                                                borderRadius: '50px',
                                                padding: '0.9rem',
                                                fontWeight: '600',
                                                letterSpacing: '1px',
                                                textTransform: 'uppercase',
                                                fontSize: '0.85rem',
                                                transition: 'all 0.3s ease',
                                                boxShadow: hoveredCard === index
                                                    ? `0 10px 30px ${project.color}40`
                                                    : 'none',
                                                pointerEvents: project.link === '#' ? 'none' : 'auto',
                                                opacity: project.link === '#' ? 0.6 : 1
                                            }}
                                        >
                                            {project.link === '#' ? (
                                                <>Coming Soon</>
                                            ) : (
                                                <>
                                                    View Project
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: '0.9rem' }} />
                                                </>
                                            )}
                                        </a>
                                    </div>

                                    {/* Decorative corner gradient */}
                                    <div
                                        className="position-absolute"
                                        style={{
                                            bottom: 0,
                                            right: 0,
                                            width: '120px',
                                            height: '120px',
                                            background: `radial-gradient(circle at bottom right, ${project.color}15, transparent)`,
                                            opacity: hoveredCard === index ? 1 : 0,
                                            transition: 'opacity 0.4s ease',
                                            pointerEvents: 'none',
                                            borderRadius: '0 0 2rem 0'
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty state */}
                    {filteredProjects.length === 0 && (
                        <div
                            className="text-center py-5"
                            style={{ animation: 'fadeInUp 0.6s ease' }}
                        >
                            <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                                No projects found in this category.
                            </p>
                        </div>
                    )}
                </div>

                <style>{`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes float {
                        0%, 100% { transform: translate(0, 0); }
                        33% { transform: translate(20px, -20px); }
                        66% { transform: translate(-20px, 20px); }
                    }
                `}</style>
            </section>
        </PageAnimator>
    );
}

export default WorkPage;