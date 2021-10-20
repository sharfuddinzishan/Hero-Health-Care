import React from 'react';
import './Services.css';
import { useServices } from './../../Hooks/useServices';
import Service from '../Service/Service';
const Services = () => {
    // Retrived All Services from JSON file with custom hook useServices
    const [services] = useServices();
    return (
        <>
            <section className="services-section">
                <div className="container">
                    <div className="p-5">
                        <h2 className="section-title lh-1 fs-1 pb-3 fw-normal text-center">Emergency <b>Health Service</b></h2>
                        <h1 className="section-title lh-1 fs-2 pb-3 fw-bold text-center text-uppercase">
                            Fast, Easy and Reliable
                        </h1>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                        {
                            services.map(service => <Service key={service._id} service={service}></Service>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;