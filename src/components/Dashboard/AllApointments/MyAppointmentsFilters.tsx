import React from 'react';
import { Form } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { filterDates } from './MyAppointments';

interface IMyAppointmentsFiltersProps {
  filter: filterDates | null;
  appyFilter: (datesForRequest: filterDates) => void;
}



const MyAppointmentsFilters: React.FunctionComponent<IMyAppointmentsFiltersProps> = ({ filter, appyFilter }) => {


  const handleCallback = (start: any, end: any) => {
    console.log(start.toLocaleString("en-US"), end.toLocaleString("en-US"))
    const stringDate: string = start.toISOString();
    const startDate = new Date(stringDate)
    startDate.setDate(startDate.getDate() + 1);
    appyFilter({
      startDate: startDate.toISOString().slice(0, 10),
      endDate: end.toISOString().slice(0, 10)
    })
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
