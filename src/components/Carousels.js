import { React, useState } from "react";
import photo from "../assets/Images/photo1.jpg";
import { Carousel } from "react-bootstrap";

const Carousels = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <section className="carousel_box" style={{"height":"35rem"}}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          fade
          interval={3000}
          style={{ zIndex: -1 }}
        >
          <Carousel.Item style={{ height: "35rem" }}>
            <img
              className="d-block w-100"
              src={photo}
              style={{ height: "35rem" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Lorem, ipsum dolor.</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "35rem" }}>
            <img
              className="d-block w-100"
              src={photo}
              style={{ height: "35rem" }}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "35rem" }}>
            <img
              className="d-block w-100"
              src={photo}
              style={{ height: "35rem" }}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, animi.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Carousels;
