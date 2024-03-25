import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../assets/images/logo.png'
import LoginForm from './LoginForm';

interface ILoginWindowProps {
    show: boolean;
    onHideLogin: () => void;

}

const LoginWindow: React.FunctionComponent<ILoginWindowProps> = ({ show, onHideLogin }) => {
    return (
        <Modal show={show} onHide={onHideLogin} size="xl" aria-labelledby="contained-modal-title-vcenter">

            <Modal.Header closeButton>
                <img src={logo} className='app-logo dialog' alt="Doctor Appointment App" />
            </Modal.Header>

            <Modal.Body >
                <div className="container">
                    <div className="row my-3">

                        <div className="welcome-text col-6">

                            <h2 className="text-danger  my-3" >Why choose Us:</h2>
                            <p>Family Approach: We specialize in family medicine, providing comprehensive treatment for all members of your family.</p>
                            <p>Professionalism: Our doctors are highly qualified specialists with extensive experience in various medical fields.</p>
                            <p>Comfort and Convenience: “House Care Center” is designed to make you feel at home while receiving quality medical care.</p>
                        </div>

                        <div className="loginform col-6">
                            <h2 className="text-primary  my-3">Welcome back!</h2>
                            <LoginForm />

                            <p className='text-center my-4'>Don’t have an account? <span className="text-danger" >Sign Up</span></p>
                        </div>

                    </div>
                </div>
            </Modal.Body>

        </Modal>

    );
};

export default LoginWindow;
