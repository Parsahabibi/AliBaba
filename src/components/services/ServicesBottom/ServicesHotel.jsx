import React from "react";
import ButtonSearch from "../../ButtonSearch/ButtonSearch";
import { CloseServices, PlusServices, Switch } from "../../icons/Icons";
import SearchInput from "../../SearchInput/SearchInput";

const ServicesHotel = () => {
  return (
    <div className="options-services">
      <div className="border-width100">
        <SearchInput label="مقصد یا هتل (داخلی و خارجی)" />
      </div>
      <div className="d-options-services">
        <SearchInput label="تاریخ ورود" />
        <SearchInput label="تاریخ خروج" />
        <PlusServices />
        {/* <CloseServices /> */}
      </div>
      <div className="d-options-services">
        <SearchInput
          label="مسافران"
          valueInput="1بزرگسال ، 1اتاق"
          classlabel="labelfix"
        />
      </div>
      <div className="d-options-services">
        <ButtonSearch />
      </div>
    </div>
  );
};

export default ServicesHotel;
