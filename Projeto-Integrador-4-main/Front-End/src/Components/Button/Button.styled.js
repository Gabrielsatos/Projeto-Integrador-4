import styled from "styled-components";

export const StyledButton = styled.button`
  margin-top: 0.6rem;
  width: 80%;
  border-radius: 4px;
  font-weight: bold;
  background: #15cdfc;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
