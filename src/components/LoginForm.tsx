import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface ILoginFormProps {
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Button variant="danger" type="submit">
      Sign In
    </Button>

  </Form>
  );
};

export default LoginForm;
