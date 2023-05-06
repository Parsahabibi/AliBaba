import React from "react";

const SearchInput=({lable , id})=>{
    return (
      <div className="Search">
        <input type="text" id={id} />

        <label htmlFor={id}>{lable}</label>
      </div>
    );
}

export default SearchInput;