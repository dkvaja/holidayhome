import React from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import ThingsToDo from "../components/ThingsToDo";

const ThingsToDoLayout = () => {
  return (
    <>
      <NavigationBar />
      <ThingsToDo/>
      <Footer />
    </>
  );
};

export default ThingsToDoLayout;
