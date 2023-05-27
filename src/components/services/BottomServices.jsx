import React from "react";
import ServicesAirplaneInside from "./ServicesBottom/ServicesAirplaneInside";
import ServicesbtnsAirplaneInside from "./ServicesTop/ServicesBtnsAirplaneinside";
import ServicesBtnsAirplaneoutside from "./ServicesTop/ServicesBtnsAirplaneoutside";
import ServicesAirplaneOutside from "./ServicesBottom/ServicesAirplaneOutside";
import ServicesTrain from "./ServicesBottom/ServicesTrain";
import ServicesBtnsTrain from "./ServicesTop/ServicesBtnTrain";
import ServicesBus from "./ServicesBottom/ServicesBus";
import ServicesBtnBus from "./ServicesTop/ServicesBtnBus";
import ServicesbtnsTour from "./ServicesTop/ServicesBtnTour";
import ServicesTour from "./ServicesBottom/ServicesTour";
import ServicesbtnsHotel from "./ServicesTop/ServicesBtnsHotel";
import ServicesHotel from "./ServicesBottom/ServicesHotel";
import ServicesbtnsVila from "./ServicesTop/ServicesBtnsVila";
import ServicesVila from "./ServicesBottom/ServicesVila";
const BottomServices = (props) => {
  return (
    <form action="">
      <div className="top-bottom-services">
        {props.TopBottomServices}
        {/* <ServicesbtnsAirplaneInside /> */}
        {/* <ServicesBtnsAirplaneoutside /> */}
        {/* <ServicesBtnsTrain/> */}
        {/* <ServicesBtnBus /> */}
        {/* <ServicesbtnsTour /> */}
        {/* <ServicesbtnsHotel /> */}
        {/* <ServicesbtnsVila /> */}
      </div>
      <div className="bottom-bottom-services">
        {props.BottomBottomServices}
        {/* <ServicesAirplaneInside /> */}
        {/* <ServicesAirplaneOutside /> */}
        {/* <ServicesTrain/> */}
        {/* <ServicesBus /> */}
        {/* <ServicesTour /> */}
        {/* <ServicesHotel /> */}
        {/* <ServicesVila /> */}
      </div>
    </form>
  );
};

export default BottomServices;
