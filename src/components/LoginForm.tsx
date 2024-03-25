import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface ILoginFormProps {
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-primary">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-primary">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className='w-100 my-2' variant="danger" type="submit">
                Sign In
            </Button>

        </Form>
    );
};

export default LoginForm;
