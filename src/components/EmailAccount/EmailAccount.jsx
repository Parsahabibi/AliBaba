import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BackArrow } from '../icons/Icons'

const EmailAccount = () => {


    const [able, setAble] = useState(false)


    return (
        <div className='EmailAccount'>
            <Link to={"/EditAccount"} className='HeaderEmailAccount'>
                <BackArrow />
                <h6>ویرایش آدرس ایمیل</h6>
            </Link>
            <div className='body'>
                <h5> برای ویرایش، آدرس ایمیل جدید خود را وارد کنید. </h5>
            </div>
            <div className='Footer'>
                <button className={able === false ? 'Able' : 'disable'}>تایید</button>
            </div>
        </div>
    )
}

export default EmailAccount