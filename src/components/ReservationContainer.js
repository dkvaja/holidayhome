import React, { useState } from "react";
import myTheme from "../styles/Theme";
import Button from "@material-ui/core/Button";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  
} from "@material-ui/pickers";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import imge from "../assets/Images/photo3.jpg";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import { setDate } from "date-fns";

const useStyles = makeStyles((theme) => ({
  container: {
    color: "#004b23",
    padding: "2rem 1rem",
    width: "100%",
    display: "flex",
    backgroundColor: myTheme.palette.primary.light,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ["@media (min-width:1280px)"]: {
      maxWidth: "100%",
    },
  },
  h3: {
    fontSize: "2rem",
  },
  dateBox: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    width: "35%",
    ["@media (max-width:800px)"]: {
      width: "90%",
    },
    borderRadius: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ReservationContainer = () => {
  // date handling
  const currentDate = new Date();
  let [arrivalDate, setArrivalDate] = useState(currentDate);
  let [departureDate, setDepartureDate] = useState(
    setDate(arrivalDate, arrivalDate.getDate() + 1)
  );
  const [userData, setUserData] = useState({
    name: "",
    arrivalDate: currentDate,
    departureDate: setDate(arrivalDate, arrivalDate.getDate() + 1),
    nosOfPerson: 1,
    address: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userData);
    alert("data submitted succesfully!");
  };
  const handleDateChange = (dateName, dateValue) => {
    console.log(dateName, dateValue);
    if (dateName === "arrivalDate") {
      arrivalDate = dateValue;
      setArrivalDate(dateValue);
      setUserData({
        arrivalDate: dateValue,
        departureDate: setDate(dateValue, dateValue.getDate() + 1),
      });
      setDepartureDate(setDate(dateValue, dateValue.getDate() + 1));
    } else {
      departureDate = dateValue;
      setDepartureDate(dateValue);
      setUserData({
        departureDate: dateValue,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // style handle
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Container className={classes.container}>
          <Typography
            variant="h3"
            component="h3"
            align="center"
            className={classes.h3}
          >
            To Reserve
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            className={classes.box}
            mt={2}
            px={3}
            py={1}
            bgcolor={myTheme.palette.primary.white}
          >
            <TextField
              label="Enter Your Name"
              name="name"
              InputLabelProps={{ shrink: true }}
              required
              margin="normal"
              onChange={handleChange}
              fullWidth
              type="text"
              value={userData.name || ""}
              id="standard-size-normal"
            />
            <Box component="div" className={classes.dateBox}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  fullWidth
                  name="arrivalDate"
                  disablePast
                  format="dd/MM/yyyy"
                  InputLabelProps={{ shrink: true }}
                  margin="normal"
                  id="date-picker-inline"
                  onChange={(date) => handleDateChange("arrivalDate", date)}
                  label="Arrival Date"
                  value={userData.arrivalDate}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardDatePicker
                  disableToolbar
                  margin="normal"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  minDate={setDate(arrivalDate, arrivalDate.getDate() + 1)}
                  maxDate={setDate(arrivalDate, arrivalDate.getDate() + 10)}
                  format="dd/MM/yyyy"
                  name="departureDate"
                  id="date-picker-inline"
                  label="Departure Date"
                  onChange={(date) => handleDateChange("departureDate", date)}
                  value={userData.departureDate}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Box>

            <TextField
              label="Total Number of Person(s)"
              required
              fullWidth
              name="nosOfPerson"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
              margin="normal"
              value={userData.nosOfPerson || ""}
              inputProps={{ max: 10, min: 1 }}
              id="standard-size-normal"
              type="number"
            />

            <TextField
              label="Enter Your Address"
              required
              name="address"
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={userData.address || ""}
              onChange={handleChange}
              id="standard-size-normal"
              type="text"
            />

            <TextField
              label="Enter Your Zipcode"
              required
              name="zipCode"
              fullWidth
              InputLabelProps={{ shrink: true }}
              margin="normal"
              value={userData.zipCode || ""}
              id="standard-size-normal"
              type="text"
              onChange={handleChange}
            />

            <TextField
              label="Enter Your Email Address"
              required
              fullWidth
              InputLabelProps={{ shrink: true }}
              autoComplete
              name="email"
              margin="normal"
              value={userData.email || ""}
              onChange={handleChange}
              id="standard-size-normal"
              type="email"
            />

            <TextField
              label="Enter Your Phone Number"
              required
              fullWidth
              InputLabelProps={{ shrink: true }}
              autoComplete
              name="phoneNumber"
              margin="normal"
              value={userData.phoneNumber || ""}
              onChange={handleChange}
              id="standard-size-normal"
              type="tel"
            />
            <Box mb={2} align="center">
              <Button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "rgb(0, 75, 35)",
                  color: "white",
                  marginTop: "1rem",
                }}
              >
                Send Request
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default ReservationContainer;
