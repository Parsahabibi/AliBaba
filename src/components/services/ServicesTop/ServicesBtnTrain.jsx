import React, { useRef } from "react";
import BtnsServices from "../../BtnsServices/BtnsServices";

const ServicesBtnsTrain = () => {
  const itembtns1 = ["یک طرفه", "رفت و برگشت"];
  const itembtns2 = ["دربست نمی‌خواهم", "دربست می‌خواهم"];
  const itembtns3 = ["مسافرین عادی", "ویژه برادران", "ویژه خواهران"];
  const itembtns4 = ["حمل خودرو می‌خواهم", "حمل خودرو نمی‌خواهم"];

  const refbtn1 = useRef(0);
  const refbtn2 = useRef(0);
  const refbtn3 = useRef(0);
  const refbtn4 = useRef(0);

  function ShowBtemsBtn1() {
    document.querySelectorAll(".items-btns-services")[0].style.display = "flex";
  }
  function ShowBtemsBtn2() {
    document.querySelectorAll(".items-btns-services")[1].style.display = "flex";
  }
  function ShowBtemsBtn3() {
    document.querySelectorAll(".items-btns-services")[2].style.display = "flex";
  }
  function ShowBtemsBtn4() {
    document.querySelectorAll(".items-btns-services")[3].style.display = "flex";
  }

  function changevaluebtn1(e) {
    document.querySelectorAll(".btn-services>p")[0].innerHTML =
      e.target.innerText;
    let itembtns1 = document.querySelectorAll(".items-btns-services>ul>li");
    for (let i = 0; i < itembtns1.length; i++) {
      itembtns1[i].classList.remove("bg-select");
    }
    e.target.classList.add("bg-select");
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
  function changevaluebtn3(e) {
    document.querySelectorAll(".btn-services>p")[2].innerHTML =
      e.target.innerText;
    let itembtns3 = document.querySelectorAll(".items-btns-services>ul>li");
    for (let i = 0; i < itembtns3.length; i++) {
      itembtns3[i].classList.remove("bg-select");
    }
    e.target.classList.add("bg-select");
  }
  function changevaluebtn4(e) {
    document.querySelectorAll(".btn-services>p")[3].innerHTML =
      e.target.innerText;
    let itembtns4 = document.querySelectorAll(".items-btns-services>ul>li");
    for (let i = 0; i < itembtns4.length; i++) {
      itembtns4[i].classList.remove("bg-select");
    }
    e.target.classList.add("bg-select");
  }
  
  return (
    <div className="body-btns-services">
      <BtnsServices
        ref={refbtn1}
        matn="رفت و برگشت"
        ItemsBtns={itembtns1}
        handleclick={ShowBtemsBtn1}
        PutItemInBtn={changevaluebtn1}
      />
      <BtnsServices
        matn="دربست نمی‌خواهم"
        ItemsBtns={itembtns2}
        handleclick={ShowBtemsBtn2}
        PutItemInBtn={changevaluebtn2}
      />
      <BtnsServices
        matn="مسافرین عادی"
        ItemsBtns={itembtns3}
        handleclick={ShowBtemsBtn3}
        PutItemInBtn={changevaluebtn3}
      />
      <BtnsServices
        matn="حمل خودرو نمی‌خواهم"
        classP="new"
        ItemsBtns={itembtns4}
        handleclick={ShowBtemsBtn4}
        PutItemInBtn={changevaluebtn4}
      />
    </div>
  );
};

export default ServicesBtnsTrain;
