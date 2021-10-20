import React from 'react';
import './Treatment.css';

const Treatment = () => {
    return (
        <>
            <section className="treatment-section p-5">
                <div className="overflow-hidden p-5">
                    <h2 className="section-title lh-1 pb-3 fw-normal text-center">
                        Doctors can treat many common conditions online.
                    </h2>
                    <p className="py-1 text-muted text-center fs-6">
                        <small>Our online physicians and specialists can treat
                            many
                            conditions, without you ever having to leave home.</small>
                    </p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card shadow-lg h-100">
                            <img src="https://www.getmaple.ca/site-content/uploads/2021/02/hometile_bc.jpg"
                                className="card-img-top rounded-pill w-75 mx-auto mt-2 img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Birth control pills</h5>
                                <p className="card-text fs-6">Birth control is a way to prevent pregnancy.There are many different
                                    methods of birth control, including hormonal contraception such as "the pill."</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg h-100">
                            <img src="https://www.getmaple.ca/site-content/uploads/2021/02/hometile_ed.jpg"
                                className="card-img-top rounded-pill w-75 mx-auto mt-2 img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Erectile dysfunction</h5>
                                <p className="card-text fs-6">ED is known as the inability to maintain an erection sufficient for
                                    satisfying sexual activity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg h-100">
                            <img src="https://www.getmaple.ca/site-content/uploads/2021/02/hometile_ac.jpg"
                                className="card-img-top rounded-pill w-75 mx-auto mt-2 img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Acne</h5>
                                <p className="card-text fs-6">Acne is a very common skin condition that will affect most people at
                                    some
                                    point throughout their lives.It can appear as whiteheads, blackheads, papules, pustules, or
                                    nodules further beneath the skin.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="mt-4 animated zoomIn delay-1s btn btn-lg btn-outline-secondary d-block mx-auto">
                    All Treatements
                </button> */}
            </section>
        </>
    );
};

export default Treatment;