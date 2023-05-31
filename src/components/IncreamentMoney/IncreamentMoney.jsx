import React, { useState } from 'react'
import { Close } from '../icons/Icons'
import SearchInput from '../SearchInput/SearchInput'
const IncreamentMoney = ({classes}) => {




  const [able, setAble] = useState(false)

  const [open, setOpen] = useState(true)



  return (
    <div>
      {
        open === true ?
          <div className='IncreamentMoney'>
            <div className={classes}>
              <div className='title'>
                <h6> افزایش موجودی </h6>
                <button onClick={() => { setOpen(!open) }}>
                  <Close />
                </button>
              </div>
              <div className='Input'>
                {/* <SearchInput label={'افزایش موچودی'}/> */}
              </div>
              <div className='button'>
                <button className={able === false ? 'Able' : 'disable'}>تایید و دریافت کد</button>
              </div>
            </div>
          </div>
          :
          <></>
      }
    </div>
  )
}

export default IncreamentMoney