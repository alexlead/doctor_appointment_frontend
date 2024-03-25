import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

interface IPreviousAppointmentCardProps {
}

const PreviousAppointmentCard: React.FunctionComponent<IPreviousAppointmentCardProps> = (props) => {
  return (
<div className='prevappcard my-2 mx-3'>

    <div className="prevappcard__header">
      <div className="prevappcard__header__app_id">Appointment #123</div>
      <div className="prevappcard__header__is_visited">visited</div>
    </div>
    <div className="prevappcard__body my-3">
      <div className="prevappcard__body__details">
        <div className="date">Tue, 27 of Feb, 2024</div>
        <div className="slot"><FontAwesomeIcon icon={faClock} /> 10:00 - 10:30</div>
      </div>
      <div className="prevappcard__body__doctor my-2">visit Dr. Jogan Schtefan</div>
    </div>
    <div className="prevappcard__footer">
      <Button className=' mx-1' variant="primary" type="button">
                View
              </Button>
    </div>
</div>
  ) ;
};

export default PreviousAppointmentCard;
