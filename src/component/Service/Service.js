import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id: serviceID, title, info, service_image: serviceImg } = props.service || {}
    // Generate ServiceDetails URL 
    const detailsPagePath = `/services/${serviceID}`
    return (
        <div class="col">
            <div class="card h-100">
                <img src="https://bd.care/public/uploads/service_photo/1563095624_5d2af24872634.jpeg"
                    class="card-img-top img-fluid w-50" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text fs-6">
                        {info}
                    </p>
                </div>
                <div class="card-footer border-0 bg-white text-end">
                    <Link to={detailsPagePath}>
                        <button class="btn btn-sm btn-outline-info text-secondary rounded-pill">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;