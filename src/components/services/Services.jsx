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
import Itemservices from "./Itemservices";

const Services = () => {
  const item_services = [
    { check: "active", icon: <AirplaneInsideServices />, text: "پرواز داخلی" },
    { check: "deactive",icon: <AirplaneOutsidServices />,text: "پرواز خارجی"},
    { check: "deactive", icon: <TrainServices />, text: "قطار" },
    { check: "deactive", icon: <BusServices />, text: "اتوبوس" },
    { check: "deactive", icon: <TourServices />, text: "تور" },
    { check: "deactive", icon: <HotelServices />, text: "هتل" },
    { check: "deactive", icon: <VilaServices />, text: "ویلا و اقامتگاه" },
  ];
  const SutputItemServices = item_services.map((item) => (
    <Itemservices icon={item.icon} text={item.text} check={item.check} />
  ));
  return (
    <section className="services">
  
      <section className="top-services">
        <ul>{SutputItemServices}</ul>
      </section>
      <section className="bottom-services">
        <form action="">
          <div className="top-bottom-services">

          </div>
          <div className="bottom-bottom-services">

          </div>
        </form>
      </section>
    </section>
  );
};

export default Services;
