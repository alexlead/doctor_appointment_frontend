import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { TDetailedAppointment } from '../../api/patientAppointmentsApi';
import { Link } from 'react-router-dom';

interface IPreviousAppointmentCardProps {
  appointment: TDetailedAppointment
}

const PreviousAppointmentCard: React.FunctionComponent<IPreviousAppointmentCardProps> = ({ appointment }) => {

  const appointmentDate = new Date(appointment.date).toDateString();

  return (
    <div className='prevappcard my-2 mx-3'>

      <div className="prevappcard__header">
        <div className="prevappcard__header__app_id">Appointment #{appointment.id}</div>
        <div className="prevappcard__header__is_visited">finished</div>
      </div>
      <div className="prevappcard__body my-3">
        <div className="prevappcard__body__details">
          <div className="date">{appointmentDate}</div>
          <div className="slot"><FontAwesomeIcon icon={faClock} /> {appointment.slotId.startTime} - {appointment.slotId.endTime}</div>
        </div>
        <div className="prevappcard__body__doctor my-2">visit Dr. {appointment.doctorId.name} {appointment.doctorId.surname}</div>
      </div>
      <div className="prevappcard__footer">
        <Link to="/dashboard/editappointment" state={{ id: appointment.id }} >
          <Button className=' mx-1' variant="primary" type="button">
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PreviousAppointmentCard;
