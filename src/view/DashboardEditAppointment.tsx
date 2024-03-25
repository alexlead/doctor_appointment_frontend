import * as React from 'react';
import EditAppointment from '../components/Dashboard/EditAppointment/EditApointment';

interface IDashboardEditAppointmentProps {
}

const DashboardEditAppointment: React.FunctionComponent<IDashboardEditAppointmentProps> = (props) => {
  return (
    <div className="">
        <EditAppointment/>
    </div>
  );
};

export default DashboardEditAppointment;
