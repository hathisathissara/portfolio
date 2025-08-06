// src/pages/WorkPage.jsx
import React from "react";
import PageAnimator from '../components/PageAnimator';

function WorkPage() {
    return (
        <PageAnimator>
        <section className="services text-center" id="services" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
            <div className="container">
                <h2 className="text-light mb-5">Portfolio <span className="text-primary">Highlights</span></h2>
                <div className="row justify-content-center"> {/* Cards ටික මැදට ගමු */}

                    <div className="col-md-6 col-lg-4 mb-4"> {/* Card අතර зайвус තියන්න */}
                        <div className="card shadow-sm border-0 h-100" style={{ width: '18rem' }}>
                            <img
                                src="https://images.unsplash.com/photo-1569322977266-acff659212fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2ViJTIwUGFnZXxlbnwwfHwwfHx8MA%3D%3D"
                                className="card-img-top" // class -> className
                                alt="Web Development"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">Crafted a responsive, modern website with seamless navigation for diverse audiences.</p>
                                <a href="http://store.musichub.unaux.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-sm border-0 h-100" style={{ width: '18rem' }}>
                            <img src="https://images.unsplash.com/photo-1554260570-47e791ab2fc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29kaW5nJTIwQXBwfGVufDB8fDB8fHww"
                                className="card-img-top" alt="Coding App" />
                            <div className="card-body">
                                <h5 className="card-title">Coding App</h5>
                                <p className="card-text">Developed a feature-rich coding environment for beginner programmers.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-sm border-0 h-100" style={{ width: '18rem' }}>
                            <img src="https://plus.unsplash.com/premium_photo-1683262038148-2ac280407276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGVjaCUyMEFwcHxlbnwwfHwwfHx8MA%3D%3D"
                                className="card-img-top" alt="Tech App" />
                            <div className="card-body">
                                <h5 className="card-title">Tech App</h5>
                                <p className="card-text">A robust mobile application empowering users with cutting-edge technology tools.</p>
                                <a href="https://github.com/hathisathissara/store-ios-app" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-sm border-0 h-100" style={{ width: '18rem' }}>
                            <img src="https://media.istockphoto.com/id/1340516763/photo/empty-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=jbYGCEpqm8nTe-qwaydKnKU0zxQ1nYVMBsj2P0Sqez0="
                                className="card-img-top" alt="School Management System" />
                            <div className="card-body">
                                <h5 className="card-title">School Management System</h5>
                                <p className="card-text">Streamlined school operations with an intuitive, all-in-one digital platform.</p>
                                <a href="https://github.com/hathisathissara/School-Management-System" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-sm border-0 h-100" style={{ width: '18rem' }}>
                            <img src="https://media.istockphoto.com/id/2084953049/photo/neural-network-nodes-deep-learning-artificial-intelligence-machine-learning-model.webp?a=1&b=1&s=612x612&w=0&k=20&c=kySkpXxwGqj4vuZi3UkHtDioMVvUgXDDvGzrkgonU9Q="
                                className="card-img-top" alt="Machine Learning Model" />
                            <div className="card-body">
                                <h5 className="card-title">Machine Learning Model</h5>
                                <p className="card-text">Designed a predictive analytics model leveraging AI for smarter decision-making.</p>
                                <a href="https://github.com/hathisathissara/track-hand" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                    </div>

                    {/* Service Item 6: Data Visualization Tool */}
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-sm border-0 h-100" style={{ width: '18rem' }}>
                            <img src="https://media.istockphoto.com/id/1342186559/photo/a-business-man-using-a-computer-to-manage-documents-online-document-communication-database.webp?a=1&b=1&s=612x612&w=0&k=20&c=XQFDCEeEbTZpWLHoL6p_dkRYATnL4E5mxJyZObip5tQ="
                                className="card-img-top" alt="Data Visualization Tool" />
                            <div className="card-body">
                                <h5 className="card-title">Data Visualization Tool</h5>
                                <p className="card-text">Built a dynamic tool to visualize complex datasets with clarity and precision</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </PageAnimator>
    );
}
export default WorkPage;