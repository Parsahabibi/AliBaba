import React from "react";
import { Link } from "react-router-dom";
import QuestionItem from "./QuestionItem";

const Questions = (props) => {
 
  const items_questions =props.ItemYourQuestion;
  return (
    <section className="your-question">
      <h2>{props.title ? props.title : "پرسش های شما"}</h2>
      <div className="main-your-question">
        {items_questions.map((item) => (
          <QuestionItem
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Questions;
