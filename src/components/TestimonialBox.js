import React, { useState } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Avatar from "@material-ui/core/Avatar";
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
  const slides = [
    {
      words:
        "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That'ntent marketing, you'll definitely get the 5-star treatment from the Lorem Ipsum Company!",
      author: "Roland Weedon",
      designaton: "CEO XYZ Infotech",
      avtarIcon: "https://i.pravatar.cc/300",
    },
    {
      words:
        "I was skeptical of SEO and content marketing at first, but the Lorem Ipsum Company not only incredible. The work is top-notch and I consistently outrank all my competitors on Google.",
      author: "Kelsi Gordon",
      designaton: "CFO XYZ solution",
      avtarIcon: "https://i.pravatar.cc/300",
    },
    {
      words:
        "My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Companketing.",
      author: "Tasha Zuzalek",
      designaton: "COO AB Infotech",
      avtarIcon: "https://i.pravatar.cc/300",
    },
  ];
  return (
    <>
      <div className="testimonial_box flex-column-center">
        <Slider className="slider" autoplay={2000} disabled={false}>
          {slides.map((slide, index) => (
            <div key={index} className="flex-column-center slider_box">
              <h2 className="section-desc">{slide.words}</h2>
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
