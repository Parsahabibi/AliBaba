import React from "react";

const BottomServices = (props) => {
  return (
    <form action="">
      <div className="top-bottom-services">
        {props.TopBottomServices}
   
      </div>
      <div className="bottom-bottom-services">
        {props.BottomBottomServices}
    
      </div>
    </form>
  );
};

export default BottomServices;
