import React from "react";
import ButtonSearch from "../../ButtonSearch/ButtonSearch";
import { CloseServices, PlusServices, Switch } from "../../icons/Icons";
import SearchInput from "../../SearchInput/SearchInput";

const ServicesAirplaneOutside=()=>{
    return (
      <div className="options-services">
        <div className="d-options-services">
          <SearchInput label="مبدا (شهر، فرودگاه)" />
          <div className="switch-options-services">
            <Switch />
          </div>
          <SearchInput label="مقصد (شهر، فرودگاه)" />
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
}

export default ServicesAirplaneOutside;