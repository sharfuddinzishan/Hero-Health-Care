import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <section className="banner-section p-5">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img className="animated zoomIn img-fluid w-75" alt="" src="https://i.ibb.co/SBvyv1C/phone2.png" />
                    </div>
                    <div className="col-md-6">
                        <div className="overflow-hidden">
                            <h5 className="section-title lh-1 fs-1 pb-3 fw-normal">Whole-Person<br /><b>Virtual
                                Care for All</b></h5>
                            <p className="py-1 animated slideInLeft delay-2s">The technology to connect, expertise you can
                                trust and the power to improve health
                            </p>
                            <Link to="/about">
                                <button className="my-1 me-1 animated zoomIn delay-1s btn btn-lg btn-outline-secondary">Learn
                                    more</button>
                            </Link>
                            <Link to="/contact">
                                <button className="my-1 animated zoomIn delay-0.5s btn btn-lg btn-secondary">Contact us</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;