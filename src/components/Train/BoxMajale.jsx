import React from "react";
import { Link } from "react-router-dom";


const BoxMajale=(props)=>{
    return (
      <div className="box-majale">
        <Link to={props.link}>
          <img src={props.img} alt="" />
          <div className="caption-box-majale">
            <div>
              <img
                src="./assets/image/Train/logo-alibaba-square-logo-small.svg"
                alt=""
              />
              <span> مجله گردشگری علی‌بابا </span>
            </div>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
          </div>
        </Link>
      </div>
    );
}

export default BoxMajale;