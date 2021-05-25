import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { makeStyles } from "@material-ui/core";
import "react-calendar/dist/Calendar.css";

const useStyles = makeStyles((theme) => ({
  calendar: {
    pointerEvents: "none",
    color: "#004b23",
    display: "flex",
    padding: ".5rem",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "rgb(206, 255, 206)",
  },
}));

const CalendarBox = ({ tileClassName, value }) => {
  // console.log(value);
  useEffect(() => {
    tileClassName(value);
  }, [tileClassName]);
  const classes = useStyles();
  return (
    <>
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
    </>
  );
};

export default CalendarBox;
