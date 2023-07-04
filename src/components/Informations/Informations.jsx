import React from 'react'
import { Link } from 'react-router-dom'
import { BackArrow } from '../icons/Icons'
import SearchInput from '../SearchInput/SearchInput'
import { useState } from 'react'
import NewSearchInput from '../NewSearchInput/NewSearchInput'




const Informations = () => {



    const [male , SetMale] = useState('مرد')


    const [able, setAble] = useState(false)


    const handleAble = () => {
        setAble(true)
      }
    
    
      const handleDisAble = () => {
        setAble(false)
      }

    return (
        <div className='Informations'>
            <Link to={"/EditAccount"} className='header'>
                <BackArrow />
                <h6>اطلاعات شخصی</h6>
            </Link>
            <div className='body'>
                <div className='name'>
                    <NewSearchInput func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'} label={'نام'} />
                </div>
                <div className='lastName'>
                    <NewSearchInput func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'} label={'نام خانوادگی'} />
                </div>
                <div className='birthday'>
                    <h5>تاریخ تولد</h5>
                    <div className='inputs'>
                        {/* <NewSearchInput className='input' label={'روز'} />
                        <NewSearchInput className='input' label={'ماه'} /> */}
                        <NewSearchInput func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'} style={{padding:'0px'}} className='input' label={"سال تولد"}/>
                    </div>
                </div>
                <div className='male'>
                    <NewSearchInput func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'} classlabel={"labelfix"} valueInput={male} label={'جنسیت'} />
                </div>
                <div className='id'>
                    <NewSearchInput func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'} label={"کد ملی"} />
                </div>
                <div className='Number'>
                    <div className='number'>
                        <NewSearchInput func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'} label={'شماره تلفن ضروری'} />
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