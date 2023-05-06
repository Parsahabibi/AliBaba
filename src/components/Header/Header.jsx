import React from 'react'
import ButtonSearch from '../ButtonSearch/ButtonSearch'
import MobileHeader from './MobileHeader/MobileHeader'
import DesktopHeader from './DesktopHeader/DesktopHeader'
import DropDown from '../DropDown/DropDown'

const Header = () => {
  return (
    <div>
      {/* <ButtonSearch /> */}
      {/* <MobileHeader /> */}
      <DesktopHeader />
    </div>
  )
}

export default Header