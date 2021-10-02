import React from 'react';
import { useState } from "react"
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from '../ObjectData/SideBarData'

import './../css/SideBar.css'

function SideBar() {
    const [IsClicked, setIsClicked] = useState(false);

    const showSideBar = () => {
        setIsClicked(!IsClicked);
    }

    return (
        <>
            <div className="header">
                <Link to="#" className='menu-icon'>
                    <FaIcons.FaBars onClick={showSideBar} />
                </Link>
            </div>
            <nav className={IsClicked ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    <li className='nav-menu-toggle'>
                        <Link to='#' className='menu-icon'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default SideBar