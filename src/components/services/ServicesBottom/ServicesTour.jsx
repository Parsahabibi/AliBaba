import React from "react";
import { useRef } from "react";
import ButtonSearch from "../../ButtonSearch/ButtonSearch";
import { CloseServices, PlusServices, Switch } from "../../icons/Icons";
import SearchInput from "../../SearchInput/SearchInput";

const ServicesTour = () => {
  const refInput1 = useRef(0);
  const refInput2 = useRef(0);
  const refInput3 = useRef(0);
  const refInput4 = useRef(0);
  const refInput5 = useRef(0);

  const refLabel1 = useRef(0);
  const refLabel2 = useRef(0);
  const refLabel3 = useRef(0);
  const refLabel4 = useRef(0);
  const refLabel5 = useRef(0);

  return (
    <div className="options-services">
      <div className="d-options-services">
        <SearchInput
          label="مبدا (شهر)"
          refLabel={refLabel1}
          refinput={refInput1}
        />

        <SearchInput
          label="مقصد (شهر)"
          refLabel={refLabel2}
          refinput={refInput2}
        />
      </div>
      <div className="d-options-services">
        <SearchInput
          label="تاریخ رفت"
          refLabel={refLabel3}
          refinput={refInput3}
        />
        <SearchInput
          label="تاریخ برگشت"
          refLabel={refLabel4}
          refinput={refInput4}
        />
        <PlusServices />
        {/* <CloseServices /> */}
      </div>
      <div className="d-options-services">
        <SearchInput
          label="مسافران"
          valueInput="2بزرگسال ، 1اتاق"
          classlabel="labelfix"
          refLabel={refLabel5}
          refinput={refInput5}
        />
      </div>
      <div className="d-options-services">
        <ButtonSearch />
      </div>
    </div>
  );
};

export default ServicesTour;
