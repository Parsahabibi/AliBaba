import React from "react";
import { Link } from "react-router-dom";

import {
  AirplaneInsideServices,
  AirplaneOutsidServices,
  BusServices,
  HotelServices,
  TourServices,
  TrainServices,
  VilaServices,
} from "../icons/Icons";
import BottomServices from "./BottomServices";
import Itemservices from "./Itemservices";
import ServicesAirplaneInside from "./ServicesBottom/ServicesAirplaneInside";
import ServicesbtnsAirplaneInside from "./ServicesTop/ServicesBtnsAirplaneinside";

const Services = (props) => {
  // const item_services = [
  //   { check: "active", icon: <AirplaneInsideServices />, text: "پرواز داخلی" },
  //   { check: "deactive",icon: <AirplaneOutsidServices />,text: "پرواز خارجی"},
  //   { check: "deactive", icon: <TrainServices />, text: "قطار" },
  //   { check: "deactive", icon: <BusServices />, text: "اتوبوس" },
  //   { check: "deactive", icon: <TourServices />, text: "تور" },
  //   { check: "deactive", icon: <HotelServices />, text: "هتل" },
  //   { check: "deactive", icon: <VilaServices />, text: "ویلا و اقامتگاه" },
  // ];
  // const SutputItemServices = item_services.map((item) => (
  //   <Itemservices icon={item.icon} text={item.text} check={item.check} />
  // ));
  return (
    <section className="services">
      <section className="top-services">
        <ul>{
        props.ItemServices.map((item) => (
    <Itemservices icon={item.icon} text={item.text} check={item.check} />
  ))
        }</ul>
      </section>

      <section className="bottom-services">
        <BottomServices
          TopBottomServices={props.TopBottomServices}
          BottomBottomServices={props.BottomBottomServices}
        />
      </section>
    </section>
  );
};

export default Services;
