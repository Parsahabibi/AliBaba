import React from "react";
import HotelDesktop from "../components/Hotel/HotelDesktop";
import HotelMobile from "../components/Hotel/HotelMobile";
import useViewport from "../components/UseLayoutEffect";

const Hotel = () => {
  const { width } = useViewport();

  return width < 900 ? <HotelMobile /> : <HotelDesktop />;
};

export default Hotel;
