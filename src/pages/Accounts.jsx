import React from 'react'
import Account from '../components/Dashboard/Account/Account'
import DesktopAccount from '../components/Dashboard/Account/DesktopAccount'
import '../Style/scss/RsponsiveAccount/ResponsiveAccount.scss'
const Accounts = () => {
  return (
    <div className='Accounts'>
      <div className='MobileAccounts'>
        <Account />
      </div>
      <div className='DesktopAccounts'>
        <DesktopAccount />
      </div>
    </div>
  )
}

export default Accounts