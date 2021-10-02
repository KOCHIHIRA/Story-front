import { Home, Loging, Ranking, Room, Roomlist, SideBar, SignUp, Voting } from './template'

import Unknown from './unknown'

import React from 'react'
import {
    Switch,
    Route
} from 'react-router'
import PrivateRoute from './Auth/PrivateRoute'
import PublicRoute from './Auth/PublicRoute'

import './css/App.css'
import { sessionOutChecked } from './reduxs/user/session/operations'
import { useDispatch, useSelector } from 'react-redux'
import { getSession } from './reduxs/user/selectors'


function Routing() {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const isSession = getSession(state)
    const checked = () => {
        dispatch(sessionOutChecked());
    }
    return(
        <>
        <SideBar />
            <div className={isSession ? 'session-dialog-background' : 'session-dialog-background active'}></div>
                <div className={isSession ? 'session-dialog' : 'session-dialog active'}>
                    <div className='session-dialog-wrapper'>
                    <h3 className='session-dialog-word'>セッションの有効期限が切れました。再度ログインしてください。</h3>
                    <span className='session-dialog-button' onClick={() => checked()}>確認</span>
                    </div>
                </div>
                <Switch>
                    <PublicRoute exact path="/login" component={Loging} />
                    <PublicRoute exact path="/signin" component={SignUp} />
                    <PrivateRoute exact path="/" component={Roomlist} />
                    <PrivateRoute path="/room/:name" component={Room} />
                    <PrivateRoute exact path="/voting" component={Voting} />
                    <PrivateRoute exact path="/ranking" component={Ranking} />
                    <Route>
                        <Unknown />
                    </Route>
                </Switch>
        </>
    );
}



export default Routing;