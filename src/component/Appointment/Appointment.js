import React from 'react';

const Appointment = () => {
    return (
        <>
            <section class="appointment-section p-5">
                <div class="container">
                    <h2 class="section-title lh-1 fs-1 pb-3 fw-normal text-center">Make an <b>Appointment</b></h2>
                    <p class="fs-6 text-muted">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga
                        eum quidem. Sit sint
                        consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                        fugiat sit in iste officiis commodi quidem hic quas.</p>

                    <form action="" method="" role="form" class="">
                        <div class="row">
                            <div class="col-md-4 form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"
                                    data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"
                                    data-rule="email" data-msg="Please enter a valid email" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-md-4 form-group mt-3 mt-md-0">
                                <input type="tel" class="form-control" name="phone" id="phone" placeholder="Your Phone"
                                    data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 form-group mt-3">
                                <input type="datetime" name="date" class="form-control datepicker" id="date"
                                    placeholder="Appointment Date" data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>
                            <div class="col-md-4 form-group mt-3">
                                <select name="department" id="department" class="form-select">
                                    <option value="">Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </select>
                                <div class="validate"></div>
                            </div>
                            <div class="col-md-4 form-group mt-3">
                                <select name="doctor" id="doctor" class="form-select">
                                    <option value="">Select Doctor</option>
                                    <option value="Doctor 1">Doctor 1</option>
                                    <option value="Doctor 2">Doctor 2</option>
                                    <option value="Doctor 3">Doctor 3</option>
                                </select>
                                <div class="validate"></div>
                            </div>
                        </div>

                        <div class="form-group mt-3">
                            <textarea class="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                            <div class="validate"></div>
                        </div>
                        <button class="mt-3 d-block mx-auto btn btn-lg btn-outline-secondary" type="submit">Make an
                            Appointment</button>
                    </form>

                </div>
            </section>
        </>
    );
};

export default Appointment;