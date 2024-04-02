import React from 'react';

import DashboardSidebar from '../components/Dashboard/DashboardSidebar';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../store/slices/userSlice';
import {useNavigate } from 'react-router-dom';

interface IDashboardProps {
}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {

    return (
        <div className="container-fluid">

    <div className="row flex-nowrap">
                <DashboardSidebar/>
                <div className="col py-3 my-3">
                    <div className="container">
                        <div className="row">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>

</div>
    );
};

export default Dashboard;
