import React, { useEffect, useState } from 'react';
import MyAppointmentsPagination from './MyAppointmentsPagination';
import MyAppointmentsTable from './MyAppointmentsTable';
import MyAppointmentsFilters from './MyAppointmentsFilters';
import { getPatientAppointmentByPeriod, TDetailedAppointment } from '../../../api/patientAppointmentsApi';

interface IMyAppointmentsProps {
}

const MyAppointments: React.FunctionComponent<IMyAppointmentsProps> = (props) => {

  const today = new Date();
  today.setMonth(today.getMonth() - 1 );
  const startDate:string = today.toLocaleString("en-US" );
  today.setMonth(today.getMonth() + 2);
  const endDate:string = today.toLocaleDateString('en-US');

  const [appointments, setAppointments ] = useState<TDetailedAppointment[] | null>(null);
  const [pageAppointments, setPageAppointments ] = useState <TDetailedAppointment[] | null>(null)
  const [totalPages, setTotalPages ] = useState<number>(0)
  const [page, setPage] = useState<number>(1);


  const getPatientsAppointmentList = async () => {
    try {
      const res = await getPatientAppointmentByPeriod();
      const data = await res.json();
      setAppointments(data.sort( (a:TDetailedAppointment, b: TDetailedAppointment) => Date.parse(b.date) - Date.parse(a.date) ));
      setTotalPages( Math.ceil( data.length / 5 ) )
      getPageAppointments( 1 );
    } catch (error) {
      console.log(error);
    }
  }

  function getPageAppointments (id: number ) {
    const begin = id * 5 - 5;
    const end = id * 5
    setPageAppointments( appointments?.slice(begin, end) || null )
    console.log( pageAppointments )
  }


  const selectPage = (id: number) => {
    setPage(id);
    getPageAppointments ( id );
  } 

  useEffect(()=>{
    if( appointments === null ) {
      getPatientsAppointmentList();
    }
    getPageAppointments(1);
  },[appointments])

  return (
    <div className="col-11">
        <MyAppointmentsFilters startDate={startDate} endDate={endDate} />
        <MyAppointmentsTable appointments={pageAppointments}/>
        <MyAppointmentsPagination total={totalPages} currentPage={page} selectPage={selectPage} />
    </div>
  );
};

export default MyAppointments;
