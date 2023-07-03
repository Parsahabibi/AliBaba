import React from 'react'
import { BackArrow } from '../icons/Icons'
import { Link } from 'react-router-dom'
import NewSearchInput from '../NewSearchInput/NewSearchInput'

const BankInformations = () => {
    return (
        <div className='BankInformations'>
            <Link to={"/EditAccount"} className='HeaderBankInformationAccount'>
                <BackArrow />
                <h6>تغییر کلمه عبور</h6>
            </Link>
            <div className='body'>
                <h6 style={{paddingBottom:'2rem'}}>اطلاعات حساب بانکی به منظور بازگشت وجه پس از استرداد دریافت می‌شود.</h6>
                <div style={{display:'flex' , flexDirection:'column', justifyContent:'center' , gap:'2rem'}}>
                    <div style={{border:'1px solid rgba(0, 0, 0, .12)' , borderRadius:'8px' , fontSize:'14px'}}><NewSearchInput label={'شماره شبا'} /></div>
                    <div style={{border:'1px solid rgba(0, 0, 0, .12)' , borderRadius:'8px' , fontSize:'14px'}}><NewSearchInput label={'شماره حساب'} /></div>
                    <div style={{border:'1px solid rgba(0, 0, 0, .12)' , borderRadius:'8px' , fontSize:'14px'}}><NewSearchInput label={'شماره کارت'} /></div>
                </div>
            </div>
            <div className='Footer'>
                <button className='Able'>ذخیره</button>
            </div>
        </div>
    )
}

export default BankInformations