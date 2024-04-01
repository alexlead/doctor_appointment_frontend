import React, { useEffect, useState } from 'react';
import MyAppointmentsPagination from './MyAppointmentsPagination';
import MyAppointmentsTable from './MyAppointmentsTable';
import MyAppointmentsFilters from './MyAppointmentsFilters';
import { getPatientAppointmentByPeriod, TDetailedAppointment } from '../../../api/patientAppointmentsApi';

interface IMyAppointmentsProps {
}

const MyAppointments: React.FunctionComponent<IMyAppointmentsProps> = (props) => {



  const [appointments, setAppointments ] = useState<TDetailedAppointment[] | null>(null);
  const [totalPages, setTotalPages ] = useState<number>(0)
  const [page, setPage] = useState<number>(1);

  const getPatientsAppointmentList = async () => {
    try {
      const res = await getPatientAppointmentByPeriod();
      const data = await res.json();
      console.log("appointment: ", data)
      setAppointments(data);
      setTotalPages( Math.ceil( data.length / 5 ) )
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    getPatientsAppointmentList();
  },[])

  return (
    <div className="col-11">
        <MyAppointmentsFilters />
        <MyAppointmentsTable appointments={appointments}/>
        <MyAppointmentsPagination total={totalPages}/>
    </div>
  );
};

export default MyAppointments;
