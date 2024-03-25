import * as React from 'react';
import MyAppointmentsPagination from './MyAppointmentsPagination';
import MyAppointmentsTable from './MyAppointmentsTable';
import MyAppointmentsFilters from './MyAppointmentsFilters';

interface IMyAppointmentsProps {
}

const MyAppointments: React.FunctionComponent<IMyAppointmentsProps> = (props) => {
  return (
    <div className="col-11">
        <MyAppointmentsFilters />
        <MyAppointmentsTable />
        <MyAppointmentsPagination/>
    </div>
  );
};

export default MyAppointments;
