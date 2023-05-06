import { useState } from "react";
import { QuestionIcon, ToggleDownIcon } from "../icons/Icons";

const QuestionItem = (props) => {
  //   const [isToggle, setisToggle] = useState(false);

  //   const openBoxHandler = () => {
  //     setisToggle((prevIsToggle) => !prevIsToggle);
  //   };
  //   const classname = isToggle ? "body-your-question open" : "body-your-question";

  //   return (
  //     <div className="item-your-question">
  //       <div className="head-your-question" onClick={openBoxHandler}>
  //         <div>
  //           <QuestionIcon />
  //           <h4>{props.title}</h4>
  //         </div>
  //         <ToggleDownIcon />
  //       </div>
  //       <div className={classname}>
  //         <p>{props.description}</p>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="item-your-question">
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
