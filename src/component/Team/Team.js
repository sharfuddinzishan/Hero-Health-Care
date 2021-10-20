import React from 'react';

const Team = (props) => {
    // Destructuring team, picture, contact 
    const { name, role, picture, contact, } = props.team || {}
    const { thumbImage: thumbPic } = picture || {}
    const { mobile, email, socialLink: { facebook, twitter, linkedin } } = contact || {}
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={thumbPic} className="card-img-top img-fluid w-50 mx-auto p-2" alt="..." />
                    <div className="card-body">
                        <small className="card-title">{name}</small><br />
                        <small className="text-center fw-bold d-inline-block mb-3">{role}</small>
                        <p className="fs-6 text-muted">{email[0]}</p>
                        <p className="fs-6 text-muted">{mobile[0]}</p>
                        <div className="social">
                            {
                                twitter && <a className=" me-1 text-decoration-none" href={twitter} target="_blank" rel="noreferrer">
                                    <i className='bx bxl-twitter bx-tada'></i></a>
                            }
                            {
                                facebook && <a className="me-1 text-decoration-none" href={facebook} target="_blank" rel="noreferrer">
                                    <i className='bx bxl-facebook-circle bx-tada'></i></a>
                            }
                            {
                                linkedin && <a className="me-1 text-decoration-none" href={linkedin} target="_blank" rel="noreferrer">
                                    <i className='bx bxl-linkedin bx-tada'></i></a>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Team;