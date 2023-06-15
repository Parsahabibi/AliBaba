import React, { useState } from "react";
import { useRef } from "react";
import ButtonSearch from "../../ButtonSearch/ButtonSearch";
import { CloseServices, PlusServices, Switch } from "../../icons/Icons";
import SearchInput from "../../SearchInput/SearchInput";
import DropStartLocation from "../Dropdownservices/DropStartLocation";

const ServicesBus = () => {


  const [queryBus, setQueryBus] = useState({})




  const StartBus = useRef(0);
  const EndtBus = useRef(0);
  const DateBus = useRef(0);

  const dropstart = useRef(0);
  const dropstart2 = useRef(0);

  const inputstart = useRef(0);
  const inputstart2 = useRef(0);

  const items_dropdown = [
    "تهران",
    "اصفهان",
    "رشت",
    "تبریز",
    "ایروان",
    "استانبول",
    "یزد",
    "شیراز",
    "اهواز",
    "مشهد",
  ];

  function putitem(e) {
    inputstart.current.value = e.target.innerText;
    StartBus.current.classList.add("labelfix");

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
    EndtBus.current.classList.add("labelfix");

    let spandropdown = document.querySelectorAll(".color-black");
    for (let i = 0; i < spandropdown.length; i++) {
      spandropdown[i].style.color = "#000";
      spandropdown[i].style.backgroundColor = "transparent";
    }
    e.target.style.color = "#0077DB";
    e.target.style.backgroundColor = "#F2F9FF";
  }
  function opendropdown() {
    dropstart.current.style.display = "inline";
  }
  function opendropdown2() {
    dropstart2.current.style.display = "inline";
  }
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

    if (document.querySelector(".btn-services>p")) {
      if (e.target !== document.querySelector(".btn-services>p")) {
        document.querySelector(".items-btns-services").style.display = "none";
      }
    }
  };

  return (
    <div className="options-services">
      <div className="d-options-services w100">
        <SearchInput
          label="مبدا (شهر، پایانه)"
          refLabel={StartBus}
          refinput={inputstart}
          handleclick={opendropdown}
          onchangequery={setQueryBus}
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
          label="مقصد (شهر، پایانه)"
          refLabel={EndtBus}
          refinput={inputstart2}
          handleclick={opendropdown2}
          onchangequery={setQueryBus}
        />
        <DropStartLocation
          classdropdown="dropdown-services dropdownend"
          id={dropstart2}
          handleclick={putitem2}
          itemsDropdown={items_dropdown}
        />
      </div>

      <div className="border-width100 w100">
        <SearchInput
          label="تاریخ حرکت"
          refLabel={DateBus}
          type="date"
          onchangequery={setQueryBus}
        />
      </div>
      <div className="d-options-services">
        <ButtonSearch />
      </div>
    </div>
  );
};

export default ServicesBus;
