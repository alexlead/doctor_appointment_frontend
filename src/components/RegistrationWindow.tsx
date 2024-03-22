import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import logo from '../assets/images/logo.png'
import patient from '../assets/images/patientvisit.png'
import RegistrationForm from './RegistrationForm';
interface IRegistrationWindowProps {
    show: boolean;
    onHide: ()=>void;
}

const RegistrationWindow: React.FunctionComponent<IRegistrationWindowProps> = ({show, onHide}) => {
  return (
    <Modal show={show} onHide={onHide} size="xl" aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
        <img src={logo} className='app-logo dialog' alt="Doctor Appointment App"  />
        </Modal.Header>

        <Modal.Body >
            <div className="container">
            <div className="row">

<div className="welcome-registration-text col-6">

    <h2>Greetings to you at our family medical clinic!</h2>
    <p>Greetings to you at our family medical clinic, where your health is our top priority. </p>
    <p>At “House Care Center”, we offer high-quality medical services tailored to your entire family.</p>
   
        <img src={patient}  alt="Doctor Appointment Patient Visit"  />
</div>

<div className="loginform col-6">
<h2>Create your account</h2>
    <p>It’s free and easy</p>
    <RegistrationForm />

    <p>Already have an account? Sign In</p>
            </div>

            </div>
            </div>
        </Modal.Body>


      </Modal>

  );
};

export default RegistrationWindow;
