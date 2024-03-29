import React from 'react';

import LoginWindow from './LoginWindow';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/slices/modalSlice';
interface ILoginFormLaunchProps {
}

const LoginFormLaunch: React.FunctionComponent<ILoginFormLaunchProps> = () => {
   
    const dispatch = useDispatch();

    const setModalLoginShow = () => {
        dispatch(openModal("login"))
    }


    return (
        <>
            <div className="p-3 text-danger" onClick={setModalLoginShow} style={{ "cursor": "pointer" }}>
                <strong>Sign In</strong>
            </div>
        </>
    );
};

export default LoginFormLaunch;
