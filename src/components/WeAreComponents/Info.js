import React, { Text } from "react";
import { Row } from "react-bootstrap";

export default function Info() {
  return (
    <>
      <Row>
        <div
          className="w-50"
          style={{ backgroundColor: "#40a4a4", padding: 25, color: "white", justifyContent: "center", alignItems: "center" }}
        >
          <h1>
            The Celeste Health Initiative works to increase access to equitable healthcare for women in underserved popuations.
          </h1>
        </div>
        <div  style={{ backgroundColor: "#40a4a4"}} className="row w-50">
          
          <h3>"The Community Underserved Drives Us"</h3>
        </div>
      </Row>
    </>
  );
}
