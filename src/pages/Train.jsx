import React from "react";
import TrainDesktop from "../components/Train/TrainDesktop";
import TrainMobile from "../components/Train/TrainMobile";
import useViewport from "../components/UseLayoutEffect";

const Train = () => {
  const { width } = useViewport();

  return width < 900 ? <TrainMobile /> : <TrainDesktop />;
};

export default Train;
