import React, { useState } from 'react'
import { Close, Dollar, LeftArrow, List, Logo, Money, OutlinedUser, Pen, PlusIcon, Poshtibani1, TickGreen, TravelIcon, User, UserEnter, UserIcon } from '../../icons/Icons'
import DesktopHeader from '../../Header/DesktopHeader/DesktopHeader'
import { Link } from 'react-router-dom'
import HoverButton from '../../HoverButton/HoverButton'
import Footer from '../../../components/Footer/Footer'



const DesktopAccount = () => {



    const ItemsAccount = [
        { id: 1, image: <User />, title: 'حساب کاربری', link: '' },
        { id: 2, image: <TravelIcon />, title: 'سفرهای من', link: '' },
        { id: 3, image: <List />, title: 'لیست مسافران', link: '' },
        { id: 4, image: <Poshtibani1 />, title: 'درخواست پشتیبانی', link: '' },
        { id: 5, image: <Money />, title: 'موجودی و تراکنش‌ها', link: '' },
        { id: 6, image: <Logo />, title: 'باشگاه همسفران', link: '' },
    ]


    const [open, setOpen] = useState(false)
    const [opens, setOpens] = useState(false)



    const [openModal, setOpenModal] = useState(false)
    const [openModalTwo, setOpenModalTwo] = useState(false)
    const [openModalThree, setOpenModalThree] = useState(false)



    const [able, setAble] = useState(false)


    return (
        <div className='DesktopAccount'>
            <div onClick={()=>{setOpenModal(false)}} className='baler' style={openModal === true ? { display: 'inline' } : { display: 'none' }}></div>
            <div onClick={()=>{setOpenModalTwo(false)}} className='baler' style={openModalTwo === true ? { display: 'inline' } : { display: 'none' }}></div>
            <div onClick={()=>{setOpenModalThree(false)}} className='baler' style={openModalThree === true ? { display: 'inline' } : { display: 'none' }}></div>
            <div className='headerAccount'>
                <DesktopHeader />
            </div>
            <div className='mainAccount'>
                <div className='itemsAccount'>
                    {
                        ItemsAccount.map(
                            item =>
                                <div key={item.id} className='itemAccount'>
                                    <Link to={''} className='contentItems'>
                                        {item.image}
                                        <h6>
                                            {item.title}
                                        </h6>
                                    </Link>
                                    <div className='border'></div>
                                </div>
                        )
                    }
                </div>
                <div className='contentAccount'>
                    <div className='NumberAccountDesktop'>
                        <div className='right'>
                            <img src='https://www.alibaba.ir/assets/images/avatar-4c776756.svg' />
                            <h4>09197401839</h4>
                        </div>
                        <div className='left'>
                            <div className='Balance'>
                                <h5> موجودی حساب </h5>
                                <div className='count'>
                                    <h3>0</h3>
                                    <h5>ریال</h5>
                                </div>
                                <div className='Increment'>
                                    <h5> افزایش موجودی </h5>
                                    <LeftArrow />
                                </div>
                            </div>
                            <div className='divider'></div>
                            <div className='club'>
                                <h5>باشگاه همسفران</h5>
                                <div className='middle'>
                                    <div className='point'>
                                        <h3>0</h3>
                                        <h5>امتیاز</h5>
                                    </div>
                                    <div className='room'>
                                        <h5>اتاق آبی</h5>
                                    </div>
                                </div>
                                <div className='details'>
                                    <h5> مشاهده جزئیات </h5>
                                    <LeftArrow />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='InformationsAccountDesktop'>
                        <div className='Informations'>
                            <div className='Information'>
                                <UserEnter />
                                <h4> اطلاعات حساب کاربری</h4>
                            </div>
                            <div className='Button'>
                                <HoverButton title={" حساب کاربری علی‌بابا پلاس "} icon={<PlusIcon />} />
                            </div>
                        </div>
                        <div className='MobileNumber'>
                            <h6>شماره موبایل</h6>
                            <div className='item'>
                                <h6>09197401839</h6>
                                <div className='confirm'>
                                    <TickGreen />
                                    <h5>تایید شده</h5>
                                </div>
                                <div className='ButtonEditMobile' >
                                    <div onClick={() => { setOpenModal(true) }}>
                                        <HoverButton title={"ویرایش"} icon={<Pen />} />
                                    </div>
                                    <div style={openModal === true ? { display: 'inline' } : { display: 'none' }} className='modalEditMobile'>
                                        <div onClick={() => { setOpenModal(false) }} className='Icon'>
                                            <Close />
                                        </div>
                                        <div className='ItemsModalEditMobile'>
                                            <h3>ویرایش شماره موبایل</h3>
                                            <h6> برای ویرایش، شماره موبایل جدید خود را وارد کنید. </h6>
                                            <button className={able === true ? 'able' : 'disAble'}>تایید و دریافت کد</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Edit'>
                            <div className='AddEmail'>
                                <h6>ایمیل</h6>
                                <div onClick={() => { setOpenModalTwo(true) }}>
                                    <HoverButton title={"افزودن"} icon={<Pen />} />
                                </div>
                                <div style={openModalTwo === true ? { display: 'inline' } : { display: 'none' }} className='modalEditMobile'>
                                    <div onClick={() => { setOpenModalTwo(false) }} className='Icon'>
                                        <Close />
                                    </div>
                                    <div className='ItemsModalEditMobile'>
                                        <h3>ویرایش آدرس ایمیل</h3>
                                        <h6>برای ویرایش، آدرس ایمیل جدید خود را وارد کنید.</h6>
                                        <button className={able === true ? 'able' : 'disAble'}>تایید </button>
                                    </div>
                                </div>

                            </div>
                            <div className='EditUserName'>
                                <button onClick={() => { setOpenModalThree(true) }}>
                                    <svg viewBox="0 0 24 24" width="1.25rem" height="1.25rem" fill="currentColor" class="ml-1"><path d="M8.796 10.932a2.136 2.136 0 1 1 0-4.272 2.136 2.136 0 0 1 0 4.272Zm11.986 5.927-1.435-1.436a.742.742 0 0 0-.526-.218h-1.41v-1.41a.743.743 0 0 0-.745-.743h-1.409v-1.41a.745.745 0 0 0-.218-.526l-.733-.733c.293-1.003.31-2.06.042-3.086-.56-2.151-2.4-3.844-4.577-4.211-1.892-.32-3.74.266-5.08 1.604-1.34 1.34-1.925 3.192-1.606 5.081.368 2.177 2.061 4.017 4.211 4.577a5.762 5.762 0 0 0 3.086-.043l6.477 6.477c.14.14.328.218.526.218h2.154c.804 0 1.46-.656 1.46-1.46v-2.155a.744.744 0 0 0-.217-.526Z"></path></svg>
                                    <h6> ویرایش کلمه عبور </h6>
                                </button>
                                <div style={openModalThree === true ? { display: 'inline' } : { display: 'none' }} className='modalEditMobile'>
                                    <div onClick={() => { setOpenModalThree(false) }} className='Icon'>
                                        <Close />
                                    </div>
                                    <div className='ItemsModalEditMobile'>
                                        <h3>تغییر کلمه عبور</h3>
                                        <h6>رمز عبور فعلی و رمز عبور جدید خود را وارد نمایید.</h6>
                                        <button className={able === true ? 'able' : 'disAble'}> تغییر رمز عبور </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Personal'>
                        <div className='PersonalInformation'>
                            <div className='text'>
                                <OutlinedUser />
                                <h4> اطلاعات شخصی </h4>
                            </div>
                            <div onClick={() => { setOpen(true) }} style={open === false ? { display: 'block' } : { display: 'none' }}>
                                <HoverButton title={"ویرایش اطلاعات"} icon={<Pen />} />
                            </div>
                        </div>
                        {
                            open === false ?
                                <div className='name'>
                                    <div className='top'>
                                        <div className='right'>
                                            <h6>نام و نام خانوادگی</h6>
                                            <div className='border'></div>
                                        </div>
                                        <div className='left'>
                                            <h6>کد ملی</h6>
                                            <div className='border'></div>
                                        </div>
                                    </div>
                                    <div className='bottom'>
                                        <div className='right'>
                                            <h6>شماره تماس ضروری</h6>
                                            <div className='border'></div>
                                        </div>
                                        <div className='left'>
                                            <h6>تاریخ تولد</h6>
                                            <div className='border'></div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div>
                                    salam
                                </div>
                        }
                        <div className='NecessaryNumber'></div>
                    </div>
                    <div className='Bank'>
                        <div className='BankInformation'>
                            <div className='dollar'>
                                <Dollar />
                                <h4> اطلاعات حساب بانکی </h4>
                            </div>
                            <div onClick={() => { setOpens(true) }} style={opens === false ? { display: 'block' } : { display: 'none' }}>
                                <HoverButton title={'ویرایش اطلاعات'} icon={<Pen />} />
                            </div>
                        </div>
                        {
                            opens === false ? <div className='detailsBank'>
                                <div className='top'>
                                    <div className='right'>
                                        <h6>شماره شبا</h6>
                                        <div className='border'></div>
                                    </div>
                                    <div className='left'>
                                        <h6>شماره حساب</h6>
                                        <div className='border'></div>
                                    </div>
                                </div>
                                <div className='bottom'>
                                    <h6>شماره کارت</h6>
                                    <div className='border'></div>
                                </div>
                            </div>
                                :
                                <div>salam</div>
                        }
                    </div>
                </div>
            </div>
            <div className='Footer'>
                <Footer />
            </div>
        </div>
    )
}

export default DesktopAccount
