import React from "react";
import { useState } from "react";
import ButtonSearch from "../../ButtonSearch/ButtonSearch";
import {
  CloseServices,
  PlusServices,
  Switch,
  Add,
  Remove,
} from "../../icons/Icons";
import SearchInput from "../../SearchInput/SearchInput";
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
  return (
    <div className="options-services">
      <div className="border-width100">
        <SearchInput label="مقصد یا نوع اقامتگاه" />
      </div>
      <div className="d-options-services">
        <SearchInput label="تاریخ ورود" />
        <SearchInput label="تاریخ خروج" />
        <PlusServices />
        {/* <CloseServices /> */}
      </div>
      <div className="d-options-services">
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
