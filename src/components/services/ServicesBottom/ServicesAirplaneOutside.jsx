import React from "react";
import ButtonSearch from "../../ButtonSearch/ButtonSearch";
import { CloseServices, PlusServices, Switch } from "../../icons/Icons";
import SearchInput from "../../SearchInput/SearchInput";
import { useRef } from "react";
import DropdownNumber from "../Dropdownservices/DropdownNumber";
import DropStartLocation from "../Dropdownservices/DropStartLocation";
const ServicesAirplaneOutside = () => {
  const dropstart = useRef(0);
  const inputstart = useRef(0);
  const Labelstart = useRef(0);

  function opendropdown() {
    dropstart.current.style.display = "inline";
  }

  function putitem(e) {
    inputstart.current.value = e.target.innerText;
    Labelstart.current.classList.add("labelfix");

    let spandropdown = document.querySelectorAll(".color-black");
    for (let i = 0; i < spandropdown.length; i++) {
      spandropdown[i].style.color = "#000";
      spandropdown[i].style.backgroundColor = "transparent";
    }
    e.target.style.color = "#0077DB";
    e.target.style.backgroundColor = "#F2F9FF";
  }

  const dropstart2 = useRef(0);
  const inputstart2 = useRef(0);
  const Labelstart2 = useRef(0);
  const inputstart3 = useRef(0);
  const Labelstart3 = useRef(0);
  const inputstart4 = useRef(0);
  const Labelstart4 = useRef(0);
  const Labelstart5 = useRef(0);

  function opendropdown2() {
    dropstart2.current.style.display = "inline";
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

  window.onclick = function (e) {
    if (inputstart.current) {
      if (e.target !== inputstart.current) {
        dropstart.current.style.display = "none";
      }
    }

    if (inputstart2.current) {
      if (e.target !== inputstart2.current) {
        dropstart2.current.style.display = "none";
      }
    }

    if (inputstart2.current && inputstart.current) {
      if (inputstart2.current.value !== "" && inputstart.current.value !== "") {
        document.querySelector(".switch-options-services").style.cursor =
          "pointer";
      }
    }
    if (document.querySelectorAll(".btn-services>p")[0]) {
      if (e.target !== document.querySelectorAll(".btn-services>p")[0]) {
        document.querySelectorAll(".items-btns-services")[0].style.display =
          "none";
      }
    }
    if (document.querySelectorAll(".btn-services>p")[1]) {
      if (e.target !== document.querySelectorAll(".btn-services>p")[1]) {
        document.querySelectorAll(".items-btns-services")[1].style.display =
          "none";
      }
    }
  };

  function switchvalue() {
    if (
      inputstart.current.value.length >= 1 &&
      inputstart2.current.value.length >= 1
    ) {
      let x = inputstart.current.value;
      let y = inputstart2.current.value;
      inputstart.current.value = y;
      inputstart2.current.value = x;
    }
  }

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

  const items_dropdown = [
    "فرودگاه بین المللی امام خمینی ",
    "استانبول ",
    "دبی ",
    "آنکارا ",
    "ازمیر ",
    "ایروان ",
    "لندن ",
    "تورنتو ",
    "فرانکفورت ",
    "میلان ",
  ];

  return (
    <div className="options-services">
      <div className="d-options-services">
        <SearchInput
          label="مبدا (شهر، فرودگاه)"
          handleclick={opendropdown}
          refinput={inputstart}
          refLabel={Labelstart}
        />
        <DropStartLocation
          classdropdown="dropdown-services"
          id={dropstart}
          handleclick={putitem}
          itemsDropdown={items_dropdown}
        />
        <div className="switch-options-services" onClick={switchvalue}>
          <Switch />
        </div>
        <SearchInput
          label="مقصد (شهر، فرودگاه)"
          handleclick={opendropdown2}
          refinput={inputstart2}
          refLabel={Labelstart2}
        />
        <DropStartLocation
          classdropdown="dropdown-services dropdownend"
          id={dropstart2}
          handleclick={putitem2}
          itemsDropdown={items_dropdown}
        />
      </div>
      <div className="d-options-services">
        <SearchInput
          label="تاریخ رفت"
          refinput={inputstart3}
          refLabel={Labelstart3}
        />
        <SearchInput
          label="تاریخ برگشت"
          refinput={inputstart4}
          refLabel={Labelstart4}
        />
        <PlusServices />
        {/* <CloseServices /> */}
      </div>
      <div className="d-options-services">
        <SearchInput
          label="مسافران"
          valueInput="1 مسافر"
          classlabel="labelfix"
          refinput={inputnumber}
          refLabel={Labelstart5}
          handleclick={showDropdownNumber}
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

export default ServicesAirplaneOutside;
