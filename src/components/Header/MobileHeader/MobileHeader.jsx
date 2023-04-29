import React from 'react'

import { Airplane, Bus, Camp, Hotel, Tour, Train } from '../../icons/Icons'
import { Link } from 'react-router-dom'
const MobileHeader = () => {


    const icon = [{id:1 ,title: <Airplane />}, {id:2 ,title: <Train />}, {id:3 ,title: <Bus />}, {id:4 ,title: <Hotel />}, {id:5 ,title: <Tour />}, {id:6 ,title: <Camp />}]

    return (
        <div className='MobileHeader'>
            <div className='bgColorHeader'>
                <div className='imageMobileHeader'>
                    {/* img */}
                    <img src={require('../../../assets/image/Footer/AlibabaIcon.png')} />
                </div>
                <div className='iconMobileHeader'>
                {
                    icon.map(
                        item=>
                        <Link to={""} key={item.id}>
                           {item.title}
                        </Link>
                    )
                }
                </div>
            </div>

        </div>
    )
}

export default MobileHeader