import  React from 'react';
import { Form } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';

interface IMyAppointmentsFiltersProps {
  startDate: string;
  endDate: string;
}



const MyAppointmentsFilters: React.FunctionComponent<IMyAppointmentsFiltersProps> = ({startDate, endDate}) => {


  const handleCallback = (start:any, end:any) => {
          console.log(start.toISOString().slice(0,10), end.toISOString().slice(0,10) );
     };
  return (
    <div className="my-4">
        Filter: 

      <DateRangePicker
  initialSettings={{ startDate: startDate, endDate: endDate }}
  onCallback={handleCallback}
>
  <input type="text" className="form-control"/>
</DateRangePicker>



    </div>
  );
};

export default MyAppointmentsFilters;
