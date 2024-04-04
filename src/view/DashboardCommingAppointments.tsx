import * as React from 'react';
import Dashboard from '../pages/Dashboard';
import Container from 'react-bootstrap/Container';
import { Button, Col, Row } from 'react-bootstrap';
import UpcommingAppointments from '../components/Dashboard/UpcommingAppointments';
import PreviousAppointments from '../components/Dashboard/PreviousAppointments';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/slices/userSlice';

interface IDashboardCommingAppointmentsProps {
}

const DashboardCommingAppointments: React.FunctionComponent<IDashboardCommingAppointmentsProps> = (props) => {

  const { permissions } = useSelector(selectUser);

  
  return (
    <div className='py-5'>


      <Container>
        <Row>
          <Col>


            <UpcommingAppointments />
          </Col>
        </Row>
        {permissions === "ROLE_PATIENT" && 
        <Row>
          <Col>
            <PreviousAppointments />
          </Col>
        </Row>
        }
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
