import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BackArrow } from '../icons/Icons'
import NewSearchInput from '../NewSearchInput/NewSearchInput'

const EditNumbers = () => {


    const [able, setAble] = useState(false)



    const handleAble = () => {
      setAble(true)
    }
  
  
    const handleDisAble = () => {
      setAble(false)
    }

    return (
        <div className='EditNumbers'>
            <Link to={"/EditAccount"} className='header'>
                <BackArrow />
                <h6>ویرایش شماره موبایل</h6>
            </Link>
            <div className='body'>
                <h5 style={{paddingBottom:'32px'}}> برای ویرایش، شماره موبایل جدید خود را وارد کنید.</h5>
                <div style={{border:'1px solid rgba(0, 0, 0, .12)' , borderRadius:'8px' , fontSize:'14px'}}>
                    <NewSearchInput label={'شماره موبایل'} func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}/>
                </div>
            </div>
            <div className='Footer'>
                <button className={able === false ? 'Able' : 'disable'}>تایید و دریافت کد</button>
            </div>
        </div>
    )
}

export default EditNumbers