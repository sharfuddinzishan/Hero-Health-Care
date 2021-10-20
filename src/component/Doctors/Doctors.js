import React from 'react';
import './Doctors.css';
import { useTeam } from './../../Hooks/useTeam';
import Team from '../Team/Team';

const Doctors = () => {
    const [teams] = useTeam();

    return (
        <>
            <section className=" p-5">
                <div className="container">
                    <div className="p-3">
                        <h3 className="section-title lh-1 fs-1 pb-3 fw-normal text-center">Our <b>Doctors</b></h3>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            teams?.map(team => <Team key={team.id} team={team}></Team>)
                        }
                    </div>

                </div>
            </section>
        </>
    );
};

export default Doctors;