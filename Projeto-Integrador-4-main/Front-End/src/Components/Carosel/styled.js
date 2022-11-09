import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 25px;

  max-width: 50%;
  max-height: 40%;

  border-radius: 18px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 0;
    max-width: 95%;
    
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;
