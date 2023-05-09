import React from 'react';
import { ToggleDownIcon } from '../icons/Icons';


const BtnsServices=(props)=>{
    return (
      <div className="btn-services ">
        <p className={props.classP}>{props.matn}</p>
        <ToggleDownIcon />
      </div>
    );
}

export default BtnsServices;