import React from 'react'
import { Count, LeftArrow, Mines, Plus, PlusIcon } from '../../icons/Icons'
import { Link } from "react-router-dom"
const Account = () => {


    const CountData = [
        { id: 1, image: <Count />, title: "موجودی حساب " },
        { id: 2, image: <Plus />, title: " افزایش موجودی " },
        { id: 3, image: <Mines />, title: " درخواست انتقال موجودی به حساب بانکی " },
        { id: 4, image: <Count />, title: "موجودی و تراکنش‌ها" }
    ]


    return (
        <div className='Account'>
            <div className='header'>
                <div className='avatar'>
                    <img src='https://www.alibaba.ir/assets/images/avatar-4c776756.svg' />
                    <h5>09197401839</h5>
                </div>
                <Link to={'/Install'} className='edit'>
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
                <div className='Point'></div>
                <Link to={''} className='AlibabaPlus'>
                    <div className='plus'>
                        <PlusIcon />
                        <h6>حساب کاربری علی بابا پلاس</h6>
                    </div>
                </Link>
                <div className='ItemsAccount'></div>
            </div>
            <div className='footerAccount'></div>
        </div>
    )
}

export default Account