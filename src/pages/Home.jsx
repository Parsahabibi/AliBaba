import React from "react";
import DesktopHomePage from "../components/DesktopHomePage/DesktopHomePage";
import MobileHomePage from "../components/MobileHomePage/MobileHomePage";
import MobileAccount from "./MobileAccount";
import IncreamentMoney from "../components/IncreamentMoney/IncreamentMoney";
import DesktopAccount from "../components/Dashboard/Account/DesktopAccount";
import ButtonConfirmAndReject from "../components/ButtonConfirmAndReject/ButtonConfirmAndReject";
import Accounts from "./Accounts";


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
    // <MobileAccount />
    <Accounts />
    // <IncreamentMoney />
    // <DesktopAccount />
    // <ButtonConfirmAndReject />
  );
};

export default Home;
