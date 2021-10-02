import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as FaIcons from 'react-icons/fa';
import * as GrIcons from 'react-icons/gr'

import { RoomCreate } from '../reduxs/room/create_room/operations';
import { getLoading, getMsg, getSuccess } from '../reduxs/request/selectors';
import { RequestReset } from '../reduxs/request/operations';
import './../css/CreateRoomDialog.css'

function CreateRoomDialog(props) {
    const [roomName, setRoomName] = useState("");
    const [storyTitle, setStoryTitle] = useState("");
    const [disabled, setDisabled] = useState(false);

    const dispatch = useDispatch();

    const state = useSelector(state => state);
    const isLoading = getLoading(state);
    const isSuccess = getSuccess(state);
    const errMsg = getMsg(state)

    const handleRoomName = (e) => {
        setRoomName(e.target.value);
        setDisabled((roomName >= 1 && roomName <= 20) 
        && (storyTitle >= 1 && storyTitle <= 20));
    }
    
    const handleStoryTitle = (e) => {
        setStoryTitle(e.target.value);
        setDisabled((roomName >= 1 && roomName <= 20) 
        && (storyTitle >= 1 && storyTitle <= 20));
    }

    const CreateRoom = () => {
        dispatch(RoomCreate(roomName, storyTitle));
    }
    
    useEffect(() => {
        return () => {
            dispatch(RequestReset())
        }
    }, [])

    useEffect(() => {
        if(isSuccess) {
            props.OnClose();
        }
    }, [isSuccess])

    return(
        <div className='create-room-dialog'>
            <div className='create-room-wrapper'>
                <div className='close-button' onClick={() => props.OnClose()}>
                    <GrIcons.GrFormClose />
                </div>
                <div className='dialog-icon'>
                    <FaIcons.FaBook />
                </div>
                <div className='create-room-form'>
                <p className='err-message'>{errMsg}</p>
                <input type='text' placeholder='ルーム名' 
                    name='room-name' value={roomName} onChange={e => handleRoomName(e)} className='room-name'/>
                <br />
                <input type='text' placeholder='Storyのタイトル' 
                    name='title' value={storyTitle} onChange={e => handleStoryTitle(e)} className='room-title'/>
                <br />
                <input type='button' value='作成' disabled={!disabled & isLoading} onClick={CreateRoom}
                className='create-button' />
                </div>
            </div>
        </div>
    )
}

export default CreateRoomDialog;