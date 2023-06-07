import React, { useState } from "react";

import DatePicker, { Calendar, DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/yellow.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useEffect } from "react";

const SearchInput = ({
  label,
  id,
  valueInput,
  classlabel,
  DropDown,
  handleclick,
  refinput,
  refLabel,
  type,
}) => {
  const checkinput = (e) => {
    if (e.target.value.length >= 1) {
      refLabel.current.classList.add("labelfix");
    } else {
      refLabel.current.classList.remove("labelfix");
    }
  };
  const [date, setDate] = useState("");

  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
  const DayToday = new Date().toLocaleDateString("fa-IR");
  return (
    <div className="Search" onClick={handleclick}>
      {type === "date" ? (
        <DatePicker
          containerStyle={{ width: "100%", height: "100%", border: "none" }}
          value={date}
          weekDays={weekDays}
          onChange={setDate}
          minDate={"1402/3/16"}
          numberOfMonths={2}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          className="yellow"
          inputClass=" "
          mapDays={({ date }) => {
            let props = {};
            let isWeekend = date.weekDay.index === 6;

            if (isWeekend) props.className = "highlight highlight-red";

            return props;
          }}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={valueInput}
          ref={refinput}
          onClick={checkinput}
          onChange={checkinput}
        />
      )}
      <label
        htmlFor={id}
        className={` ${classlabel} ${
          date && date.toString().length > 1 && "labelfix"
        }`}
        ref={refLabel}
      >
        {label}
      </label>

      {DropDown}
    </div>
  );
};

export default SearchInput;

// npm i react-multi-date-picker
// npm install persian-date --save-dev
