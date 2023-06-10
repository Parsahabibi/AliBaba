
import React, { useRef, useState } from 'react'
import { Close, Dollar, LeftArrow, List, Logo, Money, OutlinedUser, Pen, PlusIcon, Poshtibani1, TickGreen, TravelIcon, User, UserEnter, UserIcon } from '../../icons/Icons'
import DesktopHeader from '../../Header/DesktopHeader/DesktopHeader'
import { Link } from 'react-router-dom'
import HoverButton from '../../HoverButton/HoverButton'
import Footer from '../../../components/Footer/Footer'
import ItemsDashboardAccount from '../../ItemsAccount/ItemsAccount'
import SearchInput from '../../SearchInput/SearchInput'
const DesktopAccount = () => {

  const ItemsAccount = [
    { id: 1, image: <User />, title: 'حساب کاربری', link: '' },
    { id: 2, image: <TravelIcon />, title: 'سفرهای من', link: '' },
    { id: 2, image: <TravelIcon />, title: 'سفرهای من', link: "/Account/MyTrip" },
    { id: 3, image: <List />, title: 'لیست مسافران', link: '' },
    { id: 4, image: <Poshtibani1 />, title: 'درخواست پشتیبانی', link: "/Account/DesktopTicketing" },
    { id: 5, image: <Money />, title: 'موجودی و تراکنش‌ها', link: '' },
    { id: 6, image: <Logo />, title: 'باشگاه همسفران', link: '' },
  ]



  const [open, setOpen] = useState(false)
  const [opens, setOpens] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openModalTwo, setOpenModalTwo] = useState(false)
  const [openModalThree, setOpenModalThree] = useState(false)
  const [able, setAble] = useState(false)


  const [value, setvalue] = useState('مرد')


  const refName = useRef('')
  const refGender = useRef('')
  const lastName = useRef('')
  const Code = useRef('')
  const birthday = useRef('')
  const EmergencyCall = useRef('')

  const change = useRef('')




  const shaba = useRef('')
  const hesab = useRef('')
  const card = useRef('')



  const email = useRef('')

  const mobile = useRef('')



  const password = useRef('')
  const reaped = useRef('')






  return (
    <div className='DesktopAccount'>
      <div onClick={() => { setOpenModal(false) }} className='baler' style={openModal === true ? { display: 'inline' } : { display: 'none' }}></div>
      <div onClick={() => { setOpenModalTwo(false) }} className='baler' style={openModalTwo === true ? { display: 'inline' } : { display: 'none' }}></div>
      <div onClick={() => { setOpenModalThree(false) }} className='baler' style={openModalThree === true ? { display: 'inline' } : { display: 'none' }}></div>
      <div className='headerAccount'>
        <DesktopHeader />
      </div>
      <div className='mainAccount'>
        <div className='itemsAccount'>
          <ItemsDashboardAccount id={1} />
        </div>
        <div className='contentAccount'>
          <div className='NumberAccountDesktop'>
            <div className='right'>
              <img src='https://www.alibaba.ir/assets/images/avatar-4c776756.svg' />
              <h4>09197401839</h4>
            </div>
            <div className='left'>
              <div className='Balance'>
                <h5> موجودی حساب </h5>
                <div className='count'>
                  <h3>0</h3>
                  <h5>ریال</h5>
                </div>
                <Link to={"/Account/DesktopTransactions"} className='Increment'>
                  <h5> افزایش موجودی </h5>
                  <LeftArrow />
                </Link>
              </div>
              <div className='divider'></div>
              <div className='club'>
                <h5>باشگاه همسفران</h5>
                <div className='middle'>
                  <div className='point'>
                    <h3>0</h3>
                    <h5>امتیاز</h5>
                  </div>
                  <div className='room'>
                    <h5>اتاق آبی</h5>
                  </div>
                </div>
                <Link to={"/Account/Loyalty"} className='details'>
                  <h5> مشاهده جزئیات </h5>
                  <LeftArrow />
                </Link>
              </div>
            </div>
          </div>
          <div className='InformationsAccountDesktop'>
            <div className='Informations'>
              <div className='Information'>
                <UserEnter />
                <h4> اطلاعات حساب کاربری</h4>
              </div>
              <div className='Button'>
                <HoverButton title={" حساب کاربری علی‌بابا پلاس "} icon={<PlusIcon />} />
              </div>
            </div>
            <div className='MobileNumber'>
              <h6>شماره موبایل</h6>
              <div className='item'>
                <h6>09197401839</h6>
                <div className='confirm'>
                  <TickGreen />
                  <h5>تایید شده</h5>
                </div>
                <div className='ButtonEditMobile' >
                  <div onClick={() => { setOpenModal(true) }}>
                    <HoverButton title={"ویرایش"} icon={<Pen />} />
                  </div>
                  <div style={openModal === true ? { display: 'inline' } : { display: 'none' }} className='modalEditMobile'>
                    <div onClick={() => { setOpenModal(false) }} className='Icon'>
                      <Close />
                    </div>
                    <div className='ItemsModalEditMobile'>
                      <h3>ویرایش شماره موبایل</h3>
                      <h6> برای ویرایش، شماره موبایل جدید خود را وارد کنید. </h6>
                      <div style={{border:'1px solid #E2E6E9' , borderRadius:'8px' , width:'80%' , margin:'0 auto 20px auto'}}>
                        <SearchInput refLabel={mobile} label={'شماره موبایل'} />
                      </div>
                      <button style={{width:'80%'}} className={able === true ? 'able' : 'disAble'}>تایید و دریافت کد</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='Edit'>
              <div className='AddEmail'>
                <h6>ایمیل</h6>
                <div onClick={() => { setOpenModalTwo(true) }}>
                  <HoverButton title={"افزودن"} icon={<Pen />} />
                </div>
                <div style={openModalTwo === true ? { display: 'inline' } : { display: 'none' }} className='modalEditMobile'>
                  <div onClick={() => { setOpenModalTwo(false) }} className='Icon'>
                    <Close />
                  </div>
                  <div className='ItemsModalEditMobile'>
                    <h3>ویرایش آدرس ایمیل</h3>
                    <h6>برای ویرایش، آدرس ایمیل جدید خود را وارد کنید.</h6>
                    <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px', marginBottom: '20px', width: '85%', margin: '0 auto 20px auto' }}>
                      <SearchInput refLabel={email} label={'آدرس ایمیل'} />
                    </div>
                    <button className={able === true ? 'able' : 'disAble'}>تایید </button>
                  </div>
                </div>
              </div>
              <div className='EditUserName'>
                <button onClick={() => { setOpenModalThree(true) }}>
                  <svg viewBox="0 0 24 24" width="1.25rem" height="1.25rem" fill="currentColor" class="ml-1"><path d="M8.796 10.932a2.136 2.136 0 1 1 0-4.272 2.136 2.136 0 0 1 0 4.272Zm11.986 5.927-1.435-1.436a.742.742 0 0 0-.526-.218h-1.41v-1.41a.743.743 0 0 0-.745-.743h-1.409v-1.41a.745.745 0 0 0-.218-.526l-.733-.733c.293-1.003.31-2.06.042-3.086-.56-2.151-2.4-3.844-4.577-4.211-1.892-.32-3.74.266-5.08 1.604-1.34 1.34-1.925 3.192-1.606 5.081.368 2.177 2.061 4.017 4.211 4.577a5.762 5.762 0 0 0 3.086-.043l6.477 6.477c.14.14.328.218.526.218h2.154c.804 0 1.46-.656 1.46-1.46v-2.155a.744.744 0 0 0-.217-.526Z"></path></svg>
                  <h6> ویرایش کلمه عبور </h6>
                </button>
                <div style={openModalThree === true ? { display: 'inline' } : { display: 'none' }} className='modalEditMobile'>
                  <div onClick={() => { setOpenModalThree(false) }} className='Icon'>
                    <Close />
                  </div>
                  <div className='ItemsModalEditMobile'>
                    <h3>تغییر کلمه عبور</h3>
                    <h6>رمز عبور فعلی و رمز عبور جدید خود را وارد نمایید.</h6>
                    <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px', display: 'flex', alignItems: 'center', position: 'relative' }}>
                      <SearchInput refLabel={change} label={'رمز عبور فعلی'} />
                      {/* <div style={{position:'absolute' , right:'0px' , color:'#E2E6E9'}}>
                        <svg viewBox="0 0 24 24" width="1.5em" fill="currentColor"><path d="M19.716 3.22a.756.756 0 0 1 1.065 0 .756.756 0 0 1 0 1.064l-2.632 2.633-1.103 1.095-1.92 1.927-1.101 1.095-2.992 2.993-1.095 1.102-1.515 1.508-1.155 1.155-2.984 2.992a.768.768 0 0 1-.533.218.768.768 0 0 1-.532-.218.756.756 0 0 1 0-1.065l2.632-2.632a11.41 11.41 0 0 1-4.02-3.915 2.229 2.229 0 0 1 0-2.34C3.925 7.39 7.817 5.252 12 5.252c1.657 0 3.262.337 4.732.96l2.984-2.993Zm-.232 4.604a11.17 11.17 0 0 1 2.684 3.008c.443.72.443 1.62 0 2.34-2.092 3.442-5.983 5.58-10.168 5.58a12.16 12.16 0 0 1-3.052-.39l1.268-1.26c.585.097 1.177.15 1.784.15 3.659 0 7.063-1.86 8.885-4.86.15-.24.15-.54 0-.78a9.783 9.783 0 0 0-2.467-2.715l1.066-1.073ZM12 6.752c-3.66 0-7.064 1.86-8.886 4.86-.15.24-.15.54 0 .78.922 1.53 2.265 2.76 3.84 3.6l1.919-1.928a3.734 3.734 0 0 1-.622-2.062c0-2.07 1.68-3.75 3.749-3.75.765 0 1.47.232 2.062.622l1.515-1.507A10.797 10.797 0 0 0 12 6.752Zm3.712 4.853c.015.134.037.262.037.397a3.75 3.75 0 0 1-3.75 3.75c-.134 0-.262-.022-.397-.038l4.11-4.11ZM12 9.752a2.257 2.257 0 0 0-2.25 2.25c0 .345.083.668.225.967l2.992-2.992A2.235 2.235 0 0 0 12 9.752Z" fill-rule="evenodd"></path></svg>
                      </div> */}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingBottom: '15px' }}>
                      <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px', position: 'relative' }}>
                        <SearchInput refLabel={password} label={'رمز عبور جدید'} />
                        <span style={{ position: 'absolute', right: '0px', color: '#959EA6' }}>رمز عبور باید بیشتر از ۶ رقم باشد.</span>
                      </div>
                      <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px' }}>
                        <SearchInput refLabel={reaped} label={'تکرار رمز عبور جدید'} />
                      </div>
                    </div>
                    <button style={{ width: '100%' }} className={able === true ? 'able' : 'disAble'}> تغییر رمز عبور </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='Personal' style={open === true ? { paddingBottom: '0px' } : { paddingBottom: '16px' }}>
            <div className='PersonalInformation'>
              <div style={open === true ? { paddingBottom: '48px' } : { paddingBottom: '0px' }} className='text'>
                <OutlinedUser />
                <h4 > اطلاعات شخصی </h4>
              </div>
              <div onClick={() => { setOpen(true) }} style={open === false ? { display: 'block' } : { display: 'none' }}>
                <HoverButton title={"ویرایش اطلاعات"} icon={<Pen />} />
              </div>
            </div>
            {
              open === false ?
                <div className='name'>
                  <div className='top'>
                    <div className='right'>
                      <h6>نام و نام خانوادگی</h6>
                      <div className='border'></div>
                    </div>
                    <div className='left'>
                      <h6>کد ملی</h6>
                      <div className='border'></div>
                    </div>
                  </div>
                  <div className='bottom'>
                    <div className='right'>
                      <h6>شماره تماس ضروری</h6>
                      <div className='border'></div>
                    </div>
                    <div className='left'>
                      <h6>تاریخ تولد</h6>
                      <div className='border'></div>
                    </div>
                  </div>
                </div>
                :
                <div className='button'>
                  <div className='Input'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '30px' }}>
                      <div className='right'>
                        <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px', marginBottom: '2rem', paddingLeft: '32px' }}>
                          <SearchInput label={'نام'} refLabel={refName} />
                        </div>
                        <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px', paddingLeft: '32px' }}>
                          <SearchInput label={'جنسیت'} refLabel={refGender} />
                        </div>
                      </div>
                      <div className='middle'>
                        <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px', marginBottom: '2rem', paddingLeft: '32px' }}>
                          <SearchInput label={'نام خانوادگی'} refLabel={lastName} />
                        </div>
                        <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px' }}>
                          <SearchInput label={'کد ملی'} refLabel={Code} />
                        </div>
                      </div>
                      <div className='left'>
                        <div style={{ marginBottom: '2rem', position: 'relative' }}>
                          <h5 style={{ color: '#6C7680', position: 'absolute', top: '-30px' }}>تاریخ تولد</h5>
                          <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px', paddingLeft: '32px' }}>
                            <SearchInput label={'تاریخ تولد'} refLabel={birthday} />
                          </div>
                          {/* <div style={{display:'flex' , alignItems:'center'}}>
                        <div style={{border:'1px solid #E2E6E9' , width:'20%'}}>
                          <SearchInput label={'نام'} refLabel={refName} />
                        </div>
                        <div style={{border:'1px solid #E2E6E9' , width:'20%'}}>
                          <SearchInput label={'نام'} refLabel={refName} />
                        </div>
                        <div style={{border:'1px solid #E2E6E9' , width:'20%'}}>
                          <SearchInput label={'نام'} refLabel={refName} />
                        </div>
                      </div> */}
                        </div>
                        <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px', position: 'relative' }}>
                          <SearchInput label={'شماره تماس ضروری'} refLabel={EmergencyCall} />
                          <span style={{ position: 'absolute', top: '50px', color: '#959EA6', width: '110%' }}>
                            این شماره فقط برای زمان‌های ضروری که شماره اصلی شما در دسترس نباشد مورد استفاده قرار میگیرد.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='buttons'>
                    <div className='reject' onClick={() => { setOpen(false) }}>
                      <button >انصراف</button>
                    </div>
                    <div className='confirm'>
                      <button>تایید</button>
                    </div>
                  </div>
                </div>
            }
            <div className='NecessaryNumber'></div>
          </div>
          <div className='Bank' style={opens === true ? { paddingBottom: '0px' } : { paddingBottom: '16px' }}>
            <div className='BankInformation'>
              <div className='dollar'>
                <Dollar />
                <h4> اطلاعات حساب بانکی </h4>
              </div>
              <div onClick={() => { setOpens(true) }} style={opens === false ? { display: 'block' } : { display: 'none' }}>
                <HoverButton title={'ویرایش اطلاعات'} icon={<Pen />} />
              </div>
            </div>
            {
              opens === false ?
                <div className='detailsBank'>
                  <div className='top'>
                    <div className='right'>
                      <h6>شماره شبا</h6>
                      <div className='border'></div>
                    </div>
                    <div className='left'>
                      <h6>شماره حساب</h6>
                      <div className='border'></div>
                    </div>
                  </div>
                  <div className='bottom'>
                    <h6>شماره کارت</h6>
                    <div className='border'></div>
                  </div>
                </div>
                :
                <div className='InputBank'>
                  <h5 style={{ padding: '16px 32px', color: '#6C7680' }}> اطلاعات حساب بانکی به منظور بازگشت وجه پس از استرداد دریافت می‌شود.</h5>
                  <div className='input'>
                    <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px', paddingLeft: '32px' }}><SearchInput refLabel={shaba} label={'شماره شبا'} /></div>
                    <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px', paddingLeft: '32px' }}><SearchInput refLabel={hesab} label={'شماره حساب'} /></div>
                    <div style={{ border: '1px solid #E2E6E9', borderRadius: '8px', paddingLeft: '32px' }}><SearchInput refLabel={card} label={'شماره کارت'} /></div>
                  </div>
                  <div className='buttons'>
                    <div className='reject' onClick={() => { setOpens(false) }}>
                      <button >انصراف</button>
                    </div>
                    <div className='confirm'>
                      <button>تایید</button>
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  )
}
export default DesktopAccount