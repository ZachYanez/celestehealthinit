import React from "react";
import { Row, Image, Col } from "react-bootstrap";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import icon9 from "../assets/icon9.png";

export default function Icons() {
  return (
    <div>
      <div className="justify-content-center">
        <div className="space"></div>

        <div className="space"></div>
        <Row className="icons">
        
          <div className="smalldivider"></div>
          <Col>
            <Image src={icon5}></Image>

            <h5 style={{ paddingLeft: 20 }}>Identify inequity</h5>
          </Col>
          <Col>
            <Image src={icon6}></Image>
            <h5 style={{ paddingLeft: 25 }}>Frame design with Stakeholders</h5>
          </Col>
          <Col>
            <Image src={icon7}></Image>
            <h5 style={{ paddingLeft: 40 }}>Primary Implementation</h5>
          </Col>
          <Col>
            <Image src={icon8}></Image>
            <h5 style={{ paddingLeft: 10 }}>Continuous Iteration</h5>
          </Col>
          <Col>
            <Image src={icon9}></Image>
            <h5 style={{ paddingLeft: 25 }}>Report and Scale Solution</h5>
          </Col>
        </Row>
        <div className="space"></div>
      </div>
    </div>
  );
}
