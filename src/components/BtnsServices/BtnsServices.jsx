import React from "react";
import { ToggleDownIcon } from "../icons/Icons";

const BtnsServices = (props) => {
  const items = [...props.ItemsBtns];

  return (
    <div className="btn-services" onClick={props.handleclick}>
      <p className={props.classP}>{props.matn}</p>
      <ToggleDownIcon />
      <div className="items-btns-services">
        <ul>
          {items.map((item) => (
            <li onClick={props.PutItemInBtn}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BtnsServices;
