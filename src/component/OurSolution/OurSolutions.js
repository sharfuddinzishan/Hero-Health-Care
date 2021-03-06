import React from 'react';
import './OurSolutions.css'
const OurSolutions = () => {
    return (
        <>
            <section className="solutions-section p-5">
                <div className="container">
                    <h5 className="section-title lh-1 fs-1 py-3 fw-normal text-start text-md-center">
                        Our&nbsp;<b>Solutions</b>
                    </h5>
                    <p className="py-1 text-center text-muted fs-6">Hero Health Care (HHC) is the world’s only integrated
                        virtual care system for delivering, enabling
                        and empowering whole-person health—from wellness and prevention to acute care to complex
                        healthcare needs.
                    </p>
                </div>
                <div className="row gy-3">
                    <div className="col-12 col-md-4">
                        <div className="card h-100">
                            <img src="https://images.ctfassets.net/l3v9j0ltz3yi/6IZi7Gizd9qAnfAYRIkNzB/6d8e0472f0eb8fa20c5d6a2e25cf9b38/image6.jpg"
                                className="card-img-top w-100 h-25" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold fs-6">Deliver virtual care for consumers</h5>
                                <p className="card-text fw-normal fs-6">Care across multiple clinical specialties to help people
                                    resolve their primary care, acute, chronic and complex health needs.</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item fs-6 fw-lighter lh-1">Integrated care models</li>
                                    <li className="list-group-item fs-6 fw-lighter lh-1">Mental health services</li>
                                    <li className="list-group-item fs-6 fw-lighter lh-1">Telehealth services</li>
                                    <li className="list-group-item fs-6 fw-lighter lh-1">Expert medical services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card h-100">
                            <img src="https://images.ctfassets.net/l3v9j0ltz3yi/7lInRAMPoxQQ5HySLyM3Dh/bee3e2589583ef8fb01f285915c10989/image1.jpg"
                                className="card-img-top  w-100 h-25" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold fs-6">Enable virtual care for clinicians</h5>
                                <p className="card-text fw-normal fs-6">
                                    Software, medical-grade telehealth devices and tailored services support enterprise virtual
                                    care programs.Our data-driven insights inspire and accelerate better health decisions.
                                </p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item fs-6 fw-lighter lh-1">Software platforms</li>
                                    <li className="list-group-item fs-6 fw-lighter lh-1">Program services</li>
                                    <li className="list-group-item fs-6 fw-lighter lh-1">Telehealth services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card h-100">
                            <img src="https://images.ctfassets.net/l3v9j0ltz3yi/3QATTSMFQzs4IbsN3wmL7A/ac250db6fae77c37a672d3a8b4103206/image2.jpg"
                                className="card-img-top w-100 h-25" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold fs-6">Empower healthier lives</h5>
                                <p className="card-text fw-normal fs-6">Tools and support that provide personalized, timely,
                                    actionable information to people living with chronic conditions such as diabetes,
                                    hypertension and kidney disease.</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item fs-6 fw-lighter lh-1">Connected remote monitoring devices</li>
                                    <li className="list-group-item fs-6 fw-lighter lh-1">Digital behavior change programs</li>
                                    <li className="list-group-item fs-6 fw-lighter lh-1">Telehealth services</li>
                                    <li className="list-group-item fs-6 fw-lighter lh-1">Expert medical servicesExpert health
                                        coaching
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurSolutions;