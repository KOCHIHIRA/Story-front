import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from './../reduxs/user/login/operations';
import { getUserName } from '../reduxs/user/selectors';

function Home() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    var userName = getUserName(selector)

    const handleLogout = () => {
        dispatch(Logout());
    }
    
    return(
        <div className='home'>
            <h2>{userName}</h2>
            <h3>ホーム画面</h3>
            <button onClick={handleLogout}>ログアウト</button>
        </div>
    )

}

export default Home
