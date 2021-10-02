import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
/*
import { getRoomList } from '../../reduxs/room-list/operations'
import {getRoomDatas} from './../../reduxs/room-list/selectors'
*/
import { getRoomList, roomlistReset } from './../../reduxs/list/list_roomlist/operations'
//import { RoomListState } from './../../reduxs/room/selectors'
import { RoomListState } from '../../reduxs/list/selectors'
import { toVote } from './../../reduxs/list/list_voting/operations'
import * as RiIcons from 'react-icons/ri'
import SearchBox from '../SearchBox'

function TabRoomAll(props) {
    const dispatch = useDispatch()
    const [roomNum, setRoomNum] = useState(0)
    const state = useSelector(state => state)
    const roomAll = RoomListState(state)
    
    const getNextData = () => {
        setRoomNum(prevNum => prevNum + 1)
    }

    const Voting = (e) => {
        dispatch(toVote(e.target.name))
    }

    useEffect(() => {
        dispatch(getRoomList(roomNum))
    }, [roomNum])

    useEffect(() => {
        return() => {
            dispatch(roomlistReset())
        }
    }, [])

    if(props.isSelected) {
        //ルーム一覧を表示
        if(roomAll !== null) {
            return(
                <>
                    <SearchBox />
                    <ul className='voting-contents'>
                        {roomAll.map((item, index) => {
                            return(
                                <li key={index} className='voting-item'>
                                    <p className='voting-name'>{item.name}</p>
                                    <p className='voting-title'>{item.title}</p>
                                    <p className='voting-vote'>{item.vote}票</p>
                                    <input type='button' name={item.name}
                                    value='投票' className='voting-button' onClick={e => Voting(e)} />
                                </li>
                            )
                        })}
                    </ul>
                    <div className='morelist-icon' onClick={getNextData}>
                        <RiIcons.RiArrowDownSLine className='more-icon' />
                    </div>
                </>
                )
            } else {
                return(
                    <div className='voting-contents'>
                        <p className='fav-noting'>お気に入りへの登録がありません。</p>
                    </div>
                )
            }
    } else {
        return null;
    }
}

export default TabRoomAll