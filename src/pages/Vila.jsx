import React from "react";
import useViewport from "../components/UseLayoutEffect";
import VilaDesktop from "../components/Vila/VilaDesktop";
import VilaMobile from "../components/Vila/VilaMobile";

const Vila = () => {
  const { width } = useViewport();

  return width < 900 ? <VilaMobile /> : <VilaDesktop />;
};

export default Vila;
