import React, { useState } from 'react'
import { BackArrow } from '../icons/Icons'
import { Link } from 'react-router-dom'
import NewSearchInput from '../NewSearchInput/NewSearchInput'

const BankInformations = () => {



    const [able, setAble] = useState(false)



    const handleAble = () => {
      setAble(true)
    }
  
  
    const handleDisAble = () => {
      setAble(false)
    }



    return (
        <div className='BankInformations'>
            <Link to={"/EditAccount"} className='HeaderBankInformationAccount'>
                <BackArrow />
                <h6>تغییر کلمه عبور</h6>
            </Link>
            <div className='body'>
                <h6 style={{paddingBottom:'2rem'}}>اطلاعات حساب بانکی به منظور بازگشت وجه پس از استرداد دریافت می‌شود.</h6>
                <div style={{display:'flex' , flexDirection:'column', justifyContent:'center' , gap:'2rem'}}>
                    <div style={{border:'1px solid rgba(0, 0, 0, .12)' , borderRadius:'8px' , fontSize:'14px'}}><NewSearchInput label={'شماره شبا'} func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}/></div>
                    <div style={{border:'1px solid rgba(0, 0, 0, .12)' , borderRadius:'8px' , fontSize:'14px'}}><NewSearchInput label={'شماره حساب'} func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}/></div>
                    <div style={{border:'1px solid rgba(0, 0, 0, .12)' , borderRadius:'8px' , fontSize:'14px'}}><NewSearchInput label={'شماره کارت'} func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}/></div>
                </div>
            </div>
            <div className='Footer'>
                <button className='Able'>ذخیره</button>
            </div>
        </div>
    )
}

export default BankInformations