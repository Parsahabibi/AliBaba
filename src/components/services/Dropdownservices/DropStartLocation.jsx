import React from "react";
import { Location } from "../../icons/Icons";

const DropStartLocation = ({
  id,
  handleclick,
  classdropdown,
  itemsDropdown,
  TitleDropdown
}) => {
 
  return (
    <div className={classdropdown} ref={id}>
      <ul>
        <li>
          <span>{TitleDropdown ? TitleDropdown : "پرتردد"}</span>
        </li>
        {itemsDropdown.map((item) => (
          <li onClick={handleclick}>
            <span className="color-black">
              <Location />
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropStartLocation;
