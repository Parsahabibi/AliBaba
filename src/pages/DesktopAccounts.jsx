import React from 'react'
import DesktopAccount from '../components/Dashboard/Account/DesktopAccount'
import MobileAccount from './MobileAccount'

const DesktopAccounts = () => {
  return (
    <div className='responsiveAccount'>
      <div className='DesktopAccount'>
        <DesktopAccount />
      </div>
      <div className='MobileAccount'>
        <MobileAccount />
      </div>
    </div>
  )
}

export default DesktopAccounts