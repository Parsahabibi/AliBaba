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
 
  return (
    <section className="services">
      <section className="top-services">
        <ul>
          {props.ItemServices.map((item) => (
            <Itemservices
              Link={item.Link}
              icon={item.icon}
              text={item.text}
              check={item.check}
            />
          ))}
        </ul>
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
