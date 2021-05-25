import React, { useState, useCallback } from "react";
import { makeStyles, Box, Typography, ThemeProvider } from "@material-ui/core";
import { differenceInCalendarDays } from "date-fns";
import CalendarBox from "../components/CalendarBox";
import Ram from "../components/Ram";
import "react-calendar/dist/Calendar.css";
import myTheme from "../styles/Theme";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  calendarBox: {
    backgroundColor: "rgb(206, 255, 206)",
    padding: "2rem 0rem",
  },
  calendar: {
    pointerEvents: "none",
    display: "flex",
    padding: ".5rem",
    color: "#004b23",
    minHeight: "100vh",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "rgb(206, 255, 206)",
  },
  h3: {
    fontSize: "2rem",
    color: "#004b23",
  },
  badge: {
    backgroundColor: "#004b23",
    color: "#fff",
    padding: ".1rem .6rem",
    borderRadius: "50%",
    margin: "0rem .5rem",
  },
}));

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

const datesToAddClassTo = [
  new Date(2021, 4, 27),
  new Date(2021, 4, 30),
  new Date(2021, 4, 23),
  new Date(2021, 4, 20),
  new Date(2021, 4, 21),
  new Date(2021, 5, 21),
  new Date(2021, 5, 22),
  new Date(2021, 5, 24),
  new Date(2021, 5, 25),
  new Date(2021, 6, 20),
  new Date(2021, 6, 21),
  new Date(2021, 6, 22),
];
const may = [
  new Date(2021, 4, 27),
  new Date(2021, 4, 30),
  new Date(2021, 4, 23),
  new Date(2021, 4, 20),
  new Date(2021, 4, 21)]
const july = [
  new Date(2021, 6, 20),
  new Date(2021, 6, 21),
  new Date(2021, 6, 22),
];

const june = [
  new Date(2021, 5, 21),
  new Date(2021, 5, 22),
  new Date(2021, 5, 24),
];

const BookedDateLayout = () => {
  const tileClassName = useCallback(
    ({ date, view }) => {
      console.log(date);
      if (view === "month") {
        if (datesToAddClassTo.find((dDate) => isSameDay(dDate, date))) {
          return "myClassName";
        }
      }
    },
    [datesToAddClassTo]
  );

  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={myTheme}>
        <NavigationBar />
        <Box className={classes.calendarBox}>
          <Typography
            variant="h3"
            className={classes.h3}
            align="center"
            gutterBottom
          >
            Booked Dates
          </Typography>
          <Typography variant="h6" align="center" color="#004b23">
            In the high season the changeover days are only on Fridays.
          </Typography>
          <Box justifyContent="center" display="flex">
            <Typography
              variant="subtitle1"
              className={classes.badge}
              gutterBottom
            >
              1
            </Typography>
            <Typography variant="body1" gutterBottom>
              Booked
            </Typography>
          </Box>
          <Box p={2} className={classes.calendar}>
            {/* {datesToAddClassTo.map((item, index) => {
              return (
                <CalendarBox
                  tileClassName={tileClassName}
                  key={index}
                  value={item}
                />
              );
            })} */}
            <Ram arr={may}/>
            <Ram arr={june}/>
            <Ram arr={july}/>
            
            {/* {
            datesToAddClassTo.forEach((item,index)=>{
              if(item.getMonth() === 4)
              {
              console.log(item,index);
              return <CalendarBox tileClassName={tileClassName} key={index} value={item}/>
              }
            })
            
          } */}
          </Box>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default BookedDateLayout;
