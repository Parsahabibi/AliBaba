import React from "react";
import BtnsServices from "../../BtnsServices/BtnsServices";
const ServicesbtnsAirplaneInside = () => {
  function ShowBtemsBtn() {
    document.querySelector(".items-btns-services").style.display = "flex";
  }
  function changevaluebtn(e) {
    document.querySelector(".btn-services>p").innerHTML = e.target.innerText;
    let  itembtns= document.querySelectorAll(".items-btns-services>ul>li");
    for (let i = 0; i < itembtns.length; i++) {
      itembtns[i].classList.remove("bg-select");
    }
    e.target.classList.add("bg-select");
  }
  //  window.onclick = function (e) {
  //   debugger;
  //    if (e.target !== document.querySelector(".btn-services")) {
  //      document.querySelector(".items-btns-services").style.display = "none";
  //    }

  //  };
  return (
    <div>
      <BtnsServices
        handleclick={ShowBtemsBtn}
        matn="یک طرفه"
        ItemsBtns={["یک طرفه", "رفت و برگشت"]}
        PutItemInBtn={changevaluebtn}
      />
    </div>
  );
};

export default ServicesbtnsAirplaneInside;
