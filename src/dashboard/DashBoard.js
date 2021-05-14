import React from "react";
import HomePage from "../layout/HomeLayout";
import AboutPage from "../layout/AboutLayout";
import ContactPage from "../layout/ContactLayout";
import LoginPage from "../layout/LoginLayout";
import ErrorPage from "../layout/ErrorLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const DashBoard = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};

export default DashBoard;
