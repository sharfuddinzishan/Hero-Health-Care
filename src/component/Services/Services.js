import React from 'react';
import './Services.css';
const Services = () => {
    return (
        <>
            <section class="services-section p-5">
                <div class="container">
                    <div class="p-3">
                        <h2 class="section-title lh-1 fs-1 pb-3 fw-normal text-center">Emergency <b>Health Service</b></h2>
                        <h1 class="section-title lh-1 fs-2 pb-3 fw-bold text-center text-uppercase">
                            Fast, Easy and Reliable
                        </h1>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://bd.care/public/uploads/service_photo/1563095624_5d2af24872634.jpeg"
                                    class="card-img-top img-fluid w-50" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Order Ambulance</h5>
                                    <p class="card-text fs-6">
                                        To confirm an ambulance booking, please fill up the e-form.We will get
                                        back soon to you.
                                    </p>
                                </div>
                                <div class="card-footer border-0 bg-white text-end">
                                    <button class="btn btn-sm btn-outline-info text-secondary rounded-pill">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://bd.care/public/uploads/service_photo/1563098680_5d2afe38e128c.jpeg"
                                    class="card-img-top img-fluid w-50" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Home Sample Collection</h5>
                                    <p class="card-text fs-6">
                                        We do home sample collection for any lab tests other than COVID-19. No need to come to
                                        hospital to get tests done
                                    </p>
                                </div>
                                <div class="card-footer border-0 bg-white text-end">
                                    <button class="btn btn-sm btn-outline-info text-secondary rounded-pill">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://bd.care/public/uploads/service_photo/1563098625_5d2afe010541c.jpeg"
                                    class="card-img-top img-fluid w-50" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Nursing for Home</h5>
                                    <p class="card-text fs-6">
                                        Our home service is ideal for patients who need long-term health care for complex
                                        medical problems and daily needs.
                                    </p>
                                </div>
                                <div class="card-footer border-0 bg-white text-end">
                                    <button class="btn btn-sm btn-outline-info text-secondary rounded-pill">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;