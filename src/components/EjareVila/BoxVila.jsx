import React from "react";

const BoxVila = (props) => {
  return (
    <div className="box-vila">
      <img src={props.src} alt="" />
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default BoxVila;
