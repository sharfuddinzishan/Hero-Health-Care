import React from 'react';
import './Doctors.css';
import { useTeam } from './../../Hooks/useTeam';
import Team from '../Team/Team';

const Doctors = () => {
    const [teams] = useTeam();

    return (
        <>
            <section class="doctors p-5">
                <div class="container">
                    <div class="p-3">
                        <h3 class="section-title lh-1 fs-1 pb-3 fw-normal text-center">Our <b>Doctors</b></h3>
                    </div>
                    <div class="row">
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