import React from "react";
import Bgservices from "../Bgservices/Bgservices";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { AirplaneInsideServices, AirplaneOutsidServices, BusServices, HotelServices, TourServices, TrainServices, VilaServices } from "../icons/Icons";
import Services from "../services/Services";
import ServicesBus from "../services/ServicesBottom/ServicesBus";
import ServicesbtnsBus from "../services/ServicesTop/ServicesBtnBus";

const BusDesktop = () => {
  const item_services = [
    {
      check: "deactive",
      Link: "/",
      icon: <AirplaneInsideServices />,
      text: "پرواز داخلی",
    },
    {
      check: "deactive",
      Link: "/AirplanOutSide",
      icon: <AirplaneOutsidServices />,
      text: "پرواز خارجی",
    },
    {
      check: "deactive",
      Link: "/Train",
      icon: <TrainServices />,
      text: "قطار",
    },
    { check: "active", Link: "/Bus", icon: <BusServices />, text: "اتوبوس" },
    { check: "deactive", Link: "/Thour", icon: <TourServices />, text: "تور" },
    {
      check: "deactive",
      Link: "/Hotel",
      icon: <HotelServices />,
      text: "هتل",
    },
    {
      check: "deactive",
      Link: "/Vila",
      icon: <VilaServices />,
      text: "ویلا و اقامتگاه",
    },
  ];
  return (
    <div className="bus-desktop">
      <Header />
      <Bgservices img="./assets/image/HomeImage/bus.jpg" />
      <div className="main">
        <Services
          ItemServices={item_services}
          TopBottomServices={<ServicesBus />}
          BottomBottomServices={<ServicesbtnsBus />}
        />
      </div>

      <Footer
        conditional={true}
        IdMore="morebusnmobile"
        IdMoreDesktop="morebusdesktop"
      />
    </div>
  );

};

export default BusDesktop;
