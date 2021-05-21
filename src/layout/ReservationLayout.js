import React from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import Reservation from "../components/ReservationContainer";

const ReservationLayout = () => {
  return (
    <>
      <NavigationBar />
      <Reservation/>
      <Footer />
    </>
  );
};

export default ReservationLayout;
