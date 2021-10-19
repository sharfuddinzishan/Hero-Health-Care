import React from 'react';
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
                                <a href="https://meiracare.com" class="d-inline-block mb-5">
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
                            <div class="col-12 col-lg-5 mb-4 mb-lg-0">
                                <h4 class="text-light mb-4 fw-normal">Quick Links</h4>
                                <ul class="list-unstyled bx-ul">
                                    <li class="mb-2">
                                        <a class="text-decoration-none text-light fs-6"
                                            href="https://meiracare.com/how-it-works">
                                            <i class='bx bx-right-arrow bx-spin'></i>
                                            How It Works
                                        </a>
                                    </li>
                                    <li class="mb-2">
                                        <a class="text-decoration-none text-light fs-6"
                                            href="https://meiracare.com/book-doctor-appointment-online">
                                            <i class='bx bx-right-arrow bx-spin'></i>
                                            Book Online Appointment
                                        </a>
                                    </li>
                                    <li class="mb-2">
                                        <a class="text-decoration-none text-light fs-6"
                                            href="https://meiracare.com/medication-prescription-refill-online">
                                            <i class='bx bx-right-arrow bx-spin'></i>
                                            Online Prescriptions &amp; Refills
                                        </a>
                                    </li>
                                    <li class="mb-2">
                                        <a class="text-decoration-none text-light fs-6"
                                            href="https://meiracare.com/lab-results-requisitions-online">
                                            <i class='bx bx-right-arrow bx-spin'></i>
                                            Lab Results &amp; Requisitions
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div class="col-12 col-lg-3">
                                <h4 class="text-light mb-4 fw-normal">Contact</h4>
                                <ul class="list-unstyled bx-ul">
                                    <li class="mb-2">
                                        <a href="tel:8772510077" class="text-decoration-none text-light fs-6">
                                            <i class='bx bxs-phone bx-flip-horizontal bx-spin'></i>
                                            <span>877-251-0077</span>
                                        </a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="javascript:void(0)" class="text-decoration-none text-light fs-6">
                                            <i class='bx bxs-printer bx-flip-horizontal bx-spin'></i>
                                            <span>888-444-0222</span>
                                        </a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="mailto:support@meiracare.com" class="text-decoration-none text-light fs-6">
                                            <i class='bx bx-mail-send bx-flip-horizontal bx-spin'></i>
                                            <span>support@meiracare.com</span>
                                        </a>
                                    </li>
                                </ul>
                                <div class="d-flex justify-content-around align-items-center mt-5">
                                    <a href="https://www.facebook.com/MeiraCare" target="_blank" class="" title="Facebook">
                                        <i class='bx bxl-facebook-circle bx-lg'></i>
                                    </a>
                                    <a href="https://twitter.com/MeiraCare" target="_blank" class="" title="Twitter">
                                        <i class='bx bxl-twitter bx-lg'></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/65356174" target="_blank" class=""
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
                                <a class="text-light text-decoration-none fs-6" href="https://meiracare.com/terms-of-use">
                                    <small>Terms of Use </small>
                                </a> |
                                <a class="text-light text-decoration-none fs-6" href="https://meiracare.com/privacy-policy">
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