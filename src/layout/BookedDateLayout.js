import React, { useState } from "react";
import { Box, Paper, makeStyles } from "@material-ui/core";
import Calendar from "react-calendar";
import Temp from '../components/Temp';
import "react-calendar/dist/Calendar.css";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import setDate from "date-fns/setDate";

const useStyles = makeStyles((theme) => ({
  calendar: {
    pointerEvents: "none",
    display: "flex",
    padding: ".5rem",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "rgb(206, 255, 206)",
  },
}));

const disabledDates = [new Date(2021, 5, 27), new Date(2021, 5, 28)];

const BookedDateLayout = () => {
  const classes = useStyles();
  const cDate = new Date();
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };
  return (
    <>
      <NavigationBar />
      <Box p={2} className={classes.calendar} justifyContent="center">
        <Calendar
          className="date_disable"
          maxDetail="month"
          minDetail="month"
          defaultView="month"
          showNeighboringMonth={false}
          nextLabel={null}
          prevLabel={null}
          next2Label={null}
          prev2Label={null}
          defaultValue={disabledDates}
        />
        <Calendar
          className="date_disable"
          maxDetail="month"
          showNavigation
          minDetail="month"
          defaultView="month"
          showNeighboringMonth={false}
          nextLabel={null}
          prevLabel={null}
          next2Label={null}
          prev2Label={null}
          defaultValue={[
            new Date(2021, 5, 1),
            setDate(new Date(2021, 5, 1), new Date(2021, 5, 1).getDate() + 1),
          ]}
        />
        <Calendar
          className="date_disable"
          maxDetail="month"
          showNavigation
          minDetail="month"
          defaultView="month"
          showNeighboringMonth={false}
          nextLabel={null}
          prevLabel={null}
          next2Label={null}
          prev2Label={null}
          defaultValue={[
            new Date(2021, 6, 1),
            setDate(new Date(2021, 6, 1), new Date(2021, 6, 1).getDate() + 1),
          ]}
        />
        <Calendar
          className="date_disable"
          maxDetail="month"
          showNavigation
          minDetail="month"
          defaultView="month"
          showNeighboringMonth={false}
          nextLabel={null}
          prevLabel={null}
          next2Label={null}
          prev2Label={null}
          defaultValue={[
            new Date(2021, 7, 1),
            setDate(new Date(2021, 7, 1), new Date(2021, 7, 1).getDate() + 1),
          ]}
        />
      </Box>
          <Temp/>
      <Footer />
    </>
  );
};

export default BookedDateLayout;
