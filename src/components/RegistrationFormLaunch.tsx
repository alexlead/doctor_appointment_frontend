import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import RegistrationWindow from './RegistrationWindow';
interface IRegistrationFormLaunchProps {
}

const RegistrationFormLaunch: React.FunctionComponent<IRegistrationFormLaunchProps> = () => {
    const [modalShow, setModalShow] = useState(false);

    const hideModal = () => {
        setModalShow(false)
    }
    return (
        <>
            <div className="p-3 text-danger" onClick={() => setModalShow(true)} style={{ "cursor": "pointer" }}>
                <strong>Sign Up</strong>
            </div>

            <RegistrationWindow show={modalShow} onHide={hideModal} />

        </>
    );
};

export default RegistrationFormLaunch;
