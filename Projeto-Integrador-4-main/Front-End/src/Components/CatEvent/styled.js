import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }

  div {
    padding: 1%;
    transition: transform 0.3s ease-in-out;
    text-align: center;
    &:hover {
      transform: scale(1.02);
    }
  }

  img {
    border-radius: 18px;
    max-width: fit-content;
    max-height: fit-content;
  }
`;
