import * as React from 'react';
import { Form } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';

interface IMyAppointmentsFiltersProps {
}

const MyAppointmentsFilters: React.FunctionComponent<IMyAppointmentsFiltersProps> = (props) => {

  return (
    <div className="my-4">
        Filter: 

      <DateRangePicker
  initialSettings={{ startDate: '01/01/2020', endDate: '01/15/2020' }}
>
  <input type="text" className="form-control" />
</DateRangePicker>



    </div>
  );
};

export default MyAppointmentsFilters;
