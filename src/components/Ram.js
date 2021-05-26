import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { differenceInCalendarDays } from "date-fns";



function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}


function Ram(props) {
  function tileClassName({ date, view }) {
    if (view === "month") {
      if (props.arr.find((dDate) => isSameDay(dDate, date))) {
        return "myClassName";
      }
    }
  }
  return (
    <Calendar
      value={props.arr[0]}
      tileClassName={tileClassName}
      className="date_disable"
      maxDetail="month"
      minDetail="month"
      defaultView="month"
      showNeighboringMonth={false}
      nextLabel={null}
      prevLabel={null}
      next2Label={null}
      prev2Label={null}
    />
  );
}

export default Ram;
