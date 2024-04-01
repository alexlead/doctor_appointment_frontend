import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './app.scss'
import Dashboard from './pages/Dashboard';
import DashboardCommingAppointments from './view/DashboardCommingAppointments';
import DashboardAllAppointments from './view/DashboardAllAppointments';
import DashboardEditAppointment from './view/DashboardEditAppointment';
import DashboardProfile from './view/DashboardProfile';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './store/slices/userSlice';

function App() {




  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='' element={<DashboardCommingAppointments />} />
          <Route path='myappointments' element={<DashboardAllAppointments />} />
          <Route path='editappointment' element={<DashboardEditAppointment />} />
          <Route path='profile' element={<DashboardProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
