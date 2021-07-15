import React from "react";
import { Carousel, Image } from "react-bootstrap";
import Pic1 from "../assets/pic1.jpg";

export default function HomeCarouselTop() {
  return (
    <div className="homeCarouselTop">
      <Carousel>
        <Carousel.Item>
          <Image className="w-100" src={Pic1} alt="First slide" />
          <Carousel.Caption>
            <h1>Freedom to Think. Empowered to Be.</h1>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Pic1} alt="Second slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Pic1} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
