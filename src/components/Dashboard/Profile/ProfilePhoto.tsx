import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { openModal, setErrorMessage } from '../../../store/slices/modalSlice';

interface IProfilePhotoProps {
    userMetaPhoto: string;
    updatePhoto: (base64Photo: string) => void;
}

const ProfilePhoto: React.FunctionComponent<IProfilePhotoProps> = ({ userMetaPhoto, updatePhoto }) => {

    const dispatch = useDispatch();
    const uploadImage = (e: any) => {

        let files = e.target.files;
        if (files.length) {

            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = (e: any) => {
                console.log(e.target)
                
                const base64Image = e.target.result;
                const photoBase64String = base64Image.substring(base64Image.indexOf(',') + 1);
                const bits = photoBase64String.length * 6; // 567146
                const bytes = bits / 8;
                const kb: number = Math.ceil(bytes / 1000);
                console.log("Kb: ", kb)
                if (kb < 500) {
                    updatePhoto(base64Image)
                } else {
                    dispatch(setErrorMessage("File is too big for profile."));
                    dispatch(openModal("error"));
                }
            }
        }
    }

    const removeImage = () => {
        updatePhoto("");
    }

    return (
        <div className='profile_photo'>

            <div className='profile_photo__file'>
                <input type="file" id="photoFile" accept="image/jpeg, image/png, image/gif" onChange={(e) => uploadImage(e)} />
                <label htmlFor="photoFile">

                    <div className="profile_photo__file__view">
                        {userMetaPhoto.length ?
                            (<img src={userMetaPhoto} />) : (
                                <div>
                                    <p>Upload Your Photo</p>
                                    <p className='comment'>Max size: 500Kb</p>
                                </div>
                                
                            )
                        }
                    </div>
                </label>
            </div>
            <Button onClick={removeImage}><FontAwesomeIcon icon={faTrash} /></Button>

        </div>
    );
};

export default ProfilePhoto;
