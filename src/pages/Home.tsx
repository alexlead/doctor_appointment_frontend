import * as React from 'react';
import HomeHeader from '../components/HomeHeader';
import RegistrationWindow from '../components/RegistrationWindow';
import LoginFormLaunch from '../components/LoginFormLaunch';
import Banner from '../components/banner/Banner'; 
import Footer from '../components/footer/Footer';
const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
