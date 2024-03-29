import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { closeModal } from '../store/slices/modalSlice';
import { userLogin, userLoginForm } from '../api/userAuthorisation';

interface ILoginFormProps {
}

interface loginValues {
    username: string;
    password: string;
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {

    const { Formik } = formik;

    const schema = yup.object().shape({
        username: yup.string().email('Invalid email').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid email").required(),
        password: yup.string().min(8, 'must be at least 8 characters long').max(30, 'too long password, maximum 30 characters long').required()
    });

    const dispatch = useDispatch();

    const handleSubmitForm = (values: loginValues) => {
        console.log(values)

        const credentials: userLoginForm = {
            username: values.username,
            password: values.password
        }

       console.log( userLogin( credentials ) );
        

        // dispatch(closeModal())
    }

    return (

        <Formik
            validationSchema={schema}
            onSubmit={values => handleSubmitForm(values)}
            initialValues={{
                username: '',
                password: '',
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formLoginEmail">
                        <Form.Label className="text-primary">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            isValid={!errors.username && touched.username}

                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLoginPassword">
                        <Form.Label className="text-primary">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            isValid={touched.password && !errors.password}

                        />
                    </Form.Group>

                    <Button className='w-100 my-2' variant="danger" type="submit">
                        Sign In
                    </Button>

                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
