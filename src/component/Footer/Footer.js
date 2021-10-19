import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <section class="footer-background pb-3">
                <footer>
                    <div class="container-fluid pt-5">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="text-center mt-5">
                                    <i class="fas fa-phone-alt fa-5x bx-tada mb-3"></i>
                                    <span class="d-block fw-bold fs-4 lh-lg">if you are experiencing chest pain, shortness of
                                        breath or a life-threatening emergency, please call</span>
                                    <span class="d-block fw-bold display-3 lh-lg">9-1-1</span>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-lg-4 mb-4 mb-lg-0">
                                <a href="/" target="_blank" class="d-inline-block mb-5">
                                    <img src="https://i.ibb.co/HnBMB8F/hhc-logo.png"
                                        class="img-fluid" alt="footer-logo" width="220" />
                                </a>
                                <div class="mb-5 text-center text-lg-start">
                                    <h5 class="text-light mb-4 fw-normal">Hours of Operation</h5>
                                    <p class="text-light fs-6">Open 7-Days a Week </p>
                                    <p class="text-light fs-6">8:00am to 9:00pm (EST)</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-around justify-content-lg-none mb-3">
                                    <a class="me-2"
                                        href="/"
                                        target="_blank">
                                        <img src="https://meiracare.com/template/assets/images/app-store.webp"
                                            alt="App Store Download" width="100" />
                                    </a>
                                    <a href="/" target="_blank">
                                        <img src="https://meiracare.com/template/assets/images/google-play.webp"
                                            alt="Google Play Store Download" width="100" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-lg-5 mb-4 mb-lg-0">
                                <h4 class="text-light mb-4 fw-normal">Quick Links</h4>
                                <ul class="list-unstyled bx-ul">
                                    <li class="mb-2">
                                        <Link class="text-decoration-none text-light fs-6"
                                            to="/contact">
                                            <i class='bx bx-right-arrow bx-spin'></i>
                                            Contact
                                        </Link>
                                    </li>
                                    <li class="mb-2">
                                        <Link class="text-decoration-none text-light fs-6"
                                            to="/appointment">
                                            <i class='bx bx-right-arrow bx-spin'></i>
                                            Book Online Appointment
                                        </Link>
                                    </li>
                                    <li class="mb-2">
                                        <Link class="text-decoration-none text-light fs-6"
                                            to="/about">
                                            <i class='bx bx-right-arrow bx-spin'></i>
                                            About US
                                        </Link>
                                    </li>
                                    <li class="mb-2">
                                        <Link class="text-decoration-none text-light fs-6"
                                            to="/faq">
                                            <i class='bx bx-right-arrow bx-spin'></i>
                                            FAQ
                                        </Link>
                                    </li>
                                    <li class="mb-2">
                                        <Link class="text-decoration-none text-light fs-6"
                                            to="/doctors">
                                            <i class='bx bx-right-arrow bx-spin'></i>
                                            Our Doctors
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12 col-lg-3">
                                <h4 class="text-light mb-4 fw-normal">Contact</h4>
                                <ul class="list-unstyled bx-ul">
                                    <li class="mb-2">
                                        <a href="tel:0258050117" class="text-decoration-none text-light fs-6">
                                            <i class='bx bxs-phone bx-flip-horizontal bx-spin'></i>
                                            <span>(025) 805-0117</span>
                                        </a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="javascript:void(0)" class="text-decoration-none text-light fs-6">
                                            <i class='bx bxs-printer bx-flip-horizontal bx-spin'></i>
                                            <span>(025) 805-0116</span>
                                        </a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="mailto:support@meiracare.com" class="text-decoration-none text-light fs-6">
                                            <i class='bx bx-mail-send bx-flip-horizontal bx-spin'></i>
                                            <span>info@hero-healthcare.com</span>
                                        </a>
                                    </li>
                                </ul>
                                <div class="d-flex justify-content-around align-items-center mt-5">
                                    <a href="https://www.facebook.com/hhcare" target="_blank" class="" title="Facebook">
                                        <i class='bx bxl-facebook-circle bx-lg'></i>
                                    </a>
                                    <a href="https://twitter.com/hhcare" target="_blank" class="" title="Twitter">
                                        <i class='bx bxl-twitter bx-lg'></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/hhcare" target="_blank" class=""
                                        title="Linkedin">
                                        <i class='bx bxl-linkedin bx-lg'></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>

                <div class="">
                    <hr style={{ borderTop: '1px solid transparent' }} />
                    <div class="container">
                        <div class="d-md-flex justify-content-md-between align-items-center">
                            <div class="d-flex align-items-center fs-6">
                                <i class='bx bxs-copyright bx-tada'></i>
                                <small>Copyright 2021. All Rights Reserved</small>
                            </div>
                            <div>
                                <a class="text-light text-decoration-none fs-6" href="#">
                                    <small>Terms of Use </small>
                                </a> |
                                <a class="text-light text-decoration-none fs-6" href="#">
                                    <small>Privacy Policy</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;