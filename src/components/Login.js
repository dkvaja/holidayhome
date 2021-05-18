import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20ch",
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const [islogin, setIslogin] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("i am submited!");
  };
  return (
    <div className="login_container flex-row-center">
      <div className="login_box">
        <h2>Log in Form</h2>
        <form
          className={classes.root}
          className="flex-column-center"
          noValidate
          autoComplete="off"
        >
          <div className="form-items">
            <TextField
              required
              className="form-item"
              id="filled-required"
              label="Enter Your Email"
              variant="filled"
            />
          </div>
          <div className="form-items">
            <TextField
              required
              className="form-item"
              id="filled-password-input"
              label="Enter Your Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
          </div>
          <Link to="/forgetpassword" className="login_link">Forget Password?</Link>
          <Link to="/register" className="login_link">Don't have an account?</Link>
          <div className="form-items">
            <Button
              variant="contained"
              style={{ backgroundColor: "#004b23", color: "white" }}
            >
              Log in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
