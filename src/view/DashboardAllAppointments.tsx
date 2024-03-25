import * as React from 'react';
import MyAppointments from '../components/Dashboard/AllApointments/MyAppointments';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IDashboardAllAppointmentsProps {
}

const DashboardAllAppointments: React.FunctionComponent<IDashboardAllAppointmentsProps> = (props) => {
  return (
<div className="">
  <Container>
    <Row className="align-items-center">
    <Col><h1 className='text-primary my-4'>My Appointments</h1></Col>
      
    <Col lg={2} md={2} xs={2}> 
    <Link to="/dashboard/editappointment" className='"nav-link text-white  align-middle px-0'>

    <Button className='' variant="danger" type="button">
                Add New 
              </Button>
    </Link>
    </Col>
    </Row>
  </Container>

    <MyAppointments />
</div>

  );
};

export default DashboardAllAppointments;
