import React from 'react'
import { Airplane, Bus, Camp, Hotel, Tour, Train } from '../../icons/Icons'
const MobileHeader = () => {
    return (
        <div>
            <div className='bgColorHeader'>
                <div className='imageMobileHeader'>
                    {/* img */}
                    <img src={require('../../../assets/image/Footer/AlibabaIcon.png')} />
                </div>
                <div className='iconMobileHeader'>
                    {/* icon */}
                    <Airplane />
                    <Train />
                    <Bus />
                    <Hotel />
                    <Tour />
                    <Camp />
                </div>
            </div>

        </div>
    )
}

export default MobileHeader