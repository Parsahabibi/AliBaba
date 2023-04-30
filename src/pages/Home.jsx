import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import OtherService from '../components/OtherService/OtherService';

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "120px", width: "90%", margin: "0 auto" }}>
        <OtherService />
      </div>
      <Footer />

    </div>
  )
}

export default Home;