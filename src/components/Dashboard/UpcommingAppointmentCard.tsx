import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

interface IUpcommingAppointmentCardProps {
}

const UpcommingAppointmentCard: React.FunctionComponent<IUpcommingAppointmentCardProps> = (props) => {
  return (
<div className='appcard my-2 mx-3'>

    <div className="appcard__header">
      <div className="appcard__header__slot_id">#123</div>
      <div className="appcard__header__doctor">visit Dr. Jogan Schtefan</div>
    </div>
    <div className="appcard__body my-3">
      <div className="appcard__body__details">
        <div className="date">Tue, 27 of Feb, 2024</div>
        <div className="slot"><FontAwesomeIcon icon={faClock} /> 10:00 - 10:30</div>
      </div>
      <div className="appcard__body__view">
      <Button className=' mx-1 my-2' variant="danger" type="button">
                View
              </Button>
      </div>
    </div>
    <div className="appcard__footer">
      <div className="appcard__footer__line"></div>
    </div>
</div>
  ) ;
};

export default UpcommingAppointmentCard;
