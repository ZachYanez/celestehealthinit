import React from "react";
import { Image, Text } from "react-bootstrap";
import WeArePic from "../../assets/WhoWeAre.png";

export default function WhoWeAre() {
  return (
    <div>
      <Image src={WeArePic} className="w-100"></Image>
    </div>
  );
}
