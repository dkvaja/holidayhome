import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "date-fns";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400,
    },
  },
  container: {
    padding: "2rem 1rem",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#004b23",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ReservationContainer = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.heading}>To Reserve</h1>
        <div className={classes.box}>
          <form className={classes.root} noValidate autoComplete="off">
            <div className="form_control">
              <TextField
                label="Enter Your Name"
                required
                type="text"
                id="standard-size-normal"
              />
            </div>

            <div className="form_control">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Arrival Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Departure Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </div>
            <div className="form_control">
              <TextField
                label="Total Numbers of Person"
                required
                inputProps={{ max: 10, min: 1 }}
                id="standard-size-normal"
                type="number"
              />
            </div>
            <div className="form_control">
              <TextField
                label="Enter Your Address"
                required
                id="standard-size-normal"
                type="text"
              />
            </div>
            <div className="form_control">
              <TextField
                label="Enter Your Zipcode"
                required
                id="standard-size-normal"
                type="text"
              />
            </div>
            <div className="form_control">
              <TextField
                label="Enter Your Email Address"
                required
                autoComplete
                id="standard-size-normal"
                type="email"
              />
            </div>
            <div className="form_control">
              <TextField
                label="Enter Your Phone Number"
                required
                autoComplete
                id="standard-size-normal"
                type="tel"
              />
            </div>
            <Button
              variant="contained"
              style={{ backgroundColor: "rgb(0, 75, 35)", color: "white" }}
            >
              Send Request
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReservationContainer;
