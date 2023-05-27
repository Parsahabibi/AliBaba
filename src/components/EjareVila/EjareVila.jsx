import React from "react";
import {Link} from "react-router-dom";
const EjareVila=(props)=>{
    return (
        <div className="btn-ejare-vila">
          <Link to={props.link}>{props.text}</Link>
        </div>
    
    );
}

export default EjareVila;