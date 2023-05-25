import React, { useRef } from "react";
import { useState } from "react";
import ButtonSearch from "../../ButtonSearch/ButtonSearch";
import Dropdown from "../../DropDown/DropDown";
import {
  CloseServices,
  PlusServices,
  Switch,
  Add,
  Remove,
} from "../../icons/Icons";
import SearchInput from "../../SearchInput/SearchInput";
import DropStartLocation from "../Dropdownservices/DropStartLocation";
const NumberHorofi = [
  "یک",
  "دو",
  "سه",
  "چهار",
  "پنج",
  "شیش",
  "هفت",
  "هشت",
  "نه",
  "ده",
  "یازده",
  "دوازده",
  "سیزده",
  "چهارده",
  "پانزده",
  "شانزده",
  "هفده",
  "هجده",
  "نوزده",
  "بیست",
  "بیست و یک",
  "بیست و دو",
  "بیست و سه",
  "بیست و چهار",
  "بیست و پنج",
  "بیست و شیش",
  "بیست و هفت",
  "بیست و هشت",
  "بیست و نه",
  "سی",
  "سی و یک",
  "سی و دو",
  "سی و سه",
  "سی و چهار",
  "سی و پنج",
  "سی و شیش",
  "سی و هفت",
  "سی و هشت",
  "سی و نه",
  "چهل",
  "چهل و یک",
  "چهل و دو",
  "چهل و سه",
  "چهل و چهار",
  "چهل و پنج",
  "چهل و شیش",
  "چهل و هفت",
  "چهل و هشت",
  "چهل و نه",
  "پنجاه",
  "پنجاه و یک",
  "پنجاه و دو",
  "پنجاه و سه",
  "پنجاه و چهار",
  "پنجاه و پنج",
  "پنجاه و شیش",
  "پنجاه و هفت",
  "پنجاه و شهت",
  "پنجاه و نه",
  "شصت",
  "شصت و یک",
  "شصت و دو",
  "شصت و سه",
  "شصت و چهار",
  "شصت و پنج",
  "شصت و شیش",
  "شصت و هفت",
  "شصت و هشت",
  "شصت و نه",
  "هفتاد",
  "هفتاد و یک",
  "هفتاد و دو",
  "هفتاد و سه",
  "هفتاد و چهار",
  "هفتاد و پنج",
  "هفتاد و شیش",
  "هفتاد و هفت",
  "هفتاد و هشت",
  "هفتاد و نه",
  "هشتاد",
  "هشتاد و یک",
  "هشتاد و دو",
  "هشتاد و سه",
  "هشتاد و چهار",
  "هشتاد و پنج",
  "هشتاد و شیش",
  "هشتاد و هفت",
  "هشتاد و هشت",
  "هشتاد و نه",
  "نود",
  "نود و یک",
  "نود و دو",
  "نود و سه",
  "نود و چهار",
  "نود و پنج",
  "نود و شیش",
  "نود و هفت",
  "نود و هشت",
  "نود و نه",
  "صد",
];
const ServicesVila = () => {
  const [people, setpeople] = useState(1);
  const Increment = () => {
    document.querySelector(".BtnDecrement").classList.remove("disabled");

    if (people >= 99) {
      document.querySelector(".BtnIncrement").classList.add("disabled");
    }
    if (people < 100) {
      setpeople((people) => people + 1);
    }
  };
  const Decrement = () => {
    document.querySelector(".BtnIncrement").classList.remove("disabled");

    if (people <= 2) {
      document.querySelector(".BtnDecrement").classList.add("disabled");
    }
    if (people > 1) {
      setpeople((people) => people - 1);
    }
  };
  const dropstart = useRef(0);
  const inputstart = useRef(0);
  const Labelstart = useRef(0);
  const items_dropdown = [
    "اقامتگاه های شهر تهران",
    "اقامتگاه های شهر کردان",
    "اقامتگاه های شهر رامسر",
    "اقامتگاه های شهر چالوس",
    "اقامتگاه های شهر متل قو (سلمانشهر)",
    "اقامتگاه های شهر رشت",
    "اقامتگاه های شهر بندر انزلی",
    "اقامتگاه های شهر مشهد",
    "اقامتگاه های شهر نوشهر"
  ];
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
   function opendropdown() {
     dropstart.current.style.display = "flex";
   }
    window.onclick = function (e) {
      if (e.target !== inputstart.current) {
        dropstart.current.style.display = "none";
      }
    };
  return (
    <div className="options-services">
      <div className="d-options-services border-width100 flex-3-10 no-before">
        <SearchInput
          label="مقصد یا نوع اقامتگاه"
          handleclick={opendropdown}
          refinput={inputstart}
          refLabel={Labelstart}
        />
        <DropStartLocation
          classdropdown="dropdown-services w-100"
          id={dropstart}
          handleclick={putitem}
          itemsDropdown={items_dropdown}
        />
      </div>
      <div className="d-options-services flex-3-10">
        <SearchInput label="تاریخ ورود" />
        <SearchInput label="تاریخ خروج" />
        <PlusServices />
        {/* <CloseServices /> */}
      </div>
      <div className="d-options-services flex-3-10">
        <SearchInput
          label="تعداد مسافران"
          valueInput={NumberHorofi[people - 1] + " نفر "}
          classlabel="labelfix"
        />
        <div className="chose-number">
          <div onClick={Increment} className="BtnIncrement">
            <Add />
          </div>
          <span>{people}</span>
          <div onClick={Decrement} className="BtnDecrement disabled">
            <Remove />
          </div>
        </div>
      </div>
      <div className="d-options-services">
        <ButtonSearch />
      </div>
    </div>
  );
};

export default ServicesVila;
