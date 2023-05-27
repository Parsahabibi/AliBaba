import React from 'react'
import { Link } from 'react-router-dom'
import { BackArrow } from '../icons/Icons'
import SearchInput from '../SearchInput/SearchInput'
import { useState } from 'react'




const Informations = () => {



    const [male , SetMale] = useState('مرد')





    return (
        <div className='Informations'>
            <Link to={"/EditAccount"} className='header'>
                <BackArrow />
                <h6>اطلاعات شخصی</h6>
            </Link>
            <div className='body'>
                <div className='name'>
                    <SearchInput label={'نام'} />
                </div>
                <div className='lastName'>
                    <SearchInput label={'نام خانوادگی'} />
                </div>
                <div className='birthday'>
                    <h5>تاریخ تولد</h5>
                    <div className='inputs'>
                        <SearchInput className='input' label={'روز'} />
                        <SearchInput className='input' label={'ماه'} />
                        <SearchInput className='input' label={"سال"}/>
                    </div>
                </div>
                <div className='male'>
                    <SearchInput valueInput={male} label={'جنسیت'} />
                </div>
                <div className='id'>
                    <SearchInput label={"کد ملی"} />
                </div>
                <div className='Number'>
                    <div className='number'>
                        <SearchInput label={'شماره تلفن ضروری'} />
                    </div>
                    <span>این شماره فقط برای زمان‌های ضروری که شماره اصلی شما در دسترس نباشد مورد استفاده قرار میگیرد.</span>
                </div>
            </div>
            <div className='Footer'>
                <button>ذخیره</button>
            </div>
        </div>
    )
}

export default Informations