import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getLoading, getMsg } from '../reduxs/request/selectors'
import {signUp} from './../reduxs/user/signup/operations'

import './../css/Form.css'
import { RequestReset } from '../reduxs/request/operations'

function SignUp() {
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [mail, setMail] = useState("");

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

    const handleMail = (e) => {
        setMail(e.target.value)
    }

    const userRegist = () => {
        dispatch(signUp(userID, password, mail));
    }

    useEffect(() => {
        return() => {
            dispatch(RequestReset())
        }
    }, [])

    return(
        <div className='sign-up'>
            <div className='form-wrapper'>
                <h2 className='form-label'>ユーザー登録</h2>
                <p className='err-message'>{Error}</p>
                <input type='text' placeholder='ユーザーID' 
                    name='UserID' value={userID} onChange={e => handleUserID(e)} className='form-name'/>
                <br />
                <input type='password' placeholder='パスワード' 
                    name='Password' value={password} onChange={e => handlePassword(e)} className='form-password' />
                <br />
                <input type='email' placeholder='メールアドレス' 
                    name='Mail' value={mail} onChange={e => handleMail(e)} className='form-mail'/>
                <br />
                <input type='button' value='ログイン' disabled={isLoading || !disabled} onClick={() => userRegist()} className='form-submit' />
                <p className='link'>ログイン画面は<Link to='/login'>こちら</Link></p>
            </div>
        </div>
        )
}

export default SignUp;