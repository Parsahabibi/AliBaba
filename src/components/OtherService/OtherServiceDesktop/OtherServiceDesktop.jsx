import React from 'react'
import { Link } from 'react-router-dom'
// import { dollerSign, questionSign, poshtibani } from '../icons/Icons'
import { DollerSign, QuestionSign, Poshtibani, LeftArrow } from '../../../components/icons/Icons'
import ApplicationAlibaba from '../ApplicationAlibaba/ApplicationAlibaba'
import Banner from '../Baner/Baner'




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
        <div className='OtherServiceDesktop'>
            <div className='titleDesktop'>
                {/* title */}
                <p>سایر خدمات علی بابا</p>
            </div>
            <div className='itemsDesktop' style={{paddingBottom:"30px"}}>
                {/* item */}
                {
                    other.map(
                        (item) =>
                            <Link className='link' key={item.id}>
                                <div className='itemDesktop'>
                                    <div className='description'>
                                        <div className='bgColorDesktop'>
                                            <div className='itemImageDesktop'>
                                                {item.image}
                                            </div>
                                        </div>
                                        <div className='itemTitleDesktop'>
                                            <h6>
                                                {item.title}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className='Arrow'>
                                        <div className='new'>
                                            <h5>جدید</h5>
                                        </div>
                                        <LeftArrow />
                                    </div>
                                </div>
                            </Link>
                    )
                }
            </div>
            <Banner />
            <ApplicationAlibaba />
        </div>
    )
}

export default OtherService