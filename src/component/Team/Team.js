import React from 'react';

const Team = (props) => {
    const { name, year_of_experience: experience, role, picture, contact, } = props.team || {}
    const { thumbImage: thumbPic } = picture || {}
    const { mobile, email, socialLink: { facebook, twitter, linkedin } } = contact || {}
    return (
        <div class="col-lg-6">
            <div class="member d-flex align-items-start">
                <div class="pic"><img src={thumbPic} class="img-fluid" alt={name || "No Profile Picture Available"} /></div>
                <div class="member-info">
                    <h4>{name}</h4>
                    <span>{role}</span>
                    <div class="social">
                        {
                            twitter && <a class="text-decoration-none" href="" target="_blank">
                                <i class='bx bxl-twitter bx-tada'></i></a>
                        }
                        {
                            facebook && <a class="text-decoration-none" href="" target="_blank">
                                <i class='bx bxl-facebook-circle bx-tada'></i></a>
                        }
                        {
                            linkedin && <a class="text-decoration-none" href="" target="_blank">
                                <i class='bx bxl-linkedin bx-tada'></i></a>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;