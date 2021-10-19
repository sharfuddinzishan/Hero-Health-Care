import React from 'react';

const Team = (props) => {
    const { name, year_of_experience: experience, role, picture, contact, } = props.team || {}
    const { thumbImage: thumbPic } = picture || {}
    const { mobile, email, socialLink: { facebook, twitter, linkedin } } = contact || {}
    return (
        <div className="col-lg-6">
            <div className="member d-flex align-items-start">
                <div className="pic"><img src={thumbPic} className="img-fluid" alt={name || "No Profile Picture Available"} /></div>
                <div className="member-info">
                    <h4>{name}</h4>
                    <span>{role}</span>
                    <div className="social">
                        {
                            twitter && <a className="text-decoration-none" href="" target="_blank">
                                <i className='bx bxl-twitter bx-tada'></i></a>
                        }
                        {
                            facebook && <a className="text-decoration-none" href="" target="_blank">
                                <i className='bx bxl-facebook-circle bx-tada'></i></a>
                        }
                        {
                            linkedin && <a className="text-decoration-none" href="" target="_blank">
                                <i className='bx bxl-linkedin bx-tada'></i></a>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;