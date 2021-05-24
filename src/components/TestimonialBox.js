import React, { useState } from "react";
import tData from "../mockData/TestimonialData";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Avatar, Typography, Box } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const TestimonialBox = () => {
  const classes = useStyles();
  return (
    <>
      <div className="testimonial_box flex-column-center">
        <Slider className="slider" autoplay={2000} disabled={false}>
          {tData.map((slide, index) => (
            <div key={index} className="flex-column-center slider_box">
              <h2 className="section-desc">{slide.words}</h2>
              <Box component="fieldset" m={1} borderColor="transparent">
                <Rating name="rating" value={slide.rating} readOnly />
              </Box>
              <Avatar
                alt={slide.author}
                src={slide.avtarIcon}
                className={classes.large}
              />
              <h3>{slide.author}</h3>
              <p>({slide.designaton})</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TestimonialBox;
