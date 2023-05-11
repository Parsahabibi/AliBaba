import React from 'react'
import {Link} from 'react-router-dom'
const Baner = () => {
    return (
        <div className='Banner'>
            <Link to={""}><img src={require('../../../assets/image/HomeImage/game.jpg')} /></Link>
            <Link to={""}><img src={require('../../../assets/image/HomeImage/amirali.jpg')} /></Link>
            
            
        </div>
    )
}

export default Baner