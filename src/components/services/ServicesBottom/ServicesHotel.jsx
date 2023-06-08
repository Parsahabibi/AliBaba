import React, { useRef } from "react";
import { useState } from "react";
import ButtonSearch from "../../ButtonSearch/ButtonSearch";
import { Add, CloseServices, Plus, PlusServices, Remove, Switch } from "../../icons/Icons";
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


    const [NumAdult, SetNumAdult] = useState(1);
    const [NumChild, SetNumChild] = useState(0);

    const [ClassBtnAdultThour, SetClassBtnAdultThour] = useState("disabled");
    const [ClassBtnChildThour, SetClassBtnChildThour] = useState("disabled");

    const IncrementAdult = () => {
      if (NumAdult + NumChild < 9) {
        SetNumAdult((prev) => prev + 1);
        SetClassBtnAdultThour("enabled");
      }
    };

    const DecrementAdult = () => {
      if (NumAdult + NumChild > 1 && NumAdult > 1) {
        SetNumAdult((prev) => prev - 1);
      }
      if (NumAdult + NumChild <= 3) {
        SetClassBtnAdultThour("disabled");
      }
    };

    const IncrementChild = () => {
      if (NumAdult + NumChild < 9) {
        SetNumChild((prev) => prev + 1);
        SetClassBtnChildThour("enabled");
      }
    };

    const DecrementChild = () => {
      if (NumAdult + NumChild > 1 && NumChild > 0) {
        SetNumChild((prev) => prev - 1);
      }
      if (NumAdult + NumChild <= 2) {
        SetClassBtnChildThour("disabled");
      }
    };

    const [ClassDropdownPassengerThour, SetClassDropdownPassengerThour] =
      useState("hide-passenger-thour");
    const OpenDropdownPassengerThour = () => {
      if (ClassDropdownPassengerThour === "hide-passenger-thour") {
        SetClassDropdownPassengerThour("show-passenger-thour");
      } else {
        SetClassDropdownPassengerThour("hide-passenger-thour");
      }
    };
    const dropThour = useRef(0);
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
          type="date"
        />
        <SearchInput
          label="تاریخ خروج"
          refinput={refinput3}
          refLabel={refLabel3}
          type="date"
        />
        <PlusServices />
        {/* <CloseServices /> */}
      </div>
      <div className="d-options-services flex-3-10">
        <SearchInput
          label="مسافران"
          classlabel="labelfix"
          refinput={refinput4}
          refLabel={refLabel4}
          valueInput={
            NumAdult + "بزرگسال، " + NumChild + " کودک ،" + 1 + " اتاق"
          }
          handleclick={OpenDropdownPassengerThour}
        />
        <div
          ref={dropThour}
          className={
            "dropdown-number dropdown-thour " + ClassDropdownPassengerThour
          }
        >
          <div>
            <h4>اتاق اول</h4>
            <div className="item-dropdown-number">
              <div className="matn-item-dropdown-number">
                <p>بزرگسال</p>
                <span>(۱۲ سال به بالا)</span>
              </div>
              <div>
                <div className={" chose-number"}>
                  <div className="btn" onClick={IncrementAdult}>
                    <Add />
                  </div>
                  <span>{NumAdult}</span>
                  <div
                    className={" btn btndecrement " + ClassBtnAdultThour}
                    onClick={DecrementAdult}
                  >
                    <Remove />
                  </div>
                </div>
              </div>
            </div>
            <div className="item-dropdown-number">
              <div className="matn-item-dropdown-number">
                <p>کودک</p>
                <span>( تا ۱۲ سال)</span>
              </div>
              <div>
                <div className={" chose-number"}>
                  <div className="btn" onClick={IncrementChild}>
                    <Add />
                  </div>
                  <span>{NumChild}</span>
                  <div
                    className={" btn btndecrement " + ClassBtnChildThour}
                    onClick={DecrementChild}
                  >
                    <Remove />
                  </div>
                </div>
              </div>
            </div>

            <div className="add-room">
              <Plus />
              افزودن اتاق
            </div>
            <div className="container-btn-ok-thour">
              <div className="btn-ok-thour">
                تایید - {NumAdult + NumChild} مسافر و 1 اتاق
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-options-services">
        <ButtonSearch />
      </div>
    </div>
  );
};

export default ServicesHotel;
