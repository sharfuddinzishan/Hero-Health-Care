import React from 'react';
import './Doctors.css';
import { useTeam } from './../../Hooks/useTeam';
import Team from '../Team/Team';

const Doctors = () => {
    const [teams] = useTeam();

    return (
        <>
            <section className="doctors p-5">
                <div className="container">
                    <div className="p-3">
                        <h3 className="section-title lh-1 fs-1 pb-3 fw-normal text-center">Our <b>Doctors</b></h3>
                    </div>
                    <div className="row">
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