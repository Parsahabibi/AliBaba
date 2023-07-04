import React, { useRef, useState } from 'react'
import DesktopHeader from '../Header/DesktopHeader/DesktopHeader'
import ItemsDashboardAccount from '../ItemsAccount/ItemsAccount'
import HoverButton from '../HoverButton/HoverButton'
import { Plus } from '../icons/Icons'
import Footer from '../Footer/Footer'
import SearchInput from '../SearchInput/SearchInput'
import NewSearchInput from '../NewSearchInput/NewSearchInput'
import useViewport from '../UseLayoutEffect'
import ListOfPassengers from '../ListOfPassengers/ListOfPassengers'

const Passengers = () => {

    const [able, setAble] = useState(false)



    const handleAble = () => {
      setAble(true)
    }
  
  
    const handleDisAble = () => {
      setAble(false)
    }


    const ref = useRef('')


    const { width } = useViewport();


    return (
        <div className='PassengersDesktop'>
            {width < 900 ?
                <ListOfPassengers />
                :
                <>
                    <div className='headerPassengersDesktop'>
                        <DesktopHeader />
                    </div>
                    <div className='mainPassengersDesktop'>
                        <ItemsDashboardAccount id={3} />
                        <div className='mainContentPassengersDesktop'>
                            <div className='searchMainPassengersDesktop'>
                                <div className='header'>
                                    <svg viewBox="0 0 24 24" width="1.125rem" height="1.125rem" fill="currentColor" class="ml-2"><path d="M14.25 3A6.758 6.758 0 0 1 21 9.75a6.758 6.758 0 0 1-6.75 6.75 6.713 6.713 0 0 1-3.933-1.267l-5.445 5.445a1.095 1.095 0 0 1-1.55 0 1.098 1.098 0 0 1 0-1.551l5.444-5.445A6.713 6.713 0 0 1 7.5 9.75 6.758 6.758 0 0 1 14.25 3Zm-.005 2.259A4.5 4.5 0 0 0 9.75 9.754a4.5 4.5 0 0 0 4.495 4.496 4.5 4.5 0 0 0 4.496-4.495 4.5 4.5 0 0 0-4.496-4.496Z" fill-rule="evenodd"></path></svg>
                                    <h4> جستجوی مسافران </h4>
                                </div>
                                <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px' }} className='input'>
                                    <NewSearchInput label={'جستجوی نام، نام خانوادگی، کد ملی و شماره پاسپورت'} func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'} />
                                </div>
                            </div>
                            <div className='ListMainPassengersDesktop'>
                                <div className='top'>
                                    <div className='right'>
                                        <svg viewBox="0 0 24 24" width="24px" height="24px" fill="currentColor" class="ml-2"><path d="M14.277 6.75c.916 0 1.76.417 2.319 1.143a2.91 2.91 0 0 1 .508 2.535l-1.321 4.959a1.503 1.503 0 0 1-1.45 1.113H9.956a.752.752 0 0 0-.725.558l-1.014 3.809A2.204 2.204 0 0 1 6.093 22.5a2.185 2.185 0 0 1-1.744-.86 2.182 2.182 0 0 1-.38-1.906L5.14 15.34A4.505 4.505 0 0 1 9.487 12h.565c.34 0 .638-.23.725-.557l.675-2.523a2.928 2.928 0 0 1 2.825-2.17Zm5.274 3.025a.75.75 0 0 1 .53.918l-1.606 6.023a3.753 3.753 0 0 1-3.623 2.784h-3.745a.75.75 0 1 1 0-1.5h3.745a2.253 2.253 0 0 0 2.174-1.671l1.607-6.023c.107-.4.52-.636.918-.53ZM15.232 1.5a2.628 2.628 0 0 1 2.625 2.625 2.628 2.628 0 0 1-2.625 2.625 2.628 2.628 0 0 1-2.625-2.625A2.628 2.628 0 0 1 15.232 1.5Z" fill-rule="evenodd"></path></svg>
                                        <h4> لیست مسافران </h4>
                                    </div>
                                    <div className='left'>
                                        <HoverButton title={' افزودن مسافر جدید '} icon={<Plus />} />
                                    </div>
                                </div>
                                <div className='button'>
                                    <img src='https://www.alibaba.ir/assets/images/no-passengers-944b0186.svg' />
                                    <h6> لیست مسافران شما خالی است </h6>
                                    <h5> برای دسترسی راحت‌تر به اطلاعات مسافران خود در هنگام خرید، مسافران خود را اضافه کنید. </h5>
                                    <button>
                                        <svg viewBox="0 0 24 24" width="1.5em" fill="currentColor" class="w-5 ml-1" data-v-0a4752b9=""><path d="M18.75 12.75a3.754 3.754 0 0 1 3.75 3.75v2.25a.75.75 0 0 1-.75.75H10.5a.75.75 0 0 1-.75-.75V16.5a3.754 3.754 0 0 1 3.75-3.75h5.25Zm-13.125-6a.75.75 0 0 1 .75.75v2.625H9a.75.75 0 1 1 0 1.5H6.375v2.625a.75.75 0 1 1-1.5 0v-2.625H2.25a.75.75 0 1 1 0-1.5h2.625V7.5a.75.75 0 0 1 .75-.75ZM16.5 4.5a3.754 3.754 0 0 1 3.75 3.75A3.754 3.754 0 0 1 16.5 12a3.754 3.754 0 0 1-3.75-3.75A3.754 3.754 0 0 1 16.5 4.5Z"></path></svg>
                                        <p> افزودن مسافر </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer' style={{ backgroundColor: 'white' }}>
                        <Footer />
                    </div>
                </>

            }

        </div>
    )
}

export default Passengers