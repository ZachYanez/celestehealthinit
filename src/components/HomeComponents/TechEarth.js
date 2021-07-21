import React from "react";
import { Image, Button } from "react-bootstrap";

export default function TechEarth() {
  return (
    <div className="techEarth" style={{ height: 500 }}>
      <div className="w-25 donationtext">
        <h1 style={{ fontSize: 45, color: "#ffffff" }}>100% of our donations goes directly to implementing our projects</h1>
        <Button variant="light">Donante Now!</Button>
      </div>
    </div>
  );
}
