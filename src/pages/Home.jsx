import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import OtherService from "../components/OtherService/OtherService";
import Questions from "../components/Yourquestion/YourQuestion";
import HomePageContent from "../components/HomePageContent/HomePageContent";
import Services from "../components/services/Services";
import Bgservices from "../components/Bgservices/Bgservices.jsx";
import OtherServiceDesktop from "../components/OtherService/OtherServiceDesktop/OtherServiceDesktop";
import InstallApplication from "../components/InstallApplication/InstallApplication";
const Home = () => {
  return (
    <div>
      <Header />
      <Bgservices img="./assets/image/HomeImage/Domesticflight.jpg" />
      <div className="main">
        <Services />
        <OtherServiceDesktop />
        <Questions />
        <HomePageContent />
      </div>

      <Footer conditional={true}/>
    </div>
    // <InstallApplication />
  );
};

export default Home;
