import React from "react";

const SearchInput = ({
  label,
  id,
  valueInput,
  classlabel,
  DropDown,
  handleclick,
  refinput,
  refLabel,
}) => {
  return (
    <div className="Search" onClick={handleclick}>
      <input type="text" id={id} value={valueInput} ref={refinput} />

      <label htmlFor={id} className={classlabel} ref={refLabel}>
        {label}
      </label>

      {DropDown}
    </div>
  );
};

export default SearchInput;
