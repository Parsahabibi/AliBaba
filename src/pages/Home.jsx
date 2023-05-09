import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import OtherService from "../components/OtherService/OtherService";
import Questions from "../components/Yourquestion/YourQuestion";
import HomePageContent from "../components/HomePageContent/HomePageContent";
import Services from "../components/services/Services";
import Bgservices from "../components/Bgservices/Bgservices.jsx";
const Home = () => {
  return (
    <div>
      <Header />
      <Bgservices img="./assets/image/HomeImage/Domesticflight.jpg" />
      <div className="main">
        <Services />
        <OtherService />
        <Questions />
        <HomePageContent />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
