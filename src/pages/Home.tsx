import React from 'react';
import HomeHeader from '../components/HomeHeader';
import RegistrationWindow from '../components/RegistrationWindow';
import LoginFormLaunch from '../components/LoginFormLaunch';
import Banner from '../components/banner/Banner'; 
import Footer from '../components/footer/Footer';
import MainPageTestimonials from '../components/testimonials/MainPageTestimonials';
import MainPageDoctors from '../components/doctors/MainPageDoctors';

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Banner />
      <MainPageDoctors />
      <MainPageTestimonials /> 
      <Footer />
    </div>
  );
};

export default Home;

