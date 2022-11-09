import React from "react";
import { Carosel } from "../../Components/Carosel";
import CatEvent from "../../Components/CatEvent";
import Decricao from "../../Components/Description";
import { Background } from "./styles";

export default function home() {
  return (
    <section>
      <Background>
        <div>
          <CatEvent />
        </div>
      </Background>

      <Decricao />
      <Carosel />
    </section>
  );
}
