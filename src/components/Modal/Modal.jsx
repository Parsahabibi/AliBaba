import React from 'react'
import DesktopHomePage from '../DesktopHomePage/DesktopHomePage'

const Modal = () => {
    return (
        <div className='Modal'>
            <div className='error'>
                <div className='baler'></div>
                <div className='box'>
                    <img src='../.././assets/image/warning.png' />
                    <h3>لطفا تمام فرم ها را وارد کنید</h3>
                </div>
            </div>
            <div>
                <DesktopHomePage />
            </div>
        </div>
    )
}

export default Modal