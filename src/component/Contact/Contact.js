import React from 'react';

const Contact = () => {
    return (
        <>
            <section class="contact bg-light py-5">
                <div class="container">
                    <div class="pb-3">
                        <h2 class="section-title lh-1 fs-1 pb-3 fw-normal text-center">Get In <b>Touch</b> With Us</h2>
                        <p class="text-muted fs-6 text-center">We're here to help. Send your query or question below and provide
                            us with as much details as possible.
                            We will answer your query as soon as possible. We aim to reply to your query within 24 hours.
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-md-6 d-flex flex-column flex-start">
                            <div class="">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.02320989354!2d91.81987779827575!3d22.358885690328034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd890077a1037%3A0x94257c5a16e348c5!2sCentral%20Plaza!5e0!3m2!1sen!2sbd!4v1634591053097!5m2!1sen!2sbd"
                                    width="400" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div class="info mt-2 d-flex flex-column">
                                <div class="address d-flex align-items-center">
                                    <i class='bx bx-current-location bx-tada bx-lg'></i>
                                    <div class=" d-flex flex-column">
                                        <h4>Location:</h4>
                                        <p>S. Alam Center (3th floor 48 GEC C/A, Chittagong, 4100</p>
                                    </div>
                                </div>
                                <div class="email d-flex align-items-center">
                                    <i class='bx bx-envelope bx-tada bx-lg'></i>
                                    <div class="d-flex flex-column">
                                        <h4>Email:</h4>
                                        <p>info@hero-healthcare.com</p>
                                    </div>
                                </div>

                                <div class="phone d-flex align-items-center">
                                    <i class='bx bx-phone bx-tada bx-lg'></i>
                                    <div class="d-flex flex-column">
                                        <h4>Call:</h4>
                                        <p>(025) 805-0116</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-6">
                            <form action="" class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label col-form-label-sm">Email</label>
                                    <input type="email" class="form-control form-control-sm" id="inputEmail4" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label col-form-label-sm">Password</label>
                                    <input type="password" class="form-control form-control-sm" id="inputPassword4" />
                                </div>
                                <div class="col-12">
                                    <label for="inputMobile" class="form-label col-form-label-sm">Mobile</label>
                                    <input type="phone" class="form-control form-control-sm" id="inputMobile" />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label col-form-label-sm">Address</label>
                                    <input type="text" class="form-control form-control-sm" id="inputAddress"
                                        placeholder="1234 Main St" />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress2" class="form-label col-form-label-sm">Address 2</label>
                                    <input type="text" class="form-control form-control-sm" id="inputAddress2"
                                        placeholder="Apartment, studio, or floor" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label col-form-label-sm">City</label>
                                    <input type="text" class="form-control form-control-sm" id="inputCity" />
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label col-form-label-sm">Zip</label>
                                    <input type="text" class="form-control form-control-sm" id="inputZip" />
                                </div>
                                <div class="col-md-12">
                                    <textarea class="textarea form-control" placeholder="Message"></textarea>
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                                        <label class="form-check-labelm" for="gridCheck">
                                            Subscribe To Newsletter
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="my-1 animated zoomIn delay-1s btn btn-lg btn-outline-secondary">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;