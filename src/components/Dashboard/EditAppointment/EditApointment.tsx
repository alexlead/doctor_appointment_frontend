import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { doctor, getDoctors } from '../../../api/doctorsList';
import * as formik from 'formik';

import * as yup from 'yup';
import { getFreeSlots, saveAppointment, slot, TFreeSlotRequest, TSaveAppointment } from '../../../api/patientAppointmentsApi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface IEditAppointmentProps {


}

interface IAppointmentValues {
  appointmentDate: string;
  doctorId: number;
  timeslots: number;
}

export type TSlotOptions = {
  id: number;
  startTime: string;
  endTime: string;
  status: "free" | "booked" | "current"
}


const EditAppointment: React.FunctionComponent<IEditAppointmentProps> = (props) => {

  const { state } = useLocation();
  const navigate = useNavigate();

  const { Formik } = formik;


  const schema = yup.object().shape({
    appointmentDate: yup.string().required(),
    doctorId: yup.number().required(),
    timeslots: yup.number().min(1).required()
  });

  const today = new Date();
  today.setDate(today.getDate() + 1);
  const minDate = today.toISOString().slice(0, 10);
  today.setMonth(today.getMonth() + 1);
  const maxDate = today.toISOString().slice(0, 10);

  const [doctors, setDoctors] = useState<doctor[] | null>(null);
  const [doctorsSlots, setDodctorsSlots] = useState<TSlotOptions[] | null>(null);

  const getDoctorsList = async () => {
    try {
      const res = await getDoctors();
      const data = await res.json();
      console.log("doctors: ", data)
      setDoctors(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    if (doctors === null) {
      getDoctorsList();
    }
  }, []);

  const getDoctorsSlots = async (freeSlotRequest: TFreeSlotRequest) => {
    try {
      const res = await getFreeSlots(freeSlotRequest);
      const data = await res.json();
      
      const allFreeIds: number[] = data.free.map((d:slot)=>d.id);
      const detailedSlots: TSlotOptions[] = data.all.map( (d:slot) => {
        if (allFreeIds.includes(d.id)) {
          return { ...d, status: "free"}
        } else {
          return { ...d, status: "booked"}
        }
      } )

      
      setDodctorsSlots(detailedSlots);
    } catch (error) {
      console.log(error);
    }
  }


  const handleChangedDate = (values: any, event: any) => {
    if (values.doctorId > 0) {

      const freeSlotRequest: TFreeSlotRequest = {
        date: event.target.value,
        doctorId: values.doctorId
      }

      updateSlots(freeSlotRequest);
    }

  }

  const handleSelectedDoctor = (values: any, event: any) => {

    const freeSlotRequest: TFreeSlotRequest = {
      date: values.appointmentDate,
      doctorId: event.target.value
    }

    updateSlots(freeSlotRequest);

  }

  function updateSlots(freeSlotRequest: TFreeSlotRequest): void {

    getDoctorsSlots(freeSlotRequest);
  }

  const handleSubmitForm = async (values: IAppointmentValues) => {
    console.log(values);
    const payload: TSaveAppointment = {
      id: state.id,
      date: values.appointmentDate,
      userId1: "" + values.doctorId,
      slotId: "" + values.timeslots 
    }

    console.log(await saveAppointment(payload));

    navigate("/dashboard/myappointments");
    

  }

  return (


    <Formik
      validationSchema={schema}
      onSubmit={values => handleSubmitForm(values)}
      initialValues={{
        appointmentDate: minDate,
        doctorId: 0,
        timeslots: 0
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>

          {state.id === 0 ? (
            <h1 className='text-primary my-4'>New Appointment</h1>
          ) : (
            <h1 className='text-primary my-4'>Appointment #{state.id}</h1>
          )}



          <h3 className='text-dark my-4'>Date:</h3>
          <Form.Control
            type="date"
            name="appointmentDate"
            min={minDate}
            max={maxDate}
            value={values.appointmentDate}
            onChange={(e) => { handleChange(e); handleChangedDate(values, e) }}
            // onChange={handleChange}
            placeholder="Date of Appointment" />
          <h3 className='text-dark my-4'>Doctor:</h3>
          <Form.Select aria-label="Default select example"
            name="doctorId"
            value={values.doctorId}
            onChange={(e) => { handleChange(e); handleSelectedDoctor(values, e) }}>
            <option>Select Doctor for visit</option>
            {
              doctors?.map(doctor => <option 
                value={doctor.id} 
                key={doctor.id}
              >Dr. {doctor.name} {doctor.surname} </option>)

            }
          </Form.Select>


          <h3 className='text-dark my-4'>Available timeslots:</h3>
          <div className='timeslot-radio' role="group" aria-labelledby="timeslots">


            { doctorsSlots?.map(slot=>
            
                        <Form.Check
                          key={slot.id}
                          inline
                          disabled={ slot.status==="booked" }
                          label={`${slot.startTime} - ${slot.endTime}`}
                          name="timeslots"
                          type={'radio'}
                          id={`inline-radio-${slot.id}`}
                          value={slot.id}
                          onChange={handleChange}
                        />
            )}


          </div>

          <Form.Group className="d-flex justify-content-end" controlId="formButtons">
            <Button className=' mx-1 my-2' variant="primary" type="submit">
              Save
            </Button>
            <Link to="/dashboard/myappointments" >
              <Button className=' mx-1 my-2' variant="danger" type="button">
                Cancel
              </Button>
            </Link>
          </Form.Group>
        </Form>
      )}

    </Formik>
  );
};

export default EditAppointment;
