import React from "react";

import { Airplane, Bus, Camp, Hotel, Tour, Train } from "../../icons/Icons";
import { Link } from "react-router-dom";
const MobileHeader = () => {
  const icon = [
    { id: 1, title: <Airplane />, link: "/AirplanOutSide" },
    { id: 2, title: <Train />, link: "/Train" },
    { id: 3, title: <Bus />, link: "/bus" },
    { id: 4, title: <Hotel />, link: "/Hotel" },
    { id: 5, title: <Tour />, link: "/Thour" },
    { id: 6, title: <Camp />, link: "/Vila" },
  ];

  return (
    <div className="MobileHeader">
      <div className="bgColorHeader">
        <div className="imageMobileHeader">
          {/* img */}
          <img src={require("../../../assets/image/Footer/AlibabaIcon.png")} />
        </div>
        <div className="iconMobileHeader">
          {icon.map((item) => (
            <Link to={item.link} key={item.id}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
