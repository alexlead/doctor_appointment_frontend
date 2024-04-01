import React from 'react';
import Modal from 'react-bootstrap/Modal';
import logo from '../assets/images/logo.png'
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal, selectModal } from '../store/slices/modalSlice';

interface ILoginWindowProps {
}

const LoginWindow: React.FunctionComponent<ILoginWindowProps> = (props) => {

    const loginWindowStatus = useSelector(selectModal).modal === "login";

    const dispatch = useDispatch();

    const hideLoginWindow = () => {
        dispatch(closeModal());
    }

    const openRegistrationWindow = () => {
        dispatch(openModal("registration"));
    }


    return (
        <Modal show={loginWindowStatus} onHide={hideLoginWindow} size="xl" aria-labelledby="contained-modal-title-vcenter">

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

                            <p className='text-center my-4'>Don’t have an account? <span className="text-danger" style={{ "cursor": "pointer" }} onClick={openRegistrationWindow}>Sign Up</span></p>
                        </div>

                    </div>
                </div>
            </Modal.Body>

        </Modal>

    );
};

export default LoginWindow;
