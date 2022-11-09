import styled from "styled-components";
import { Link } from "react-router-dom";
export const FormLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #15cdfc;
  }
`;

export const FormP = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: white;
  font-weight: bold;
`;
