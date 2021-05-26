import React, { useState } from "react";
import { makeStyles, Box, Typography, ThemeProvider } from "@material-ui/core";
import bookingData from "../mockData/BookedData";
import Ram from "../components/Ram";
import myTheme from "../styles/Theme";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

// array for store individual month dates

const months = [[], [], [], [], [], [], [], [], [], [], [], []];

// get dates from bookingdData and push it on individual sub array

bookingData
  .filter((i) => i.arrivalDate.getMonth() === i.departureDate.getMonth())
  .map((item) =>
    months[item.arrivalDate.getMonth()].push(
      item.arrivalDate,
      item.departureDate
    )
  );

// add all dates between arrivalDate and departureDate to sub array in months array

for (let i = 0; i < months.length; i++) {
  if (months[i].length > 0) {
    console.log(months[i]);
    console.log(months[i][0]);
    console.log(months[i][0].getDate());
    console.log(months[i][1].getDate());
    for (let j = months[i][0].getDate(); j < months[i][1].getDate(); j++) {
      months[i].push(new Date(months[i][0]).setDate(j));
    }
  }
}

const useStyles = makeStyles((theme) => ({
  calendarBox: {
    backgroundColor: "rgb(206, 255, 206)",
    padding: "2rem 0rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  calendar: {
    pointerEvents: "none",
    display: "flex",
    padding: ".5rem",
    color: "#004b23",
   
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
    margin: "0rem .3rem",
  },
}));

const BookedDateLayout = () => {
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
          <Typography variant="h6" align="center" color="#004b23" gutterBottom>
            In the high season the changeover days are only on Fridays.
          </Typography>
          <Box
            justifyContent="center"
            display="flex"
            alignItems="center"
            bgcolor="white"
            py={1.5}
            borderRadius={myTheme.spacing(1)}
            width="8rem"
          >
            <Typography
              variant="subtitle1"
              className={classes.badge}
              gutterBottom
            >
              1
            </Typography>
            <Typography variant="body1">Booked</Typography>
          </Box>
          <Box p={2} className={classes.calendar}>
            {months.map((dateItem) => {
              if (dateItem.length > 0) {
                return <Ram arr={dateItem} />;
              }
            })}
          </Box>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default BookedDateLayout;
