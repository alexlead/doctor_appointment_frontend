import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../assets/images/logo.png'
import LoginForm from './LoginForm';

interface ILoginWindowProps {
    show: boolean;
    onHide: ()=>void;

}

const LoginWindow: React.FunctionComponent<ILoginWindowProps> = ({show, onHide}) => {
  return (
<Modal show={show} onHide={onHide} size="xl" aria-labelledby="contained-modal-title-vcenter">

        <Modal.Header closeButton>
        <img src={logo} className='app-logo dialog' alt="Doctor Appointment App"  />
        </Modal.Header>

        <Modal.Body >
            <div className="container">
            <div className="row">

<div className="welcome-text col-6">

    <h2>Why choose Us:</h2>
    <p>Family Approach: We specialize in family medicine, providing comprehensive treatment for all members of your family.</p>
    <p>Professionalism: Our doctors are highly qualified specialists with extensive experience in various medical fields.</p>
    <p>Comfort and Convenience: “House Care Center” is designed to make you feel at home while receiving quality medical care.</p>
</div>

<div className="loginform col-6">
<h2>Welcome back!</h2>
    <LoginForm />

    <p>Don’t have an account? Sign Up</p>
            </div>

            </div>
            </div>
        </Modal.Body>

      </Modal>

  );
};

export default LoginWindow;
