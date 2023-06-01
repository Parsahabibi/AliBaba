import React from "react";

const BoxBlitTrain = (props) => {
  return (
    <div className="box-blit-train">
      <div
        className="bg-box-blit-train"
        style={{ backgroundImage: `url(${props.bg})` }}
      >
        <div className="bg-dark-box-blit-train">
          <h4>{props.title}</h4>
        </div>
      </div>
      <p className="matn-box-blit-train">
        {props.matn}
      </p>
    </div>
  );
};

export default BoxBlitTrain;
