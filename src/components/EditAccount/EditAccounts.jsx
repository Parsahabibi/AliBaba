import React from 'react'
import { BackArrow, LeftIcon, Pen } from '../icons/Icons'
import { Link } from "react-router-dom"
const EditAccounts = () => {


  const ItemsEdit = [
    { id: 1, image: <Pen />, title: 'اطلاعات شخصی', des: ' مرد' , link:"/EditAccount/Information" },
    { id: 2, image: <Pen />, title: 'شماره موبایل', des: '09197401839 ' , link:"/EditAccount/EditNumber" },
    { id: 3, image: <LeftIcon />, title: 'افزودن آدرس ایمیل', des: '' , link:"/EditAccount/EmailAccount" },
    { id: 4, image: <LeftIcon />, title: ' ویرایش کلمه عبور ', des: '' , link:"/EditAccount/EditUserName" },
    { id: 5, image: <Pen />, title: 'اطلاعات حساب بانکی', des: ' جهت واریز وجه استردادها ' , link:"/EditAccount/BankInformation" },
  ]



  return (
    <div className='EditAccounts'>
      <Link to={"/Account"} className='HeaderEditAccount'>
        <BackArrow />
        <h6>جزئیات حساب کاربری</h6>
      </Link>
      <div className='BodyEditAccount'>
        {
          ItemsEdit.map(
            item =>
              <Link to={item.link} className='ItemsEdit' key={item.id}>
                <div className='Items'>
                  <div className='ItemEdit'>
                    <h5>{item.title}</h5>
                    <h6>{item.des}</h6>
                  </div>
                  <div className='IconEdit'>
                    {item.image}
                  </div>
                </div>
                <div className='divider'></div>
              </Link>
          )
        }
      </div>
    </div>
  )
}

export default EditAccounts