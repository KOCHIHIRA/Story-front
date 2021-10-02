import React from 'react'
import {
    Route,
    Redirect
} from 'react-router'
import { useSelector } from 'react-redux'
import {getLogedIn} from './../reduxs/user/selectors'

function PublicRoute ({ component: Component, ...rest }) {
    const selector = useSelector(state => state);
    const isLogedIn = getLogedIn(selector);
    return(    
        <Route 
        {...rest}
        render={(props) => !isLogedIn ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />}
        />
    )
}

export default PublicRoute