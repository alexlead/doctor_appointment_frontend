import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/images/logo.png'
import LoginFormLaunch from './LoginFormLaunch';
import RegistrationFormLaunch from './RegistrationFormLaunch';
import LoginWindow from './LoginWindow';
import RegistrationWindow from './RegistrationWindow';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/slices/userSlice';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  const user = useSelector(selectUser);

  return (
    <div className="navbar navbar-expand-lg p-0">
      <LoginWindow />
      <RegistrationWindow />

      <div className="container">

        <Navbar className='p-0 navbar-collapse collapse' >
          <Container>
            <Navbar.Brand href="/"><img src={logo} className='app-logo' alt="Doctor Appointment App" /></Navbar.Brand>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {(user.accessToken && user.permissions) ? (
                  <Link to="/dashboard">
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <LoginFormLaunch />
                    <RegistrationFormLaunch />
                  </>
                )}
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>




      </div>

    </div>
  );
};

export default HomeHeader;
