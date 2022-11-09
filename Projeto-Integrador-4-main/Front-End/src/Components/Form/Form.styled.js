import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-height: 100%;
  max-width: 100%;
  height: 70vh;
  width: 30%;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  border: none;
  color: white;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
