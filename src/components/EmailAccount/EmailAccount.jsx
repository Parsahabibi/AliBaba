import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BackArrow } from '../icons/Icons'
import NewSearchInput from '../NewSearchInput/NewSearchInput'

const EmailAccount = () => {


    const [able, setAble] = useState(false)


    return (
        <div className='EmailAccount'>
            <Link to={"/EditAccount"} className='HeaderEmailAccount'>
                <BackArrow />
                <h6>ویرایش آدرس ایمیل</h6>
            </Link>
            <div className='body'>
                <h5 style={{paddingBottom:'32px'}}> برای ویرایش، آدرس ایمیل جدید خود را وارد کنید. </h5>
                <div style={{border:'1px solid rgba(0, 0, 0, .12)' , borderRadius:'8px' , fontSize:'14px'}}>
                    <NewSearchInput label={'آدرس ایمیل'} />
                </div>
            </div>
            <div className='Footer'>
                <button className={able === false ? 'Able' : 'disable'}>تایید</button>
            </div>
        </div>
    )
}

export default EmailAccount