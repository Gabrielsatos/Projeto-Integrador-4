import React from "react";
import { Container } from "./styled";

import bar1 from "../../Images/Bar1.png";
import bar2 from "../../Images/Bar2.png";
import bar3 from "../../Images/Bar3.png";
import bar4 from "../../Images/Bar4.png";

export default function Events() {
  return (
    <Container>
      <div>
        <a href="#">
          {" "}
          <img src={bar1} alt="" />{" "}
        </a>
      </div>

      <div>
        <a href="#">
          {" "}
          <img src={bar2} alt="" />{" "}
        </a>
      </div>

      <div>
        <a href="">
          {" "}
          <img src={bar3} alt="#" />{" "}
        </a>
      </div>

      <div>
        <a href="">
          {" "}
          <img src={bar4} alt="#" />{" "}
        </a>
      </div>
    </Container>
  );
}
