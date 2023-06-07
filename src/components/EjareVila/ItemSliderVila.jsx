import React from "react";
import { Link } from "react-router-dom";
const ItemSliderReserveVila = (props) => {
  return (
    <Link to={props.link}>
      <div className="item-slider-reserve-vila">
        <img src={props.src} alt="" />
        <div>
          <span>{props.title}</span>
          <p>
            برای ۱ {props.ForWhat || "شب"} <span>{props.price}</span>ریال
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ItemSliderReserveVila;
