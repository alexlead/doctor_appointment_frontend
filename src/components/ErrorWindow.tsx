import React from 'react';
import { Modal } from 'react-bootstrap';
import logo from '../assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, selectModal, setErrorMessage } from '../store/slices/modalSlice';

interface IErrorWindowProps {

}

const ErrorWindow: React.FunctionComponent<IErrorWindowProps> = (props) => {

    const errorWindowStatus = useSelector(selectModal).modal === "error";
    const errorMessageState = useSelector(selectModal).errorMessage;

    const dispatch = useDispatch();

    const hideLoginWindow = () => {

        dispatch(setErrorMessage(""));
        dispatch(closeModal());
    }

    return (
        <Modal show={errorWindowStatus} onHide={hideLoginWindow} size="xl" aria-labelledby="contained-modal-title-vcenter">

            <Modal.Header closeButton>
                <img src={logo} className='app-logo dialog' alt="Doctor Appointment App" />
            </Modal.Header>

            <Modal.Body >
                <div className="container">
                    <div className="row my-3">

                        <div className="error-text col">

                            <h2 className="text-danger  my-3" >Error:</h2>
                            <p className='text-danger'>{errorMessageState}</p>

                        </div>



                    </div>
                </div>
            </Modal.Body>

        </Modal>
    );
};

export default ErrorWindow;
