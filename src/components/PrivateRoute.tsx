import React from 'react';
import { useSelector } from 'react-redux';
import { history } from '../_helpers/history';
import { Navigate } from 'react-router-dom';
import { selectUser } from '../store/slices/userSlice';
interface IPrivateRouteProps {
    children : any
}

const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = ({children}) => {
  
    const user = useSelector(selectUser);
    
    if (!user.accessToken || !user.permissions) {
        return <Navigate to="/" state={{ from: history.location }} />
    }

  return children;
};

export default PrivateRoute;
