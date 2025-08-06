// src/pages/ServicePage.jsx
import React from "react";
import PageAnimator from '../components/PageAnimator';

function ServicePage() {
    return (
        <PageAnimator>
            <section className="services text-center" id="services" style={{ paddingTop: '100px' }}>
                <div className="container">
                    <h2 className="text-light mb-5">Our <span className="text-primary">Services</span></h2>
                    <div className="row justify-content-center"> {/* justify-content-center දැම්මම cards ටික මැදට එයි */}

                        {/* Service Card 1 */}
                        <div className="col-md-6 col-lg-4 mb-4"> {/* mb-4 (margin-bottom) පොඩි gap එකකට */}
                            <div className="card shadow-sm border-0 h-100" style={{ width: '18rem' }}>
                                <img src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?uid=R183750515&ga=GA1.1.375319987.1741079138&semt=ais_hybrid&w=740" className="card-img-top" alt="Web Development" />
                                <div className="card-body">
                                    <h5 className="card-title">Web Development</h5>
                                    <p className="card-text">Build modern, responsive websites tailored to your business needs.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="card shadow-sm border-0 h-100" style={{ width: '18rem' }}>
                                <img src="https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg?uid=R183750515&ga=GA1.1.375319987.1741079138&semt=ais_hybrid&w=740" className="card-img-top" alt="UI/UX Design" />
                                <div className="card-body">
                                    <h5 className="card-title">UI/UX Design</h5>
                                    <p className="card-text">Create intuitive and visually stunning user experiences.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>

                        {/* Service Card 3 */}
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="card shadow-sm border-0 h-100" style={{ width: '18rem' }}>
                                <img src="https://img.freepik.com/premium-photo/html-system-websites-concept_23-2150323552.jpg?uid=R183750515&ga=GA1.1.375319987.1741079138&semt=ais_hybrid&w=740" className="card-img-top" alt="Software Development" />
                                <div className="card-body">
                                    <h5 className="card-title">Software Development</h5>
                                    <p className="card-text">Custom software solutions to boost productivity and streamline operations.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>

                        {/* Service Card 4 */}
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="card shadow-sm border-0 h-100" style={{ width: '18rem' }}>
                                <img src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?uid=R183750515&ga=GA1.1.375319987.1741079138&semt=ais_hybrid&w=740" className="card-img-top" alt="Digital Marketing" />
                                <div className="card-body">
                                    <h5 className="card-title">Digital Marketing</h5>
                                    <p className="card-text">Enhance your online presence with targeted digital marketing strategies.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>

                        {/* Service Card 5 */}
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="card shadow-sm border-0 h-100" style={{ width: '18rem' }}>
                                <img src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?uid=R183750515&ga=GA1.1.375319987.1741079138&semt=ais_hybrid&w=740" className="card-img-top" alt="Mobile App Development" />
                                <div className="card-body">
                                    <h5 className="card-title">Mobile App Development</h5>
                                    <p className="card-text">Develop user-friendly and functional mobile applications for various platforms.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>

                        {/* Service Card 6 */}
                        <div className="col-md-6 col-lg-4 mb-4">
                            <div className="card shadow-sm border-0 h-100" style={{ width: '18rem' }}>
                                <img src="https://img.freepik.com/free-photo/technology-integrated-everyday-life_23-2151887047.jpg?uid=R183750515&ga=GA1.1.375319987.1741079138&semt=ais_hybrid&w=740" className="card-img-top" alt="Cloud Services" />
                                <div className="card-body">
                                    <h5 className="card-title">Cloud Services</h5>
                                    <p className="card-text">Ensure secure and scalable cloud infrastructure solutions for your business.</p>
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

export default ServicePage;