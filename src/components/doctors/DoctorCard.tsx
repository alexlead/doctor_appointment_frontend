import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/slices/modalSlice';
import { doctorData } from './MainPageDoctors';

import doctor1 from '../../assets/images/doctor1.png';


export interface IDoctorCardProps {

  doctorData: doctorData;
}

const DoctorCard: React.FunctionComponent<IDoctorCardProps> = ({ doctorData }) => {

  const dispatch = useDispatch();

  const showModalLogin = () => {
    dispatch(openModal("login"));
  };

  return (
    <div className="doctor-container">
      <img src={doctorData.photo} alt="Doctor 2" />
      <div className="doctor-info">
        <h4 className="doctor-name">Dr. {doctorData.name} {doctorData.surname}</h4>
        <Button variant="doctor-sign-in" onClick={showModalLogin}>Sign In</Button>
      </div>
    </div>
  );
};

export default DoctorCard;
