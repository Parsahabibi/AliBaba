import React, { useState } from 'react'
import { Close, CloseServices, Count, LeftArrow, List, Logo, Logout, Mines, Plus, PlusIcon, Poshtibani1, Quiz } from '../../icons/Icons'
import { Link } from "react-router-dom"
import IncreamentMoney from '../../IncreamentMoney/IncreamentMoney'
import SearchInput from '../../SearchInput/SearchInput'
const Account = () => {


    const CountData = [
        { id: 1, image: <Count />, title: "موجودی حساب " , link:'' },
        { id: 2, image: <Plus />, title: " افزایش موجودی "  , link:''},
        { id: 3, image: <Mines />, title: " درخواست انتقال موجودی به حساب بانکی " , link:'' },
        { id: 4, image: <Count />, title: "موجودی و تراکنش‌ها" , link:'/Account/Transactions' }
    ]


    const ItemsAccount = [
        { id: 1, image: <List />, title: 'لیست مسافران', link: '/Account/ListOfPassengers' },
        { id: 1, image: <Quiz />, title: 'مرکز پشتیبانی', link: '/Account/HelpCenter' },
        { id: 1, image: <Poshtibani1 />, title: 'درخواست پشتیبانی', link: '/Account/Ticketing' },
        { id: 1, image: <Logout />, title: 'خروج از حساب کاربری' }
    ]


    const [open, setOpen] = useState(false)


    const [able, disAble] = useState(false)


    return (
        <div className='Account'>
            <div onClick={() => { setOpen(false) }} className='baler' style={open === true ? { display: 'inline' } : { display: 'none' }}></div>
            <div style={open === true ? { display: 'block' } : { display: 'none' }} className='IncreamentMoney'>
                <div className='headerIncreamentMoney'>
                    <h6> افزایش موجودی </h6>
                    <div onClick={() => { setOpen(false) }}>
                        <Close />
                    </div>
                </div>
                <SearchInput label={'مبلغ مورد نظر'} />
                <div className='buttonIncreamentMoney'>
                    <div className={able === true ? 'able' : 'disAble'}>پرداخت</div>
                </div>
            </div>
            <div className='header'>
                <div className='avatar'>
                    <img src='https://www.alibaba.ir/assets/images/avatar-4c776756.svg' />
                    <h5>09197401839</h5>
                </div>
                <Link to={'/EditAccount'} className='edit'>
                    <button> ویرایش اطلاعات <LeftArrow /></button>
                </Link>
            </div>
            <div className='bodyAccount'>
                <div className='Count'>
                    {
                        CountData.map(
                            item =>
                                <div className='itemsCount' key={item.id}>
                                    <div className='itemCount'>
                                        {
                                            item.id === 2 ?
                                                <Link onClick={() => { setOpen(!open) }} className='RightItemCount'>
                                                    {item.image}
                                                    <h6>{item.title}</h6>
                                                </Link>
                                                :
                                                <Link to={item.link} className='RightItemCount'>
                                                    {item.image}
                                                    <h6>{item.title}</h6>
                                                </Link>
                                        }
                                        <div className='LeftItemCount'>
                                            <h3>0</h3>
                                            <span>ریال</span>
                                        </div>
                                    </div>
                                    <div className='border'></div>
                                </div>
                        )
                    }
                </div>
                <div className='Point'>
                    <div className='TopPoint'>
                        <div className='room'>
                            <div className='zero'>
                                <img src='https://www.alibaba.ir/assets/loyalty-gradient-fff0ccbb.svg' alt='' />
                                <h3>0</h3>
                                <h5>امتیاز</h5>
                            </div>
                            <div className='BlueRoom'>
                                <h5>اتاق آبی</h5>
                            </div>
                        </div>
                        <div className='progress'></div>
                        <div className='only'>
                            <h5>تنها 65000 امتیاز تا اتاق بعدی</h5>
                            <Link to={'/Account/CustomerClub'} className='details'>
                                <h6> جزئیات امتیاز‌ها </h6>
                            </Link>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className='BottomPoint'>
                        <Logo />
                        <Link to={'/Account/CustomerClub'}>
                            <h6>باشگاه همسفران</h6>
                        </Link>
                    </div>
                </div>
                <Link to={''} className='AlibabaPlus'>
                    <div className='plus'>
                        <PlusIcon />
                        <h6>حساب کاربری علی بابا پلاس</h6>
                    </div>
                </Link>
                <div className='ItemsAccount'>
                    {
                        ItemsAccount.map(
                            item =>
                                <Link className='ItemAccount' to={item.link}>
                                    <div className='textAccount'>
                                        {item.image}
                                        <h6>{item.title}</h6>
                                    </div>
                                    <div className='divider'></div>
                                </Link>
                        )
                    }
                </div>
            </div>
            <div className='footerAccount'></div>
        </div>
    )
}

export default Account