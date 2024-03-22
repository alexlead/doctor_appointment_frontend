import  React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import LoginWindow from './LoginWindow';
interface ILoginFormLaunchProps {
}

const LoginFormLaunch: React.FunctionComponent<ILoginFormLaunchProps> = (props) => {
    const [modalShow, setModalShow] = useState(false);

    const hideModal = () => {
        setModalShow(false)
    }
  return (
    <>
    <Button variant="outline-dark" onClick={() => setModalShow(true)}>
        Sign In
    </Button>

    <LoginWindow show={modalShow} onHide={hideModal} />
    </>
  );
};

export default LoginFormLaunch;
