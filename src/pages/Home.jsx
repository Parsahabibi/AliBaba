import React from "react";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import OtherService from "../components/OtherService/OtherService";
// import Questions from "../components/Yourquestion/YourQuestion";
// import HomePageContent from "../components/HomePageContent/HomePageContent";
// import Services from "../components/services/Services";
// import Bgservices from "../components/Bgservices/Bgservices.jsx";
// import OtherServiceDesktop from "../components/OtherService/OtherServiceDesktop/OtherServiceDesktop";
// import InstallApplication from "../components/InstallApplication/InstallApplication";
// import BashgahMoshtarian from "./BashgahMoshtarian";
// import Account from "../components/Dashboard/Account/Account";
// import DesktopHomePage from "../components/DesktopHomePage/DesktopHomePage";
// import MobileHomePage from "../components/MobileHomePage/MobileHomePage";
// import Slider from "../components/Slider/Slider";
import Account from '../components/Dashboard/Account/Account'
import MobileAccount from "./MobileAccount";
const Home = () => {
  return (
    // <div className="HomePage">
    //   <div className="DesktopHomePage">
    //     <DesktopHomePage />
    //   </div>
    //   <div className="MobileHomePage">
    //     <MobileHomePage />
    //   </div>
    // </div>
    <div>
      <MobileAccount />
      {/* <Account /> */}
    </div>
  );
};

export default Home;
