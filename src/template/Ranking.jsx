import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getRanking, resetRanking } from '../reduxs/list/list_ranking/operations';
import { RoomListState } from '../reduxs/list/selectors';

import './../css/Ranking.css'

function Ranking ()  {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const ranking = RoomListState(state)

    
    useEffect(() => {
        dispatch(getRanking())
    }, [])

    useEffect(() => {
        return() => {
            dispatch(resetRanking())
        }
    }, [])
    
    return(
        <div className='ranking'>
            <div className='title'>
                <h1>Rank</h1>
            </div>
            <div className='ranking-contents'>
            <table className="ranking-table">
                <thead className="table-dark">
                    <tr>
                        <th className='th-rank'>rank</th>
                        <th className='th-name'>name</th>
                        <th className='th-title'>title</th>
                        <th className='th-vote'>vote</th>
                    </tr>
                </thead>
                <tbody>
                    {ranking.map((item, index) =>
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.title}</td>
                            <td>{item.vote}票</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Ranking