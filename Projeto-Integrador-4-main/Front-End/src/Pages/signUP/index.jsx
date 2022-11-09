import React from "react";
import { StyledForm } from "../../Components/Form/Form.styled";
import Input from "../../Components/Input/Input";
import Container from "../../Components/shared/Container";
import Button from "../../Components/Button/Button";
import Title from "../../Components/Title/Title";
import { FormLink, FormP } from "./formLink";

export default function signUP() {
  return (
    <Container className="signUP">
      <StyledForm method="GET">
        <Title text="Cadastro"></Title>
        <Input type="name" placeholder="Nome" />
        <Input type="last name" placeholder="Sobrenome" />
        <Input type="cpf" placeholder="CPF" />
        <Input type="number fone" placeholder="Telefone" />
        <Input type="e-mail" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <Button text="Cadastrar"></Button>
        <FormP>
          Já possui uma conta? <FormLink to="../signIN">Entre aqui.</FormLink>
        </FormP>
      </StyledForm>
    </Container>
  );
}
