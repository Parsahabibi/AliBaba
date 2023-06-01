import React from "react";
import { Link } from "react-router-dom";

const Itemservices = (props) => {
  return (
    <li className={props.check}>
      <div className="border-bottom"></div>
      <Link to={props.Link}>
        {props.icon}
        <p>{props.text}</p>
      </Link>
    </li>
  );
};

export default Itemservices;
