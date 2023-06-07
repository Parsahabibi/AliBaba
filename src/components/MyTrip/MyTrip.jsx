import React from 'react'
import DesktopHeader from '../Header/DesktopHeader/DesktopHeader'
import ItemsAccount from '../ItemsAccount/ItemsAccount'
import { List, Logo, Money, Poshtibani1, TravelIcon, User } from '../icons/Icons'
import { Link } from 'react-router-dom'
import ItemsDashboardAccount from '../ItemsAccount/ItemsAccount'

const MyTrip = () => {




    return (
        <div className='MyTrip'>
            <div style={{ backgroundColor: 'white' }} className='HeaderMyTrip'>
                <DesktopHeader />
            </div>
            <div className='mainMyTrip'>
                <ItemsDashboardAccount />
                <div className='contentMyTrip'>
                    <div className='mainContentMyTrip'>
                        <div className='search'>
                            <img src={require('../../assets/image/HomeImage/magnifying-glass (4).png')} />
                            <h4>
                                جستجو سفارش
                            </h4>
                        </div>
                        <div className='attention'>
                            <img src={require('../../assets/image/HomeImage/magnifying-glass (4).png')} />
                            <h6>
                                برای جستجو در لیست سفرهای من پر کردن حداقل یک فیلد کافیست.
                            </h6>
                        </div>
                        <div className='input'>
                            <div className='rightInput'>
                                <h5>شماره سفارش</h5>
                                <input></input>
                            </div>
                            <div className='leftInput'>
                                <h5>تاریخ</h5>
                                <div className='input'>
                                    <input></input>
                                    <input></input>
                                </div>
                            </div>
                        </div>
                        <div className='button'>
                            <button>جستجو</button>
                        </div>
                    </div>
                    <div className='news'>
                        <h5>
                            متاسفانه سفارشی برای شما تا به حال ثبت نگردیده است
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTrip