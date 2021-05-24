import React, { useState } from "react";
import Calendar from "react-calendar";
import { differenceInCalendarDays } from "date-fns";

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

const datesToAddClassTo = [
  new Date(2021, 4, 25),
  new Date(2021, 4, 27),
  new Date(2021, 4, 30),
];

function tileClassName({ date, view }) {
  // Add class to tiles in month view only
  if (view === "month") {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddClassTo.find((dDate) => isSameDay(dDate, date))) {
      console.log("hi");

      return "myClassName";
    }
  }
}

function MyApp() {
  const [value, setValue] = useState(new Date());

  return (
    <Calendar
      value={value}
      className="date_disable"
      maxDetail="month"
      minDetail="month"
      defaultView="month"
      showNeighboringMonth={false}
      nextLabel={null}
      prevLabel={null}
      next2Label={null}
      prev2Label={null}
      tileClassName={tileClassName}
    />
  );
}

export default MyApp;
