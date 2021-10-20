import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id: serviceID, title, info, service_image: serviceImg } = props.service || {}
    // Generate ServiceDetails URL 
    const detailsPagePath = `/services/${serviceID}`
    return (
        <div className="col">
            <div className="card h-100">
                <img src={serviceImg}
                    className="card-img-top img-fluid w-50" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{title.toLowerCase()}</h5>
                    <p className="card-text fs-6">
                        {info}
                    </p>
                </div>
                <div className="card-footer border-0 bg-white text-end">
                    <Link to={detailsPagePath}>
                        <button className="btn btn-sm btn-outline-info text-secondary rounded-pill">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;