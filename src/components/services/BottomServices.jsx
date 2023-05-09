import React from "react";
import ServicesAirplaneInside from "./ServicesBottom/ServicesAirplaneInside";
import ServicesbtnsAirplaneInside from "./ServicesTop/ServicesBtnsAirplaneinside";
import ServicesBtnsAirplaneoutside from "./ServicesTop/ServicesBtnsAirplaneoutside";
import ServicesAirplaneOutside from "./ServicesBottom/ServicesAirplaneOutside";
import ServicesTrain from "./ServicesBottom/ServicesTrain";
import ServicesBtnsTrain from "./ServicesTop/ServicesBtnTrain";
import ServicesBus from "./ServicesBottom/ServicesBus";
import ServicesBtnBus from "./ServicesTop/ServicesBtnBus";
const BottomServices = () => {
  return (
    <form action="">
      <div className="top-bottom-services">
        {/* <ServicesbtnsAirplaneInside /> */}
        {/* <ServicesBtnsAirplaneoutside /> */}
        {/* <ServicesBtnsTrain/> */}
        <ServicesBtnBus />
      </div>
      <div className="bottom-bottom-services">
        {/* <ServicesAirplaneInside /> */}
        {/* <ServicesAirplaneOutside /> */}
        {/* <ServicesTrain/> */}
        <ServicesBus />
      </div>
    </form>
  );
};

export default BottomServices;
