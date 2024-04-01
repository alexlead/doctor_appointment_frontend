import React from 'react';
import { Button } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { openModal } from '../../store/slices/modalSlice';
const Banner = () => {
  

  const dispatch = useDispatch();

  const showModalLogin = () => {
      dispatch(openModal("login"))
  }



  return (
    <div className="appcard-banner">
      <div className="banner-content">
        <h2>Welcome to House Care Center - Your Home for Family Wellness!</h2>
        <p>Our specialists are ready to help. Contact us now.</p>
        <Button variant="primary" onClick={showModalLogin}>Sign In</Button>
      </div>
  
    </div>
  );
};

export default Banner;


