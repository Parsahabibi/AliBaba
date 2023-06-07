import React from "react";
import AirplanOutSideDesktop from "../components/AirplaneOutSide/AirplaneOutSideDesktop";
import AirplanOutSideMobile from "../components/AirplaneOutSide/AirplaneOutSideMobile";
import useViewport from "../components/UseLayoutEffect";

const AirplanOutSide = () => {

 
  const { width } = useViewport();

  return width < 900 ? <AirplanOutSideMobile /> : <AirplanOutSideDesktop />;
 
};
export default AirplanOutSide;
