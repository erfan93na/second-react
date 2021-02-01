
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component,...rest}) => {
    const isLoggedIn=+localStorage.getItem("isLoggedIn")
    return (

               
        <Route   {...rest} render={props => (
            isLoggedIn ?
                <Component {...props} />
            : <Redirect  exact to={{pathname:"/login",state:rest.location.pathname}}/>
        )} />
    );
};

export default PrivateRoute;