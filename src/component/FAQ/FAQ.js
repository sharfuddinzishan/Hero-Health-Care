import React from 'react';

const FAQ = () => {
    return (
        <>
            <section className="faq-section p-5">
                <div className="container">
                    <div className="pb-3">
                        <h2 className="section-title lh-1 fs-1 pb-3 fw-normal text-center">Frequently <b>Asked Questions</b></h2>
                        <p className="text-muted fs-6 text-center">We are here to help. Below you will find answers to the questions
                            we get asked the most about our virtual care clinic and the services we offer.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src="https://gotodoctor.ca/wp-content/uploads/2021/05/illustration-1.svg" className="img-fluid"
                                alt="" />
                        </div>
                        <div className="col-md-9">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne" aria-expanded="false"
                                            aria-controls="flush-collapseOne">
                                            I missed a call from your virtual care clinic regarding my results. When will I
                                            receive a call back?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <small> Our healthcare provider will make a second attempt the same day before we
                                                close if time permits, or your call will be returned the next day. Please feel
                                                free to message us on our website using the online chat feature to follow up and
                                                we would be happy to assist you.</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                            aria-controls="flush-collapseTwo">
                                            I booked an appointment, but I have not received a call yet. When will the
                                            healthcare provider call?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <small>If you experience a delay, please do not worry. Our healthcare provider may
                                                be wrapping up with the patient(s) ahead of you. If you experience a longer than
                                                usual delay, please feel free to message us on our website using the online chat
                                                feature and we would be happy to provide you with an update on the estimated
                                                time of call.</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                                            aria-controls="flush-collapseThree">
                                            Is my information secure?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <small>
                                                Yes, all your personal and medical information will only be used by Meira Care
                                                Medical Providers and administrators. We encrypt all data using bank-level,
                                                modern state-of-the-art security to keep your personal information safe and
                                                secure.
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFour" aria-expanded="false"
                                            aria-controls="flush-collapseFour">
                                            How do I contact support?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <small>
                                                If you are experiencing any issues when setting up or connecting to your virtual
                                                appointment, please contact us via email at <code>support@meiracare.com</code>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default FAQ;