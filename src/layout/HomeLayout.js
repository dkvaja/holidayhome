import React from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousels from "../components/Carousels";

const HomeLayout = () => {
  return (
    <>
      <NavigationBar />
      <Carousels />
      <Footer />
    </>
  );
};

export default HomeLayout;
