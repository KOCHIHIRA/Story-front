import React, { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as RiIcons from 'react-icons/ri'
import { push } from 'connected-react-router';

import './../css/Room.css'
import UserList from './UserList';
import { init, sendMsg, closeWs} from '../chat';

import ReactTooltip from "react-tooltip";
import { RoomNameState, RoomTitleState, RoomOwnerState,RoomVoteState, StorysState} from './../reduxs/room/selectors';
import { setInitRoomLogs, addStorys, joinUsers, outUsers, setRoomInfo, roomOut } from '../reduxs/room/room_log/operations';
import * as FaICons from 'react-icons/fa'

import FavoriteIcon from './../icon/Icon'

function Room ()  {
    var socket = null;
    const [msg, setMsg] = useState("");
    const [pages, setPage] = useState(0);
    const [isTopPage, setTopPage] = useState(false);
    const [isMark, onMark] = useState(false)

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const storys = StorysState(state)
    const Name = RoomNameState(state)
    const Title = RoomTitleState(state)
    const Owner = RoomOwnerState(state)
    const Vote = RoomVoteState(state)

    const onMarkFavorite = () => {
        if(isMark) {
            //お気に入り登録
            delToFavorite(Name, Title, Owner)
        } else {
            //お気に入り削除
            setToFavorite(Name, Title, Owner)
        }
        onMark(!isMark)
    }

    const isFavExists = (roomName) => {
        var favorite = []
        favorite = JSON.parse(localStorage.getItem("favorite"))
       if(favorite !== null) {
          return favorite.findIndex((val) => val.name === roomName)
       }
       return -1
    }

    const setToFavorite = (roomName, roomTitle, roomOwner) => {
        var favorite = []
        const flag = isFavExists(roomName) === -1
        if(flag) {
            var favorite = JSON.parse(localStorage.getItem("favorite"))
            if(favorite === null) {
                favorite = []
            }
            favorite.push({name: roomName, title: roomTitle, owner: roomOwner, vote: Vote})
            localStorage.setItem("favorite", JSON.stringify(favorite))
        }
    }

    const delToFavorite = (roomName) => {
        var favorite = []
        const index = isFavExists(roomName)
        if(index !== -1) {
            favorite = JSON.parse(localStorage.getItem("favorite"))
            const delItem = favorite.splice(index, 1)
            localStorage.setItem("favorite", JSON.stringify(favorite))
        }
    }

    useEffect(() => {
        socket = init()
        socket.onopen = () => {
            console.log("Successfully Connected");
        };

        socket.onmessage = msg => {
            const data = JSON.parse(msg.data);
            switch(data.type) {
                case "INIT_DATA":
                    //最初にルームに入室した際に受け取る初期データ
                    if(data.users !== null && data.storys !== null) {
                        dispatch(setInitRoomLogs(data.storys, data.users))
                    } else if(data.users === null && data.storys !== null) {
                        dispatch(addStorys(data.storys))
                    } else if(data.storys === null && data.users !== null) {
                        dispatch(joinUsers(data.users))
                    }
                    //isFavExistsはお気に入り登録が既にされているかどうかのフラグ
                    onMark(isFavExists(data.name, data.title, data.owner) !== -1)
                    dispatch(setRoomInfo(data.name, data.title, data.owner, data.vote))
                    break;
                case "ADD_STORY":
                    dispatch(addStorys(data.storys))
                    break;
                case "JOIN_USER":
                    dispatch(joinUsers(data.users))
                    break;
                case "OUT_USER":
                    console.log(data.users)
                    dispatch(outUsers(data.users))
                    break;
            }
          };

          socket.onclose = event => {
            console.log("Socket Closed Connection: ", event);
          };
        
          socket.onerror = error => {
            console.log("Socket Error: ", error);
          };
          
    }, []);


    useEffect(() => {
        return() => {       
            closeWs()
            dispatch(roomOut())
        }
    }, [])

    useEffect(() => {
        setTopPage(!(pages === 0))
    }, [pages])

    const nextPage = () => {
        setPage(prev => prev + 1)
    }

    const prevPage = () => {
        if(pages > 0) {
            setPage(prev => prev - 1)
        }
    }

    const changePage = e => {
        setPage(e.target.value)
    }

    const changeMsg = e => {
        setMsg(e.target.value);
    }

    const send = () => {
        sendMsg(msg);
    }

    const RoomOut = () => {
        dispatch(push("/"))
    }

    
    return(
        <div className='story'>
            <div className='story-contents'>
                <div className='story-header'>
                    <div className='story-header-inner'>
                        <h3 className='story-roomname'>{Name}</h3>
                        <h1 className='story-title'>{Title}</h1>
                        <span className='room-out' onClick={RoomOut}>退出</span>
                        <div className='favorite-icon' onClick={onMarkFavorite}>
                            <FavoriteIcon name={isMark ? 'icon-star-full' : 'icon-star-empty'} />
                        </div>
                    </div>
                </div>
                <div className='story-area-wrapper'>
                    <div className='story-area-inner'>
                        {storys.map((item, index) => {
                            return(
                                <div key={index}>
                                    <span data-tip data-for={item.user} className='story-sentence'>
                                        {item.sentence}
                                    </span>
                                    <ReactTooltip id={item.user} type='warning' data-background-color="e.g. yellow" place='top'>
                                        <span>{item.user}</span>
                                    </ReactTooltip>
                                </div>
                            )
                            })}
                    </div>
                </div>
                <div className='page-num-content'>
                    <div className='page-num-inner'>
                        <div className={isTopPage ? 'page-scene' : 'page-scene none'} onClick={prevPage}>
                            <RiIcons.RiArrowLeftSLine />
                        </div>
                        <input type='text' value={pages} className='page-num' onChange={e => changePage(e)} disabled={false} />
                        <div className='page-scene' onClick={nextPage} >
                            <RiIcons.RiArrowRightSLine />
                        </div>
                    </div>
                </div>
                <div className='story-footer'>
                    <div className='story-footer-inner'>
                        <input type='text' name='message' value={msg} className='footer-text' placeholder='ストーリーを作ろう' onChange={changeMsg}/>
                        <span className='write-button' onClick={send}>
                            <FaICons.FaPencilAlt />
                        </span>
                    </div>
                </div>
            </div>
            <UserList />
        </div>
    )
}

export default Room