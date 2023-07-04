import React, { useState } from 'react'

const NewSearchInput = ({ label, valueInput, classlabel, handleclick, func , type }) => {

    const [classLabels, SetClassLabels] = useState('')

    // const validate = (value)=>{
    //     if(type === 'number'){
    //         if(/^\+98\d{10}$/.test(e.target.value)){
    //             func.isable()
    //         }else{
    //             func.isntAlbe() 
    //         }
            
    //     }
    // }

    const checkinput = (e) => {
        if (e.target.value.length >= 1) {
            SetClassLabels('labelfix')
            func.isable()
        } else {
            SetClassLabels('')
            func.isntAlbe()
        }
    };


    return (
        <div className='Search' onClick={handleclick}>
            <input type={type} onClick={checkinput} onChange={checkinput} value={valueInput} />
            <label className={`${classlabel} ${classLabels}`} >
                {label}
            </label>
        </div>
    )
}

export default NewSearchInput