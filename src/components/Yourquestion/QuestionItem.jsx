import { useState } from "react";
import { QuestionIcon, ToggleDownIcon } from "../icons/Icons";

const QuestionItem = (props) => {
  return (
    <div className="item-your-question" style={props.style}>
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>
        <div className="head-your-question">
          <div>
            <QuestionIcon />
            <h4>{props.title}</h4>
          </div>
          <ToggleDownIcon />
        </div>
      </label>
      <div className="body-your-question">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default QuestionItem;
