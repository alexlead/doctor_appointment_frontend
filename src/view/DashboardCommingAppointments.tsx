import * as React from 'react';
import Dashboard from '../pages/Dashboard';
import Container from 'react-bootstrap/Container';
import { Button, Col, Row } from 'react-bootstrap';
import UpcommingAppointments from '../components/Dashboard/UpcommingAppointments';
import PreviousAppointments from '../components/Dashboard/PreviousAppointments';
import { Link } from 'react-router-dom';

interface IDashboardCommingAppointmentsProps {
}

interface IAppointment {
  id: number;
  doctor: string;
  date: "2024-04-11",
  "slotId": 1,
  "slotDescription": "10:00-10:30"
}

const DashboardCommingAppointments: React.FunctionComponent<IDashboardCommingAppointmentsProps> = (props) => {

  const appointments = [
    {
      "id": 4,
      "doctor": "Jogan Schtefan",
      "date": "2024-04-11",
      "slotId": 1,
      "slotDescription": "10:00-10:30"
    },
    {
      "id": 5,
      "doctor": "Jogan Schtefan",
      "date": "2024-04-10",
      "slotId": 1,
      "slotDescription": "10:00-10:30"
    },
    {
      "id": 2,
      "doctor": "Jogan Schtefan",
      "date": "2024-02-10",
      "slotId": 1,
      "slotDescription": "10:00-10:30"
    },
    {
      "id": 1,
      "doctor": "Jogan Schtefan",
      "date": "2024-02-11",
      "slotId": 1,
      "slotDescription": "10:00-10:30"
    }

  ]

  const getFutureVisits = () => {

  }

  return (
    <div className='py-5'>


      <Container>
        <Row>
          <Col>
            <UpcommingAppointments />
          </Col>
        </Row>
        <Row>
          <Col>
            <PreviousAppointments />
          </Col>
        </Row>
        <Row>
          <Col className='my-4 text-right' xs={{ span: 4, offset: 6 }}>
            <Link to="/dashboard/myappointments" className='"nav-link text-white  align-middle px-0'>
              <Button className=' mx-1' variant="danger" type="button">
              All Appointments
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default DashboardCommingAppointments;
