import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticatedAction, authorizedAction } from '../../store/slices/userSlice';
interface IDashboardSidebarProps {
}

const DashboardSidebar: React.FunctionComponent<IDashboardSidebarProps> = (props) => {

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(authenticatedAction(null))
        dispatch(authorizedAction(null))

    }


    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary">
            <div className="d-flex flex-column align-items-center align-items-sm-start my-5 px-3 pt-2 text-white min-vh-100">
                <div className="my-5">
                    <Link to="/dashboard" className='"nav-link text-white  align-middle px-0'>
                        <img src={logo} className='' alt="Doctor Appointment App" />
                    </Link>
                </div>
                <ul className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to="/dashboard/myappointments" className='"nav-link text-white  align-middle px-0'>
                            My Appointments
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/dashboard/profile" className='"nav-link text-white  align-middle px-0'>
                            Profile
                        </Link>
                    </li>

                </ul>
                <div className="my-4">
                    <Link to="/" onClick={logout} className='"nav-link text-white  align-middle px-0'>
                        Logout
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default DashboardSidebar;
