import React from "react";
import { Location } from "../../icons/Icons";

const DropStartLocation = ({
  id,
  handleclick,
  classdropdown,
  itemsDropdown,
}) => {
  // const items_dropdown = [
  //   "تهران",
  //   "اهواز",
  //   "شیراز",
  //   "مشهد",
  //   "بندر عباس",
  //   "اصفهان",
  //   "تبریز",
  //   "کیش",
  // ];

  // const output_dropdown = items_dropdown.map((item) => (
  //   <li onClick={handleclick}>
  //     <span className="color-black">
  //       <Location />
  //       {item}
  //     </span>
  //   </li>
  // ));
  return (
    <div className={classdropdown} ref={id}>
      <ul>
        <li>
          <span>پرتردد</span>
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
