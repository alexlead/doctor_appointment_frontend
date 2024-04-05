import React from 'react';
import MyAppointments from '../components/Dashboard/AllApointments/MyAppointments';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/slices/userSlice';

interface IDashboardAllAppointmentsProps {
}

const DashboardAllAppointments: React.FunctionComponent<IDashboardAllAppointmentsProps> = (props) => {
  const { permissions } = useSelector(selectUser);

  return (
    <div className="">
      <Container>
        <Row className="align-items-center">
          <Col><h1 className='text-primary my-4'>My Appointments</h1></Col>

          {permissions === "ROLE_PATIENT" &&
          <Col lg={2} md={2} xs={2}>
            <Link to="/dashboard/editappointment" state={{ id: 0 }} className='"nav-link text-white  align-middle px-0'>
              <Button className='' variant="danger" type="button">
                Add New
              </Button>
            </Link>
          </Col>
          }

        </Row>
      </Container>

      <MyAppointments />
    </div>

  );
};

export default DashboardAllAppointments;
