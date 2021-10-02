import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri'

import CreateRoomDialog from './CreateRoomDialog';
import './../css/Roomlist.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRoomList, roomlistReset } from './../reduxs/list/list_roomlist/operations'
import { enterRoom } from '../reduxs/room/enter_room/operations';
import { RoomListState } from './../reduxs/list/selectors'

import { Logout } from './../reduxs/user/login/operations';

import SearchBox from './SearchBox'



function Roomlist() {
    const [IsOpen, setIsOpen] = useState(false);
    const [roomNum, getRoomNum] = useState(0);

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const roomList = RoomListState(state);
    //ルームリストのオフセット位置を更新する

    //ログアウトリクエスト
    const handleLogout = () => {
        dispatch(Logout());
    }

    const moreGetRoom = () => {
        getRoomNum(roomNum => roomNum + 1);
    }

    //ルームの表示非表示の切り替え
    const toggleDialog = () => {
        setIsOpen(!IsOpen);
    }

    const EnterRoom = (e) => {
        const joinRoomInfo = roomList[e.target.name]
        console.log(joinRoomInfo)
        dispatch(enterRoom(joinRoomInfo));
    }

   useEffect(() => {
        dispatch(getRoomList(roomNum))
   }, [roomNum])

   useEffect(() => {
       return() => {
           //componentUnMount
           dispatch(roomlistReset())
       }
   }, [])

    return (
        <div className='room'>
            <div className={IsOpen ? 'room-wrapper-active' : 'room-wrapper'}>
                <div className='room-page-header'>
                    <p className='logout-btn' onClick={handleLogout}>
                        ログアウト
                    </p>
                    <div className='create-room' onClick={toggleDialog}>
                        <FaIcons.FaBook />
                        <p>ルーム作成</p>
                    </div>
                </div>
                <div className='search-box-wrapper'>
                    <SearchBox />
                </div>
                <ul className="rooms">
                    {roomList.map((item, index) => {
                        return(
                            <li key={index} className="room-contents">
                                <p className='room-contents-name'>{item.name}</p>
                                <h3 className='room-contents-title'>{item.title}</h3>
                                <p className='room-contents-owner'>オーナー: {item.owner}</p>
                                <input type='button' value="参加" name={index} 
                                onClick={e => EnterRoom(e)} className="room-contents-button"/>
                            </li>
                            )
                    })}
                </ul>
            </div>
            {IsOpen ? <CreateRoomDialog isShow={IsOpen} OnClose={toggleDialog} /> : <></>}
            <div className='morelist-icon' onClick={moreGetRoom}>
                <RiIcons.RiArrowDownSLine className='more-icon' />
            </div>
        </div>
    )
}

export default Roomlist
