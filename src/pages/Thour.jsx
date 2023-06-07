import React from "react";
import ThourDesktop from "../components/Thour/ThourDesktop";
import ThourMobile from "../components/Thour/ThourMobile";
import useViewport from "../components/UseLayoutEffect";

const Thour = () => {
  const { width } = useViewport();

  return width < 900 ? <ThourMobile /> : <ThourDesktop />;
};

export default Thour;
