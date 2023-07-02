import React, { useState } from 'react'

const NewSearchInput = ({label , valueInput , classlabel , handleclick }) => {

const [classLabels,SetClassLabels]=useState('')

    const checkinput = (e) => {
        if (e.target.value.length >= 1) {
          SetClassLabels('labelfix')
        } else {
            SetClassLabels('')

        }
      };


    return (
        <div className='Search' onClick={handleclick}>
            <input onClick={checkinput} onChange={checkinput} value={valueInput}/>      
            <label className={`${classlabel} ${classLabels}`} >
                {label}
            </label>
        </div>
    )
}

export default NewSearchInput