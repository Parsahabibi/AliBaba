import React from 'react'
import { Link } from 'react-router-dom'
// import { dollerSign, questionSign, poshtibani } from '../icons/Icons'
import { DollerSign, QuestionSign, Poshtibani } from '../icons/Icons'
const OtherService = () => {


    const other = [
        { id: 1, image: <img src="https://cdn.alibaba.ir/h2/mobile/assets/images/insurance-icon-bb51c425.svg" alt="Alibaba https://cdn.alibaba.ir/h2/mobile/assets/images/insurance-icon-bb51c425.svg" className="is-responsive is-animated" width="40" height="40" data-v-6fa1507f=""></img>, title: "بیمه مسافرتی" },
        { id: 1, image: <img src="https://cdn.alibaba.ir/h2/mobile/assets/images/visa-icon-d8507c8e.svg" alt="Alibaba https://cdn.alibaba.ir/h2/mobile/assets/images/visa-icon-d8507c8e.svg" className="is-responsive is-animated" width="40" height="40" data-v-6fa1507f=""></img>, title: "ویزای سفر" },
        { id: 1, image: <img src="https://cdn.alibaba.ir/h2/mobile/assets/images/gtour-icon-5e641f1b.svg" alt="Alibaba https://cdn.alibaba.ir/h2/mobile/assets/images/gtour-icon-5e641f1b.svg" className="is-responsive is-animated" width="40" height="40" data-v-6fa1507f=""></img>, title: "تور گروهی" }
    ]

    const otherService = [
        { id: 1, image: <DollerSign />, title: "درخواست استرداد", des: "سریع‌ترین راه برای کنسلی و لغو رزرو", link: "سفرهای من " },
        { id: 2, image: <QuestionSign />, title: "راهنمای سفر", des: "راهنمای خرید و استرداد، قوانین و پرسش‌ها", link: "مرکز پشتیبانی آنلاین " },
        { id: 3, image: <Poshtibani />, title: "درخواست پشتیبانی", des: "سریع‌ترین راه برای بررسی مشکلات شما", link: "درخواست پشتیبانی " },
    ]


    return (
        <div className='OtherService'>
            <div className='title'>
                {/* title */}
                <h6>سایر خدمات علی بابا</h6>
            </div>
            <div className='items'>
                {/* item */}
                {
                    other.map(
                        (item) =>
                            <div className='item'>
                                <div className='bgColor'>
                                    <div className='itemImage'>
                                        {item.image}
                                    </div>
                                </div>
                                <div className='itemTitle'>
                                    <h5>
                                        {item.title}
                                    </h5>
                                </div>
                            </div>
                    )
                }
            </div>
            <div className='OtherServices'>
                {
                    otherService.map(
                        item =>
                            <div className='itemOfOS'>
                                <div className='imageOfOs'>
                                    {item.image}
                                </div>
                                <div className='textOfOs'>
                                    <div className='titleOfOs'>
                                        <h6>
                                            {item.title}
                                        </h6>
                                    </div>
                                    <div className='desOfOs'>
                                        <h5>
                                            {item.des}
                                        </h5>
                                    </div>
                                    <div className='linkOfOs'>
                                        <Link to="">
                                            <h5>
                                                {item.link}
                                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" class="mr-2"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                                            </h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    )
                }
            </div>
            <div className='ApplicationAlibaba'>
                <div className='textOfApplicationAlibaba'>
                    <h4> اپلیکیشن علی‌بابا </h4>
                    <h5> همه سفرها در جیب شماست </h5>
                    <Link to={""}>
                        <button>راهنمای نصب</button>
                    </Link>
                </div>
                <div className='imageOfApplicationAlibaba'>
                    <img src={require('../../assets/image/HomeImage/Appliacation.jpg')} />
                </div>
            </div>
        </div>
    )
}

export default OtherService