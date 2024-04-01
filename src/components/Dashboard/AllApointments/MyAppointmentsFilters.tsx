import * as React from 'react';
import { Form } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';

interface IMyAppointmentsFiltersProps {
}

type filterDateOptions = {
  year: string;
  month: string;
  day: string;
}

const MyAppointmentsFilters: React.FunctionComponent<IMyAppointmentsFiltersProps> = (props) => {

  const dateOptions: filterDateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
}

  const today = new Date();
  today.setMonth(today.getMonth() - 1 );
  const startDate = today.toLocaleString("en-US" );
  today.setMonth(today.getMonth() + 2);
  const endDate = today.toLocaleDateString('en-US');

  console.log(startDate)
  console.log(endDate)

  return (
    <div className="my-4">
        Filter: 

      <DateRangePicker
  initialSettings={{ startDate: startDate, endDate: endDate }}
>
  <input type="text" className="form-control" />
</DateRangePicker>



    </div>
  );
};

export default MyAppointmentsFilters;
