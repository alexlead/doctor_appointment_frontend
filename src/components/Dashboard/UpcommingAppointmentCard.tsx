import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { TDetailedAppointment, TDetailedDoctorAppointment } from '../../api/patientAppointmentsApi';
import { doctor } from '../../api/doctorsList';
import { Link } from 'react-router-dom';

interface IUpcommingAppointmentCardProps {
  appointment: TDetailedAppointment | null,
  doctorAppointment: TDetailedDoctorAppointment | null,
}

const UpcommingAppointmentCard: React.FunctionComponent<IUpcommingAppointmentCardProps> = ({ appointment, doctorAppointment }) => {

  let appointmentDate : string = "";
  if (appointment) {
     appointmentDate = new Date(appointment.date).toDateString();
  }
  if (doctorAppointment) {
     appointmentDate = new Date(doctorAppointment.date).toDateString();
  }

  return (
    <div className='appcard my-2 mx-3'>

{appointment &&
      <div className="appcard__header">
        <div className="appcard__header__slot_id">#{appointment.id}</div>
        <div className="appcard__header__doctor">visit Dr. {appointment.doctorId.name} {appointment.doctorId.surname}</div>
      </div>

}
{doctorAppointment &&
      <div className="appcard__header">
        <div className="appcard__header__slot_id">#{doctorAppointment.id}</div>
        <div className="appcard__header__doctor">visit {doctorAppointment.patientId.name} {doctorAppointment.patientId.surname}</div>
      </div>

}
      <div className="appcard__body my-3">
        <div className="appcard__body__details">
          <div className="date">{appointmentDate}</div>
          {appointment &&
          <div className="slot"><FontAwesomeIcon icon={faClock} /> {appointment.slotId.startTime} - {appointment.slotId.endTime}</div>
          }
          {doctorAppointment &&
          <div className="slot"><FontAwesomeIcon icon={faClock} /> {doctorAppointment.slotId.startTime} - {doctorAppointment.slotId.endTime}</div>
          }
        </div>
        <div className="appcard__body__view">
        {appointment &&
          <Link to="/dashboard/editappointment" state={{ id: appointment.id }} >
            <Button className=' mx-1 my-2' variant="danger" type="button">
              View
            </Button>
          </Link>
}
        {doctorAppointment &&
          <Link to="/dashboard/editappointment" state={{ id: doctorAppointment.id }} >
            <Button className=' mx-1 my-2' variant="danger" type="button">
              View
            </Button>
          </Link>
}
        </div>
      </div>
      <div className="appcard__footer">
        <div className="appcard__footer__line"></div>
      </div>
    </div>
  );
};

export default UpcommingAppointmentCard;
