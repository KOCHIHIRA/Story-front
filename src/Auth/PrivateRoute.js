import React from 'react'
import {
    Route,
    Redirect
} from 'react-router'
import { useSelector } from 'react-redux'
import {getLogedIn} from "./../reduxs/user/selectors"

function PrivateRoute ({ component: Component, ...rest }) {
    const selector = useSelector(state => state);
    const isLogedIn = getLogedIn(selector)
    return(    
        <Route exact
        {...rest}
        render={(props) => isLogedIn ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />}
        />
    )
}

export default PrivateRoute
