import React from "react";
import BusDesktop from "../components/Bus/BusDesktop";
import BusMobile from "../components/Bus/BusMobile";
import useViewport from "../components/UseLayoutEffect";

const Bus = () => {
  const { width } = useViewport();

  return width < 900 ? <BusMobile /> : <BusDesktop />;
};

export default Bus;
