import React from 'react';
import { useServicesDetails } from '../../Hooks/useServicesDetails';
import './ServiceDetails.css'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    // get serviceID from url 
    const { serviceID } = useParams();
    const [services] = useServicesDetails();
    const getSingleServiceInfo = services?.find(service => service._id === Number(serviceID))
    const { title, info, description, service_image: serviceImage } = getSingleServiceInfo || {}

    return (
        <>
            <div className="container p-5">

                <h2 className="section-title lh-1 fs-1 pb-3 fw-normal text-center">{title}</h2>
                <p className="text-muted text-center pb-5">{info}</p>
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid" src={serviceImage} alt="" /><br />
                    </div>
                    <div className="col-md-8">
                        <h3 className="my-3">Service Description</h3>
                        {
                            description?.map((pd, index) => <p key={index} className="text-info fw-bold">{pd}</p>)
                        }
                        <Link className="text-decoration-none" to="/appointment"><button className="btn btn-lg btn-primary mt-2 d-block mx-auto">Appointment To Get Service</button></Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ServiceDetails;