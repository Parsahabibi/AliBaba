import React from 'react'
import { LeftArrow } from '../../icons/Icons'
import { Link } from "react-router-dom"
const ApplicationAlibaba = () => {
    return (
        <div className='ApplicationAlibaba'>
            <div className='right'>
                <div className='QrCode'>
                    <img src={require('../../../assets/image/HomeImage/QrcodeofAliBabaApplicatain.jpg')} />
                </div>
                <div className='description'>
                    <div className='title'>
                        <h3> اپلیکیشن علی‌بابا </h3>
                        <h4> سریع‌تر و مطمئن‌تر به سفر بروید </h4>
                    </div>
                    <div className='link'>
                        <Link className='link' to={''}>
                            <p> مشاهده لینک های دانلود </p>
                            <LeftArrow />
                        </Link>
                    </div>
                    <div className='icon'>
                        <div className='ios' >
                            <img src={require('../../../assets/image/HomeImage/ios.jpg')} />
                        </div>
                        <div className='android'>
                            <img src={require('../../../assets/image/HomeImage/anroid.jpg')} />
                        </div>
                        <div className='text'>
                            <h5>قابلیت نصب روی Android و iOS</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='left'>
                <img src={require('../../../assets/image/HomeImage/aliBabaApplication.jpg')} />
            </div>
        </div>
    )
}

export default ApplicationAlibaba