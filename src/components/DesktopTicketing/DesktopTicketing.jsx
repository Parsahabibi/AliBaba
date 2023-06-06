import React from 'react'
import DesktopHeader from '../Header/DesktopHeader/DesktopHeader'
import ItemsDashboardAccount from '../ItemsAccount/ItemsAccount'
import HoverButton from '../HoverButton/HoverButton'
import { Plus } from '../icons/Icons'

const DesktopTicketing = () => {
  return (
    <div className='DesktopTicketing'>
      <div className='headerDesktopTicketing'>
        <DesktopHeader />
      </div>
      <div className='mainDesktopTicketing'>
        <ItemsDashboardAccount />
        <div className='bodyDesktopTicketing'>
          <div className='question'>
            <div className='right'>
              <svg viewBox="0 0 24 24" width="24px" height="24px" fill="currentColor" class="ml-2 text-grays-500"><path d="m20.53 11.4-1.03-.193V9.608c0-4.057-3.364-7.358-7.5-7.358S4.5 5.551 4.5 9.608v1.599l-1.031.192a1.48 1.48 0 0 0-1.219 1.447v.884c0 .705.513 1.313 1.219 1.446l1.62.302 2.048.502a1.527 1.527 0 0 0 1.286-.267c.367-.281.577-.704.577-1.16v-3.266c0-.457-.21-.88-.578-1.161a1.511 1.511 0 0 0-1.285-.267L6 10.137v-.529c0-3.246 2.692-5.886 6-5.886s6 2.64 6 5.886v.53l-1.136-.279a1.516 1.516 0 0 0-1.287.267A1.453 1.453 0 0 0 15 11.287v3.265c0 .457.21.88.577 1.16a1.511 1.511 0 0 0 1.286.268L18 15.702v.529c0 1.623-1.346 2.944-3 2.944h-.159a1.876 1.876 0 0 0-1.716-1.104h-2.25c-1.034 0-1.875.825-1.875 1.84 0 1.014.84 1.84 1.875 1.84h2.25c.767 0 1.426-.456 1.716-1.105H15c2.482 0 4.5-1.98 4.5-4.415v-.863l1.031-.192a1.482 1.482 0 0 0 1.219-1.446v-.885a1.48 1.48 0 0 0-1.22-1.446Z"></path></svg>
              <h4> درخواست‌های پشتیبانی </h4>
            </div>
            <div className='left'>
              <HoverButton title={' ایجاد درخواست جدید '} icon={<Plus />} />
            </div>
          </div>
          <div className='content'>
            <img src='https://www.alibaba.ir/assets/images/ticketing/empty-message-1695fd8d.svg' alt='' />
            <h6 className='h6'> صندوق درخواست‌های پشتیبانی شما خالی است. </h6>
            <h6 className='h5'> اگر سوال یا مشکلی دارید می توانید با ایجاد درخواست پشتیبانی در سریعترین زمان ممکن آن را پیگیری کنید. </h6>
            <button> ایجاد درخواست جدید </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopTicketing