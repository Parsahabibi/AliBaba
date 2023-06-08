import React, { useState } from 'react'
import DesktopHeader from '../Header/DesktopHeader/DesktopHeader'
import ItemsDashboardAccount from '../ItemsAccount/ItemsAccount'
import { Download, Filter, LeftArrow } from '../icons/Icons'
import HoverButton from '../HoverButton/HoverButton'
import Footer from '../Footer/Footer'

const TransactionsDesktop = () => {

    const [openRight, setOpenRight] = useState(true)
    const [openLeft, setOpenLeft] = useState(false)
    const [show, setShow] = useState(false)

    return (
        <div className='TransactionsDesktop'>
            <div className='headerTransactionsDesktop'>
                <DesktopHeader />
            </div>
            <div className='bodyTransactionsDesktop'>
                <ItemsDashboardAccount id={5} />
                <div className='mainTransactionsDesktop'>
                    <div className='top'>
                        <div className='Transactions'>
                            <svg viewBox="0 0 24 24" width="1.5rem" height="1.5rem" fill="currentColor" class="ml-3 text-grays-500" data-v-b664eb7e=""><path d="M20.25 4.5c1.24 0 2.25 1.01 2.25 2.25v10.5c0 1.24-1.01 2.25-2.25 2.25H3.75c-1.24 0-2.25-1.01-2.25-2.25V6.75c0-1.24 1.01-2.25 2.25-2.25h16.5ZM21 9.75H3v7.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-7.5ZM9 13.5A.75.75 0 1 1 9 15H5.25a.75.75 0 1 1 0-1.5H9Zm3 0a.75.75 0 1 1 0 1.5h-.75a.75.75 0 1 1 0-1.5H12Z"></path></svg>
                            <h4> موجودی حساب کاربری </h4>
                        </div>
                        <div className='itemsTransactions'>
                            <div className='right'>
                                <p>موجودی حساب</p>
                                <div className='money'>
                                    <h2>0</h2>
                                    <h6>ریال</h6>
                                </div>
                                <div className='transport'>
                                    <div className='rightTransport'>
                                        <h6>انتقال موجودی به حساب بانکی:</h6>
                                    </div>
                                    <div className='leftTRansport'>
                                        <h5>ثبت درخواست</h5>
                                        <LeftArrow />
                                    </div>
                                </div>
                            </div>
                            <div className='divider'></div>
                            <div className='left'>
                                <p>افزایش موجودی</p>
                                <div className='buttonTransport'>

                                    <button>پرداخت</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='button'>
                        <div className='titleTransactions'>
                            <svg viewBox="0 0 24 24" width="1.5rem" height="1.5rem" fill="currentColor" class="ml-3 text-grays-500" data-v-9a38ba78=""><path d="M15.745 7.5h-.75a.75.75 0 1 1 0-1.5h.75a.749.749 0 1 1 0 1.5Zm0 3h-.75a.75.75 0 1 1 0-1.5h.75a.749.749 0 1 1 0 1.5Zm0 3h-.75a.75.75 0 1 1 0-1.5h.75a.749.749 0 1 1 0 1.5Zm0 3h-.75a.75.75 0 1 1 0-1.5h.75a.749.749 0 1 1 0 1.5Zm-3.749-9H8.25a.75.75 0 1 1 0-1.5h3.747a.75.75 0 1 1 0 1.5Zm0 3H8.25a.75.75 0 1 1 0-1.5h3.747a.75.75 0 1 1 0 1.5Zm0 3H8.25a.75.75 0 1 1 0-1.5h3.747a.75.75 0 1 1 0 1.5Zm0 3H8.25a.75.75 0 1 1 0-1.5h3.747a.75.75 0 1 1 0 1.5Zm6.747-15H5.25a.75.75 0 0 0-.75.75V21c0 .073.01.144.03.21a1.74 1.74 0 0 0 1.685 1.29 1.74 1.74 0 0 0 1.696-1.34c.017-.077.111-.16.232-.16.121 0 .214.082.232.16.173.777.886 1.34 1.697 1.34.81 0 1.524-.564 1.695-1.34.018-.077.112-.16.233-.16.12 0 .215.083.231.16a1.74 1.74 0 0 0 1.697 1.34c.81 0 1.523-.563 1.698-1.341.016-.076.11-.159.23-.159.123 0 .216.082.233.16a1.74 1.74 0 0 0 1.697 1.34c.81 0 1.524-.564 1.696-1.34a.73.73 0 0 0 .011-.264V2.25a.75.75 0 0 0-.75-.75Z"></path></svg>
                            <h4> تاریخچه تراکنش‌ها و درخواست‌ها </h4>
                        </div>
                        <div className='itemsTransactions'>
                            <div className={openLeft === true ? 'right margin' : 'right'} >
                                <h6 onClick={() => { setOpenLeft(false); setOpenRight(true) }} className='first' style={openRight === true ? { cursor: 'pointer', backgroundColor: '#0077DB', color: '#fff' } : { backgroundColor: 'transparent', color: '#6C7680' }}> تراکنش‌ها</h6>
                                <h6 onClick={() => { setOpenRight(false); setOpenLeft(true) }} className='second' style={openLeft === true ? { cursor: 'pointer', backgroundColor: '#0077DB', color: '#fff' } : { backgroundColor: 'transparent', color: '#6C7680' }}> درخواست‌ انتقال موجودی</h6>
                            </div>
                            <div style={openLeft === true ? {display:'none'}:{display:'flex'}} className='left'>
                                <HoverButton title={'فیلتر'} icon={<Filter />} />
                                <HoverButton  title={'خروجی اکسل'} icon={<Download />} />
                            </div>
                        </div>
                        <div className='imageTransactions'>
                            <img src='https://www.alibaba.ir/assets/payment-error-1170e149.svg' alt='' />
                            <h6> هیچ تراکنشی یافت نشد </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer' style={{backgroundColor:'white'}}>
                <Footer />
            </div>
        </div>
    )
}

export default TransactionsDesktop