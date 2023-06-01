import React from "react";

const ButtonSearch = (props) => {
  return (
    <div>
      <button className="ButtonSearch">
        <p>{props.text ? props.text : "جستجو"}</p>
      </button>
    </div>
  );
};

export default ButtonSearch;
