import React, { useState } from 'react'
import { BackArrow } from '../icons/Icons'
import { Link } from 'react-router-dom'

const EditUserName = () => {


    const [able, setAble] = useState(false)


    return (
        <div className='EditUserName'>
            <Link to={"/EditAccount"} className='HeaderUserNameAccount'>
                <BackArrow />
                <h6>تغییر کلمه عبور</h6>
            </Link>
            <div className='body'>
                <h5>  رمز عبور فعلی و رمز عبور جدید خود را وارد نمایید.  </h5>
            </div>
            <div className='Footer'>
                <button className={able === false ? 'Able' : 'disable'}> تغییر رمز عبور </button>
            </div>
        </div>
    )
}

export default EditUserName