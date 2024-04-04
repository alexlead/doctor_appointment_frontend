import React, { useEffect, useState } from 'react';
import UpcommingAppointmentCard from './UpcommingAppointmentCard';
import { Container, Row, Col } from 'react-bootstrap';
import PreviousAppointmentCard from './PreviousAppointmentCard';
import { getPatientPastAppointment, TDetailedAppointment } from '../../api/patientAppointmentsApi';

interface IPreviousAppointmentsProps {
}

const PreviousAppointments: React.FunctionComponent<IPreviousAppointmentsProps> = (props) => {

  const [appointments, setAppointments] = useState<TDetailedAppointment[] | null>(null);

  async function getPastAppointments() {

    try {
      const res = await getPatientPastAppointment();
      const data = await res.json();
      console.log(data)
      setAppointments(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPastAppointments();
  }, [])


  return (

    <div className="">
      <h2 className=' my-4'>Previous visits</h2>
      <div>
        {appointments ? (
          appointments.map(appointment => <PreviousAppointmentCard appointment={appointment} key={appointment.id}/>)

        ) : (
          <div className='empty_list empty_cards_list'> You have no previous appointment.</div>
        )
        }

      </div>


    </div>

  );
};

export default PreviousAppointments;
