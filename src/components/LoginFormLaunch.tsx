import React, { useState } from 'react';

import LoginWindow from './LoginWindow';
interface ILoginFormLaunchProps {
}

const LoginFormLaunch: React.FunctionComponent<ILoginFormLaunchProps> = () => {
    const [modalShow, setModalShow] = useState(false);

    const hideModalLogin = () => {
        setModalShow(false)
    }
    return (
        <>
            <div className="p-3 text-danger" onClick={() => setModalShow(true)} style={{ "cursor": "pointer" }}>
                <strong>Sign In</strong>
            </div>

            <LoginWindow show={modalShow} onHideLogin={hideModalLogin} />
        </>
    );
};

export default LoginFormLaunch;
