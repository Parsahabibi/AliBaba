import React, { useRef } from "react";
import { useState } from "react";
import ButtonSearch from "../../ButtonSearch/ButtonSearch";
import { CloseServices, PlusServices, Switch } from "../../icons/Icons";
import SearchInput from "../../SearchInput/SearchInput";
import DropStartLocation from "../Dropdownservices/DropStartLocation";

const ServicesHotel = () => {
  const items_dropdown = [
    "مشهد",
    "کیش",
    "تهران",
    "شیراز",
    "اصفهان",
    "قشم",
    "تبریز",
    "رامسر",
    "استانبول",
    "دبی",
    "وان",
    "انتالیا",
    "ایروان",
    "دوحه",
    "پاریس",
    "تفلیس",
  ];
  const refinput1 = useRef(0);
  const refinput2 = useRef(0);
  const refinput3 = useRef(0);
  const refinput4 = useRef(0);

  const refLabel2 = useRef(0);
  const refLabel3 = useRef(0);
  const refLabel4 = useRef(0);


  const LabelVilaDesktop0 = useRef(0);


  const [open, setopen] = useState(false);
  const DropdownHotelDesktop = useRef(0);

  const OpenMenu = () => {
    DropdownHotelDesktop.current.style.display = "inline";
    setopen(true);
  };

  const [Maghsad, SetMaghsad] = useState("");
  const PutItem = (e) => {
    SetMaghsad(e.target.innerText);

    DropdownHotelDesktop.current.style.display = "none";
    setopen(false);

    LabelVilaDesktop0.current.classList.add("labelfix");
  };

  window.onclick = (e) => {
    if (DropdownHotelDesktop.current) {
      if (e.target !== refinput1.current) {
        DropdownHotelDesktop.current.style.display = "none";
      }
    }
  };
  return (
    <div className="options-services">
      <div className="d-options-services no-before flex-3-10">
        <SearchInput
          label="مقصد یا هتل (داخلی و خارجی)"
          refinput={refinput1}
          refLabel={LabelVilaDesktop0}
          handleclick={OpenMenu}
          valueInput={Maghsad}
        />
        <DropStartLocation
          classdropdown="dropdown-services w-100"
          itemsDropdown={items_dropdown}
          id={DropdownHotelDesktop}
          handleclick={PutItem}
          TitleDropdown="شهرهای پرفروش داخلی و خارجی"
        />
      </div>
      <div className="d-options-services flex-3-10">
        <SearchInput
          label="تاریخ ورود"
          refinput={refinput2}
          refLabel={refLabel2}
        />
        <SearchInput
          label="تاریخ خروج"
          refinput={refinput3}
          refLabel={refLabel3}
        />
        <PlusServices />
        {/* <CloseServices /> */}
      </div>
      <div className="d-options-services flex-3-10">
        <SearchInput
          label="مسافران"
          valueInput="1بزرگسال ، 1اتاق"
          classlabel="labelfix"
          refinput={refinput4}
          refLabel={refLabel4}
        />
      </div>
      <div className="d-options-services">
        <ButtonSearch />
      </div>
    </div>
  );
};

export default ServicesHotel;
