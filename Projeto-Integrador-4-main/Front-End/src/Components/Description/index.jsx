import React from "react";
import { Container, ButtonLink, Section } from "./styled";

export default function index() {
  return (
    <Section>
      <Container>
        <h2>Quem somos</h2>
        <p>Somos um site que tem como intuito fazer o cambio entre</p>

        <div>
          <ButtonLink to="/sellers">Compre seu ingresso</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
