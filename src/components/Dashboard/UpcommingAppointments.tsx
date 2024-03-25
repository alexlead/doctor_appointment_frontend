import  React from 'react';
import UpcommingAppointmentCard from './UpcommingAppointmentCard';
import {Container, Row, Col } from 'react-bootstrap';

interface IUpcommingAppointmentsProps {
}

const UpcommingAppointments: React.FunctionComponent<IUpcommingAppointmentsProps> = (props) => {


    

  return (

    <div className="">
<h2 className='text-primary my-4'>Upcoming Appointments</h2>
<div>

      <UpcommingAppointmentCard />
      <UpcommingAppointmentCard />
</div>
      

    </div>

  );
};

export default UpcommingAppointments;
