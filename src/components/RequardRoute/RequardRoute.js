import React from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import useFirebase from '../../useFirebase/useFirebase';

const RequardRoute = ({children}) => {
    const {user} = useFirebase();
    const location = useLocation();
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequardRoute;