import * as React from 'react';
import EditAppointmentTimeSlot from './EditAppointmentTimeSlots';
import { Button, Form } from 'react-bootstrap';

interface IEditAppointmentProps {
}

const EditAppointment: React.FunctionComponent<IEditAppointmentProps> = (props) => {
  return (
    <div className="">

        <h1 className='text-primary my-4'>New Appointment</h1>



<h3 className='text-dark my-4'>Date:</h3>
<Form.Control type="date" name="appointmentDate" min={"2024-03-23"} placeholder="Date of Appointment" />
<h3 className='text-dark my-4'>Doctor:</h3>


<Form.Select aria-label="Default select example">
      <option disabled>Select Doctor for visit</option>
      <option value="1">Dr. Jogan Schtefan</option>
      <option value="2">Dr. Jogan Schtefan</option>
      <option value="3">Dr. Jogan Schtefan</option>
    </Form.Select>


<h3 className='text-dark my-4'>Available timeslots:</h3>
<div className='timeslot-radio'>
        <EditAppointmentTimeSlot id={1} radioLabel={"10:00 - 10:30"} disabledRadio={false}/>
        <EditAppointmentTimeSlot id={2} radioLabel={"10:30 - 11:00"} disabledRadio={false}/>
        <EditAppointmentTimeSlot id={3} radioLabel={"11:00 - 11:30"} disabledRadio={false}/>
        <EditAppointmentTimeSlot id={4} radioLabel={"11:30 - 12:00"} disabledRadio={false}/>
        <EditAppointmentTimeSlot id={5} radioLabel={"12:00 - 12:30"} disabledRadio={true}/>
        <EditAppointmentTimeSlot id={6} radioLabel={"12:30 - 13:00"} disabledRadio={false}/>
        <EditAppointmentTimeSlot id={7} radioLabel={"13:00 - 13:30"} disabledRadio={false}/>
        <EditAppointmentTimeSlot id={8} radioLabel={"13:30 - 14:00"} disabledRadio={false}/>
</div>
    
<Form.Group className="d-flex justify-content-end" controlId="formButtons">
                    <Button className=' mx-1 my-2' variant="primary" type="submit">
                        Save
                    </Button>
                    <Button className=' mx-1 my-2' variant="danger" type="button">
                        Cancel
                    </Button>
                </Form.Group>


    </div>
  );
};

export default EditAppointment;
