import React from "react";
import { Link } from "react-router-dom";

const ButtonSearch = (props) => {
  return (
    <div>
      <Link to='/Search'>
        <button className="ButtonSearch">
          <p>{props.text ? props.text : "جستجو"}</p>
        </button>
      </Link>
    </div>
  );
};

export default ButtonSearch;
