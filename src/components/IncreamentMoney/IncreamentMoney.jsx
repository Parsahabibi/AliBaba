import React, { useState } from 'react'
import { Close } from '../icons/Icons'
import SearchInput from '../SearchInput/SearchInput'
import NewSearchInput from '../NewSearchInput/NewSearchInput'
const IncreamentMoney = ({classes}) => {




  const [able, setAble] = useState(false)

  const [open, setOpen] = useState(true)


  const handleAble = () => {
    setAble(true)
  }


  const handleDisAble = () => {
    setAble(false)
  }

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
                <NewSearchInput label={'افزایش موجودی'} func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}/>

              </div>
              <div className='button'>
                <button onClick={() => { able === true ? setOpen(false) : setOpen(true) }} style={{ width: '100%' }} className={able === false ? 'Able' : 'disable'}>تایید و دریافت کد</button>
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