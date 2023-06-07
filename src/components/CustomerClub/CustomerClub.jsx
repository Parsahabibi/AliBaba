import React from 'react'
import { Link } from 'react-router-dom'
import { BackArrow, Clock, OutlinedClock, Percent, Poshtibani1, QuestionIcon } from '../icons/Icons'

const CustomerClub = () => {
    return (
        <div className='CustomerClub'>
            <div className='header'>
                <Link to={"/Account"} className='HeaderCustomerClub'>
                    <BackArrow />
                    <h6>باشگاه همسفران</h6>
                </Link>
            </div>
            <div className='bodyCustomerClub'>
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
                </div>
                <div className='ZeroPoint'>
                    <div className='body'>
                        <div className='icon'>
                            <Clock />
                        </div>
                        <div className='des'>
                            <div className='day'>
                                <h4>0</h4>
                                <p>روز</p>
                            </div>
                            <div className='des'>
                                <h5>باقی‌مانده تا اتمام امکان استفاده از امکانات اتاق فعلی شما</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about'>
                    <div className='qIcon'>
                        <OutlinedClock />
                    </div>
                    <div className='desAbout'>
                        <h5>درباره باشگاه همسفران علی‌بابا</h5>
                        <span>باشگاه همسفران علی‌بابا از تاریخ 20 مهرماه 1401 در اختیار همه‌ی همسفران علی‌بابا قرار گرفت، برای آشنایی بیشتر با امکانات و خدمات این باشگاه و همچنین آشنایی با نحوه جمع‌آوری و محاسبه امتیازات در هر اتاق، می‌توانید این قسمت را مطالعه کنید</span>
                    </div>
                </div>
                <div className='title'>
                    <p> خدمات و امکانات ویژه‌ی شما در اتاق آبی</p>
                </div>
                <div className='Percent'>
                    <div className='PIcon'>
                        <Percent />
                    </div>
                    <div className='des'>
                        <h5>تخفیف‌های شگفتانه</h5>
                        <span>تا ۵ درصد تخفیف شگفتانه در اتاق آبی</span>
                    </div>
                </div>
                <div className='Percent'>
                    <div className='PIcon'>
                        <Poshtibani1 />
                    </div>
                    <div className='des'>
                        <h5>در لحظات مهم در اولویت هستید</h5>
                        <span>اولویت در صف تماس و پاسخگویی آنلاین در صورت نزدیک‌بودن زمان حرکت</span>
                    </div>
                </div>
                <div className='Percents'>
                    <div className='PIcon'>
                        <Poshtibani1 />
                    </div>
                    <div className='des'>
                        <h5>همسفر ماندگار روزگار می‌شوید</h5>
                        <span>اختصاص بخشی از سود خرید شما به سفرهای درمانی کودکان بیمار و پروژه‌های احیای محیط زیست</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerClub