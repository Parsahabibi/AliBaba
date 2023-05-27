import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BackArrow } from '../icons/Icons'

const EditNumbers = () => {


    const [able , setAble] = useState(false)



    return (
        <div className='EditNumbers'>
            <Link to={"/EditAccount"} className='header'>
                <BackArrow />
                <h6>ویرایش شماره موبایل</h6>
            </Link>
            <div className='body'>
                <h5> برای ویرایش، شماره موبایل جدید خود را وارد کنید.</h5>
            </div>
            <div className='Footer'>
                <button className={able === false ? 'Able' : 'disable'}>تایید و دریافت کد</button>
            </div>
        </div>
    )
}

export default EditNumbers