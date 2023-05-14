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

        <div className="border-width100">
          <SearchInput
            label="تاریخ حرکت"
          />
        </div>
        <div className="d-options-services">
          <ButtonSearch />
        </div>
      </div>
    );
}

export default ServicesAirplaneOutside;