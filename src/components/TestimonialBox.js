import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const TestimonialBox = () => {
  return (
    <>
      <div className="flex-column-center testimonial_box w-100">
        <Carousel
          interval={1000}
          controls={false}
          slide
        >
          <Carousel.Item style={{ height: "10rem" }}>
            <h3>Lorem, ipsum dolor.</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Item>
          <Carousel.Item style={{ height: "10rem" }}>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
          </Carousel.Item>
          <Carousel.Item style={{ height: "10rem" }}>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, animi.
              </p>

          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default TestimonialBox;
