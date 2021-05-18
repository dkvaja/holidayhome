import React from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Carousels from "../components/Carousels";
import Testimonial from "../components/Testimonial";

const HomeLayout = () => {
  return (
    <>
      <NavigationBar />
      <Carousels/>
      <Services />
      <Testimonial/>
      <Footer />
    </>
  );
};

export default HomeLayout;
