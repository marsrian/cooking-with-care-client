import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';

const override = {
    display: "block",
    margin: "auto",
    borderColor: "red",
  };

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <div>
            <ClockLoader
                cssOverride={override}
                size={150}
                color={"#123abc"}
                loading={loading}
                speedMultiplier={1.5}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}}></Navigate>
};

export default PrivetRoute;