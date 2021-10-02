import React from 'react'
import icons from './../assets/favorite.svg'

const Icon = ({name}) => (
    <svg className={`icon icon-${name}`}>
        <use xlinkHref={`${icons}#${name}`} />
    </svg>
)

export default Icon