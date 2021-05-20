import React, { useState } from "react";
import Gallery from "./Gallery";
import TagBox from "./TagBox";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem 3rem",
    zIndex:0
  },
}));

const GalleryContainer = () => {
  const classes = useStyles();

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

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
          value={search}
          onChange={handleSearch}
          className={classes.root}
        />
        <div className="gallery_outer_box flex-row-center">
          <Gallery search={search} />
          <TagBox search={search} />
        </div>
      </div>
    </>
  );
};

export default GalleryContainer;
