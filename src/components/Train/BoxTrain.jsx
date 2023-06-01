import React from "react";
import { Link } from "react-router-dom";
import { LeftArrow } from "../icons/Icons";

const BoxTrain = (props) => {
  return (
    <div className="box-train">
      <img src={props.img} alt="" />
      <div>
        <Link to={props.link}>
          <p>{props.descreption}</p>
          <LeftArrow />
        </Link>
      </div>
    </div>
  );
};

export default BoxTrain;
