import React from "react";
import { StyledForm } from "../../Components/Form/Form.styled";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Container from "../../Components/shared/Container";
import Title from "../../Components/Title/Title";
import { FormLinkReset, FormLink } from "./signInFormLink";

function signIN() {
  return (
    <Container className="signIN">
      <StyledForm>
        <Title text="Entrar"></Title>
        <Input type="e-mail" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <Button text="Entrar"></Button>
        <FormLink>
          Esqueceu sua senha?
          <FormLinkReset to="../resetEmail"> Redefina aqui</FormLinkReset>
        </FormLink>
      </StyledForm>
    </Container>
  );
}

export default signIN;
