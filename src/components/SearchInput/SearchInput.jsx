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
  type
}) => {
  const checkinput = (e) => {
    if (e.target.value.length >= 1) {
      refLabel.current.classList.add("labelfix");
    } else {
      refLabel.current.classList.remove("labelfix");
    }
  };
  return (
    <div className="Search" onClick={handleclick}>
      <input
        type={type}
        id={id}
        value={valueInput}
        ref={refinput}
        onChange={checkinput}
      />

      <label htmlFor={id} className={classlabel} ref={refLabel}>
        {label}
      </label>

      {DropDown}
    </div>
  );
};

export default SearchInput;
