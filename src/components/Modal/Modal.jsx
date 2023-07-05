import React from 'react'
import DesktopHomePage from '../DesktopHomePage/DesktopHomePage'

const Modal = () => {
    return (
        <div className='Modal'>
            <div className='baler'></div>
            <div className='box'>
                <img src={require('../../assets/image/warning.png')} />
                {/* <img src='../.././assets/image/warning.png' /> */}
                <h1>لطفا تمام فرم ها را کامل کنید !</h1>
            </div>
        </div>
    )
}

export default Modal