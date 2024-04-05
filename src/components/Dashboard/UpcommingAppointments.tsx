import React, { useEffect, useState } from 'react';
import UpcommingAppointmentCard from './UpcommingAppointmentCard';
import { Container, Row, Col } from 'react-bootstrap';
import { getPatientFutureAppointment, TDetailedAppointment, TDetailedDoctorAppointment } from '../../api/patientAppointmentsApi';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/userSlice';
import { doctor } from '../../api/doctorsList';

interface IUpcommingAppointmentsProps {
}

const UpcommingAppointments: React.FunctionComponent<IUpcommingAppointmentsProps> = (props) => {

  const { permissions } = useSelector(selectUser);

  const [appointments, setAppointments] = useState<TDetailedAppointment[] | null>(null);
  const [doctorAppointments, setDoctorAppointments] = useState<TDetailedDoctorAppointment[] | null>(null);

  async function getUpcomingAppointments() {

    try {
      const res = await getPatientFutureAppointment();
      const data = await res.json();
      console.log(data)
      if (permissions === "ROLE_PATIENT") {
        setAppointments(data);
      }
      if (permissions === "ROLE_DOCTOR") {
        setDoctorAppointments(data);
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUpcomingAppointments();
  }, [])


  return (

    <div>
      <h2 className='text-primary my-4'>Upcoming Appointments</h2>
      <div className="container">
        <div className="row">
          <div className="col-8">
            {appointments?.length && <>
              {appointments.map(appointment => <UpcommingAppointmentCard appointment={appointment} doctorAppointment={null} key={appointment.id} />)}
            </>

            }
            {doctorAppointments?.length && <>
              {doctorAppointments.map(doctorAppointment => <UpcommingAppointmentCard appointment={null} doctorAppointment={doctorAppointment} key={doctorAppointment.id} />)}
            </>
            }
            {(!appointments?.length && !doctorAppointments?.length) &&
              <div className='empty_list empty_cards_list'> You have no upcomming appointment.</div>
            }
          </div>
          <div>


          </div>
        </div>
      </div>

    </div>

  );
};

export default UpcommingAppointments;
