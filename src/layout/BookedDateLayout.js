import React, { useState } from "react";
import { Box, Paper, makeStyles } from "@material-ui/core";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import "date-fns";
// import DateFnsUtils from "@date-io/date-fns";
// import { Calendar, MuiPickersUtilsProvider } from "@material-ui/pickers";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import setDate from "date-fns/setDate";

const useStyles = makeStyles((theme) => ({
  calnedar: {
    PointerEvent: "none",
    bgcolor: "red",
  },
  reactCalendar:{
      backgroundColor:"black"
  },
  calnedar2: {
    PointerEvent: "none",
    bgcolor: "red",
    borderRadius:theme.spacing(1),
  },
}));

const setDDate = (num) => {
  return setDate(new Date(), new Date().getDate() + num);
};

const BookedDateLayout = () => {
  const classes = useStyles();
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };
  return (
    <>
      <NavigationBar />
      <Box
        p={2}
        bgcolor="green"
        className={classes.calnedar}
        justifyContent="center"
        display="flex"
      >
        <Calendar
          className={classes.calnedar2}
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
            new Date(),
            setDate(new Date(), new Date().getDate() + 1),
          ]}
          tileDisabled={() => true}
        />
        <Calendar
          className={classes.calnedar2}
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
            new Date(),
            setDate(new Date(), new Date().getDate() + 1),
          ]}
          tileDisabled={() => true}
        />
        <Calendar
          className={classes.calnedar2}
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
            new Date(),
            setDate(new Date(), new Date().getDate() + 1),
          ]}
          tileDisabled={() => true}
        />
        <Calendar
          className={classes.calnedar2}
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
            new Date(),
            setDate(new Date(), new Date().getDate() + 1),
          ]}
          tileDisabled={() => true}
        />
      </Box>

      <Footer />
    </>
  );
};

export default BookedDateLayout;
