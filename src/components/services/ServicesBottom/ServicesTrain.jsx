import React, { useState } from "react";
import { useRef } from "react";
import ButtonSearch from "../../ButtonSearch/ButtonSearch";
import { CloseServices, PlusServices, Switch } from "../../icons/Icons";
import SearchInput from "../../SearchInput/SearchInput";
import DropdownNumber from "../Dropdownservices/DropdownNumber";
import DropStartLocation from "../Dropdownservices/DropStartLocation";

const ServicesTrain = () => {


  const [queryTrain, setQueryTrain] = useState({})




  const dropstart1 = useRef(0);
  const inputstart1 = useRef(0);
  const Labelstart1 = useRef(0);
  const dropstart2 = useRef(0);
  const inputstart2 = useRef(0);
  const Labelstart2 = useRef(0);
  const dropstart3 = useRef(0);
  const inputstart3 = useRef(0);
  const Labelstart3 = useRef(0);
  const dropstart4 = useRef(0);
  const inputstart4 = useRef(0);
  const Labelstart4 = useRef(0);
  const inputstart5 = useRef(0);
  const Labelstart5 = useRef(0);

  const items_dropdown1 = [
    "تهران",
    "مشهد",
    "یزد",
    "بندر عباس",
    "قم",
    "تبریز",
    "کرمان",
    "اهواز",
    "شیراز",
    "اصفهان",
  ];

  function opendropdown1() {
    dropstart1.current.style.display = "inline";
  }
  function opendropdown2() {
    dropstart2.current.style.display = "inline";
  }
  function putitem1(e) {
    inputstart1.current.value = e.target.innerText;
    Labelstart1.current.classList.add("labelfix");

    let spandropdown = document.querySelectorAll(".color-black");
    for (let i = 0; i < spandropdown.length; i++) {
      spandropdown[i].style.color = "#000";
      spandropdown[i].style.backgroundColor = "transparent";
    }
    e.target.style.color = "#0077DB";
    e.target.style.backgroundColor = "#F2F9FF";
  }
  function putitem2(e) {
    inputstart2.current.value = e.target.innerText;
    Labelstart2.current.classList.add("labelfix");

    let spandropdown = document.querySelectorAll(".color-black");
    for (let i = 0; i < spandropdown.length; i++) {
      spandropdown[i].style.color = "#000";
      spandropdown[i].style.backgroundColor = "transparent";
    }
    e.target.style.color = "#0077DB";
    e.target.style.backgroundColor = "#F2F9FF";
  }
  function switchvalue() {
    if (
      inputstart1.current.value.length >= 1 &&
      inputstart2.current.value.length >= 1
    ) {
      let x = inputstart1.current.value;
      let y = inputstart2.current.value;
      inputstart1.current.value = y;
      inputstart2.current.value = x;
    }
  }

  window.onclick = (e) => {
    let ItemsBtn = document.querySelectorAll(".btn-services>p");
    let ItemsDropdownBtn = document.querySelectorAll(".items-btns-services");
    if (ItemsBtn) {
      for (let i = 0; i < ItemsBtn.length; i++) {
        if (e.target !== ItemsBtn[i]) {
          ItemsDropdownBtn[i].style.display = "none";
        }
      }
    }
    if (inputstart1.current) {
      if (e.target !== inputstart1.current) {
        dropstart1.current.style.display = "none";
      }
    }

    if (inputstart2.current) {
      if (e.target !== inputstart2.current) {
        dropstart2.current.style.display = "none";
      }
    }

   
    if (inputstart2.current && inputstart1.current) {
      if (
        inputstart2.current.value !== "" &&
        inputstart1.current.value !== ""
      ) {
        document.querySelector(".switch-options-services").style.cursor =
          "pointer";
      }
    }
  };

  const inputnumber = useRef(0);

  let i = 1,
    j = 0,
    k = 0,
    r = 1;

  function incrementNumber() {
    if (i < 9) {
      i++;
      r++;
      document.querySelectorAll(".chose-number>span")[0].innerText = r;
      if (r <= 2) {
        document
          .querySelectorAll(".btndecrement")[0]
          .classList.remove("disabled");
      }
    }
    inputnumber.current.value = i + " مسافر";
  }
  function decrementNumber() {
    if (i > 1 && r > 1) {
      i--;
      r--;
      document.querySelectorAll(".chose-number>span")[0].innerText = r;
      if (r <= 1) {
        document.querySelectorAll(".btndecrement")[0].classList.add("disabled");
      }
    }
    inputnumber.current.value = i + " مسافر";
  }

  function incrementNumber2() {
    if (i < 9) {
      i++;
      j++;
      document.querySelectorAll(".chose-number>span")[1].innerText = j;
      if (j >= 1) {
        document
          .querySelectorAll(".btndecrement")[1]
          .classList.remove("disabled");
      }
    }
    inputnumber.current.value = i + " مسافر";
  }
  function decrementNumber2() {
    if (i > 1 && j > 0) {
      i--;
      j--;
      document.querySelectorAll(".chose-number>span")[1].innerText = j;
      if (j <= 0) {
        document.querySelectorAll(".btndecrement")[1].classList.add("disabled");
      }
    }

    inputnumber.current.value = i + " مسافر";
  }

  function incrementNumber3() {
    if (i < 9) {
      i++;
      k++;
      document.querySelectorAll(".chose-number>span")[2].innerText = k;
      if (k <= 2) {
        document
          .querySelectorAll(".btndecrement")[2]
          .classList.remove("disabled");
      }
    }
    inputnumber.current.value = i + " مسافر";
  }
  function decrementNumber3() {
    if (i > 1 && k > 0) {
      i--;
      k--;
      document.querySelectorAll(".chose-number>span")[2].innerText = k;
      if (k <= 0) {
        document.querySelectorAll(".btndecrement")[2].classList.add("disabled");
      }
    }
    inputnumber.current.value = i + " مسافر";
  }

  function showDropdownNumber() {
    let DropdownNumber = document.querySelector(".dropdown-number");
    if (DropdownNumber.style.display === "inline") {
      DropdownNumber.style.display = "none";
    } else {
      DropdownNumber.style.display = "inline";
    }
  }
  return (
    <div className="options-services">
      <div className="d-options-services">
        <SearchInput
          label="مبدا (شهر)"
          refLabel={Labelstart1}
          refinput={inputstart1}
          handleclick={opendropdown1}
          onchangequery={setQueryTrain}
        />
        <DropStartLocation
          classdropdown="dropdown-services"
          id={dropstart1}
          handleclick={putitem1}
          itemsDropdown={items_dropdown1}
        />
        <div className="switch-options-services" onClick={switchvalue}>
          <Switch />
        </div>
        <SearchInput
          label="مقصد (شهر)"
          refLabel={Labelstart2}
          refinput={inputstart2}
          handleclick={opendropdown2}
          onchangequery={setQueryTrain}
        />
        <DropStartLocation
          classdropdown="dropdown-services dropdownend"
          id={dropstart2}
          handleclick={putitem2}
          itemsDropdown={items_dropdown1}
        />
      </div>
      <div className="d-options-services">
        <SearchInput
          label="تاریخ رفت"
          refLabel={Labelstart3}
          refinput={inputstart3}
          type="date"
          onchangequery={setQueryTrain}
        />
        <SearchInput
          label="تاریخ برگشت"
          refLabel={Labelstart4}
          refinput={inputstart4}
          type="date"
          onchangequery={setQueryTrain}
        />
        <PlusServices />
        {/* <CloseServices /> */}
      </div>
      <div className="d-options-services">
        <SearchInput
          label="مسافران"
          valueInput="1 مسافر"
          classlabel="labelfix"
          refLabel={Labelstart5}
          refinput={inputnumber}
          handleclick={showDropdownNumber}
          onchangequery={setQueryTrain}
        />
        <DropdownNumber
          clickbtnincrement={incrementNumber}
          clickbtndecrement={decrementNumber}
          clickbtnincrement2={incrementNumber2}
          clickbtndecrement2={decrementNumber2}
          clickbtnincrement3={incrementNumber3}
          clickbtndecrement3={decrementNumber3}
        />
      </div>
      <div className="d-options-services">
        <ButtonSearch />
      </div>
    </div>
  );
};

export default ServicesTrain;
