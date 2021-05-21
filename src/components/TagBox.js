import React, { useContext } from "react";
import { AppContext } from "./GalleryContainer";
import galleryImages from "../mockData/galleryImages";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    "&:hover": {
      boxShadow: "0px 0px 4px 0px black",
    },
  },
  card: {
    padding: 0,
  },
  color: {
    color: "#004b23",
  },
});
const TagBox = () => {
  const { state, dispatch } = useContext(AppContext);
  const classes = useStyles();

  const sendValue = (newValue) => {
    const payLoad = newValue === "" ? "" : newValue.split("\n").shift();
    console.log(payLoad);
    dispatch({ type: "UPDATE_INPUT", data: payLoad });
  };

  let tempraryArr = [];
  let nArr = galleryImages.map((item, index) => item.tags);
  nArr.map((item) => {
    item.split(" ").map((item) => tempraryArr.push(item.split(" ")));
  });
  tempraryArr = tempraryArr.flat();

  const finalArr = [...new Set(tempraryArr)];
  // console.log(finalArr);

  const temp = (val) =>
    tempraryArr.reduce((count, item) => (item === val ? count + 1 : count), 0);

  return (
    <div className="tag_box">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.color}>
            TAGS
          </Typography>
        </CardContent>
        <CardActions className={classes.card}>
          <div className="tag_item flex-column-center">
            <Link
              className="tag_link flex-row-center"
              onClick={(e) => {
                sendValue(e.target.innerText);
              }}
            >
              ALL
              <Badge
                color="secondary"
                badgeContent={finalArr.length}
                showZero
                className="tag_badge"
              ></Badge>
            </Link>
            {finalArr.map((item, index) => {
              return (
                <>
                  <Link
                    key={index}
                    className="tag_link flex-row-center"
                    onClick={(e) => {
                      sendValue(e.target.innerText);
                    }}
                  >
                    {item.toUpperCase()}
                    <Badge
                      color="secondary"
                      badgeContent={temp(item)}
                      showZero
                      className="tag_badge"
                    ></Badge>
                  </Link>
                </>
              );
            })}
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default TagBox;
