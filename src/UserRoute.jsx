import React from "react";
import { Navigate } from "react-router";
import withUser from "./withUser";


function UserRoute({ user, children }) {
   
    
    if (!user) {
        return <Navigate to ="/login" />;

    }
    return children;
}

export default withUser(UserRoute);