import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import * as yup from 'yup';
import * as formik from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, State } from '../../../store/slices/userSlice';
import { Link } from 'react-router-dom';
import { deleteUserProfile, getUserProfile, updateUserProfile, userMeta } from '../../../api/userProfile';
import ProfilePhoto from './ProfilePhoto';
import { openModal, setErrorMessage } from '../../../store/slices/modalSlice';

interface IProfileFormProps {
}

const ProfileForm: React.FunctionComponent<IProfileFormProps> = (props) => {


    const { user, permissions } = useSelector(selectUser);

    const { Formik } = formik;

    const profileValues: string[] = ["phone", "address", "education", "category", "aboutMe"];

    const schema = yup.object().shape({
        phone: yup.string().matches(/[\d()+-]{10,20}$/i, "Invalid phone number"),
        address: yup.string().max(200, 'too long value, maximum 200 characters long'),
        education: yup.string().max(50, 'too long value, maximum 50 characters long'),
        category: yup.string().max(50, 'too long value, maximum 50 characters long'),
        aboutMe: yup.string().max(400, 'too long value, maximum 400 characters long')
    });

    const [userMetaPhone, setUserMetaPhone] = useState<string>("");
    const [userMetaAddress, setUserMetaAddress] = useState<string>("");
    const [userMetaPhoto, setUserMetaPhoto] = useState<string>("");

    const [userMetaEducation, setUserMetaEducation] = useState<string>("");
    const [userMetaCategory, setUserMetaCategory] = useState<string>("");
    const [userMetaAboutMe, setUserMetaAboutMe] = useState<string>("");

    const dispatch = useDispatch();

    const getPatientProfile = async () => {
        try {
            const res = await getUserProfile();
            const data = await res.json();

            profileValues.forEach(value => {
                const meta: userMeta[] = data.filter((d: userMeta) => d.metaKey.toLowerCase() === value.toLowerCase())
                if (meta.length) {
                    switch (value) {
                        case "phone":
                            setUserMetaPhone(meta[0].metaValue);
                            break;
                        case "address":
                            setUserMetaAddress(meta[0].metaValue);
                            break;
                        case "education":
                            setUserMetaEducation(meta[0].metaValue);
                            break;

                        case "category":
                            setUserMetaCategory(meta[0].metaValue);
                            break;
                        case "aboutMe":
                            setUserMetaAboutMe(meta[0].metaValue);
                            break;

                    }
                }
            })


            const photos: userMeta[] = data.filter((d: userMeta) => d.metaKey === "Photo")

            if (photos.length) {
                setUserMetaPhoto(photos[0].metaValue)
            }

        } catch (error) {
            console.log(error);
            dispatch(setErrorMessage("Connection error. Please try again few minutes later."));
            dispatch(openModal("error"));
        }
    }

    useEffect(() => {
        getPatientProfile();
    }, [])

    const handleSubmitForm = (values: any) => {
        console.log(values)

        const filledValues: userMeta[] = Object.keys(values).filter(v => profileValues.includes(v) && values[v] !== "").map((v: string) => ({ metaKey: v, metaValue: values[v] }))
        const emptyValues: userMeta[] = Object.keys(values).filter(v => values[v] === "").map((v: string) => ({ metaKey: v, metaValue: values[v] }))

        if (filledValues.length) {
            updateUserProfile(filledValues);
        }
        if (emptyValues.length) {
            deleteUserProfile(emptyValues);
        }


    }


    const updatePhoto = (base64Photo: string) => {

        setUserMetaPhoto(base64Photo);

        const savePhotoForm: userMeta[] = [
            {
                metaKey: "Photo",
                metaValue: base64Photo
            }
        ]

        if (base64Photo === "") {
            deleteUserProfile(savePhotoForm);
        } else {
            updateUserProfile(savePhotoForm);
        }
    }


    return (
        <div className="col-8">
            <ProfilePhoto userMetaPhoto={userMetaPhoto} updatePhoto={updatePhoto} />
            <Formik
                validationSchema={schema}
                enableReinitialize={true}
                onSubmit={values => handleSubmitForm(values)}
                initialValues={{
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    phone: userMetaPhone,
                    address: userMetaAddress,
                    education: userMetaEducation,
                    category: userMetaCategory,
                    aboutMe: userMetaAboutMe
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label className="text-primary">First name</Form.Label>
                            <Form.Control type="text"
                                placeholder="Enter First name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                isValid={!errors.name && touched.name}
                                disabled={true}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label className="text-primary">Last name</Form.Label>
                            <Form.Control type="text"
                                placeholder="Enter Last name"
                                name="surname"
                                value={values.surname}
                                onChange={handleChange}
                                isValid={!errors.surname && touched.surname}
                                disabled={true}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-primary">Email address</Form.Label>
                            <Form.Control type="email"
                                placeholder="Enter email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isValid={!errors.email && touched.email}
                                disabled={true}
                            />
                        </Form.Group>
                        {permissions === "ROLE_PATIENT" &&
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label className="text-primary">Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone number (don't use space in the number)"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    isValid={!errors.phone && touched.phone}
                                />
                            </Form.Group>
                        }
                        {permissions === "ROLE_PATIENT" &&
                            <Form.Group className="mb-3" controlId="formAddress">
                                <Form.Label className="text-primary">Address</Form.Label>
                                <Form.Control as="textarea"
                                    rows={3} style={{ "resize": "none" }}
                                    name="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    isValid={!errors.address && touched.address}
                                />
                            </Form.Group>
                        }

                        {permissions === "ROLE_DOCTOR" &&
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label className="text-primary">Education</Form.Label>
                                <Form.Control type="text" placeholder=""
                                    name="education"
                                    value={values.education}
                                    onChange={handleChange}
                                    isValid={!errors.education && touched.education}
                                />
                            </Form.Group>
                        }
                        {permissions === "ROLE_DOCTOR" &&
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label className="text-primary">Category</Form.Label>
                                <Form.Control type="text" placeholder=""
                                    name="category"
                                    value={values.category}
                                    onChange={handleChange}
                                    isValid={!errors.category && touched.category}
                                />
                            </Form.Group>
                        }

                        {permissions === "ROLE_DOCTOR" &&
                            <Form.Group className="mb-3" controlId="formAboutMe">
                                <Form.Label className="text-primary">About Me</Form.Label>
                                <Form.Control as="textarea"
                                    rows={3} style={{ "resize": "none" }}
                                    name="aboutMe"
                                    value={values.aboutMe}
                                    onChange={handleChange}
                                    isValid={!errors.aboutMe && touched.aboutMe}
                                />
                            </Form.Group>
                        }
                        <Form.Group className="d-flex justify-content-end" controlId="formButtons">
                            <Button className=' mx-1 my-2' variant="primary" type="submit">
                                Save
                            </Button>
                            <Link to="/dashboard" >
                                <Button className=' mx-1 my-2' variant="danger" type="button">
                                    Cancel
                                </Button>
                            </Link>
                        </Form.Group>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ProfileForm;
