import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Questions from "../components/Yourquestion/YourQuestion";
import { Link } from "react-router-dom";
import QuestionItem from "../components/Yourquestion/QuestionItem";
import ServicesAirplaneInside from "../components/services/ServicesBottom/ServicesAirplaneInside";

const Search = () => {

    const content_item_your_question_Bus = [
      {
        id: "item-questions-search-desktop",
        title: ``,
        description: (
          <div>
           
          </div>
        ),
      },

     
    ];
    // function data(x){
    //     console.log(x);
    // }
  return (
    <div className="search-page">
      <Header />
        <ServicesAirplaneInside />
      <div className="main">
        <Questions ItemYourQuestion={content_item_your_question_Bus} />
      </div>
      <Footer  />
    </div>
  );
};

export default Search;
