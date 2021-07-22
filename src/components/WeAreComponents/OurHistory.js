import React from "react";
import { Row } from "react-bootstrap";

export default function OurHistory() {
  return (
    <>
      <div className="row justify-content-center ">
        <h1>Our History</h1>
      </div>
      <Row>
        <div style={{ padding: 20, fontSize: 18 }} className="w-50">
          In 2018, a group of students came together to form the Celeste Health Initiative (formally known as Project Kilimanjaro)
          with the intent to decrease healthcare inequality for women in underserved communities globally. What was inspired by a
          medical mission trip to Tanzania, gave incentive to our founding members to create a solution that focused on
          sustainable change addressing the most common issues facing women and children around the world. Our founder visited
          Maasai villages in the Longido District of Tanzania and built strong relationships with the leaders of the community.
          Together, they outlined the pressing issues facing women and children in that community - HIV/AIDS Mother to Child
          Transmission Prevention, First Aid Education, and Menstrual Health Management - under the umbrella of clinical
          accessibility. After returning to California, a team was built consisting of Tanzanian social entrepreneurs and students
          from the University of California, San Diego to address these concerns. From there our methodology grew to employ a
          codesign process with community members to cater programs that preserve the culture within a region.
        </div>
        <div style={{ padding: 20, fontSize: 18 }} className="w-50">
          Our founding team knew that in order for these solutions to be adopted by any community, all ownership of the solution
          had to be with the community themselves and any solution had to be holistic in nature - integrating resource
          implementation with educational development and a iterative cycle for the community to continue to adjust to changing
          environments. Today, the Celeste Health Initiative hopes to increase equitable access to healthcare by empowering women
          to take ownership of their own health care and support existing regional infrastructure to build sustainable solutions
          not only in Tanzania, but around the world.
        </div>
      </Row>
    </>
  );
}
