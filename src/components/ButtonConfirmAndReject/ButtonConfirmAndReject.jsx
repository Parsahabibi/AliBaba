import React from 'react'

const ButtonConfirmAndReject = ({setOpen , setOpens}) => {
    return (
        <div className='ButtonConfirmAndReject'>
            <div onClick={()=>{setOpen(false)}} className='Reject'>
                <button>انصراف</button>
            </div>
            <div onClick={()=>{setOpens(false)}} className='Confirm'>
                <button>تایید</button>
            </div>
        </div>
    )
}

export default ButtonConfirmAndReject