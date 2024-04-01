import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { TDetailedAppointment } from '../../api/patientAppointmentsApi';
import { doctor } from '../../api/doctorsList';
import { Link } from 'react-router-dom';

interface IUpcommingAppointmentCardProps {
  appointment: TDetailedAppointment
}

const UpcommingAppointmentCard: React.FunctionComponent<IUpcommingAppointmentCardProps> = ({ appointment }) => {

  const appointmentDate = new Date(appointment.date).toDateString();

  return (
    <div className='appcard my-2 mx-3'>

      <div className="appcard__header">
        <div className="appcard__header__slot_id">#{appointment.id}</div>
        <div className="appcard__header__doctor">visit Dr. {appointment.doctorId.name} {appointment.doctorId.surname}</div>
      </div>
      <div className="appcard__body my-3">
        <div className="appcard__body__details">
          <div className="date">{appointmentDate}</div>
          <div className="slot"><FontAwesomeIcon icon={faClock} /> {appointment.slotId.startTime} - {appointment.slotId.endTime}</div>
        </div>
        <div className="appcard__body__view">
          <Link to="/dashboard/editappointment" state={{ id: appointment.id }} >
            <Button className=' mx-1 my-2' variant="danger" type="button">
              View
            </Button>
          </Link>
        </div>
      </div>
      <div className="appcard__footer">
        <div className="appcard__footer__line"></div>
      </div>
    </div>
  );
};

export default UpcommingAppointmentCard;
