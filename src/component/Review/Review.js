import React from 'react';
import './Review.css';

const Review = () => {
    return (
        <>
            <section className="review-section p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="lh-sm pb-3 fw-normal text-start text-light">Patients love <br />
                                using Maple
                            </h2>
                            <p className="text-light lh-lg">Read our social media reviews, or download the app</p>
                            <div className="d-flex align-items-center justify-content-around justify-content-lg-none mb-3">
                                <a className="me-2"
                                    href="https://apps.apple.com/ca/app/meira-care-virtual-clinic/id1549037621#?platform=iphone"
                                    target="_blank">
                                    <img src="https://meiracare.com/template/assets/images/app-store.webp"
                                        alt="App Store Download" width="100" />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.meiracare.app" target="_blank">
                                    <img src="https://meiracare.com/template/assets/images/google-play.webp"
                                        alt="Google Play Store Download" width="100" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <section className="testimonials py-3">
                                <div className="container">
                                    <div id="carouselExampleControls" className="carousel slide">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="testimonial card mx-auto overflow-hidden">
                                                    <img src="https://i.ibb.co/PNpw8JY/testimonial-1.jpg" className="testimonial-img card-img-top img-fluid"
                                                        alt="..." />
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                            Was concerned I wouldn’t be able to see a doctor without an
                                                            appointment.I installed the Maple app, spoke to a doctor and had my
                                                            prescription in under 30 min.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="testimonial card mx-auto overflow-hidden">
                                                    <img src="https://i.ibb.co/4tX0PpQ/testimonial-2.jpg" className="testimonial-img card-img-top img-fluid"
                                                        alt="..." />
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                            I used Maple for the first time today.It was quick and easy, took
                                                            less than ten minutes including connecting time and the doctor was
                                                            professional and friendly.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="testimonial card mx-auto overflow-hidden">
                                                    <img src="https://i.ibb.co/zrSfkxL/testimonial-3.jpg" className="testimonial-img card-img-top img-fluid"
                                                        alt="..." />
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                            LOVE This service.Not only do you have a doctor within seconds but
                                                            they are professional and knowledgable.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev mt-5" type="button"
                                            data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next mt-5" type="button"
                                            data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Review;