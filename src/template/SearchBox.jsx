import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {getRoomList} from './../reduxs/list/list_search/operations'

function SearchBox() {
    const [roomName, setRoomName] = useState("")
    const dispatch = useDispatch()

    const handleRoomName = (e) => {
        setRoomName(e.target.value)
    }

    //Enterで検索する
    const searchFor = (e) => {
        if(e.key === 'Enter') {
            dispatch(getRoomList(roomName))
        }
    }
    return(
        <div className='search-box-wrapper'>
            <input type='text' value={roomName} placeholder='searching for'
            className='search-box-content' onChange={handleRoomName} 
            onKeyPress={e => searchFor(e)}/>
        </div>
    )
}

export default SearchBox