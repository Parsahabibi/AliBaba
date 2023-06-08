import React from 'react'

const HoverButton = ({ title, icon }) => {
    return (
        <div className='HoverButton'>
            {icon}
            <h6>{title}</h6>
        </div>
    )
}

export default HoverButton