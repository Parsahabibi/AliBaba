import React from "react";
import BtnsServices from "../../BtnsServices/BtnsServices";

const ServicesBtnsTrain = () => {
  return (
    <div>
      <BtnsServices matn="رفت و برگشت" />
      <BtnsServices matn="دربست نمی‌خواهم" />
      <BtnsServices matn="مسافرین عادی" />
      <BtnsServices matn="حمل خودرو نمی‌خواهم" classP ='new'/>
    </div>
  );
};

export default ServicesBtnsTrain;
