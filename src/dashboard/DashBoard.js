import React from "react";
import HomePage from "../layout/HomeLayout";
import BookedDatePage from '../layout/BookedDateLayout';
import PhotoAlbumPage from '../layout/PhotoAlbumLayout';
import ReservationPage from '../layout/ReservationLayout';
import RatePage from '../layout/RateLayout';
import ThingsToDoPage from '../layout/ThingsToDoLayout';
import ErrorPage from "../layout/ErrorLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const DashBoard = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/rates">
          <RatePage />
        </Route>
        <Route path="/bookeddates">
          <BookedDatePage />
        </Route>
        <Route path="/gallery">
          <PhotoAlbumPage />
        </Route>
        <Route path="/thingstodo">
          <ThingsToDoPage />
        </Route>
        <Route path="/reservation">
          <ReservationPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};

export default DashBoard;
