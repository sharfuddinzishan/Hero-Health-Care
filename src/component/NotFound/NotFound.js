import React from 'react';

const NotFound = () => {
    return (
        <>
            <section class="section404 p-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 d-flex flex-column justify-content-center">
                            <h2 class="section-title lh-1 fs-1 pb-3 fw-normal text-start">
                                Sorry, we couldn't find what you're looking for.
                            </h2>
                            <p class="text-muted text-start">The page or post may have been removed.</p>
                            <button class="mt-3 d-block mx-auto btn btn-lg btn-outline-warning text-primary">Back
                                To Home
                                Page</button>
                        </div>
                        <div class="col-md-5">
                            <img src="https://www.getmaple.ca/site-content/uploads/2018/05/img_couch@2x.png"
                                class="w-100 img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;