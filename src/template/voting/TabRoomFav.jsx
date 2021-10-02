import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toVote } from '../../reduxs/list/list_voting/operations'


function TabRoomFav(props) {
    const [roomNum, setRoomNum] = useState(0)
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    //localstrageからルームログを取ってくる
    const [roomFav, setRoomFav] = useState([]);
    
    const getNextData = () => {
        setRoomNum(prevNum => prevNum + 1)
    }

    const ToVote = (e) => {
        dispatch(toVote(roomFav[e.target.name].name))
    }

    useEffect(() => {
        setRoomFav(JSON.parse(localStorage.getItem("favorite")))
    }, [roomNum])


    if(props.isSelected) {
        //ルーム一覧を表示
        if(roomFav !== null) {
            return(
                <ul className='voting-contents'>
                    {roomFav.map((item, index) => {
                        return(
                            <li key={index} className='voting-item'>
                                <p className='voting-name'>{item.name}</p>
                                <p className='voting-title'>{item.title}</p>
                                <p className='voting-vote'>{item.vote}票</p>
                                <input type='button' name={index}
                                value='投票' className='voting-button' onClick={e => ToVote(e)} />
                            </li>
                        )
                    })}
                </ul>
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

export default TabRoomFav