import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import * as yup from 'yup';
import * as formik from 'formik';
import { useSelector } from 'react-redux';
import { selectUser, State } from '../../../store/slices/userSlice';
import { Link } from 'react-router-dom';
import { deleteUserProfile, getUserProfile, updateUserProfile, userMeta } from '../../../api/userProfile';
import ProfilePhoto from './ProfilePhoto';

interface IProfileFormProps {
}

const ProfileForm: React.FunctionComponent<IProfileFormProps> = (props) => {

  
    const { user } = useSelector(selectUser);
    const { Formik } = formik;

    const profileValues: string[] = ["phone", "address"] ;

    const schema = yup.object().shape({
        phone: yup.string().matches(/[\d()+-]{10,20}$/i, "Invalid phone number"),
        address: yup.string().max(200, 'too long address, maximum 200 characters long')
    });

    const [ userMetaPhone, setUserMetaPhone ] = useState<string>("");
    const [ userMetaAddress, setUserMetaAddress ] = useState<string>("");
    const [ userMetaPhoto, setUserMetaPhoto ] = useState<string>("");



  const getPatientProfile = async () => {
    try {
      const res = await getUserProfile();
      const data = await res.json();

        const phones: userMeta[] = data.filter( (d: userMeta) => d.metaKey === "Phone" ) 
        const address: userMeta[] = data.filter( (d: userMeta) => d.metaKey === "Address" ) 
        const photos: userMeta[] = data.filter( (d: userMeta) => d.metaKey === "Photo" ) 

        if(phones.length) {
            setUserMetaPhone(phones[0].metaValue)
        }
        if(address.length) {
            setUserMetaAddress(address[0].metaValue)
        }
        if(photos.length) {
            setUserMetaPhoto(photos[0].metaValue)
        }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () => {
    getPatientProfile();
  }, [])

    const handleSubmitForm = (values: any) => {
        console.log(values)

    const filledValues: userMeta[] = Object.keys(values).filter(v=>profileValues.includes(v) &&  values[v] !== "" ).map((v:string)=> ({metaKey: v, metaValue: values[v] }))
    const emptyValues: userMeta[] = Object.keys(values).filter(v=>values[v] === "").map((v:string)=> ({metaKey: v, metaValue: values[v] }) )

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

        if ( base64Photo === "" ) {
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
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label className="text-primary">Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number (don't use space in the number)" 
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isValid={!errors.phone && touched.phone}
                    />
                </Form.Group>
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
