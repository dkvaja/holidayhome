import React from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryContainer from "../components/GalleryContainer";

const PhotoAlbumLayout = () => {
  return (
    <>
      <NavigationBar />
      <GalleryContainer />
      <Footer />
    </>
  );
};

export default PhotoAlbumLayout;
