import React, { useState } from 'react'
import { BackArrow } from '../icons/Icons'
import { Link } from 'react-router-dom'

const Transactions = () => {


    const [backBlueOne, setBackBlueOne] = useState(true)
    const [backBlueTwo, setBackBlueTwo] = useState(false)


    return (
        <div className='Transactions'>
            <div className='headerTransactions'>
                <div className='Title'>
                    <Link to='/Account'><BackArrow /></Link>
                    <h6>تراکنش‌ها و درخواست ها</h6>
                    <div className='download' style={backBlueTwo === true ? {display:'none'}:{display:'flex'}} >
                        <svg viewBox="0 0 24 24" width="1.5em" fill="currentColor" data-v-2fb37d60=""><path d="M19.5 18.75a1.125 1.125 0 0 1 .108 2.245L19.5 21h-15a1.125 1.125 0 0 1-.108-2.245l.108-.005h15ZM12 3c.585 0 1.065.446 1.12 1.017l.005.108v8.803l3.157-3.155a1.125 1.125 0 0 1 1.668 1.505l-.077.085-5.077 5.078-.03.028-.016.014-.04.035-.03.023-.014.01a1.083 1.083 0 0 1-.375.181 1.116 1.116 0 0 1-.394.034l.103.004a1.128 1.128 0 0 1-.508-.12l-.015-.008a.545.545 0 0 1-.058-.033l-.021-.014a.786.786 0 0 1-.052-.034l-.038-.029-.018-.014-.03-.026a.933.933 0 0 1-.033-.03l-.022-.02-5.078-5.078a1.125 1.125 0 0 1 1.506-1.669l.085.078 3.157 3.155V4.125C10.875 3.504 11.379 3 12 3Z" fill-rule="evenodd"></path></svg>
                        <h5> خروجی اکسل </h5>
                    </div>
                </div>
                <div className='items'>
                    <div onClick={() => { setBackBlueOne(true); setBackBlueTwo(false) }} className='right'  >
                        <h6 style={backBlueOne === true ? { backgroundColor: "#0077DB", color: 'white' } : { backgroundColor: "white", color: 'black' }}>تراکنش ها</h6>
                    </div>
                    <div onClick={() => { setBackBlueOne(false); setBackBlueTwo(true) }} className='left'>
                        <h6 style={backBlueTwo === true ? { backgroundColor: "#0077DB", color: 'white' } : { backgroundColor: "white", color: 'black' }}> درخواست‌ انتقال موجودی</h6>
                    </div>
                </div>
                <div className='filter'>
                    <div className='filters' style={backBlueTwo === true ? {display:'none'}:{display:'flex'}}>
                        <svg viewBox="0 0 24 24" width="1.5em" fill="currentColor" data-v-2fb37d60=""><path d="M13.875 16.125a1.125 1.125 0 0 1 .108 2.245l-.108.005h-3.75a1.125 1.125 0 0 1-.108-2.245l.108-.005h3.75Zm2.25-5.25a1.125 1.125 0 0 1 .108 2.245l-.108.005h-8.25a1.125 1.125 0 0 1-.108-2.245l.108-.005h8.25Zm3.75-5.25a1.125 1.125 0 0 1 .108 2.245l-.108.005H4.125a1.125 1.125 0 0 1-.108-2.245l.108-.005h15.75Z" fill-rule="evenodd"></path></svg>
                        <h6>فیلترها</h6>
                    </div>
                    <div className='sort'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="a-pill__icon"><path d="m12.046 16.92-3.75 3.75-.028.027a1.29 1.29 0 0 1-.025.023l.053-.05a1.16 1.16 0 0 1-.102.091l-.045.033a.734.734 0 0 1-.043.03l-.034.02a1.122 1.122 0 0 1-1.14.002l-.039-.024a.684.684 0 0 1-.091-.065.576.576 0 0 1-.077-.067.367.367 0 0 1-.02-.02l-3.75-3.75a1.122 1.122 0 0 1 0-1.592 1.127 1.127 0 0 1 1.59.001l1.83 1.83V8.22a1.125 1.125 0 0 1 2.25 0v8.94l1.83-1.83a1.127 1.127 0 0 1 1.59 0c.44.439.44 1.151 0 1.59Zm9-8.25a1.127 1.127 0 0 1-1.592 0l-1.828-1.83v8.88a1.125 1.125 0 0 1-2.25 0V6.84l-1.83 1.83a1.127 1.127 0 0 1-1.92-.795c0-.288.109-.576.328-.796l3.75-3.75.021-.02.043-.038-.064.058a1.142 1.142 0 0 1 .19-.152l.038-.023A1.102 1.102 0 0 1 16.5 3a1.12 1.12 0 0 1 .572.155l.034.022a.717.717 0 0 1 .088.063.787.787 0 0 1 .049.04l.025.023.028.026 3.75 3.75c.439.44.439 1.152 0 1.592Z"></path></svg>
                        <h6>مرتب سازی </h6>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="a-pill-dropdown__caret mr-1"><path d="m11.275 17.03 4.506-4.503a.744.744 0 0 0 0-1.054L11.275 6.97A.747.747 0 0 0 10 7.497v9.006c0 .665.805.997 1.275.527Z"></path></svg>
                    </div>
                </div>
            </div>
            <div className='bodyTransactions'>
                <img src='https://www.alibaba.ir/assets/payment-error-1170e149.svg' alt='img' />
                <h6> هیچ تراکنشی یافت نشد </h6>
            </div>
        </div>
    )
}

export default Transactions