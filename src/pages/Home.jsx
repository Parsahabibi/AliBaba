import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import OtherService from '../components/OtherService/OtherService';
<<<<<<< HEAD
import Questions from '../components/Yourquestion/YourQuestion';
=======
import HomePageContent from '../components/HomePageContent/HomePageContent'

>>>>>>> 480d23560d341197d660f1cf718abe2ba0190191
const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "120px", width: "90%", margin: "0 auto" }}>
        <OtherService />
        <HomePageContent />
        <Footer />
      </div>
<<<<<<< HEAD
      <Questions />
      <Footer />

=======
>>>>>>> 480d23560d341197d660f1cf718abe2ba0190191
    </div>
  )
}

export default Home;