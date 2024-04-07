import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { doctor, getDoctors } from '../../../api/doctorsList';
import * as formik from 'formik';

import * as yup from 'yup';
import { getAppointmentById, getFreeSlots, saveAppointment, slot, TFreeSlotRequest, TFullDetailedAppointment, TPatientForAppointment, TSaveAppointment } from '../../../api/patientAppointmentsApi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../store/slices/userSlice';
import AutocompleteInput from './AutocompleteInput';
import { openModal, setErrorMessage } from '../../../store/slices/modalSlice';

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
  const { permissions } = useSelector(selectUser);

  const schema = yup.object().shape({
    appointmentDate: yup.string().required(),
    doctorId: yup.number().required(),
    timeslots: yup.number().min(1).required()
  });

  const dispatch = useDispatch();
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const minDate = today.toISOString().slice(0, 10);
  today.setMonth(today.getMonth() + 1);
  const maxDate = today.toISOString().slice(0, 10);
 

  const [blockByDate, setBlockByDate] = useState<boolean>(false)
  const [doctors, setDoctors] = useState<doctor[] | null>(null);
  const [doctorsSlots, setDodctorsSlots] = useState<TSlotOptions[] | null>(null);
  const [currentAppointment, setCurrentAppointment] = useState<TFullDetailedAppointment | null>(null);
  const [patient, setPatient] = useState<TPatientForAppointment | null>(null)

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


  async function getCurrentAppointment () {
    if(state.id < 1 ) {
      return;
    }
    try {
      const res = await getAppointmentById( state.id );
      const data = await res.json();
      updateSlots({
        date: data.date,
        doctorId: data.doctorId.id
      })


      setBlockByDate ( Date.parse(data.date) < (Date.now()) );
      setPatient(data)
      setCurrentAppointment(data);


    } catch (error) {
      console.log(error)
      dispatch(setErrorMessage("Connection error. Please try again few minutes later."));
      dispatch(openModal("error"));
    }
  }



  useEffect(() => {

    if (doctors === null) {
      getDoctorsList();
    }

    getCurrentAppointment();

  }, []);

  const getDoctorsSlots = async (freeSlotRequest: TFreeSlotRequest) => {
    try {
      const res = await getFreeSlots(freeSlotRequest);
      const data = await res.json();

      const allFreeIds: number[] = data.free.map((d: slot) => d.id);
      const detailedSlots: TSlotOptions[] = data.all.map((d: slot) => {
        if (allFreeIds.includes(d.id)) {
          return { ...d, status: "free" }
        } else {
          return { ...d, status: "booked" }
        }
      })


      setDodctorsSlots(detailedSlots);
    } catch (error) {
      console.log(error);
      dispatch(setErrorMessage("Connection error. Please try again few minutes later."));
      dispatch(openModal("error"));
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
      appointmentId: state.id,
      date: values.appointmentDate,
      userId1: + values.doctorId,
      slotId: + values.timeslots
    }

    console.log(await saveAppointment(payload));

    navigate("/dashboard/myappointments");

  }



  return (


    <Formik
      validationSchema={schema}
      enableReinitialize={true}
      onSubmit={values => handleSubmitForm(values)}
      initialValues={{
        appointmentDate: (currentAppointment !==null)? currentAppointment?.date : minDate,
        doctorId: (currentAppointment !==null)? currentAppointment?.doctorId.id : 0,
        timeslots: (currentAppointment !==null)? currentAppointment?.slotId.id : 0
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
            disabled={blockByDate}
            min={minDate}
            max={maxDate}
            value={values.appointmentDate}
            onChange={(e) => { handleChange(e); handleChangedDate(values, e) }}
            placeholder="Date of Appointment" />
          <h3 className='text-dark my-4'>Doctor:</h3>
          <Form.Select aria-label="Default select example"
            name="doctorId"
            value={values.doctorId}
            disabled={ currentAppointment !==null && currentAppointment.doctorId.id > 0}
            onChange={(e) => { handleChange(e); handleSelectedDoctor(values, e) }}>
            <option>Select Doctor for visit</option>
            {
              doctors?.map(doctor => <option
                value={doctor.id}
                key={doctor.id}
              >Dr. {doctor.name} {doctor.surname} </option>)

            }
          </Form.Select>

          {permissions === "ROLE_DOCTOR" &&
            <div className="patient-selector">
                <h3 className='text-dark my-4'>Patient:</h3>
                <AutocompleteInput patient={patient}/>

            </div>
          }


          <h3 className='text-dark my-4'>Available timeslots:</h3>
          <div className='timeslot-radio' role="group" aria-labelledby="timeslots">

{(doctorsSlots != null && doctorsSlots?.length != 0) ? (

<>
  {doctorsSlots?.map(slot =>
    
    <Form.Check
                key={slot.id}
                inline
                defaultChecked={ (currentAppointment !==null && currentAppointment?.slotId.id === slot.id) ? true: undefined }
                disabled={slot.status === "booked" || blockByDate}
                label={`${slot.startTime} - ${slot.endTime}`}
                name="timeslots"
                type={'radio'}
                id={`inline-radio-${slot.id}`}
                value={slot.id}
                onChange={handleChange}
                />
              )}
              
                </>
            ) : (

<div className='empty-slots'>For getting slots please select a doctor from the above list.</div>
            )}

          </div>

          <Form.Group className="d-flex justify-content-end" controlId="formButtons">
          { !blockByDate &&
            <Button className=' mx-1 my-2' variant="primary" type="submit">
              Save
            </Button>
          }
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
