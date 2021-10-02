import React from 'react';
import { useSelector } from 'react-redux';
import { UserMsgState, UsersState } from '../reduxs/room/selectors';


function UserList() {
    const state = useSelector(state => state)
    const users = UsersState(state)
    const userMsg = UserMsgState(state)


    return (
        <div className='userlist'>
            <div className='userlist-header'>
                <div className='userlist-header-inner'>
                    
                </div>
            </div>
            <div className='body'>
                <div className='user-message'>
                    <div className='message'>
                        <p className='message-text'>{userMsg}</p>
                    </div>
                </div>
                <ul className='enter-users'>
                    {users.map((item, index) => {
                        return (
                            <li key={index} className='list-item'>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default UserList