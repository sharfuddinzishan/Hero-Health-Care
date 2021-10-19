import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
const About = () => {
    return (
        <>
            <section class="about-section p-5">
                <div class="container">
                    <div class="p-3">
                        <h2 class="section-title lh-1 fs-1 pb-3 fw-normal text-center">About <b>Us</b></h2>
                        <h1 class="section-title lh-1 fs-1 pb-3 fw-bold text-center">
                            We enable patients to connect with BD clinicians
                        </h1>
                        <p class="text-muted fs-6 text-center">
                            At Virtually, we trully believe that all individuals should have the tools to flexibly manage their
                            own healthcare. We are a healthcare company first! Our deepest purpose as an organization is helping
                            support the health and wellbeing of Canadians..
                        </p>
                        <ul class="nav justify-content-end social-medie">
                            <li class="px-2">
                                <a href="#">
                                    <i class="fa fa-facebook"> </i>
                                </a>
                            </li>
                            <li class="px-2">
                                <a href="#">
                                    <i class="fa fa-youtube"> </i>
                                </a>
                            </li>
                            <li class="px-2">
                                <a href="#">
                                    <i class="fa fa-twitter"> </i>
                                </a>
                            </li>
                            <li class="px-2">
                                <a href="#">
                                    <i class="fa fa-google"> </i>
                                </a>
                            </li>

                        </ul>
                        <Link to="account" className="text-decoration-none">
                            <button class=" y-1 d-block mx-auto animated zoomIn delay-1s btn btn-lg btn-outline-secondary">
                                Register
                            </button>
                        </Link>
                    </div>
                    <hr class="my-5" />
                    <div class="row">
                        <div class="col-md-6">
                            <div class="p-3">
                                <h2 class="section-title lh-1 fs-1 pb-3 fw-normal">Who <b>We Are</b></h2>
                                <p class="text-muted fs-6 text-start">
                                    We provide care for about 15,000 patients living across London of all age groups with a
                                    variety of health conditions.Some of our patients have multiple and complex health
                                    problems.
                                    <br /><br />
                                    We welcome patients of all ages and genders regardless of how often you need to see us.We
                                    are regulated by the Care Quality Commission and received a rating of “Good” the last time
                                    we were inspected in 2018.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://virtually.healthcare/wp-content/uploads/2020/11/Group-770-449x456.png" alt="" />
                        </div>
                        <hr class="my-3" />
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://virtually.healthcare/wp-content/uploads/2020/11/Group-707-528x430.png" alt="" />
                        </div>
                        <div class="col-md-6">
                            <div class="p-3">
                                <h2 class="section-title lh-1 fs-1 pb-3 fw-normal">Our <strong>Clinicians</strong></h2>
                                <h1 class="section-title lh-1 fs-1 pb-3 fw-bold">
                                    A team of certified doctors
                                </h1>
                                <p class="text-muted fs-6 text-start">
                                    All our clinicians are registered with their appropriate professional body.For doctors this
                                    is the General Medical Council and for nurses it is the Nursing and Midwifery Council.
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr class="my-5" />
                    <div class="row g-5">
                        <div class="col-md-6">
                            <div class="single-aim shadow p-3">
                                <h4 class="lh-lg mt-1">Our Mission</h4>
                                <p class="fs-6 text-muted">
                                    <small>
                                        Our deepest purpose as an organization is helping support the health
                                        and wellbeing of Canadians by leveraging the use of our advanced virtual healthcare
                                        platform - a system designed to improve the lives of patients 7-days a week.
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="single-aim shadow p-3">
                                <h4 class="lh-lg mt-1">Our Essence</h4>
                                <p class="fs-6 text-muted">
                                    <small>
                                        At our core, Meira Care operates on empathy, compassion, inclusivity, and impact.We are
                                        about people and genuine care is provided by people and exists to help people.
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="single-aim shadow p-3">
                                <h4 class="lh-lg mt-1">Our Vision</h4>
                                <p class="fs-6 text-muted">
                                    <small>
                                        To shape the future of healthcare delivery by providing convenient and accessible
                                        healthcare to every Ontario resident.
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="single-aim shadow p-3">
                                <h4 class="lh-lg mt-1">Our Vibe</h4>
                                <p class="fs-6 text-muted">
                                    <small>
                                        Every day, we are inventing what is
                                        possible.We make connections.We solve problems.We serve as a partner that patients
                                        can trust.
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;