import React from "react";
import MoshtarianDesktop from "../components/BashgahMoshtarian/MoshtarianDesktop";
import MoshtarianMobile from "../components/BashgahMoshtarian/MoshtarianMobile";
import useViewport from "../components/UseLayoutEffect";

const BashgahMoshtarian = () => {
  const { width } = useViewport();

  return width < 900 ? <MoshtarianMobile /> : <MoshtarianDesktop />;
};

export default BashgahMoshtarian;
