import React from 'react'
import { Link } from 'react-router-dom'
import { AddUser, BackArrow } from '../icons/Icons'

const ListOfPassengers = () => {
    return (
        <div className='ListOfPassengers'>
            <div className='headers'>
                <Link to={"/Account"} className='header'>
                    <BackArrow />
                    <h6>لیست مسافران</h6>
                </Link>
                <div className='AddPassengers'>
                    <button>
                        <AddUser />
                        <h6> افزودن مسافر جدید </h6>
                    </button>
                </div>
            </div>
            <div className='body'>
                <div className='image'>
                    <img src='https://www.alibaba.ir/assets/images/no-passengers.mobile-879bd2b1.svg' />
                    <h6> لیست مسافران شما خالی است </h6>
                </div>
                <div className='des'>
                    <h6>
                        برای دسترسی راحت‌تر به اطلاعات مسافران خود در هنگام خرید، مسافران خود را اضافه کنید.
                    </h6>
                </div>
                <div className='button'>
                    <button>
                        <AddUser />
                        <p> افزودن مسافر </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListOfPassengers