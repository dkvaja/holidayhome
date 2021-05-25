import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { differenceInCalendarDays } from "date-fns";

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

function Ram(props) {
  const [value, setValue] = useState(new Date());

  function tileClassName({ date, view }) {
    // Add class to tiles in month view only
    if (view === "month") {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
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
