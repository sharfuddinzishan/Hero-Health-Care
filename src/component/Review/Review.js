import React from 'react';
import './Review.css';

const Review = () => {
    return (
        <>
            <section class="review-section p-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h2 class="lh-sm pb-3 fw-normal text-start text-light">Patients love <br />
                                using Maple
                            </h2>
                            <p class="text-light lh-lg">Read our social media reviews, or download the app</p>
                            <div class="d-flex align-items-center justify-content-around justify-content-lg-none mb-3">
                                <a class="me-2"
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
                        <div class="col-md-8">
                            <section class="testimonials py-3">
                                <div class="container">
                                    <div id="carouselExampleControls" class="carousel slide">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="testimonial card mx-auto overflow-hidden">
                                                    <img src="https://i.ibb.co/PNpw8JY/testimonial-1.jpg" class="testimonial-img card-img-top img-fluid"
                                                        alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            Was concerned I wouldn’t be able to see a doctor without an
                                                            appointment.I installed the Maple app, spoke to a doctor and had my
                                                            prescription in under 30 min.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="testimonial card mx-auto overflow-hidden">
                                                    <img src="https://i.ibb.co/4tX0PpQ/testimonial-2.jpg" class="testimonial-img card-img-top img-fluid"
                                                        alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            I used Maple for the first time today.It was quick and easy, took
                                                            less than ten minutes including connecting time and the doctor was
                                                            professional and friendly.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="testimonial card mx-auto overflow-hidden">
                                                    <img src="https://i.ibb.co/zrSfkxL/testimonial-3.jpg" class="testimonial-img card-img-top img-fluid"
                                                        alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            LOVE This service.Not only do you have a doctor within seconds but
                                                            they are professional and knowledgable.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev mt-5" type="button"
                                            data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next mt-5" type="button"
                                            data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
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