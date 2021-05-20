import React from "react";
import Gallery from "./Gallery";
import TagBox from "./TagBox";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  
}));

const GalleryContainer = () => {
  const classes = useStyles();
  return (
    <>
      <div className="gallery_container flex-column-center">
        <h1 className="section-heading">Photo Album</h1>
        <TextField
          id="outlined-search"
          fullWidth
          label="Enter Image Text"
          type="search"
          variant="filled"
        />
        <div className="gallery_outer_box flex-row-center">
          <Gallery />
          <TagBox />
        </div>
      </div>
    </>
  );
};

export default GalleryContainer;
