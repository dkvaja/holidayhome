import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300,
    },
  },
  container: {},
  heading: {
    textAlign: "center",
    fontSize: "2rem",
  },
  box: {},
}));

const ReservationContainer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.heading}>Book Now</h1>
        <div className={classes.box}>
          <form className={classes.root} noValidate autoComplete="off">
            <div className="form_control">
              <TextField
                label="Size"
                required
                type="text"
                id="standard-size-normal"
                defaultValue="Normal"
              />
            </div>
            <div className="form_control">
              <TextField
                label="Size"
                id="standard-size-normal"
                defaultValue="Normal"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReservationContainer;
