import * as React from 'react';
import { Form } from 'react-bootstrap';

interface IEditAppointmentTimeSlotProps {
    id: number;
    radioLabel: string;
    disabledRadio: boolean;

}

const EditAppointmentTimeSlot: React.FunctionComponent<IEditAppointmentTimeSlotProps> = ({ id, radioLabel, disabledRadio}) => {
  return (


        <Form.Check
            inline
            disabled={disabledRadio}
            label={radioLabel}
            name="timeslots"
            type={'radio'}
            id={`inline-radio-${id}`}
        />


  );
};

export default EditAppointmentTimeSlot;
