import React from 'react'
import ListOfPassengers from '../ListOfPassengers/ListOfPassengers'
import Passengers from '../Passengers/Passengers'

const PassengerResponsive = () => {
  return (
    <div className='PassengerResponsive'>
        <div className='MobilePassengers'>
            <ListOfPassengers />
        </div>
        <div className='DesktopPassengers'>
            <Passengers />
        </div>
    </div>
  )
}

export default PassengerResponsive