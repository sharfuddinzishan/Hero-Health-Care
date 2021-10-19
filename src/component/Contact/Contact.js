import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="contact bg-light py-5">
                <div className="container">
                    <div className="pb-3">
                        <h2 className="section-title lh-1 fs-1 pb-3 fw-normal text-center">Get In <b>Touch</b> With Us</h2>
                        <p className="text-muted fs-6 text-center">We're here to help. Send your query or question below and provide
                            us with as much details as possible.
                            We will answer your query as soon as possible. We aim to reply to your query within 24 hours.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column flex-start">
                            <div className="">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.02320989354!2d91.81987779827575!3d22.358885690328034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd890077a1037%3A0x94257c5a16e348c5!2sCentral%20Plaza!5e0!3m2!1sen!2sbd!4v1634591053097!5m2!1sen!2sbd"
                                    width="400" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div className="info mt-2 d-flex flex-column">
                                <div className="address d-flex align-items-center">
                                    <i className='bx bx-current-location bx-tada bx-lg'></i>
                                    <div className=" d-flex flex-column">
                                        <h4>Location:</h4>
                                        <p>S. Alam Center (3th floor 48 GEC C/A, Chittagong, 4100</p>
                                    </div>
                                </div>
                                <div className="email d-flex align-items-center">
                                    <i className='bx bx-envelope bx-tada bx-lg'></i>
                                    <div className="d-flex flex-column">
                                        <h4>Email:</h4>
                                        <p>info@hero-healthcare.com</p>
                                    </div>
                                </div>

                                <div className="phone d-flex align-items-center">
                                    <i className='bx bx-phone bx-tada bx-lg'></i>
                                    <div className="d-flex flex-column">
                                        <h4>Call:</h4>
                                        <p>(025) 805-0116</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <form action="" className="row g-3">
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label col-form-label-sm">Email</label>
                                    <input type="email" className="form-control form-control-sm" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label col-form-label-sm">Password</label>
                                    <input type="password" className="form-control form-control-sm" id="inputPassword4" />
                                </div>
                                <div className="col-12">
                                    <label for="inputMobile" className="form-label col-form-label-sm">Mobile</label>
                                    <input type="phone" className="form-control form-control-sm" id="inputMobile" />
                                </div>
                                <div className="col-12">
                                    <label for="inputAddress" className="form-label col-form-label-sm">Address</label>
                                    <input type="text" className="form-control form-control-sm" id="inputAddress"
                                        placeholder="1234 Main St" />
                                </div>
                                <div className="col-12">
                                    <label for="inputAddress2" className="form-label col-form-label-sm">Address 2</label>
                                    <input type="text" className="form-control form-control-sm" id="inputAddress2"
                                        placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputCity" className="form-label col-form-label-sm">City</label>
                                    <input type="text" className="form-control form-control-sm" id="inputCity" />
                                </div>
                                <div className="col-md-2">
                                    <label for="inputZip" className="form-label col-form-label-sm">Zip</label>
                                    <input type="text" className="form-control form-control-sm" id="inputZip" />
                                </div>
                                <div className="col-md-12">
                                    <textarea className="textarea form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-labelm" for="gridCheck">
                                            Subscribe To Newsletter
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="my-1 animated zoomIn delay-1s btn btn-lg btn-outline-secondary">
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