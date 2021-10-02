import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import NavTab from './NavTab';
import TabRoomAll from './TabRoomAll';
import TabRoomFav from './TabRoomFav';

import './../../css/Voting.css';


function Voting (props)  {
    const dispatch = useDispatch()
    const [isSelected, setSelected] = useState('all');

    const checkSelected = (tab) => {
        setSelected(tab)
    }

    return(
        <div className='voting'>
            <div className='voting-sample'>
                <p className='sample-view'>サンプル</p>
                <div className='voting-item'>
                    <p className='voting-name'>ルーム名</p>
                    <p className='voting-title'>タイトル</p>
                    <p className='voting-vote'>票数</p>
                    <p className='voting-button'>投票</p>
                </div>
            </div>
            <NavTab tabs={["all", "Favorite"]} selected={isSelected}
                setSelected={checkSelected}>
                <TabRoomAll isSelected={isSelected === "all"} />
                <TabRoomFav isSelected={isSelected === "Favorite"} />
            </NavTab>
        </div>
    )
}

export default Voting