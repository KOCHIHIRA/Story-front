import React, { useEffect } from 'react'

function NavTab(props) {
    return(
        <div className='voting-object'>
            <ul className='navtab'>
                {props.tabs.map((tab) => {
                    const active = (tab === props.selected ? 'nav-active' : '')
                    return (
                        <li key={tab} className={'navtab-item ' + active}>
                            <a className={'nav-link ' + active} onClick={() => props.setSelected(tab)}>
                                {tab}
                            </a>
                        </li>
                    )
                })}
            </ul>
            {props.children}
        </div>
    )
}

export default NavTab