import  React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import RegistrationWindow from './RegistrationWindow';
interface IRegistrationFormLaunchProps {
}

const RegistrationFormLaunch: React.FunctionComponent<IRegistrationFormLaunchProps> = (props) => {
    const [modalShow, setModalShow] = useState(false);

    const hideModal = () => {
        setModalShow(false)
    }
  return (
    <>
    <Button variant="success" onClick={() => setModalShow(true)}>
        Sign Up
    </Button>

    <RegistrationWindow  show={modalShow} onHide={hideModal}  />

    </>
  );
};

export default RegistrationFormLaunch;
