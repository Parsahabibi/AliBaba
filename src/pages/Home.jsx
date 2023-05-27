import React from "react";
import DesktopHomePage from "../components/DesktopHomePage/DesktopHomePage";
import MobileHomePage from "../components/MobileHomePage/MobileHomePage";


const Home = () => {

  return (
    <div className="HomePage">
      <div className="DesktopHomePage">
        <DesktopHomePage />
      </div>
      <div className="MobileHomePage">
        <MobileHomePage />
      </div>
    </div>
  );
};

export default Home;
