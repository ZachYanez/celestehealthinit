import React from "react";
import { Button, Carousel, Image, Row } from "react-bootstrap";
import Pic2 from "../assets/croppedAgain.jpg";
import Peach from "../assets/lightPeach.png";

export default function SplitComponent() {
  return (
    <div>
      <Row>
        <Image className="d-block w-50" src={Pic2}></Image>
        <Carousel className="w-50">
          <Carousel.Item>
            <Image className="d-block w-100" src={Peach} alt="Third slide" />
            <Carousel.Caption>
              
            <Button variant="info">Read More</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="d-block w-100" src={Peach} alt="Third slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <Button variant="info">Read More</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="d-block w-100" src={Peach} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <Button variant="info">Read More</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </div>
  );
}
