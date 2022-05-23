import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
const RequireAuth = ({children}) => {

    const [user] = useAuthState(auth);
    const location = useLocation();

    if(!user){
        return <Navigate to='/signin' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;