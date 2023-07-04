import React, { useState } from 'react'
import { BackArrow } from '../icons/Icons'
import { Link } from 'react-router-dom'
import NewSearchInput from '../NewSearchInput/NewSearchInput'

const EditUserName = () => {


    const [able, setAble] = useState(false)



    const handleAble = () => {
        setAble(true)
      }
    
    
      const handleDisAble = () => {
        setAble(false)
      }

    return (
        <div className='EditUserName'>
            <Link to={"/EditAccount"} className='HeaderUserNameAccount'>
                <BackArrow />
                <h6>تغییر کلمه عبور</h6>
            </Link>
            <div className='body'>
                <h5 style={{ paddingBottom: '32px' }}>  رمز عبور فعلی و رمز عبور جدید خود را وارد نمایید.  </h5>
                <div style={{ border: '1px solid rgba(0, 0, 0, .12)', borderRadius: '8px', fontSize: '14px' , marginBottom:'32px' }}>
                    <NewSearchInput  label={'رمز عبور فعلی'} func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}/>
                    {/* <svg style={{position:'absolute' , color:'#6C7680' , top:'-50px'}} viewBox="0 0 24 24" width="1.5em" fill="currentColor"><path d="M19.716 3.22a.756.756 0 0 1 1.065 0 .756.756 0 0 1 0 1.064l-2.632 2.633-1.103 1.095-1.92 1.927-1.101 1.095-2.992 2.993-1.095 1.102-1.515 1.508-1.155 1.155-2.984 2.992a.768.768 0 0 1-.533.218.768.768 0 0 1-.532-.218.756.756 0 0 1 0-1.065l2.632-2.632a11.41 11.41 0 0 1-4.02-3.915 2.229 2.229 0 0 1 0-2.34C3.925 7.39 7.817 5.252 12 5.252c1.657 0 3.262.337 4.732.96l2.984-2.993Zm-.232 4.604a11.17 11.17 0 0 1 2.684 3.008c.443.72.443 1.62 0 2.34-2.092 3.442-5.983 5.58-10.168 5.58a12.16 12.16 0 0 1-3.052-.39l1.268-1.26c.585.097 1.177.15 1.784.15 3.659 0 7.063-1.86 8.885-4.86.15-.24.15-.54 0-.78a9.783 9.783 0 0 0-2.467-2.715l1.066-1.073ZM12 6.752c-3.66 0-7.064 1.86-8.886 4.86-.15.24-.15.54 0 .78.922 1.53 2.265 2.76 3.84 3.6l1.919-1.928a3.734 3.734 0 0 1-.622-2.062c0-2.07 1.68-3.75 3.749-3.75.765 0 1.47.232 2.062.622l1.515-1.507A10.797 10.797 0 0 0 12 6.752Zm3.712 4.853c.015.134.037.262.037.397a3.75 3.75 0 0 1-3.75 3.75c-.134 0-.262-.022-.397-.038l4.11-4.11ZM12 9.752a2.257 2.257 0 0 0-2.25 2.25c0 .345.083.668.225.967l2.992-2.992A2.235 2.235 0 0 0 12 9.752Z" fill-rule="evenodd"></path></svg> */}
                </div>
                <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0, 0, 0, .12)' , marginBottom:'32px' }}></div>
                <div style={{ border: '1px solid rgba(0, 0, 0, .12)', borderRadius: '8px', fontSize: '14px' , marginBottom:'32px' }}>
                    <NewSearchInput label={'رمز عبور جدید'} func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}/>
                </div>
                <div style={{ border: '1px solid rgba(0, 0, 0, .12)', borderRadius: '8px', fontSize: '14px' , marginBottom:'32px' }}>
                    <NewSearchInput label={' تکرار رمز عبور جدید'} func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}/>
                </div>
            </div>
            <div className='Footer'>
                <button className={able === false ? 'Able' : 'disable'}> تغییر رمز عبور </button>
            </div>
        </div>
    )
}

export default EditUserName