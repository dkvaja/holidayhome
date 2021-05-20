import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 5,
    color:"#004b23",
    backgroundColor:"#d7ffea",
    // boxShadow: "0px 0px 7px 0px black",
  },
  heading: {
    margin: 0,
  },
  a: {
    textDecoration: "none",
  },
  button: {
    padding: ".5rem",
    marginLeft: 5,
    color: "#fff",
    backgroundColor: "#004b23",
    '&:hover':{
        color:"#004b23",
    },
  }
});

const CategoryBox = (props) => {
  const item = props.payLoad;
  console.log(item);

  const classes = useStyles();
  return (
    <>
      <div className="category_box" key={props.key}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.heading}
              >
                {item.category}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              alt={item.heading}
              height="200"
              image={item.imageURL}
              title={item.heading}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.heading}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a href={item.link} className={classes.a} target="_blank">
              <Button size="small" color="primary" className={classes.button}>
                Explore More
              </Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default CategoryBox;
