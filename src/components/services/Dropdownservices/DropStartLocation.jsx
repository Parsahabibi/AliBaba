import React from "react";
import { Location } from "../../icons/Icons";

const DropStartLocation = ({ id, handleclick, classdropdown }) => {
  const items_dropdown = [
    "تهران",
    "اهواز",
    "شیراز",
    "مشهد",
    "بندر عباس",
    "اصفهان",
    "تبریز",
    "کیش",
  ];

  const output_dropdown = items_dropdown.map((item) => (
    <li onClick={handleclick}>
      <span className="color-black">
        <Location />
        {item}
      </span>
    </li>
  ));
  return (
    <div className={classdropdown} ref={id}>
      <ul>
        <li>
          <span>پرتردد</span>
        </li>
        {output_dropdown}
      </ul>
    </div>
  );
};

export default DropStartLocation;
