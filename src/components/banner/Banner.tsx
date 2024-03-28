import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import LoginWindow from '../LoginWindow';
const Banner = () => {
  const [modalShow, setModalShow] = useState(false);

  const showModalLogin = () => {
    setModalShow(true);
  };

  return (
    <div className="appcard-banner">
      <div className="banner-content">
        <h2>Welcome to House Care Center - Your Home for Family Wellness!</h2>
        <p>Our specialists are ready to help. Contact us now.</p>
        <Button variant="primary" onClick={showModalLogin}>Sign In</Button>
      </div>
      <LoginWindow show={modalShow} onHideLogin={() => setModalShow(false)} />
    </div>
  );
};

export default Banner;


