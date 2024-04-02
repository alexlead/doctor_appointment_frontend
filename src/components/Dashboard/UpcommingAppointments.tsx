import React, { useEffect, useState } from 'react';
import UpcommingAppointmentCard from './UpcommingAppointmentCard';
import { Container, Row, Col } from 'react-bootstrap';
import { getPatientFutureAppointment, TDetailedAppointment } from '../../api/patientAppointmentsApi';

interface IUpcommingAppointmentsProps {
}

const UpcommingAppointments: React.FunctionComponent<IUpcommingAppointmentsProps> = (props) => {


  const [appointments, setAppointments] = useState<TDetailedAppointment[] | null>(null);

  async function getUpcomingAppointments() {

    try {
      const res = await getPatientFutureAppointment();
      const data = await res.json();
      console.log(data)
      setAppointments(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUpcomingAppointments();
  }, [])


  return (

    <div className="">
      <h2 className='text-primary my-4'>Upcoming Appointments</h2>
      <div>
        {appointments ? (
          appointments.map(appointment => <UpcommingAppointmentCard appointment={appointment} />)

        ) : (
          <div className='empty_list empty_cards_list'> You have no upcomming appointment.</div>
        )
        }
      </div>
      <div>


      </div>

    </div>

  );
};

export default UpcommingAppointments;
