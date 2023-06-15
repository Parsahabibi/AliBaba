import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ButtonSearch from "../../ButtonSearch/ButtonSearch";
import {
  Add,
  CloseServices,
  Plus,
  PlusServices,
  Remove,
  Switch,
} from "../../icons/Icons";
import SearchInput from "../../SearchInput/SearchInput";
import DropStartLocation from "../Dropdownservices/DropStartLocation";

const ServicesTour = () => {


  const [queryTour, setQueryTour] = useState({})



  const refInput1thour = useRef(0);
  const refInput2thour = useRef(0);
  const refInput3 = useRef(0);
  const refInput4 = useRef(0);
  const refInput5thourdesktop = useRef(0);

  const refLabel1thour = useRef(0);
  const refLabel2thour = useRef(0);
  const refLabel3 = useRef(0);
  const refLabel4 = useRef(0);
  const refLabel5thourdesktop = useRef(0);

  const drop1thour = useRef(0);
  const drop2thour = useRef(0);

  const items_dropdown_Thour = [
    "تهران",
    "اصفهان",
    "یزد",
    "کیش",
    "مشهد",
    "اهواز",
    "شیراز",
    "کرمان",
    "کرمانشاه",
    "قشم",
  ];
  function putitem(e) {
    refInput1thour.current.value = e.target.innerText;
    refLabel1thour.current.classList.add("labelfix");

    let spandropdown = document.querySelectorAll(".color-black");
    for (let i = 0; i < spandropdown.length; i++) {
      spandropdown[i].style.color = "#000";
      spandropdown[i].style.backgroundColor = "transparent";
    }
    e.target.style.color = "#0077DB";
    e.target.style.backgroundColor = "#F2F9FF";
  }
  function putitem2(e) {
    refInput2thour.current.value = e.target.innerText;
    refLabel2thour.current.classList.add("labelfix");

    let spandropdown = document.querySelectorAll(".color-black");
    for (let i = 0; i < spandropdown.length; i++) {
      spandropdown[i].style.color = "#000";
      spandropdown[i].style.backgroundColor = "transparent";
    }
    e.target.style.color = "#0077DB";
    e.target.style.backgroundColor = "#F2F9FF";
  }

  function opendropdown1thour() {
    drop1thour.current.style.display = "inline";
  }
  function opendropdown2thour() {
    drop2thour.current.style.display = "inline";
  }

  window.onclick = function (e) {
    if (refInput1thour.current) {
      if (e.target !== refInput1thour.current) {
        drop1thour.current.style.display = "none";
      }
    }
    if (refInput2thour.current) {
      if (e.target !== refInput2thour.current) {
        drop2thour.current.style.display = "none";
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
  // useEffect(() => {
  //   window.onclick = (e) => {
  //     if (e.target !== dropThour.current && e.target !== refInput5.current) {
  //       SetClassDropdownPassengerThour("hide-passenger-thour");
  //     }
  //   };
  // });
  return (
    <div className="options-services">
      <div className="d-options-services">
        <SearchInput
          label="مبدا (شهر)"
          refLabel={refLabel1thour}
          refinput={refInput1thour}
          handleclick={opendropdown1thour}
          onchangequery={setQueryTour}
        />
        <DropStartLocation
          classdropdown="dropdown-services"
          id={drop1thour}
          handleclick={putitem}
          itemsDropdown={items_dropdown_Thour}
          TitleDropdown="پرطرفدارترین شهرها"
        />
        <SearchInput
          label="مقصد (شهر)"
          refLabel={refLabel2thour}
          refinput={refInput2thour}
          handleclick={opendropdown2thour}
          onchangequery={setQueryTour}
        />
        <DropStartLocation
          classdropdown="dropdown-services dropdownend"
          id={drop2thour}
          handleclick={putitem2}
          itemsDropdown={items_dropdown_Thour}
          TitleDropdown="پرطرفدارترین شهرها"
        />
      </div>
      <div className="d-options-services">
        <SearchInput
          label="تاریخ رفت"
          refLabel={refLabel3}
          refinput={refInput3}
          type="date"
          onchangequery={setQueryTour}
        />
        <SearchInput
          label="تاریخ برگشت"
          refLabel={refLabel4}
          refinput={refInput4}
          type="date"
          onchangequery={setQueryTour}
        />
        <PlusServices />
        {/* <CloseServices /> */}
      </div>
      <div className="d-options-services w-100-thour">
        <SearchInput
          label="مسافران"
          valueInput={
            NumAdult + "بزرگسال، " + NumChild + " کودک ،" + 1 + " اتاق"
          }
          classlabel="labelfix"
          refLabel={refLabel5thourdesktop}
          refinput={refInput5thourdesktop}
          handleclick={OpenDropdownPassengerThour}
          onchangequery={setQueryTour}
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

export default ServicesTour;
