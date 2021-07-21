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
        <div classname="w-50">
          //ICON SHOULD GO HERE//
          <h3>"The Community Underserved Drives Us"</h3>
        </div>
      </Row>
    </>
  );
}
