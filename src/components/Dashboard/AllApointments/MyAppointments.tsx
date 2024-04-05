import React, { useEffect, useState } from 'react';
import MyAppointmentsPagination from './MyAppointmentsPagination';
import MyAppointmentsTable from './MyAppointmentsTable';
import MyAppointmentsFilters from './MyAppointmentsFilters';
import { deleteAppointmentById, getPatientAppointmentByPeriod, TDetailedAppointment, TDetailedDoctorAppointment } from '../../../api/patientAppointmentsApi';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/slices/userSlice';

interface IMyAppointmentsProps {
}

export type filterDates = {
  startDate: string;
  endDate: string;
}

const MyAppointments: React.FunctionComponent<IMyAppointmentsProps> = (props) => {

  const { permissions } = useSelector(selectUser);



  const [filter, setFilter] = useState<filterDates | null>(null);
  const [requestFilter, setRequestFilter] = useState<filterDates | null>(null);



  const [appointments, setAppointments] = useState<TDetailedAppointment[] | null>(null);
  const [pageAppointments, setPageAppointments] = useState<TDetailedAppointment[] | null>(null)
  const [doctorAppointments, setDoctorAppointments] = useState<TDetailedDoctorAppointment[] | null>(null);
  const [pageDoctorAppointments, setPageDoctorAppointments] = useState<TDetailedDoctorAppointment[] | null>(null)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [page, setPage] = useState<number>(1);


  const initFilters = () => {


    const datesForFilter: filterDates = {
      startDate: "",
      endDate: ""
    }

    const datesForRequest: filterDates = {
      startDate: "",
      endDate: ""
    }
    const today = new Date();
    today.setMonth(today.getMonth() - 1);
    datesForFilter.startDate = today.toLocaleString("en-US");
    datesForRequest.startDate = today.toISOString().slice(0, 10);


    today.setMonth(today.getMonth() + 2);
    datesForFilter.endDate = today.toLocaleDateString('en-US');
    datesForRequest.endDate = today.toISOString().slice(0, 10);

    setFilter(datesForFilter);
    setRequestFilter(datesForRequest)


  }



  const getPatientsAppointmentList = async (datesForRequest: filterDates | null = null) => {
    try {
      let startPeriod = "", endPeriod = "";
      if (datesForRequest !== null && datesForRequest.startDate.length == 10 && datesForRequest.endDate.length == 10) {
        startPeriod = datesForRequest.startDate;
        endPeriod = datesForRequest.endDate;
      }
      const res = await getPatientAppointmentByPeriod(startPeriod, endPeriod);
      const data = await res.json();
      if (permissions === "ROLE_PATIENT") {
        setAppointments(data.sort((a: TDetailedAppointment, b: TDetailedAppointment) => Date.parse(b.date) - Date.parse(a.date)));
      }
      if (permissions === "ROLE_DOCTOR") {
        setDoctorAppointments(data.sort((a: TDetailedDoctorAppointment, b: TDetailedDoctorAppointment) => Date.parse(b.date) - Date.parse(a.date)));
      }
      setTotalPages(Math.ceil(data.length / 5))
      setPage(1);
      getPageAppointments(1);
    } catch (error) {
      console.log(error);
    }
  }

  function getPageAppointments(id: number) {
    const begin = id * 5 - 5;
    const end = id * 5
    if (permissions === "ROLE_PATIENT") {
      setPageAppointments(appointments?.slice(begin, end) || null)
      console.log(pageAppointments)
    } else if (permissions === "ROLE_DOCTOR") {
      setPageDoctorAppointments(doctorAppointments?.slice(begin, end) || null)
    }
  }


  const selectPage = (id: number) => {
    setPage(id);
    getPageAppointments(id);
  }

  const deleteAppointment = async (id: number) => {

    try {
      const res = await deleteAppointmentById(id);

      console.log(res)

      if (res.status === 200) {
        setPage(1);
        getPatientsAppointmentList();
      }

    } catch (error) {
      console.log(error)
    }
  }

  const appyFilter = (datesForRequest: filterDates) => {
    setRequestFilter(datesForRequest)
    console.log(datesForRequest);
    getPatientsAppointmentList(datesForRequest);
  }

  useEffect(() => {
    if (filter === null) {
      initFilters();
    }
    if ((permissions === "ROLE_PATIENT" && appointments === null) || (permissions === "ROLE_DOCTOR" && doctorAppointments === null)) {
      getPatientsAppointmentList();
    }
    getPageAppointments(1);
  }, [appointments, doctorAppointments])


  return (
    <div className="col-11">
      <MyAppointmentsFilters filter={filter} appyFilter={appyFilter} />
      <MyAppointmentsTable appointments={pageAppointments} doctorAppointments={pageDoctorAppointments} deleteAppointment={deleteAppointment} />
      <MyAppointmentsPagination total={totalPages} currentPage={page} selectPage={selectPage} />
    </div>
  );
};

export default MyAppointments;
