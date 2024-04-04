import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { TDetailedAppointment, TDetailedDoctorAppointment } from '../../../api/patientAppointmentsApi';
import { Link } from 'react-router-dom';

interface IMyAppointmentsTableProps {
  appointments: TDetailedAppointment[] | null,
  doctorAppointments: TDetailedDoctorAppointment[] | null,
  deleteAppointment: (id: number)=>void
}

const MyAppointmentsTable: React.FunctionComponent<IMyAppointmentsTableProps> = ({ appointments, doctorAppointments, deleteAppointment }) => {

  const today = Date.now();
  return (
    <div className="">

      {appointments?.length && (

        <Table size='lg' responsive striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Doctor</th>
              <th>Tools</th>
            </tr>
          </thead>
          <tbody>

            {appointments.map(appointment =>

              <tr key={appointment.id}>
                <td>{appointment.date}</td>
                <td>{appointment.slotId.startTime} - {appointment.slotId.endTime}</td>
                <td>Dr. {appointment.doctorId.name} {appointment.doctorId.surname}</td>
                <td>

                  <Link to="/dashboard/editappointment" state={{ id: appointment.id }} >
                    <Button className=' mx-1 my-2' variant="primary" type="button">
                      View
                    </Button>
                  </Link>

                  {Date.parse(appointment.date) > today &&

                    <Button className=' mx-1 my-2' variant="danger" type="button" onClick={()=>deleteAppointment(appointment.id)}>
                      Cancel
                    </Button>
                  }

                </td>
              </tr>
            )}


          </tbody>
        </Table>

      ) }

{doctorAppointments?.length && (

<Table size='lg' responsive striped bordered hover>
  <thead>
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>Patient</th>
      <th>Tools</th>
    </tr>
  </thead>
  <tbody>

    {doctorAppointments.map(doctorAppointment =>

      <tr key={doctorAppointment.id}>
        <td>{doctorAppointment.date}</td>
        <td>{doctorAppointment.slotId.startTime} - {doctorAppointment.slotId.endTime}</td>
        <td>{doctorAppointment.patientId.name} {doctorAppointment.patientId.surname}</td>
        <td>

          <Link to="/dashboard/editappointment" state={{ id: doctorAppointment.id }} >
            <Button className=' mx-1 my-2' variant="primary" type="button">
              View
            </Button>
          </Link>

          {Date.parse(doctorAppointment.date) > today &&

            <Button className=' mx-1 my-2' variant="danger" type="button">
              Cancel
            </Button>
          }

        </td>
      </tr>
    )}


  </tbody>
</Table>

) }


      {
        (!appointments?.length && !doctorAppointments?.length) &&

  <div className='empty_list empty_table_list'> You have no previous appointment.</div>
      }
    </div>
  );
};

export default MyAppointmentsTable;
