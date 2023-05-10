import React from "react";
import ButtonSearch from "../../ButtonSearch/ButtonSearch";
import { CloseServices, PlusServices, Switch } from "../../icons/Icons";
import SearchInput from "../../SearchInput/SearchInput";

const ServicesAirplaneInside = () => {
    
  return (
    <div className="options-services">
      <div className="d-options-services">
        <SearchInput label="مبدا (شهر)" />
        <div className="switch-options-services">
          <Switch />
        </div>
        <SearchInput label="مقصد (شهر)" />
      </div>
      <div className="d-options-services">
        <SearchInput label="تاریخ رفت" />
        <SearchInput label="تاریخ برگشت" />
        <PlusServices />
        {/* <CloseServices /> */}
      </div>
      <div className="d-options-services">
        <SearchInput
          label="مسافران"
          valueInput="1 مسافر"
          classlabel="labelfix"
        />
      </div>
      <div className="d-options-services">
        <ButtonSearch />
      </div>
    </div>
  );
};

export default ServicesAirplaneInside;
