import React from 'react';
import './Treatment.css';

const Treatment = () => {
    return (
        <>
            <section class="treatment-section p-5">
                <div class="overflow-hidden p-5">
                    <h2 class="section-title lh-1 pb-3 fw-normal text-center">
                        Doctors can treat many common conditions online.
                    </h2>
                    <p class="py-1 text-muted text-center fs-6">
                        <small>Our online physicians and specialists can treat
                            many
                            conditions, without you ever having to leave home.</small>
                    </p>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card shadow-lg h-100">
                            <img src="https://www.getmaple.ca/site-content/uploads/2021/02/hometile_bc.jpg"
                                class="card-img-top rounded-pill w-75 mx-auto mt-2 img-thumbnail" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Birth control pills</h5>
                                <p class="card-text fs-6">Birth control is a way to prevent pregnancy.There are many different
                                    methods of birth control, including hormonal contraception such as "the pill."</p>
                            </div>
                            {/* <div class="card-footer border-0 bg-white text-end">
                                <button class="btn btn-sm btn-outline-info text-secondary rounded-pill">More Details</button>
                            </div> */}
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-lg h-100">
                            <img src="https://www.getmaple.ca/site-content/uploads/2021/02/hometile_ed.jpg"
                                class="card-img-top rounded-pill w-75 mx-auto mt-2 img-thumbnail" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Erectile dysfunction</h5>
                                <p class="card-text fs-6">ED is known as the inability to maintain an erection sufficient for
                                    satisfying sexual activity.</p>
                            </div>
                            {/* <div class="card-footer border-0 bg-white text-end">
                                <button class="btn btn-sm btn-outline-info text-secondary rounded-pill">More Details</button>
                            </div> */}
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-lg h-100">
                            <img src="https://www.getmaple.ca/site-content/uploads/2021/02/hometile_ac.jpg"
                                class="card-img-top rounded-pill w-75 mx-auto mt-2 img-thumbnail" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Acne</h5>
                                <p class="card-text fs-6">Acne is a very common skin condition that will affect most people at
                                    some
                                    point throughout their lives.It can appear as whiteheads, blackheads, papules, pustules, or
                                    nodules further beneath the skin.</p>
                            </div>
                            {/* <div class="card-footer border-0 bg-white text-end">
                                <button class="btn btn-sm btn-outline-info text-secondary rounded-pill">More Details</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <button class="mt-4 animated zoomIn delay-1s btn btn-lg btn-outline-secondary d-block mx-auto">
                    All Treatements
                </button> */}
            </section>
        </>
    );
};

export default Treatment;