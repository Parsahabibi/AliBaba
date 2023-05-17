import React from "react";
import ButtonSearch from "../../ButtonSearch/ButtonSearch";
import {
  CloseServices,
  PlusServices,
  Switch,
  Add,
  Remove,
} from "../../icons/Icons";
import SearchInput from "../../SearchInput/SearchInput";

const ServicesVila = () => {
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
          valueInput="یک نفر"
          classlabel="labelfix"
        />
        <div className="chose-number">
          <button>
            <Add />
          </button>
          <span>1</span>
          <button>
            <Remove />
          </button>
        </div>
      </div>
      <div className="d-options-services">
        <ButtonSearch />
      </div>
    </div>
  );
};

export default ServicesVila;
