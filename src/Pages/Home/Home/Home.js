import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import HomeBlog from '../HomeBlog/HomeBlog';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <HomeBlog></HomeBlog>
            <AppointmentBanner></AppointmentBanner>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;