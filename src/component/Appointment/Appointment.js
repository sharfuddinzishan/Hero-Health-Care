import React from 'react';

const Appointment = () => {
    return (
        <>
            <section className="appointment-section p-5">
                <div className="container">
                    <h2 className="section-title lh-1 fs-1 pb-3 fw-normal text-center">Make an <b>Appointment</b> To Get Service</h2>
                    <form action="" method="">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                    data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                    data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone"
                                    data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input type="datetime" name="date" className="form-control datepicker" id="date"
                                    placeholder="Appointment Date" data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select name="department" id="department" className="form-select">
                                    <option value="">Select Services</option>
                                    <option value="service1">Oxygen</option>
                                    <option value="service2">Nursing for Home</option>
                                    <option value="service3">Sample Collection</option>
                                    <option value="service4">Order Ambulance</option>
                                    <option value="service4">Medicine Supply</option>
                                    <option value="service4">Acne</option>
                                    <option value="service4">Others</option>
                                </select>
                                <div className="validate"></div>
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                            <div className="validate"></div>
                        </div>
                        <button className="mt-3 d-block mx-auto btn btn-lg btn-outline-secondary" type="submit">Request Service</button>
                    </form>

                    <div className="row mt-4">
                        <div className="col">
                            <div className="mx-auto fs-6">
                                <p><strong>What do you need ?</strong></p>

                                <ul>
                                    <li>Internet access.</li>
                                    <li>Smart Phone or Computer.</li>
                                    <li>For WhatsApp : For Android Smart Phones: Install WhatsApp from Google play store. For iPhone install WhatsApp from Apple App Store. A WhatsApp number will be given after the appointment is confirmed.</li>
                                </ul>

                                <p><strong>Easy Steps to do a Tele/Video Consultation from Anywhere</strong></p>

                                <ul>
                                    <li>For telemedicine appointment you can call 10666 or 02 22 22 62 466</li>
                                    <li>After the initial appointment slot booking, you will need to pay in following ways:</li>
                                </ul>

                                <p>- By bKash mentioning his/her patient ID to 01914001264 (UHL Billing bKash Number)</p>

                                <p>- By credit card, debit card, mobile banking, internet banking from payment.uhlbd.com</p>

                                <ul>
                                    <li>Need to call to verify the payment. Unless payment is made 5-6 hours before telemedicine appointment time, appointment will not be confirmed</li>
                                    <li>Patient can send his/her Investigations prior to TM for doctor assessment to appointment@uhlbd.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Appointment;