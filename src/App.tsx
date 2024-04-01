import React from 'react';
import { Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import './app.scss'
import Dashboard from './pages/Dashboard';
import DashboardCommingAppointments from './view/DashboardCommingAppointments';
import DashboardAllAppointments from './view/DashboardAllAppointments';
import DashboardEditAppointment from './view/DashboardEditAppointment';
import DashboardProfile from './view/DashboardProfile';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './store/slices/userSlice';
import { history } from './_helpers/history';
import PrivateRoute from './components/PrivateRoute';

function App() {


  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
              
              } >
          <Route path='' element={<DashboardCommingAppointments />} />
          <Route path='myappointments' element={<DashboardAllAppointments />} />
          <Route path='editappointment' element={<DashboardEditAppointment />} />
          <Route path='profile' element={<DashboardProfile />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
