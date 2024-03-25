import  React from 'react';
import UpcommingAppointmentCard from './UpcommingAppointmentCard';
import {Container, Row, Col } from 'react-bootstrap';
import PreviousAppointmentCard from './PreviousAppointmentCard';

interface IPreviousAppointmentsProps {
}

const PreviousAppointments: React.FunctionComponent<IPreviousAppointmentsProps> = (props) => {


    

  return (

    <div className="">
<h2 className=' my-4'>Previous visits</h2>
<div>

      <PreviousAppointmentCard />
      <PreviousAppointmentCard />
</div>
      

    </div>

  );
};

export default PreviousAppointments;
