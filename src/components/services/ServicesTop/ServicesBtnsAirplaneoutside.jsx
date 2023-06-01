import React from "react";
import BtnsServices from "../../BtnsServices/BtnsServices";

const ServicesBtnsAirplaneoutside = () => {
  const itembtns = ["یک طرفه", "رفت و برگشت", "چند مسیره"];
  const itembtns2 = [
    "اکونومی",
    "پرمیوم اکونومی",
    "بیزینس",
    "پرمیوم بیزینس",
    "فرست",
    "پرمیوم فرست",
  ];

  function ShowBtemsBtn() {
    document.querySelectorAll(".items-btns-services")[0].style.display = "flex";
  }
  function changevaluebtn(e) {
    document.querySelectorAll(".btn-services>p")[0].innerHTML =
      e.target.innerText;
    let itembtns = document.querySelectorAll(".items-btns-services>ul>li");
    for (let i = 0; i < itembtns.length; i++) {
      itembtns[i].classList.remove("bg-select");
    }
    e.target.classList.add("bg-select");
  }

  function ShowBtemsBtn2() {
    document.querySelectorAll(".items-btns-services")[1].style.display = "flex";
  }
  function changevaluebtn2(e) {
    document.querySelectorAll(".btn-services>p")[1].innerHTML =
      e.target.innerText;
    let itembtns2 = document.querySelectorAll(".items-btns-services>ul>li");
    for (let i = 0; i < itembtns2.length; i++) {
      itembtns2[i].classList.remove("bg-select");
    }
    e.target.classList.add("bg-select");
  }
 
  return (
    <div className="body-btns-services flex-start">
      <BtnsServices
        ItemsBtns={itembtns}
        matn="یک طرفه"
        handleclick={ShowBtemsBtn}
        PutItemInBtn={changevaluebtn}
      />
      <BtnsServices
        ItemsBtns={itembtns2}
        matn="اکونومی"
        handleclick={ShowBtemsBtn2}
        PutItemInBtn={changevaluebtn2}
      />
    </div>
  );
};

export default ServicesBtnsAirplaneoutside;

