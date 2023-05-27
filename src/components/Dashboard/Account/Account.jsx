import React from 'react'
import { Count, LeftArrow, List, Logo, Logout, Mines, Plus, PlusIcon, Poshtibani1, Quiz } from '../../icons/Icons'
import { Link } from "react-router-dom"
const Account = () => {


    const CountData = [
        { id: 1, image: <Count />, title: "موجودی حساب " },
        { id: 2, image: <Plus />, title: " افزایش موجودی " },
        { id: 3, image: <Mines />, title: " درخواست انتقال موجودی به حساب بانکی " },
        { id: 4, image: <Count />, title: "موجودی و تراکنش‌ها" }
    ]


    const ItemsAccount = [
        { id: 1, image: <List />, title: 'لیست مسافران' },
        { id: 1, image: <Quiz />, title: 'مرکز پشتیبانی' },
        { id: 1, image: <Poshtibani1 />, title: 'درخواست پشتیبانی' },
        { id: 1, image: <Logout />, title: 'خروج از حساب کاربری' }
    ]


    return (
        <div className='Account'>
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
                                        <div className='RightItemCount'>
                                            {item.image}
                                            <h6>{item.title}</h6>
                                        </div>
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
                            <Link className='details'>
                                <h6> جزئیات امتیاز‌ها </h6>
                            </Link>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className='BottomPoint'>
                        <Logo />
                        <Link to={''}>
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
                                <Link className='ItemAccount' to={''}>
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