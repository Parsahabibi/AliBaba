import React from "react";
import Bgservices from "../Bgservices/Bgservices";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { AirplaneInsideServices, AirplaneOutsidServices, BusServices, HotelServices, TourServices, TrainServices, VilaServices } from "../icons/Icons";
import Services from "../services/Services";
import ServicesTour from "../services/ServicesBottom/ServicesTour";
import ServicesbtnsTour from "../services/ServicesTop/ServicesBtnTour";
import Questions from "../Yourquestion/YourQuestion";
import OtherServiceDesktop from "../OtherService/OtherServiceDesktop/OtherServiceDesktop";

const ThourDesktop = () => {
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
     { check: "deactive", Link: "/Bus", icon: <BusServices />, text: "اتوبوس" },
     { check: "active", Link: "/Thour", icon: <TourServices />, text: "تور" },
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
   const content_item_your_question_Thour = [
     {
       id: "item-questions-thour-desktop",
       title: ``,
       description: ``,
     },
   ];
  return (
    <div className="thour-desktop">
      <Header />
      <Bgservices img="./assets/image/HomeImage/tour.jpg" />
      <div className="main">
        <Services
          ItemServices={item_services}
          BottomBottomServices={<ServicesTour />}
          TopBottomServices={<ServicesbtnsTour />}
        />
       

        
      </div>

      <Footer
        conditional={true}
        IdMore="moretrainmobile"
        IdMoreDesktop="moretraindesktop"
      />
    </div>
  );
};

export default ThourDesktop;
