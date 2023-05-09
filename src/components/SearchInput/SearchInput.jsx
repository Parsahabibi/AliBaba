import React from "react";


const SearchInput = ({ label, id, valueInput,classlabel }) => {


  return (
    <div className="Search">
      <input type="text" id={id} value={valueInput} />

      <label htmlFor={id} className={classlabel}>{label}</label>
    </div>
  );
};

export default SearchInput;
