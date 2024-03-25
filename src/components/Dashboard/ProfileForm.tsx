import * as React from 'react';
import { Button, Form } from 'react-bootstrap';

interface IProfileFormProps {
}

const ProfileForm: React.FunctionComponent<IProfileFormProps> = (props) => {
    return (
        <div className="col-8">
            <Form>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label className="text-primary">First name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label className="text-primary">Last name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label className="text-primary">Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-primary">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label className="text-primary">Address</Form.Label>
                    <Form.Control as="textarea" rows={3} style={{ "resize": "none" }} />
                </Form.Group>

                <Form.Group className="d-flex justify-content-end" controlId="formButtons">
                    <Button className=' mx-1 my-2' variant="primary" type="submit">
                        Save
                    </Button>
                    <Button className=' mx-1 my-2' variant="danger" type="button">
                        Cancel
                    </Button>
                </Form.Group>

            </Form>
        </div>
    );
};

export default ProfileForm;
