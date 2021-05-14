import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import DashBoard from "./dashboard/DashBoard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <DashBoard />
      </Router>
    </div>
  );
};

export default App;
