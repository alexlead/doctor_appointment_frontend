import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { closeModal, openModal, setErrorMessage } from '../store/slices/modalSlice';
import { decodedUser, userRegistration, userRegistrationForm, userValues } from '../api/userAuthorisation';
import { authenticatedAction, authorizedAction, setUserAction } from '../store/slices/userSlice';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
interface IRegistrationFormProps {
}

interface registrationValues {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
}

const RegistrationForm: React.FunctionComponent<IRegistrationFormProps> = () => {

    const { Formik } = formik;

    const schema = yup.object().shape({
        firstName: yup.string().min(2, 'must be at least 2 characters long').required(),
        lastName: yup.string().min(2, 'must be at least 2 characters long').required(),
        username: yup.string().email('Invalid email').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid email").required(),
        password: yup.string().trim().min(8, 'must be at least 8 characters long').max(20, 'too long password, maximum 30 characters long').matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20})/i).required()
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmitForm = async (values: registrationValues) => {
        console.log(values)

        const credentials: userRegistrationForm = {
            name: values.firstName.trim(),
            surname: values.lastName.trim(),
            username: values.username.trim(),
            password: values.password
        }

        try {

            const res = await userRegistration(credentials)
            const data = await res.json();

            if ( res.status === 200) {
                
                localStorage.setItem('token', data.refreshToken);
                localStorage.setItem('accessToken', data.accessToken);


                const user: decodedUser = jwtDecode(data.accessToken);
                console.log(user)

                const userForSlice: userValues = {
                    name: user.name,
                    surname: user.surname,
                    email: user.sub,
                }

                dispatch(setUserAction(userForSlice))
                dispatch(authenticatedAction(data.accessToken))
                dispatch(authorizedAction(user.roles[0].authority))
                navigate("/dashboard")
                dispatch(closeModal())

            } else {

                dispatch(setErrorMessage(data.message))
                dispatch(openModal("error"))
            }

        } catch (error) {
            dispatch(setErrorMessage("Connection error. Please try again few minutes later."));
            dispatch(openModal("error"));
        }
    }

    return (

        <Formik
            validationSchema={schema}
            onSubmit={values => handleSubmitForm(values)}
            initialValues={{
                firstName: '',
                lastName: '',
                username: '',
                password: '',
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formRegistrationFirstName">
                        <Form.Label className="text-primary">First name</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter First name"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            isValid={touched.firstName && !errors.firstName}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRegistrationLastName">
                        <Form.Label className="text-primary">Last name</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter Last name"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            isValid={touched.lastName && !errors.lastName}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRegistrationBasicEmail">
                        <Form.Label className="text-primary">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            isValid={touched.username && !errors.username}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formRegistrationPassword">
                        <Form.Label className="text-primary">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            isValid={touched.password && !errors.password}
                        />
                        <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
                    </Form.Group>

                    <Button className='w-100  my-2' variant="danger" type="submit">
                        Sign Up
                    </Button>

                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;
