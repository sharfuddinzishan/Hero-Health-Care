import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FAQ from '../FAQ/FAQ';
import OurSolutions from '../OurSolution/OurSolutions';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Statistics from '../Statistics/Statistics';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Statistics></Statistics>
            <Services></Services>
            <Doctors></Doctors>
            <Treatment></Treatment>
            <OurSolutions></OurSolutions>
            <Review></Review>
            <About></About>
            <Contact></Contact>
            <FAQ></FAQ>
        </>
    );
};

export default Home;