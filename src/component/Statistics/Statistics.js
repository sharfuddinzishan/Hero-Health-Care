import React from 'react';
import './Statistics.css'
const Statistics = () => {
    return (
        <>
            <section className="statistic-section p-5">
                <h5 className="section-title lh-1 fs-1 pb-3 fw-normal text-center text-light">The&nbsp;<b>global
                    leader</b>&nbsp;in
                    virtual care<br /></h5>
                <div className="row g-3 mx-auto px-2">
                    <div className="col-6 col-md-3 item d-flex flex-column align-items-start">
                        <span className="fw-bold display-1 lh-1 text-success">+</span>
                        <span className="fw-bold fs-3 lh-1">12,000</span>
                        <span className="fw-bold fs-5 lh-1">clients</span>
                    </div>

                    <div className="col-6 col-md-3 item d-flex flex-column align-items-start">
                        <span className="fw-bold display-1 lh-1 text-success">+</span>
                        <span className="fw-bold fs-3 lh-1">4,400</span>
                        <span className="fw-bold fs-5 lh-1">employees</span>
                    </div>

                    <div className="col-6 col-md-3 item d-flex flex-column align-items-start">
                        <span className="fw-bold display-1 lh-1 text-success">+</span>
                        <span className="fw-bold fs-3 lh-1">51.5M</span>
                        <span className="fw-bold fs-5 lh-1">U.S. paid members</span>
                    </div>

                    <div className="col-6 col-md-3 item d-flex flex-column align-items-start">
                        <span className="fw-bold display-1 lh-1 text-success">+</span>
                        <span className="fw-bold fs-3 lh-1">10.5M</span>
                        <span className="fw-bold fs-5 lh-1">medical visits delivered in 2020</span>
                    </div>
                </div>
                <span className="bg"></span>
            </section>
        </>
    );
};

export default Statistics;