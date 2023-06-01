import React from "react";
import { Link } from "react-router-dom";
import { LeftArrow } from "../icons/Icons";
const CardHotel = (props) => {
  return (
    <div className="card-hotel">
      <Link to={props.link}>
        <div>
          <img src={props.src} alt="" />
          <span>هتل های</span>
          <p>{props.text}</p>
        </div>
        <LeftArrow />
      </Link>
    </div>
  );
};
export default CardHotel;
