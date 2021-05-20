import React, { useState, useReducer } from "react";
import Gallery from "./Gallery";
import TagBox from "./TagBox";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem 3rem",
    zIndex: 0,
  },
}));

export const AppContext = React.createContext();

const initialState = {
  clickedTag: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        inputText: action.data,
      };

    default:
      return initialState;
  }
}

const GalleryContainer = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
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
          <AppContext.Provider value={{ state, dispatch }}>
            <Gallery search={search} />
            <TagBox search={search} />
          </AppContext.Provider>
        </div>
      </div>
    </>
  );
};

export default GalleryContainer;
