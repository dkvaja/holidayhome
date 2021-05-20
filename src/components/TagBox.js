import React from "react";
import galleryImages from "../mockData/galleryImages";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Divider from "@material-ui/core/Divider";

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
  color:
  {
    color:"#004b23"
  }
});
const TagBox = (props) => {
  console.log(props.search);
  const classes = useStyles();

 
  let n = galleryImages.map((item, index) => item.tags);
  let t = [];
  n = n.map((item) => {
    item.split(" ").map((item) => t.push(item.split(" ")));
  });
  t = t.flat();
  const temp = (val) => t.reduce((a, v) => (v === val ? a + 1 : a), 0);
  const final = [...new Set(t)];
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
            {final.map((item, index) => {
              return (
                <>
                  <Link key={index} className="tag_link flex-row-center">
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
