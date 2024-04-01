import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import RegistrationWindow from './RegistrationWindow';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/slices/modalSlice';
interface IRegistrationFormLaunchProps {
}

const RegistrationFormLaunch: React.FunctionComponent<IRegistrationFormLaunchProps> = () => {

    
    const dispatch = useDispatch();

    const setModalLoginShow = () => {
        dispatch(openModal("registration"))
    }


    return (
        <>
            <div className="p-3 text-danger" onClick={setModalLoginShow} style={{ "cursor": "pointer" }}>
                <strong>Sign Up</strong>
            </div>


        </>
    );
};

export default RegistrationFormLaunch;
