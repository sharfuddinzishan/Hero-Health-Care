import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <section class="banner-section p-5">
                <div class="row mt-5">
                    <div class="col-md-6">
                        <img class="animated zoomIn img-fluid w-75" alt="" src="https://i.ibb.co/SBvyv1C/phone2.png" />
                    </div>
                    <div class="col-md-6">
                        <div class="overflow-hidden">
                            <h5 class="section-title lh-1 fs-1 pb-3 fw-normal">Whole-Person<br /><b>Virtual
                                Care for All</b></h5>
                            <p class="py-1 animated slideInLeft delay-2s">The technology to connect, expertise you can
                                trust and the power to improve health
                            </p>
                            <Link to="/about">
                                <button class="my-1 me-1 animated zoomIn delay-1s btn btn-lg btn-outline-secondary">Learn
                                    more</button>
                            </Link>
                            <Link to="/contact">
                                <button class="my-1 animated zoomIn delay-0.5s btn btn-lg btn-secondary">Contact us</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;