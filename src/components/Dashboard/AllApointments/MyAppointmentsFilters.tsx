import React from 'react';
import { Form } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { filterDates } from './MyAppointments';

interface IMyAppointmentsFiltersProps {
  filter: filterDates | null
}



const MyAppointmentsFilters: React.FunctionComponent<IMyAppointmentsFiltersProps> = ({ filter }) => {


  const handleCallback = (start: any, end: any) => {
    console.log(start.toISOString().slice(0, 10), end.toISOString().slice(0, 10));
  };
  return (
    <div className="my-4">
      Filter:
{filter && 
      <DateRangePicker
      initialSettings={{ startDate: filter.startDate, endDate: filter.endDate }}
      onCallback={handleCallback}
      >
        <input type="text" className="form-control" />
      </DateRangePicker>
      }



    </div>
  );
};

export default MyAppointmentsFilters;
