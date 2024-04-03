import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

interface IProfilePhotoProps {
    userMetaPhoto: string;
    updatePhoto: (base64Photo: string)=>void;
}

const ProfilePhoto: React.FunctionComponent<IProfilePhotoProps> = ({userMetaPhoto, updatePhoto}) => {


    const [wrongFileMessage, setWrongFileErrorMessage ] = useState<string>("")

    const uploadImage = (e: any) => {
        setWrongFileErrorMessage("");
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e: any) => {
            console.log(e.target)

            const base64Image = e.target.result;
            const photoBase64String = base64Image.substring(base64Image.indexOf(',') + 1);
            const bits = photoBase64String.length * 6; // 567146
            const bytes = bits / 8;
            const kb: number = Math.ceil(bytes / 1000);
            console.log( "Kb: ", kb)
            if ( kb < 600 ) {
                updatePhoto( base64Image )
            } else {
                setWrongFileErrorMessage("File is too large")
            }
        }
    }

    const removeImage = () => {
        updatePhoto( "" );
    }

  return (
    <div className='profile_photo'>
    
        <div className='profile_photo__file'>
        <input type="file" id="photoFile" accept="image/jpeg, image/png, image/gif" onChange={(e) => uploadImage(e) } /> 
            <label htmlFor="photoFile">

            <div className="profile_photo__file__view">
                {  userMetaPhoto.length ? 
                ( <img src={userMetaPhoto} /> ) : (
                    <div>Upload Your Photo</div>
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
