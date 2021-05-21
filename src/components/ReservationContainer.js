import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  container: {
    backgroundColor: "red",
  },
});

const ReservationContainer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
      <h1 className="section-heading">Book Now</h1>
        <div className="flex-column-center">
                
        </div>
      </div>
    </>
  );
};

export default ReservationContainer;
