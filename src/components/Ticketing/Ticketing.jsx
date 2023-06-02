import React from 'react'
import { Link } from 'react-router-dom'
import { Add, AddUser, BackArrow } from '../icons/Icons'

const Ticketing = () => {
    return (
        <div className='Ticketing'>
            <div className='headers'>
                <Link to={"/Account"} className='header'>
                    <BackArrow />
                    <h6>پشتیبانی آنلاین</h6>
                </Link>
                <div className='AddPassengers'>
                    <button>
                        <Add />
                        <h6> درخواست جدید </h6>
                    </button>
                </div>
            </div>
            <div className='body'>
                <div className='image'>
                    <img src="https://www.alibaba.ir/assets/images/ticketing/empty-message-1695fd8d.svg" />
                    <h6> صندوق درخواست‌های پشتیبانی شما خالی است. </h6>
                </div>
                <div className='des'>
                    <h6>
                        اگر سوال یا مشکلی دارید می توانید با ایجاد درخواست پشتیبانی در سریعترین زمان ممکن آن را پیگیری کنید.
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Ticketing