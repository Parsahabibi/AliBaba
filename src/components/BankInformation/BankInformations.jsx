import React from 'react'
import { BackArrow } from '../icons/Icons'
import { Link } from 'react-router-dom'

const BankInformations = () => {
    return (
        <div className='BankInformations'>
            <Link to={"/EditAccount"} className='HeaderBankInformationAccount'>
                <BackArrow />
                <h6>تغییر کلمه عبور</h6>
            </Link>
            <div className='body'>
                <h6>اطلاعات حساب بانکی به منظور بازگشت وجه پس از استرداد دریافت می‌شود.</h6>
            </div>
            <div className='Footer'>
                <button className='Able'>ذخیره</button>
            </div>
        </div>
    )
}

export default BankInformations