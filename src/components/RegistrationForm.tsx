import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
interface IRegistrationFormProps {
}

const RegistrationForm: React.FunctionComponent<IRegistrationFormProps> = (props) => {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formFirstName">
      <Form.Label>First name</Form.Label>
      <Form.Control type="text" placeholder="Enter First name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formLastName">
      <Form.Label>Last name</Form.Label>
      <Form.Control type="text" placeholder="Enter Last name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Button variant="danger" type="submit">
      Sign Up
    </Button>

  </Form>
  );
};

export default RegistrationForm;
