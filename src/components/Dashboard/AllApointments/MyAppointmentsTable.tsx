import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { TDetailedAppointment } from '../../../api/patientAppointmentsApi';
import { Link } from 'react-router-dom';

interface IMyAppointmentsTableProps {
    appointments: TDetailedAppointment[] | null
}

const MyAppointmentsTable: React.FunctionComponent<IMyAppointmentsTableProps> = ({appointments}) => {

  const today = Date.now();
  return (
    <div className="">

      { appointments?.length  ? (

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
            
          <tr>
            <td>{appointment.date}</td>
            <td>{appointment.slotId.startTime} - {appointment.slotId.endTime}</td>
            <td>Dr. {appointment.doctorId.name} {appointment.doctorId.surname}</td>
            <td>

            <Link to="/dashboard/editappointment" state={{ id: appointment.id }} >
              <Button className=' mx-1 my-2' variant="primary" type="button">
                View
              </Button>
            </Link>

            { Date.parse(appointment.date) > today &&  
           
              <Button className=' mx-1 my-2' variant="danger" type="button">
                Cancel
              </Button>
              }

            </td>
          </tr>
          )}


        </tbody>
      </Table>

) : (

  <div className='empty_list empty_table_list'> You have no previous appointment.</div>
)  }
    </div>
  );
};

export default MyAppointmentsTable;
