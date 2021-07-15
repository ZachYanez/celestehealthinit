import React from "react";
import { Row, Image } from "react-bootstrap";
import Pic3 from "../assets/pic3.jpg";

export default function HomePic() {
  return (
    <div >
      <Row>
        <Image className="w-100" src={Pic3}></Image>
      </Row>
    </div>
  );
}
