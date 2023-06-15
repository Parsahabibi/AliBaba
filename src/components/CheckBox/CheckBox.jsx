import React, { useState } from 'react'

const CheckBox = ({label , image}) => {

    const [isChecked, setIsChecked] = useState(false);


    return (
        <div>
            <div className="checkbox-wrapper">
                <label style={{display:'flex' , alignItems:'center' , gap:'10px'}}>
                    <input onClick={()=>{setIsChecked(!isChecked)}} style={{width:'18px' , height:'18px' , borderRadius:'4px' , backgroundColor:'#F8FAFB' , borderColor:'#BEC6CC'}} type="checkbox" checked={isChecked} />
                    <h5 style={{fontWeight:600 , color:'#6C7680'}}>{label}</h5>
                </label>
            </div>
        </div>
    )
}

export default CheckBox