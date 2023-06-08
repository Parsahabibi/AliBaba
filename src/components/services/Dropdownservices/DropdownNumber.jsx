import React from "react";
import { Add, Remove } from "../../icons/Icons";

const DropdownNumber = ({
  clickbtnincrement,
  clickbtndecrement,
  clickbtnincrement2,
  clickbtndecrement2,
  clickbtnincrement3,
  clickbtndecrement3,
  classdropdown,
  classbtn,
  ValueAdult,
  ValueChild,
  ValueKid,
}) => {
  return (
    <div className="dropdown-number">
      <div className="item-dropdown-number">
        <div className="matn-item-dropdown-number">
          <p>بزرگسال</p>
          <span>(۱۲ سال به بالا)</span>
        </div>
        <div>
          <div className={classdropdown + " chose-number"}>
            <div className="btn" onClick={clickbtnincrement}>
              <Add />
            </div>
            <span>{ValueAdult ||1}</span>
            <div
              className={classbtn + " btn btndecrement disabled"}
              onClick={clickbtndecrement}
            >
              <Remove />
            </div>
          </div>
        </div>
      </div>
      <div className="item-dropdown-number">
        <div className="matn-item-dropdown-number">
          <p>کودک</p>
          <span>(۲ تا ۱۲ سال)</span>
        </div>
        <div>
          <div className={classdropdown + " chose-number"}>
            <div className="btn" onClick={clickbtnincrement2}>
              <Add />
            </div>
            <span>{ValueKid ||0}</span>
            <div
              className={classbtn + " btn btndecrement disabled"}
              onClick={clickbtndecrement2}
            >
              <Remove />
            </div>
          </div>
        </div>
      </div>
      <div className="item-dropdown-number">
        <div className="matn-item-dropdown-number">
          <p>نوزاد</p>
          <span>(۱۰ روز تا ۲ سال)</span>
        </div>
        <div>
          <div className={classdropdown + " chose-number"}>
            <div className="btn" onClick={clickbtnincrement3}>
              <Add />
            </div>
            <span>{ValueChild||0}</span>
            <div
              className={classbtn + " btn btndecrement disabled"}
              onClick={clickbtndecrement3}
            >
              <Remove />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownNumber;
