import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

export default function TheChallenges() {
  return (
    <div>
      <div className="justify-content-center">
        <div className="space"></div>
        <div className="row justify-content-center ">
          <h1>The Challenges</h1>
        </div>
        <div className="space"></div>
        <Row className="icons">
          <div className="divider"></div>
          <div className="divider"></div>
          <Col>
            <Image src={icon1}></Image>
            <h4>HIV/AIDS Prevention</h4>
          </Col>
          <Col>
            <Image src={icon2}></Image>
            <h4>First-Aid Education</h4>
          </Col>
          <Col>
            <Image src={icon3}></Image>
            <h4>Clinical Accessibility</h4>
          </Col>
          <Col>
            <Image src={icon4}></Image>
            <h4>Menstral Health</h4>
          </Col>
        </Row>
        <div className="space"></div>
      </div>
    </div>
  );
}
