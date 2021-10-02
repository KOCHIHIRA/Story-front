import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getLoading, getMsg } from '../reduxs/request/selectors'

import './../css/Form.css';
import { Login } from '../reduxs/user/login/operations'
import { RequestReset } from '../reduxs/request/operations'

function LogIn() {
    const [userID, setUserID] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(false);

    const selector = useSelector(state => state);
    const isLoading = getLoading(selector)
    const Error = getMsg(selector)

    const dispatch = useDispatch();

    const handleUserID = (e) => {
        setUserID(e.target.value)
        setDisabled(userID.length >= 1 && password.length >= 1);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setDisabled(userID.length >= 1 && password.length >= 1);
    }

    const callLoging = () => {
        dispatch(Login(userID, password))
    }

    useEffect(() => {
        return() => {
            dispatch(RequestReset())
        }
    }, [])
    return(
        <div className='log-in'>
            <div className='form-wrapper'>
                <h2 className='form-label'>ログイン</h2>
                <h2>{isLoading ? "読み込み中" : ""}</h2>
                <p className='err-message'>{Error}</p>
                <input type='text' placeholder='ユーザーID' 
                    name='UserID' value={userID} onChange={e => handleUserID(e)} className='form-name'/>
                <br />
                <input type='password' placeholder='パスワード' 
                    name='Password' value={password} onChange={e => handlePassword(e)} className='form-password'/>
                <br />
                <input type='button' value='ログイン' disabled={isLoading || !disabled} onClick={() => callLoging()} 
                className='form-submit'/>
                <p className='link'>ユーザー登録がお済出ない方は<Link to='/signin'>こちら</Link></p>
            </div>
        </div>
        )
}


export default LogIn
